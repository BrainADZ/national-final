"use client";

import { useEffect, useMemo, useState } from "react";
import * as XLSX from "xlsx";
import {
  Building2,
  Calendar,
  Download,
  ExternalLink,
  Filter,
  Mail,
  MessageSquare,
  PackageCheck,
  Paperclip,
  Phone,
  Search,
  Trash2,
  User,
  X,
} from "lucide-react";

type Drawing = {
  originalName: string;
  fileName: string;
  mimeType: string;
  size: number;
  path: string;
};

type AdsEnquiry = {
  _id: string;
  fullName: string;
  company?: string;
  phone: string;
  email?: string;
  productInterest: string;
  technicalSpecifications: string;
  operatingParameters?: string;
  drawingAvailability?: string;
  source?: string;
  pageUrl?: string;
  drawing?: Drawing | null;
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
  let value = bytes;
  let unitIndex = 0;

  while (value >= 1024 && unitIndex < units.length - 1) {
    value = value / 1024;
    unitIndex += 1;
  }

  return `${value.toFixed(unitIndex === 0 ? 0 : 1)} ${units[unitIndex]}`;
}

function getFileUrl(apiBase: string | undefined, filePath: string) {
  if (!apiBase) return "";
  const origin = apiBase.replace(/\/api\/?$/, "");
  const normalized = filePath.replace(/\\/g, "/");
  const idx = normalized.toLowerCase().lastIndexOf("uploads/");

  if (idx !== -1) return `${origin}/${normalized.slice(idx)}`;
  return `${origin}/${normalized}`;
}

function startOfDayMs(date: string) {
  return new Date(`${date}T00:00:00`).getTime();
}

function endOfDayMs(date: string) {
  return new Date(`${date}T23:59:59.999`).getTime();
}

