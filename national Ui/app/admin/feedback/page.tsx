"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Search,
  Mail,
  User,
  MessageSquare,
  Calendar,
  X,
  Trash2,
} from "lucide-react";

type Feedback = {
  _id: string;
  fullName: string;
  email: string;
  organization: string;
  message: string;
  createdAt: string;
};

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleString();
  } catch {
    return iso;
  }
}

export default function AdminFeedbackPage() {
  const API = process.env.NEXT_PUBLIC_API_BASE_URL;

  const [items, setItems] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [q, setQ] = useState("");
  const [selected, setSelected] = useState<Feedback | null>(null);

  // delete state
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return items;

    return items.filter((f) => {
      const hay = `${f.fullName} ${f.email} ${f.organization} ${f.message}`.toLowerCase();
      return hay.includes(query);
    });
  }, [items, q]);

  const fetchFeedback = async () => {
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("admin_token");
      if (!token) {
        setError("Not logged in.");
        setLoading(false);
        return;
      }

      const res = await fetch(`${API}/admin/feedback`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        setError(data?.message || "Failed to load feedback.");
        setLoading(false);
        return;
      }

      // data can be {data: []} or direct []
      const list = Array.isArray(data?.data) ? data.data : Array.isArray(data) ? data : [];
      setItems(list);
    } catch {
      setError("Server not reachable. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const deleteFeedback = async (id: string) => {
    const ok = confirm("Delete this feedback? This action cannot be undone.");
    if (!ok) return;

    try {
      setDeletingId(id);

      const token = localStorage.getItem("admin_token");
      if (!token) {
        alert("Not logged in.");
        return;
      }

      // Backend endpoint expected:
      // DELETE /admin/feedback/:id
      const res = await fetch(`${API}/admin/feedback/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        alert(data?.message || "Failed to delete feedback.");
        return;
      }

      // Remove from UI without refetch
      setItems((prev) => prev.filter((x) => x._id !== id));

      // If modal open for same feedback, close it
      setSelected((prev) => (prev?._id === id ? null : prev));
    } catch {
      alert("Server not reachable. Please try again.");
    } finally {
      setDeletingId(null);
    }
  };

  useEffect(() => {
    fetchFeedback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-350 px-4 py-6">
        {/* Header */}
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ee9d54]">
                Admin
              </p>
              <h1 className="mt-2 text-2xl font-extrabold text-gray-900">Feedback</h1>
              <p className="mt-1 text-sm text-gray-600">
                View and manage feedback submitted from the website.
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={fetchFeedback}
                className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-50"
              >
                Refresh
              </button>
            </div>
          </div>

          {/* Search */}
          <div className="mt-5 flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2.5">
            <Search className="h-4 w-4 text-gray-400" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search by name, email, organization or message..."
              className="w-full text-sm outline-none placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Body */}
        <div className="mt-6 rounded-2xl border border-gray-100 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
            <p className="text-sm font-semibold text-gray-900">
              Total: <span className="text-[#ee9d54]">{filtered.length}</span>
            </p>
            <p className="text-xs text-gray-500">Latest first</p>
          </div>

          {loading ? (
            <div className="p-6 text-sm text-gray-600">Loading feedback...</div>
          ) : error ? (
            <div className="p-6 text-sm text-red-600">{error}</div>
          ) : filtered.length === 0 ? (
            <div className="p-6 text-sm text-gray-600">No feedback found.</div>
          ) : (
            <div className="divide-y divide-gray-100">
              {filtered.map((f) => (
                <button
                  key={f._id}
                  onClick={() => setSelected(f)}
                  className="w-full text-left px-6 py-4 hover:bg-orange-50/40 transition"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-2 text-sm font-extrabold text-gray-900">
                          <User className="h-4 w-4 text-gray-500" />
                          {f.fullName}
                        </span>
                        <span className="hidden sm:inline text-xs text-gray-400">•</span>
                        <span className="inline-flex items-center gap-2 text-xs text-gray-600">
                          <Mail className="h-4 w-4 text-gray-400" />
                          {f.email}
                        </span>
                      </div>

                      <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-gray-800">
                        <MessageSquare className="h-4 w-4 text-[#ee9d54]" />
                        <span className="truncate">{f.organization}</span>
                      </div>

                      <p className="mt-2 line-clamp-2 text-sm text-gray-600">
                        {f.message}
                      </p>
                    </div>

                    <div className="shrink-0 text-xs text-gray-500">
                      <div className="flex items-center gap-2">
                        <div className="inline-flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-gray-400" />
                          {formatDate(f.createdAt)}
                        </div>

                        {/* ✅ Delete button */}
                        <button
                          type="button"
                          onClick={(ev) => {
                            ev.stopPropagation();
                            deleteFeedback(f._id);
                          }}
                          disabled={deletingId === f._id}
                          className="rounded-lg border border-gray-200 p-2 text-red-600 hover:bg-red-50 disabled:opacity-60"
                          aria-label="Delete feedback"
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
                  Feedback Detail
                </p>
                <h3 className="mt-2 text-lg font-extrabold text-gray-900">
                  {selected.organization}
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

            {/* ✅ Scrollable body */}
            <div className="px-6 pb-6 overflow-y-auto max-h-[calc(90vh-86px)]">
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                <p className="text-sm font-bold text-gray-900">{selected.fullName}</p>
                <p className="mt-1 text-sm text-gray-600">{selected.email}</p>
              </div>

              <div className="mt-4 rounded-xl border border-gray-100 bg-white p-4">
                <p className="text-sm font-semibold text-gray-900">Message</p>
                <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-gray-700">
                  {selected.message}
                </p>
              </div>

              <div className="mt-5 flex justify-end gap-2 pb-5">
                {/* Optional: Delete inside modal (same UI style) */}
                <button
                  type="button"
                  onClick={() => deleteFeedback(selected._id)}
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
    </div>
  );
}
