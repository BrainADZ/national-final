/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Briefcase,
  FileText,
  MessageSquare,
  Star,
  LogOut,
} from "lucide-react";
import { useEffect, useState } from "react";

const NAV = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Jobs", href: "/admin/jobs", icon: Briefcase },
  { name: "Applications", href: "/admin/application", icon: FileText },
  { name: "Enquiries", href: "/admin/enquiries", icon: MessageSquare },
  { name: "Feedback", href: "/admin/feedback", icon: Star },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [checking, setChecking] = useState(true);

  // ✅ Basic auth guard (token existence)
  useEffect(() => {
    if (pathname === "/admin/login") {
      setChecking(false);
      return;
    }

    const token = localStorage.getItem("admin_token");
    if (!token) {
      router.replace(`/admin/login?next=${encodeURIComponent(pathname)}`);
      return;
    }

    setChecking(false);
  }, [router, pathname]);

  const logout = () => {
    localStorage.removeItem("admin_token");
    router.replace("/admin");
  };

  // ✅ Login page should not show sidebar shell
  if (pathname === "/admin/login") return <>{children}</>;

  if (checking) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-350 px-4 py-6">
        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          {/* Sidebar */}
          <aside className="rounded-2xl border border-gray-100 bg-white shadow-sm">
            <div className="border-b border-gray-100 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ee9d54]">
                Admin Panel
              </p>
              <h1 className="mt-2 text-lg font-extrabold text-gray-900">
                NESF Admin
              </h1>
              <p className="mt-1 text-xs text-gray-500">
                Manage jobs, applications and enquiries.
              </p>
            </div>

            <nav className="p-3">
              <div className="space-y-1">
                {NAV.map((item) => {
                  const active =
                    pathname === item.href || pathname.startsWith(item.href + "/");

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
                        active
                          ? "bg-orange-50 text-gray-900"
                          : "text-gray-800 hover:bg-orange-50 hover:text-gray-900"
                      }`}
                    >
                      <item.icon
                        className={`h-4 w-4 transition ${
                          active ? "text-[#ee9d54]" : "text-gray-500 group-hover:text-[#ee9d54]"
                        }`}
                      />
                      {item.name}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-4 border-t border-gray-100 pt-4">
                <button
                  onClick={logout}
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-gray-800 hover:bg-red-50 hover:text-red-700"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </div>
            </nav>
          </aside>

          {/* Main content changes per page */}
          <main className="space-y-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
