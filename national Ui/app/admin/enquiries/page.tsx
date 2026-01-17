"use client";

import { useEffect, useMemo, useState } from "react";
import * as XLSX from "xlsx";
import {
  Search,
  User,
  Phone,
  Mail,
  Building2,
  MessageSquare,
  Calendar,
  Paperclip,
  X,
  Download,
  Filter,
  Trash2,
} from "lucide-react";

type Attachment = {
  originalName: string;
  fileName: string;
  mimeType: string;
  size: number;
  path: string;
};

type Enquiry = {
  _id: string;
  fullName: string;
  company?: string;
  phone: string;
  email?: string;
  message: string;
  attachment?: Attachment | null;
  createdAt: string;
};

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleString();
  } catch {
    return iso;
  }
}

function bytesToSize(bytes: number) {
  if (!bytes && bytes !== 0) return "";
  const units = ["B", "KB", "MB", "GB"];
  let v = bytes;
  let i = 0;
  while (v >= 1024 && i < units.length - 1) {
    v = v / 1024;
    i++;
  }
  return `${v.toFixed(i === 0 ? 0 : 1)} ${units[i]}`;
}

function getFileUrl(apiBase: string | undefined, filePath: string) {
  if (!apiBase) return "";
  const origin = apiBase.replace(/\/api\/?$/, "");
  const normalized = filePath.replace(/\\/g, "/");
  const idx = normalized.toLowerCase().lastIndexOf("uploads/");
  if (idx !== -1) return `${origin}/${normalized.slice(idx)}`;
  return `${origin}/${normalized}`;
}

// Convert yyyy-mm-dd input to range start/end
function startOfDayISO(d: string) {
  const dt = new Date(`${d}T00:00:00`);
  return dt.getTime();
}
function endOfDayISO(d: string) {
  const dt = new Date(`${d}T23:59:59.999`);
  return dt.getTime();
}

