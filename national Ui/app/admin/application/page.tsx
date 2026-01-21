/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Search,
  Calendar,
  Download,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Trash2,
} from "lucide-react";

type ApiApplication = {
  _id: string;
  jobId?: string;
  jobTitle: string;

  fullName: string;
  phone: string;
  email: string;

  experience?: string;
  location?: string;
  noticePeriod?: string;
  message?: string;

  resumeUrl: string; // e.g. "/uploads/file.pdf"
  resumeName: string;
  resumeMime: string;
  resumeSize: number;

  createdAt: string;
};

type ApiListResponse = {
  message: string;
  data: ApiApplication[];
  meta: { page: number; limit: number; total: number };
};

function formatDateTime(iso: string) {
  try {
    return new Date(iso).toLocaleString();
  } catch {
    return iso;
  }
}

function formatBytes(bytes: number) {
  if (!bytes && bytes !== 0) return "-";
  const sizes = ["B", "KB", "MB", "GB"];
  let i = 0;
  let v = bytes;
  while (v >= 1024 && i < sizes.length - 1) {
    v /= 1024;
    i++;
  }
  return `${v.toFixed(i === 0 ? 0 : 1)} ${sizes[i]}`;
}

function downloadCSV(filename: string, rows: Record<string, any>[]) {
  const headers = Object.keys(rows[0] || {});
  const escape = (val: any) => {
    const s = String(val ?? "");
    const t = s.replace(/"/g, '""');
    if (/[",\n]/.test(t)) return `"${t}"`;
    return t;
  };

  const csv = [
    headers.join(","),
    ...rows.map((r) => headers.map((h) => escape(r[h])).join(",")),
  ].join("\n");

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function normalizeApiBase(api?: string) {
  if (!api) return null;
  return api.endsWith("/") ? api.slice(0, -1) : api;
}

// API = http://localhost:5000/api
// uploads served from http://localhost:5000/uploads/...
function buildUploadsBaseFromApi(api: string) {
  return api.replace(/\/api$/, "");
}

export default function AdminApplicationsPage() {
  const API = normalizeApiBase(process.env.NEXT_PUBLIC_API_BASE_URL); // e.g. http://localhost:5000/api
  const UPLOADS_BASE = API ? buildUploadsBaseFromApi(API) : "";

  const [items, setItems] = useState<ApiApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  // filters
  const [q, setQ] = useState("");
  const [from, setFrom] = useState(""); // yyyy-mm-dd
  const [to, setTo] = useState(""); // yyyy-mm-dd
  const [jobId, setJobId] = useState("");

  // pagination
  const [page, setPage] = useState(1);
  const [limit] = useState(20);
  const [total, setTotal] = useState(0);

  // delete state
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(total / limit)),
    [total, limit]
  );

  const fetchList = async (p = page) => {
    setLoading(true);
    setErr(null);

    try {
      if (!API) {
        setErr("NEXT_PUBLIC_API_BASE_URL missing.");
        setLoading(false);
        return;
      }

      const params = new URLSearchParams();
      params.set("page", String(p));
      params.set("limit", String(limit));
      if (q.trim()) params.set("q", q.trim());
      if (from) params.set("from", from);
      if (to) params.set("to", to);
      if (jobId.trim()) params.set("jobId", jobId.trim());

      // NOTE: This is your existing endpoint
      const res = await fetch(`${API}/careers/admin?${params.toString()}`, {
        cache: "no-store",
      });
      const data: ApiListResponse | null = await res.json().catch(() => null);

      if (!res.ok) {
        setErr((data as any)?.message || "Failed to load applications.");
        setLoading(false);
        return;
      }

      setItems(Array.isArray(data?.data) ? data!.data : []);
      setTotal(data?.meta?.total ?? 0);
    } catch {
      setErr("Server not reachable.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchList(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const applyFilters = () => {
    setPage(1);
    fetchList(1);
  };

  const clearFilters = () => {
    setQ("");
    setFrom("");
    setTo("");
    setJobId("");
    setPage(1);
    setTimeout(() => fetchList(1), 0);
  };

  const exportCSV = async () => {
    if (!API) return alert("NEXT_PUBLIC_API_BASE_URL missing.");

    const params = new URLSearchParams();
    params.set("page", "1");
    params.set("limit", "200");
    if (q.trim()) params.set("q", q.trim());
    if (from) params.set("from", from);
    if (to) params.set("to", to);
    if (jobId.trim()) params.set("jobId", jobId.trim());

    // NOTE: Your original export endpoint (kept as-is)
    const res = await fetch(`${API}/applications/admin?${params.toString()}`, {
      cache: "no-store",
    });
    const data: ApiListResponse | null = await res.json().catch(() => null);

    if (!res.ok) return alert((data as any)?.message || "Export failed.");

    const rows = (data?.data || []).map((a) => ({
      Date: a.createdAt,
      JobTitle: a.jobTitle,
      FullName: a.fullName,
      Phone: a.phone,
      Email: a.email,
      Experience: a.experience || "",
      Location: a.location || "",
      NoticePeriod: a.noticePeriod || "",
      Message: a.message || "",
      ResumeName: a.resumeName || "",
      ResumeUrl: a.resumeUrl ? `${UPLOADS_BASE}${a.resumeUrl}` : "",
    }));

    const stamp = new Date().toISOString().slice(0, 10);
    downloadCSV(`applications_${stamp}.csv`, rows);
  };

  const deleteApplication = async (id: string) => {
    if (!API) return alert("NEXT_PUBLIC_API_BASE_URL missing.");

    const ok = window.confirm(
      "Delete this application? This action cannot be undone."
    );
    if (!ok) return;

    setDeletingId(id);
    setErr(null);

    try {
      // ✅ Backend implement this:
      // DELETE /api/careers/admin/:id
      // (If you prefer /applications/admin/:id then change the path below.)
      const res = await fetch(`${API}/careers/admin/${id}`, {
        method: "DELETE",
        cache: "no-store",
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        setErr((data as any)?.message || "Failed to delete application.");
        return;
      }

      // Optimistic UI update
      setItems((prev) => prev.filter((x) => x._id !== id));
      setTotal((t) => Math.max(0, t - 1));

      // If the current page becomes empty after deletion, go back one page and refetch
      setTimeout(() => {
        setItems((prev) => {
          if (prev.length === 0 && page > 1) {
            setPage((p) => Math.max(1, p - 1));
          }
          return prev;
        });
      }, 0);
    } catch {
      setErr("Server not reachable.");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-[1200px] px-4 py-8">
        {/* Header */}
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ee9d54]">
                Applications
              </p>
              <h1 className="mt-2 text-2xl font-extrabold text-gray-900">
                Job Applications
              </h1>
              <p className="mt-1 text-sm text-gray-600">
                Filter by date and export to CSV (Excel).
              </p>
            </div>

            <button
              onClick={exportCSV}
              className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50"
            >
              <Download className="mr-2 h-4 w-4 text-[#ee9d54]" />
              Export CSV
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="mt-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="grid gap-4 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <label className="text-xs font-semibold text-gray-700">
                Search (name / email / phone / job title)
              </label>
              <div className="mt-1 flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-3 py-3 focus-within:border-[#ee9d54] focus-within:ring-1 focus-within:ring-[#ee9d54]">
                <Search className="h-4 w-4 text-gray-400" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Type to search..."
                  className="w-full text-sm outline-none placeholder:text-gray-400"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-700">
                From date
              </label>
              <div className="mt-1 flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-3 py-3 focus-within:border-[#ee9d54] focus-within:ring-1 focus-within:ring-[#ee9d54]">
                <Calendar className="h-4 w-4 text-gray-400" />
                <input
                  type="date"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  className="w-full text-sm outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-700">To date</label>
              <div className="mt-1 flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-3 py-3 focus-within:border-[#ee9d54] focus-within:ring-1 focus-within:ring-[#ee9d54]">
                <Calendar className="h-4 w-4 text-gray-400" />
                <input
                  type="date"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className="w-full text-sm outline-none"
                />
              </div>
            </div>

            <div className="lg:col-span-2">
              <label className="text-xs font-semibold text-gray-700">
                JobId (optional)
              </label>
              <input
                value={jobId}
                onChange={(e) => setJobId(e.target.value)}
                placeholder="Paste jobId to filter"
                className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-[#ee9d54] focus:ring-1 focus:ring-[#ee9d54]"
              />
            </div>

            <div className="lg:col-span-2 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-end">
              <button
                onClick={applyFilters}
                className="inline-flex items-center justify-center rounded-xl bg-[#ee9d54] px-4 py-3 text-sm font-semibold text-white hover:opacity-95"
              >
                Apply Filters
              </button>
              <button
                onClick={clearFilters}
                className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
              >
                Clear
              </button>
            </div>
          </div>

          {err && (
            <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
              {err}
            </div>
          )}
        </div>

        {/* List */}
        <div className="mt-6 rounded-2xl border border-gray-100 bg-white shadow-sm">
          <div className="border-b border-gray-100 px-6 py-4 flex items-center justify-between">
            <p className="text-sm font-extrabold text-gray-900">Applications</p>
            <p className="text-xs font-semibold text-gray-500">Total: {total}</p>
          </div>

          <div className="p-6">
            {loading ? (
              <p className="text-sm text-gray-600">Loading...</p>
            ) : items.length === 0 ? (
              <p className="text-sm text-gray-600">
                No applications found for selected filters.
              </p>
            ) : (
              <div className="space-y-4">
                {items.map((a) => {
                  const resumeLink = a.resumeUrl
                    ? `${UPLOADS_BASE}${a.resumeUrl}`
                    : "#";

                  return (
                    <div
                      key={a._id}
                      className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
                    >
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <p className="text-sm font-extrabold text-gray-900">
                            {a.fullName}
                          </p>
                          <p className="mt-1 text-xs font-semibold text-gray-500">
                            {a.jobTitle}
                          </p>

                          <div className="mt-3 grid gap-2 text-sm text-gray-700 sm:grid-cols-2">
                            <div>
                              <span className="font-semibold">Email:</span>{" "}
                              {a.email}
                            </div>
                            <div>
                              <span className="font-semibold">Phone:</span>{" "}
                              {a.phone}
                            </div>
                            <div>
                              <span className="font-semibold">Experience:</span>{" "}
                              {a.experience || "-"}
                            </div>
                            <div>
                              <span className="font-semibold">Location:</span>{" "}
                              {a.location || "-"}
                            </div>
                            <div>
                              <span className="font-semibold">Notice:</span>{" "}
                              {a.noticePeriod || "-"}
                            </div>
                            <div>
                              <span className="font-semibold">Date:</span>{" "}
                              {formatDateTime(a.createdAt)}
                            </div>
                          </div>

                          {a.message && (
                            <div className="mt-3 rounded-xl bg-gray-50 px-4 py-3">
                              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                                Message
                              </p>
                              <p className="mt-2 text-sm text-gray-700 whitespace-pre-wrap">
                                {a.message}
                              </p>
                            </div>
                          )}
                        </div>

                        <div className="flex flex-col gap-2 sm:items-end">
                          <a
                            href={resumeLink}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center rounded-xl bg-[#ee9d54] px-4 py-2.5 text-sm font-semibold text-white hover:opacity-95"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Open Resume
                          </a>

                          <a
                            href={resumeLink}
                            download
                            className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                          >
                            <Download className="mr-2 h-4 w-4 text-[#ee9d54]" />
                            Download
                          </a>

                          {/* ✅ Delete button */}
                          <button
                            onClick={() => deleteApplication(a._id)}
                            disabled={deletingId === a._id}
                            className="inline-flex items-center justify-center rounded-xl border border-red-200 bg-white px-4 py-2.5 text-sm font-semibold text-red-700 hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60"
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            {deletingId === a._id ? "Deleting..." : "Delete"}
                          </button>

                          <p className="text-xs text-gray-500">
                            {a.resumeName} • {formatBytes(a.resumeSize)}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Pagination */}
          <div className="border-t border-gray-100 px-6 py-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs font-semibold text-gray-500">
                Page {page} of {totalPages}
              </p>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page <= 1}
                  className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>

                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page >= totalPages}
                  className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