export default function AdminAdsEnquiriesPage() {
  const API = process.env.NEXT_PUBLIC_API_BASE_URL;

  const [items, setItems] = useState<AdsEnquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [q, setQ] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [selected, setSelected] = useState<AdsEnquiry | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const fetchAdsEnquiries = async () => {
    setLoading(true);
    setError(null);

    try {
      if (!API) {
        setError("NEXT_PUBLIC_API_BASE_URL missing.");
        setLoading(false);
        return;
      }

      const token = localStorage.getItem("admin_token");
      if (!token) {
        setError("Not logged in.");
        setLoading(false);
        return;
      }

      const res = await fetch(`${API}/admin/ads-enquiries`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        setError(data?.message || "Failed to load ads enquiries.");
        setLoading(false);
        return;
      }

      const list = Array.isArray(data?.data) ? data.data : Array.isArray(data) ? data : [];
      setItems(list);
    } catch {
      setError("Server not reachable. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const deleteAdsEnquiry = async (id: string) => {
    const ok = confirm("Delete this ads enquiry? This action cannot be undone.");
    if (!ok) return;

    try {
      setDeletingId(id);

      const token = localStorage.getItem("admin_token");
      if (!token) {
        alert("Not logged in.");
        return;
      }

      const res = await fetch(`${API}/admin/ads-enquiries/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        alert(data?.message || "Failed to delete ads enquiry.");
        return;
      }

      setItems((prev) => prev.filter((item) => item._id !== id));
      setSelected((prev) => (prev?._id === id ? null : prev));
    } catch {
      alert("Server not reachable. Please try again.");
    } finally {
      setDeletingId(null);
    }
  };

  useEffect(() => {
    fetchAdsEnquiries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    const fromMs = fromDate ? startOfDayMs(fromDate) : null;
    const toMs = toDate ? endOfDayMs(toDate) : null;

    return items.filter((item) => {
      if (query) {
        const haystack = [
          item.fullName,
          item.company || "",
          item.phone,
          item.email || "",
          item.productInterest,
          item.technicalSpecifications,
          item.operatingParameters || "",
          item.drawingAvailability || "",
          item.source || "",
        ]
          .join(" ")
          .toLowerCase();

        if (!haystack.includes(query)) return false;
      }

      if (fromMs || toMs) {
        const createdMs = new Date(item.createdAt).getTime();
        if (fromMs && createdMs < fromMs) return false;
        if (toMs && createdMs > toMs) return false;
      }

      return true;
    });
  }, [items, q, fromDate, toDate]);

  const exportToExcel = () => {
    if (!filtered.length) {
      alert("No ads enquiries found for the selected filter.");
      return;
    }

    const rows = filtered.map((item, idx) => ({
      SNo: idx + 1,
      Date: formatDate(item.createdAt),
      FullName: item.fullName,
      Company: item.company || "",
      Phone: item.phone,
      Email: item.email || "",
      ProductInterest: item.productInterest,
      TechnicalSpecifications: item.technicalSpecifications,
      OperatingParameters: item.operatingParameters || "",
      DrawingAvailability: item.drawingAvailability || "",
      Source: item.source || "",
      PageUrl: item.pageUrl || "",
      HasDrawing: item.drawing ? "Yes" : "No",
      DrawingName: item.drawing?.originalName || "",
      DrawingUrl: item.drawing ? getFileUrl(API, item.drawing.path) : "",
    }));

    const ws = XLSX.utils.json_to_sheet(rows);
    ws["!cols"] = [
      { wch: 6 },
      { wch: 22 },
      { wch: 18 },
      { wch: 18 },
      { wch: 16 },
      { wch: 24 },
      { wch: 28 },
      { wch: 60 },
      { wch: 45 },
      { wch: 22 },
      { wch: 18 },
      { wch: 40 },
      { wch: 12 },
      { wch: 28 },
      { wch: 40 },
    ];

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Ads Enquiries");

    const fromLabel = fromDate || "all";
    const toLabel = toDate || "all";
    XLSX.writeFile(wb, `ads_enquiries_${fromLabel}_to_${toLabel}.xlsx`);
  };

  return (
    <>
      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ee9d54]">
              Admin
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-gray-900">
              Ads Enquiries
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              View industrial fabrication landing page enquiries and drawing uploads.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <button
              onClick={fetchAdsEnquiries}
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

        <div className="mt-5 flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2.5">
          <Search className="h-4 w-4 text-gray-400" />
          <input
            value={q}
            onChange={(event) => setQ(event.target.value)}
            placeholder="Search by name, phone, product, specs, parameters or source..."
            className="w-full text-sm outline-none placeholder:text-gray-400"
          />
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white px-3 py-2.5">
            <label className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
              From Date
            </label>
            <input
              type="date"
              value={fromDate}
              onChange={(event) => setFromDate(event.target.value)}
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
              onChange={(event) => setToDate(event.target.value)}
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

      <div className="rounded-2xl border border-gray-100 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <p className="text-sm font-semibold text-gray-900">
            Showing: <span className="text-[#ee9d54]">{filtered.length}</span>
            <span className="text-gray-500"> / {items.length}</span>
          </p>
          <p className="text-xs text-gray-500">Latest first</p>
        </div>

        {loading ? (
          <div className="p-6 text-sm text-gray-600">Loading ads enquiries...</div>
        ) : error ? (
          <div className="p-6 text-sm text-red-600">{error}</div>
        ) : filtered.length === 0 ? (
          <div className="p-6 text-sm text-gray-600">No ads enquiries found.</div>
        ) : (
          <div className="divide-y divide-gray-100">
            {filtered.map((item) => (
              <button
                key={item._id}
                onClick={() => setSelected(item)}
                className="w-full px-6 py-4 text-left transition hover:bg-orange-50/40"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                      <span className="inline-flex items-center gap-2 text-sm font-extrabold text-gray-900">
                        <User className="h-4 w-4 text-gray-500" />
                        {item.fullName}
                      </span>
                      <span className="inline-flex items-center gap-2 text-xs text-gray-600">
                        <Phone className="h-4 w-4 text-gray-400" />
                        {item.phone}
                      </span>
                      {item.email ? (
                        <span className="inline-flex items-center gap-2 text-xs text-gray-600">
                          <Mail className="h-4 w-4 text-gray-400" />
                          {item.email}
                        </span>
                      ) : null}
                      {item.company ? (
                        <span className="inline-flex items-center gap-2 text-xs text-gray-600">
                          <Building2 className="h-4 w-4 text-gray-400" />
                          {item.company}
                        </span>
                      ) : null}
                      {item.drawing ? (
                        <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#ee9d54]">
                          <Paperclip className="h-4 w-4" />
                          Drawing
                        </span>
                      ) : null}
                    </div>

                    <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-gray-800">
                      <PackageCheck className="h-4 w-4 text-[#ee9d54]" />
                      <span className="truncate">{item.productInterest}</span>
                    </div>

                    <div className="mt-2 flex items-start gap-2">
                      <MessageSquare className="mt-0.5 h-4 w-4 text-[#ee9d54]" />
                      <p className="line-clamp-2 text-sm text-gray-700">
                        {item.technicalSpecifications}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 text-xs text-gray-500">
                    <div className="flex items-center gap-2">
                      <div className="inline-flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        {formatDate(item.createdAt)}
                      </div>
                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          deleteAdsEnquiry(item._id);
                        }}
                        disabled={deletingId === item._id}
                        className="rounded-lg border border-gray-200 p-2 text-red-600 hover:bg-red-50 disabled:opacity-60"
                        aria-label="Delete ads enquiry"
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

      {selected ? (
        <div className="fixed inset-0 z-[100] p-4 sm:p-6">
          <button
            aria-label="Close"
            className="absolute inset-0 bg-black/50"
            onClick={() => setSelected(null)}
          />
          <div
            className="absolute left-1/2 top-1/2 max-h-[90vh] w-[92vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl bg-white shadow-2xl"
            role="dialog"
            aria-modal="true"
          >
            <div className="h-1.5 w-full bg-[#ee9d54]" />

            <div className="flex items-start justify-between gap-4 border-b border-gray-100 px-6 py-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ee9d54]">
                  Ads Enquiry Detail
                </p>
                <h3 className="mt-2 text-lg font-extrabold text-gray-900">
                  {selected.productInterest}
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

            <div className="max-h-[calc(90vh-86px)] overflow-y-auto px-6 pb-6">
              <div className="grid gap-3 sm:grid-cols-2">
                <Detail label="Name" value={selected.fullName} />
                <Detail label="Phone" value={selected.phone} />
                <Detail label="Email" value={selected.email || "-"} />
                <Detail label="Company" value={selected.company || "-"} />
                <Detail label="Product Interest" value={selected.productInterest} />
                <Detail label="Drawing Status" value={selected.drawingAvailability || "-"} />
                <Detail label="Source" value={selected.source || "-"} />
                <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                    Drawing
                  </p>
                  {selected.drawing ? (
                    <a
                      href={getFileUrl(API, selected.drawing.path)}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex items-center gap-2 rounded-lg bg-orange-50 px-3 py-2 text-sm font-semibold text-[#ee9d54] hover:opacity-90"
                      onClick={(event) => event.stopPropagation()}
                    >
                      <Paperclip className="h-4 w-4" />
                      {selected.drawing.originalName}
                      <span className="text-xs font-semibold text-gray-500">
                        ({bytesToSize(selected.drawing.size)})
                      </span>
                    </a>
                  ) : (
                    <p className="mt-2 text-sm font-bold text-gray-900">-</p>
                  )}
                </div>
              </div>

              {selected.pageUrl ? (
                <a
                  href={selected.pageUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#ee9d54] hover:opacity-80"
                >
                  <ExternalLink className="h-4 w-4" />
                  Open landing page URL
                </a>
              ) : null}

              <div className="mt-4 rounded-xl border border-gray-100 bg-white p-4">
                <p className="text-sm font-semibold text-gray-900">
                  Technical Specifications
                </p>
                <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-gray-700">
                  {selected.technicalSpecifications}
                </p>
              </div>

              <div className="mt-4 rounded-xl border border-gray-100 bg-white p-4">
                <p className="text-sm font-semibold text-gray-900">
                  Operating Parameters
                </p>
                <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-gray-700">
                  {selected.operatingParameters || "-"}
                </p>
              </div>

              <div className="mt-5 flex justify-end gap-2 pb-5">
                <button
                  type="button"
                  onClick={() => deleteAdsEnquiry(selected._id)}
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
      ) : null}
    </>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
        {label}
      </p>
      <p className="mt-2 break-words text-sm font-bold text-gray-900">{value}</p>
    </div>
  );
}
