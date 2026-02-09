/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Briefcase,
  Search,
  Plus,
  X,
  Trash2,
  Pencil,
  Power,
  MapPin,
  Clock,
  BadgeIndianRupee,
} from "lucide-react";

type JobType = "full-time" | "part-time" | "internship";

type Job = {
  _id: string;
  title: string;
  description: string;
  type: JobType;
  location: string;
  experienceMin: number;
  experienceMax: number;
  salaryLabel: string;
  responsibilities: string[];
  requirements: string[];
  goodToHave: string[];
  isActive: boolean;
  createdAt: string;
};

const TYPE_OPTIONS: { label: string; value: JobType }[] = [
  { label: "Full-time", value: "full-time" },
  { label: "Part-time", value: "part-time" },
  { label: "Internship", value: "internship" },
];

function formatType(t: JobType) {
  if (t === "full-time") return "Full-time";
  if (t === "part-time") return "Part-time";
  return "Internship";
}

function toArrayFromTextarea(v: string) {
  return v
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
}

function toTextareaFromArray(arr: string[]) {
  return (arr || []).join("\n");
}

export default function AdminJobsPage() {
  const API = process.env.NEXT_PUBLIC_API_BASE_URL;

  const [items, setItems] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // filters
  const [q, setQ] = useState("");
  const [typeFilter, setTypeFilter] = useState<JobType | "all">("all");
  const [activeFilter, setActiveFilter] = useState<"all" | "active" | "inactive">("all");

  // modal state
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"create" | "edit">("create");
  const [editing, setEditing] = useState<Job | null>(null);

  // form
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState<JobType>("full-time");
  const [location, setLocation] = useState("");
  const [experienceMin, setExperienceMin] = useState<number>(0);
  const [experienceMax, setExperienceMax] = useState<number>(0);
  const [salaryLabel, setSalaryLabel] = useState("Not disclosed");

  const [responsibilitiesText, setResponsibilitiesText] = useState("");
  const [requirementsText, setRequirementsText] = useState("");
  const [goodToHaveText, setGoodToHaveText] = useState("");

  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setType("full-time");
    setLocation("");
    setExperienceMin(0);
    setExperienceMax(0);
    setSalaryLabel("Not disclosed");
    setResponsibilitiesText("");
    setRequirementsText("");
    setGoodToHaveText("");
    setFormError(null);
    setEditing(null);
  };

  const openCreate = () => {
    setMode("create");
    resetForm();
    setOpen(true);
  };

  const openEdit = (job: Job) => {
    setMode("edit");
    setEditing(job);

    setTitle(job.title);
    setDescription(job.description);
    setType(job.type);
    setLocation(job.location);
    setExperienceMin(job.experienceMin);
    setExperienceMax(job.experienceMax);
    setSalaryLabel(job.salaryLabel);

    setResponsibilitiesText(toTextareaFromArray(job.responsibilities));
    setRequirementsText(toTextareaFromArray(job.requirements));
    setGoodToHaveText(toTextareaFromArray(job.goodToHave));

    setFormError(null);
    setOpen(true);
  };

  const fetchJobs = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("admin_token");
      if (!token) {
        setError("Not logged in.");
        setLoading(false);
        return;
      }

      const res = await fetch(`${API}/admin/jobs`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        setError(data?.message || "Failed to load jobs.");
        setLoading(false);
        return;
      }

      const list = Array.isArray(data?.data) ? data.data : [];
      setItems(list);
    } catch {
      setError("Server not reachable.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();

    return items.filter((j) => {
      if (typeFilter !== "all" && j.type !== typeFilter) return false;
      if (activeFilter === "active" && !j.isActive) return false;
      if (activeFilter === "inactive" && j.isActive) return false;

      if (query) {
        const hay = `${j.title} ${j.description} ${j.location} ${j.salaryLabel}`.toLowerCase();
        if (!hay.includes(query)) return false;
      }

      return true;
    });
  }, [items, q, typeFilter, activeFilter]);

  const toggleJob = async (id: string) => {
    const token = localStorage.getItem("admin_token");
    if (!token) return;

    const ok = confirm("Toggle job active/inactive?");
    if (!ok) return;

    const res = await fetch(`${API}/admin/jobs/${id}/toggle`, {
      method: "PATCH",
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!res.ok) {
      const data = await res.json().catch(() => null);
      alert(data?.message || "Failed to toggle job.");
      return;
    }

    fetchJobs();
  };

  const deleteJob = async (id: string) => {
    const token = localStorage.getItem("admin_token");
    if (!token) return;

    const ok = confirm("Delete this job permanently?");
    if (!ok) return;

    const res = await fetch(`${API}/admin/jobs/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!res.ok) {
      const data = await res.json().catch(() => null);
      alert(data?.message || "Failed to delete job.");
      return;
    }

    fetchJobs();
  };

  const saveJob = async () => {
    setFormError(null);

    if (title.trim().length < 3) return setFormError("Title must be at least 3 characters.");
    if (description.trim().length < 10)
      return setFormError("Description must be at least 10 characters.");
    if (!location.trim()) return setFormError("Location is required.");
    if (experienceMax < experienceMin)
      return setFormError("Experience max cannot be less than experience min.");
    if (!salaryLabel.trim()) return setFormError("Salary is required.");

    const payload = {
      title: title.trim(),
      description: description.trim(),
      type,
      location: location.trim(),
      experienceMin: Number(experienceMin),
      experienceMax: Number(experienceMax),
      salaryLabel: salaryLabel.trim(),
      responsibilities: toArrayFromTextarea(responsibilitiesText),
      requirements: toArrayFromTextarea(requirementsText),
      goodToHave: toArrayFromTextarea(goodToHaveText),
    };

    try {
      setSaving(true);
      const token = localStorage.getItem("admin_token");
      if (!token) return setFormError("Not logged in.");

      const url =
        mode === "create"
          ? `${API}/admin/jobs`
          : `${API}/admin/jobs/${editing?._id}`;

      const method = mode === "create" ? "POST" : "PATCH";

      const res = await fetch(url, {
        method,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        setFormError(data?.message || "Failed to save job.");
        return;
      }

      setOpen(false);
      resetForm();
      fetchJobs();
    } catch {
      setFormError("Server not reachable.");
    } finally {
      setSaving(false);
    }
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
            <h2 className="mt-2 text-2xl font-extrabold text-gray-900">Jobs</h2>
            <p className="mt-1 text-sm text-gray-600">
             Create, Edit, Enable or Disable, and Publish Job Listings. 
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <button
              onClick={fetchJobs}
              className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-50"
            >
              Refresh
            </button>

            <button
              onClick={openCreate}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#ee9d54] px-4 py-2.5 text-sm font-semibold text-white hover:opacity-95"
            >
              <Plus className="h-4 w-4" />
              Add Job
            </button>
          </div>
        </div>

        {/* Filters row */}
        <div className="mt-5 grid gap-3 lg:grid-cols-[1fr_180px_180px]">
          {/* Search */}
          <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2.5">
            <Search className="h-4 w-4 text-gray-400" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search by Title, Location, or Salary."
              className="w-full text-sm outline-none placeholder:text-gray-400"
            />
          </div>

          {/* Type */}
          <div className="rounded-xl border border-gray-200 bg-white px-3 py-2.5">
            <label className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
              Type
            </label>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value as any)}
              className="mt-1 w-full bg-transparent text-sm outline-none"
            >
              <option value="all">All</option>
              {TYPE_OPTIONS.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>

          {/* Active */}
          <div className="rounded-xl border border-gray-200 bg-white px-3 py-2.5">
            <label className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
              Status
            </label>
            <select
              value={activeFilter}
              onChange={(e) => setActiveFilter(e.target.value as any)}
              className="mt-1 w-full bg-transparent text-sm outline-none"
            >
              <option value="all">All</option>
              <option value="active">Active only</option>
              <option value="inactive">Inactive only</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table/Card List */}
      <div className="rounded-2xl border border-gray-100 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <p className="text-sm font-semibold text-gray-900">
            Showing: <span className="text-[#ee9d54]">{filtered.length}</span>
            <span className="text-gray-500"> / {items.length}</span>
          </p>
          <p className="text-xs text-gray-500">Admin list (active + inactive)</p>
        </div>

        {loading ? (
          <div className="p-6 text-sm text-gray-600">Loading jobs...</div>
        ) : error ? (
          <div className="p-6 text-sm text-red-600">{error}</div>
        ) : filtered.length === 0 ? (
          <div className="p-6 text-sm text-gray-600">No jobs found.</div>
        ) : (
          <div className="divide-y divide-gray-100">
            {filtered.map((j) => (
              <div key={j._id} className="px-6 py-5">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                  {/* left */}
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-2 text-base font-extrabold text-gray-900">
                        <Briefcase className="h-5 w-5 text-[#ee9d54]" />
                        {j.title}
                      </span>

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          j.isActive
                            ? "bg-green-50 text-green-700 border border-green-200"
                            : "bg-gray-50 text-gray-600 border border-gray-200"
                        }`}
                      >
                        {j.isActive ? "Active" : "Inactive"}
                      </span>

                      <span className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold text-[#ee9d54]">
                        {formatType(j.type)}
                      </span>
                    </div>

                    <p className="mt-2 text-sm text-gray-700">{j.description}</p>

                    <div className="mt-3 flex flex-wrap gap-3 text-xs font-semibold text-gray-600">
                      <span className="inline-flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        {j.location}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <Clock className="h-4 w-4 text-gray-400" />
                        {j.experienceMin}–{j.experienceMax} yrs
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <BadgeIndianRupee className="h-4 w-4 text-gray-400" />
                        {j.salaryLabel}
                      </span>
                    </div>
                  </div>

                  {/* right actions */}
                  <div className="flex shrink-0 flex-wrap gap-2 lg:justify-end">
                    <button
                      onClick={() => openEdit(j)}
                      className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50"
                    >
                      <Pencil className="h-4 w-4" />
                      Edit
                    </button>

                    <button
                      onClick={() => toggleJob(j._id)}
                      className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50"
                    >
                      <Power className="h-4 w-4" />
                      Toggle
                    </button>

                    <button
                      onClick={() => deleteJob(j._id)}
                      className="inline-flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-100"
                    >
                      <Trash2 className="h-4 w-4" />
                      Delete
                    </button>
                  </div>
                </div>

                {/* summary counts */}
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl border border-gray-100 bg-gray-50 p-3">
                    <p className="text-xs font-semibold text-gray-600">Responsibilities</p>
                    <p className="mt-1 text-sm font-extrabold text-gray-900">
                      {j.responsibilities?.length || 0}
                    </p>
                  </div>
                  <div className="rounded-xl border border-gray-100 bg-gray-50 p-3">
                    <p className="text-xs font-semibold text-gray-600">Requirements</p>
                    <p className="mt-1 text-sm font-extrabold text-gray-900">
                      {j.requirements?.length || 0}
                    </p>
                  </div>
                  <div className="rounded-xl border border-gray-100 bg-gray-50 p-3">
                    <p className="text-xs font-semibold text-gray-600">Good to have</p>
                    <p className="mt-1 text-sm font-extrabold text-gray-900">
                      {j.goodToHave?.length || 0}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal: Create/Edit */}
      {open && (
        <div className="fixed inset-0 z-[100]">
          <button
            aria-label="Close"
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />

          <div className="absolute left-1/2 top-1/2 w-[94vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="h-1.5 w-full bg-[#ee9d54]" />

            <div className="flex items-start justify-between gap-4 px-6 py-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ee9d54]">
                  {mode === "create" ? "Create Job" : "Edit Job"}
                </p>
                <h3 className="mt-2 text-lg font-extrabold text-gray-900">
                  {mode === "create" ? "Add a new role" : "Update Role Details"}
                </h3>
                <p className="mt-1 text-xs text-gray-500">
                 Use new lines for each bullet point in Key Responsibilities, Qualifications & Experience, Requirements, and Good to Have.
                </p>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="rounded-xl border border-gray-200 p-2 text-gray-700 hover:bg-gray-50"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="max-h-[75vh] overflow-auto px-6 pb-6">
              {formError ? (
                <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                  {formError}
                </div>
              ) : null}

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold text-gray-700">Title *</label>
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Sales Executive (B2B)"
                    className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#ee9d54] focus:ring-1 focus:ring-[#ee9d54]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold text-gray-700">Role Overview *</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={3}
                    placeholder="Own lead generation, client meetings, quotations, and closures..."
                    className="mt-1 w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#ee9d54] focus:ring-1 focus:ring-[#ee9d54]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-700">Type *</label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value as JobType)}
                    className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#ee9d54] focus:ring-1 focus:ring-[#ee9d54]"
                  >
                    {TYPE_OPTIONS.map((t) => (
                      <option key={t.value} value={t.value}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-700">Location *</label>
                  <input
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Delhi NCR"
                    className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#ee9d54] focus:ring-1 focus:ring-[#ee9d54]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-700">Minimum Experience *</label>
                  <input
                    type="number"
                    value={experienceMin}
                    min={0}
                    max={50}
                    onChange={(e) => setExperienceMin(Number(e.target.value))}
                    className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#ee9d54] focus:ring-1 focus:ring-[#ee9d54]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-700">Maximum Experience *</label>
                  <input
                    type="number"
                    value={experienceMax}
                    min={0}
                    max={50}
                    onChange={(e) => setExperienceMax(Number(e.target.value))}
                    className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#ee9d54] focus:ring-1 focus:ring-[#ee9d54]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold text-gray-700">Salary *</label>
                  <input
                    value={salaryLabel}
                    onChange={(e) => setSalaryLabel(e.target.value)}
                    placeholder="As per industry standards / Not disclosed / ₹ 3L - 5L"
                    className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#ee9d54] focus:ring-1 focus:ring-[#ee9d54]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold text-gray-700">
                   Key Responsibilities
                  </label>
                  <textarea
                    value={responsibilitiesText}
                    onChange={(e) => setResponsibilitiesText(e.target.value)}
                    rows={5}
                    placeholder={`Generate and qualify leads...\nUnderstand customer requirements...\nPrepare quotations...`}
                    className="mt-1 w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#ee9d54] focus:ring-1 focus:ring-[#ee9d54]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold text-gray-700">
                    Requirements
                  </label>
                  <textarea
                    value={requirementsText}
                    onChange={(e) => setRequirementsText(e.target.value)}
                    rows={5}
                    placeholder={`Strong communication and negotiation skills\nComfortable with field visits...`}
                    className="mt-1 w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#ee9d54] focus:ring-1 focus:ring-[#ee9d54]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold text-gray-700">
           Good to Have
                  </label>
                  <textarea
                    value={goodToHaveText}
                    onChange={(e) => setGoodToHaveText(e.target.value)}
                    rows={4}
                    placeholder={`Experience with CRM tools\nKnowledge of tendering...`}
                    className="mt-1 w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#ee9d54] focus:ring-1 focus:ring-[#ee9d54]"
                  />
                </div>
              </div>

              <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-end">
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-50"
                >
                  Cancel
                </button>

                <button
                  onClick={saveJob}
                  disabled={saving}
                  className="rounded-xl bg-[#ee9d54] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-95 disabled:opacity-60"
                >
                  {saving ? "Saving..." : mode === "create" ? "Create Job" : "Update Job"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
