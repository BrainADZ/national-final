"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Briefcase, FileText, MessageSquare, Star } from "lucide-react";

type Stats = {
  activeJobs: number;
  applications: number;
  enquiries: number;
  feedback: number;
};

type ActivityItem = {
  type: "job" | "application" | "enquiry" | "feedback";
  title: string;
  meta: string;
  createdAt: string;
};

type DashboardResponse = {
  message: string;
  data: {
    stats: Stats;
    latest: ActivityItem[];
  };
};

export default function AdminDashboardPage() {
  const API = process.env.NEXT_PUBLIC_API_BASE_URL; // e.g. http://localhost:5000/api

  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  const [stats, setStats] = useState<Stats>({
    activeJobs: 0,
    applications: 0,
    enquiries: 0,
    feedback: 0,
  });

  const [latest, setLatest] = useState<ActivityItem[]>([]);

  const fmtDate = (iso: string) => {
    try {
      return new Date(iso).toLocaleString();
    } catch {
      return iso;
    }
  };

  const fetchDashboard = async () => {
    setLoading(true);
    setErr(null);

    try {
      if (!API) {
        setErr("NEXT_PUBLIC_API_BASE_URL missing.");
        setLoading(false);
        return;
      }

      const token =
        typeof window !== "undefined" ? localStorage.getItem("admin_token") : null;

      if (!token) {
        setErr("Admin token missing. Please login again.");
        setLoading(false);
        return;
      }

      const res = await fetch(`${API}/admin/dashboard`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      });

      const json: DashboardResponse | null = await res.json().catch(() => null);

      if (!res.ok) {
        setErr(json?.message || "Failed to load dashboard.");
        setLoading(false);
        return;
      }

      setStats(json?.data?.stats ?? stats);
      setLatest(Array.isArray(json?.data?.latest) ? json!.data.latest : []);
    } catch (e) {
      setErr("Server not reachable.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* Header */}
      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ee9d54]">
              Overview
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-gray-900">Dashboard</h2>
            <p className="mt-1 text-sm text-gray-600">
              Quick access to job management and latest submissions.
            </p>

            {loading && (
              <p className="mt-2 text-sm text-gray-500">Loading dashboard...</p>
            )}
            {err && (
              <p className="mt-2 text-sm font-semibold text-red-600">{err}</p>
            )}
          </div>

          <div className="flex gap-2">
            <Link
              href="/admin/jobs"
              className="inline-flex items-center justify-center rounded-xl bg-[#ee9d54] px-4 py-2.5 text-sm font-semibold text-white hover:opacity-95"
            >
              Manage Jobs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* KPI cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard
          title="Active Jobs"
          value={loading ? "—" : String(stats.activeJobs)}
          hint="Currently live roles"
        />
        <KpiCard
          title="Applications"
          value={loading ? "—" : String(stats.applications)}
          hint="Total job applications"
        />
        <KpiCard
          title="Enquiries"
          value={loading ? "—" : String(stats.enquiries)}
          hint="Website enquiries"
        />
        <KpiCard
          title="Feedback"
          value={loading ? "—" : String(stats.feedback)}
          hint="Customer feedback"
        />
      </div>

      {/* Quick links */}
      <div className="grid gap-4 lg:grid-cols-2">
        <QuickCard
          title="Jobs"
          desc="Create, update, enable/disable job postings."
          href="/admin/jobs"
          icon={<Briefcase className="h-5 w-5 text-[#ee9d54]" />}
        />
        <QuickCard
          title="Applications"
          desc="View job applicants and download attachments."
          href="/admin/application"
          icon={<FileText className="h-5 w-5 text-[#ee9d54]" />}
        />
        <QuickCard
          title="Enquiries"
          desc="Track website enquiry form submissions."
          href="/admin/enquiries"
          icon={<MessageSquare className="h-5 w-5 text-[#ee9d54]" />}
        />
        <QuickCard
          title="Feedback"
          desc="See feedback messages and ratings."
          href="/admin/feedback"
          icon={<Star className="h-5 w-5 text-[#ee9d54]" />}
        />
      </div>

      {/* Latest Activity */}
      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-extrabold text-gray-900">Latest Activity</h3>
          <button
            type="button"
            onClick={fetchDashboard}
            className="text-xs font-semibold text-gray-500 hover:text-gray-900"
          >
            Refresh
          </button>
        </div>

        <div className="mt-4 space-y-3">
          {loading ? (
            <ActivityRow
              title="Loading..."
              meta="Fetching latest submissions from API."
            />
          ) : latest.length === 0 ? (
            <ActivityRow
              title="No recent activity"
              meta="Once submissions arrive, they will appear here."
            />
          ) : (
            latest.slice(0, 6).map((a, idx) => (
              <ActivityRow
                key={idx}
                title={a.title}
                meta={`${a.meta} • ${fmtDate(a.createdAt)}`}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}

function KpiCard({ title, value, hint }: { title: string; value: string; hint: string }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
        {title}
      </p>
      <p className="mt-2 text-3xl font-extrabold text-gray-900">{value}</p>
      <p className="mt-1 text-sm text-gray-600">{hint}</p>
    </div>
  );
}

function QuickCard({
  title,
  desc,
  href,
  icon,
}: {
  title: string;
  desc: string;
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50">
            {icon}
          </div>
          <div>
            <p className="text-base font-extrabold text-gray-900">{title}</p>
            <p className="mt-1 text-sm text-gray-600">{desc}</p>
          </div>
        </div>
        <ArrowRight className="h-5 w-5 text-gray-400 transition group-hover:translate-x-0.5 group-hover:text-[#ee9d54]" />
      </div>
    </Link>
  );
}

function ActivityRow({ title, meta }: { title: string; meta: string }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-gray-50 px-4 py-3">
      <p className="text-sm font-semibold text-gray-900">{title}</p>
      <p className="mt-1 text-xs text-gray-600">{meta}</p>
    </div>
  );
}