export default function AdminEnquiriesPage() {
  const API = process.env.NEXT_PUBLIC_API_BASE_URL;

  const [items, setItems] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [q, setQ] = useState("");
  const [selected, setSelected] = useState<Enquiry | null>(null);

  // date filter (yyyy-mm-dd)
  const [fromDate, setFromDate] = useState<string>("");
  const [toDate, setToDate] = useState<string>("");

  // delete state
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const fetchEnquiries = async () => {
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("admin_token");
      if (!token) {
        setError("Not logged in.");
        setLoading(false);
        return;
      }

      const res = await fetch(`${API}/admin/enquiries`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        setError(data?.message || "Failed to load enquiries.");
        setLoading(false);
        return;
      }

      const list = Array.isArray(data?.data)
        ? data.data
        : Array.isArray(data)
        ? data
        : [];
      setItems(list);
    } catch {
      setError("Server not reachable. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const deleteEnquiry = async (id: string) => {
    const ok = confirm("Delete this enquiry? This action cannot be undone.");
    if (!ok) return;

    try {
      setDeletingId(id);

      const token = localStorage.getItem("admin_token");
      if (!token) {
        alert("Not logged in.");
        return;
      }

      // Backend endpoint expected:
      // DELETE /admin/enquiries/:id
      const res = await fetch(`${API}/admin/enquiries/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        alert(data?.message || "Failed to delete enquiry.");
        return;
      }

      // Remove from UI without refetch
      setItems((prev) => prev.filter((x) => x._id !== id));

      // If modal open for same enquiry, close it
      setSelected((prev) => (prev?._id === id ? null : prev));
    } catch {
      alert("Server not reachable. Please try again.");
    } finally {
      setDeletingId(null);
    }
  };

  useEffect(() => {
    fetchEnquiries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();

    const hasFrom = Boolean(fromDate);
    const hasTo = Boolean(toDate);
    const fromMs = hasFrom ? startOfDayISO(fromDate) : null;
    const toMs = hasTo ? endOfDayISO(toDate) : null;

    return items.filter((e) => {
      // text search
      if (query) {
        const hay = `${e.fullName} ${e.company || ""} ${e.phone} ${
          e.email || ""
        } ${e.message}`.toLowerCase();
        if (!hay.includes(query)) return false;
      }

      // date filter
      if (hasFrom || hasTo) {
        const createdMs = new Date(e.createdAt).getTime();
        if (hasFrom && fromMs !== null && createdMs < fromMs) return false;
        if (hasTo && toMs !== null && createdMs > toMs) return false;
      }

      return true;
    });
  }, [items, q, fromDate, toDate]);

  const exportToExcel = () => {
    if (!filtered.length) {
      alert("No enquiries found for the selected filter.");
      return;
    }

    const rows = filtered.map((e, idx) => ({
      SNo: idx + 1,
      Date: formatDate(e.createdAt),
      FullName: e.fullName,
      Company: e.company || "",
      Phone: e.phone,
      Email: e.email || "",
      Message: e.message,
      HasAttachment: e.attachment ? "Yes" : "No",
      AttachmentName: e.attachment?.originalName || "",
      AttachmentUrl: e.attachment ? getFileUrl(API, e.attachment.path) : "",
    }));

    const ws = XLSX.utils.json_to_sheet(rows);
    ws["!cols"] = [
      { wch: 6 }, // SNo
      { wch: 22 }, // Date
      { wch: 18 }, // FullName
      { wch: 18 }, // Company
      { wch: 16 }, // Phone
      { wch: 24 }, // Email
      { wch: 60 }, // Message
      { wch: 14 }, // HasAttachment
      { wch: 28 }, // AttachmentName
      { wch: 40 }, // AttachmentUrl
    ];

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Enquiries");

    const fromLabel = fromDate ? fromDate : "all";
    const toLabel = toDate ? toDate : "all";
    const fileName = `enquiries_${fromLabel}_to_${toLabel}.xlsx`;

    XLSX.writeFile(wb, fileName);
  };

  return (
    <>
      {/* Header */}
      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ee9d54]">
              Admin
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-gray-900">
              Enquiries
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              View website enquiry submissions and download attachments.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <button
              onClick={fetchEnquiries}
              className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-50"
            >
              Refresh
            </button>

            <button
              onClick={exportToExcel}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#ee9d54] px-4 py-2.5 text-sm font-semibold text-white hover:opacity-95"
            >
              <Download className="h-4 w-4" />
              Export Excel
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="mt-5 flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2.5">
          <Search className="h-4 w-4 text-gray-400" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by name, company, phone, email or message..."
            className="w-full text-sm outline-none placeholder:text-gray-400"
          />
        </div>

        {/* Date filter row */}
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white px-3 py-2.5">
            <label className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
              From Date
            </label>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="mt-1 w-full text-sm outline-none"
            />
          </div>

          <div className="rounded-xl border border-gray-200 bg-white px-3 py-2.5">
            <label className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
              To Date
            </label>
            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="mt-1 w-full text-sm outline-none"
            />
          </div>

          <div className="flex items-end gap-2">
            <button
              type="button"
              onClick={() => {
                setFromDate("");
                setToDate("");
              }}
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-50"
            >
              <span className="inline-flex items-center justify-center gap-2">
                <Filter className="h-4 w-4 text-gray-500" />
                Clear Date Filter
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* List */}
      <div className="rounded-2xl border border-gray-100 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <p className="text-sm font-semibold text-gray-900">
            Showing: <span className="text-[#ee9d54]">{filtered.length}</span>
            <span className="text-gray-500"> / {items.length}</span>
          </p>
          <p className="text-xs text-gray-500">Latest first</p>
        </div>

        {loading ? (
          <div className="p-6 text-sm text-gray-600">Loading enquiries...</div>
        ) : error ? (
          <div className="p-6 text-sm text-red-600">{error}</div>
        ) : filtered.length === 0 ? (
          <div className="p-6 text-sm text-gray-600">No enquiries found.</div>
        ) : (
          <div className="divide-y divide-gray-100">
            {filtered.map((e) => (
              <button
                key={e._id}
                onClick={() => setSelected(e)}
                className="w-full text-left px-6 py-4 hover:bg-orange-50/40 transition"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                      <span className="inline-flex items-center gap-2 text-sm font-extrabold text-gray-900">
                        <User className="h-4 w-4 text-gray-500" />
                        {e.fullName}
                      </span>

                      <span className="inline-flex items-center gap-2 text-xs text-gray-600">
                        <Phone className="h-4 w-4 text-gray-400" />
                        {e.phone}
                      </span>

                      {e.email ? (
                        <span className="inline-flex items-center gap-2 text-xs text-gray-600">
                          <Mail className="h-4 w-4 text-gray-400" />
                          {e.email}
                        </span>
                      ) : null}

                      {e.company ? (
                        <span className="inline-flex items-center gap-2 text-xs text-gray-600">
                          <Building2 className="h-4 w-4 text-gray-400" />
                          {e.company}
                        </span>
                      ) : null}

                      {e.attachment ? (
                        <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#ee9d54]">
                          <Paperclip className="h-4 w-4" />
                          Attachment
                        </span>
                      ) : null}
                    </div>

                    <div className="mt-2 flex items-start gap-2">
                      <MessageSquare className="mt-0.5 h-4 w-4 text-[#ee9d54]" />
                      <p className="line-clamp-2 text-sm text-gray-700">
                        {e.message}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 text-xs text-gray-500">
                    <div className="flex items-center gap-2">
                      <div className="inline-flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        {formatDate(e.createdAt)}
                      </div>

                      {/* ✅ Delete button */}
                      <button
                        type="button"
                        onClick={(ev) => {
                          ev.stopPropagation();
                          deleteEnquiry(e._id);
                        }}
                        disabled={deletingId === e._id}
                        className="rounded-lg border border-gray-200 p-2 text-red-600 hover:bg-red-50 disabled:opacity-60"
                        aria-label="Delete enquiry"
                        title="Delete"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ✅ Responsive Modal */}
      {selected && (
        <div className="fixed inset-0 z-[100] p-4 sm:p-6">
          <button
            aria-label="Close"
            className="absolute inset-0 bg-black/50"
            onClick={() => setSelected(null)}
          />
          <div
            className="absolute left-1/2 top-1/2 w-[92vw] max-w-2xl -translate-x-1/2 -translate-y-1/2
                       overflow-hidden rounded-2xl bg-white shadow-2xl max-h-[90vh]"
            role="dialog"
            aria-modal="true"
          >
            <div className="h-1.5 w-full bg-[#ee9d54]" />

            {/* Header */}
            <div className="flex items-start justify-between gap-4 px-6 py-5 border-b border-gray-100">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ee9d54]">
                  Enquiry Detail
                </p>
                <h3 className="mt-2 text-lg font-extrabold text-gray-900">
                  {selected.fullName}
                </h3>
                <p className="mt-1 text-xs text-gray-500">
                  {formatDate(selected.createdAt)}
                </p>
              </div>

              <button
                onClick={() => setSelected(null)}
                className="rounded-xl border border-gray-200 p-2 text-gray-700 hover:bg-gray-50"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* ✅ Scrollable Body */}
            <div className="px-6 pb-6 overflow-y-auto max-h-[calc(90vh-86px)]">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                    Phone
                  </p>
                  <p className="mt-2 text-sm font-bold text-gray-900">
                    {selected.phone}
                  </p>
                </div>

                <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                    Email
                  </p>
                  <p className="mt-2 text-sm font-bold text-gray-900">
                    {selected.email || "—"}
                  </p>
                </div>

                <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                    Company
                  </p>
                  <p className="mt-2 text-sm font-bold text-gray-900">
                    {selected.company || "—"}
                  </p>
                </div>

                <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                    Attachment
                  </p>

                  {selected.attachment ? (
                    <a
                      href={getFileUrl(API, selected.attachment.path)}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex items-center gap-2 rounded-lg bg-orange-50 px-3 py-2 text-sm font-semibold text-[#ee9d54] hover:opacity-90"
                      onClick={(ev) => ev.stopPropagation()}
                    >
                      <Paperclip className="h-4 w-4" />
                      {selected.attachment.originalName}
                      <span className="text-xs font-semibold text-gray-500">
                        ({bytesToSize(selected.attachment.size)})
                      </span>
                    </a>
                  ) : (
                    <p className="mt-2 text-sm font-bold text-gray-900">—</p>
                  )}
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-gray-100 bg-white p-4">
                <p className="text-sm font-semibold text-gray-900">
                  Requirement / Message
                </p>
                <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-gray-700">
                  {selected.message}
                </p>
              </div>

              <div className="mt-5 flex justify-end gap-2">
                {/* Optional: Delete inside modal (minimal) */}
                <button
                  type="button"
                  onClick={() => deleteEnquiry(selected._id)}
                  disabled={deletingId === selected._id}
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50 disabled:opacity-60"
                >
                  <Trash2 className="h-4 w-4" />
                  Delete
                </button>

                <button
                  onClick={() => setSelected(null)}
                  className="rounded-xl bg-[#ee9d54] px-4 py-2.5 text-sm font-semibold text-white hover:opacity-95"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
