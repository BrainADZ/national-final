"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();

  const API = process.env.NEXT_PUBLIC_API_BASE_URL;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email.trim() || !password.trim()) {
      setError("Email and password are required.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`${API}/auth/admin/login`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data?.message || "Login failed. Please try again.");
        return;
      }

      // expected: { token: "..." }
      localStorage.setItem("admin_token", data.token);

      router.push("/admin");
    } catch {
      setError("Something went wrong. Please check your server and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center px-4 py-10">
        <div className="grid w-full gap-10 lg:grid-cols-2 lg:items-center">
          {/* Left */}
          <div className="hidden lg:block">
            <p className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold text-[#ee9d54]">
              Admin Panel
            </p>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900">
              Sign in to manage Jobs, Applications, Enquiries & Feedback.
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600">
              This area is restricted for authorized users only. If you don’t have access,
              please contact the administrator.
            </p>

            <div className="mt-8 rounded-3xl border border-gray-100 bg-gray-50 p-6">
              <p className="text-sm font-bold text-gray-900">What you can do</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li>• Create and manage job listings</li>
                <li>• View job applications with attachments</li>
                <li>• Track website enquiries and feedback</li>
                <li>• Keep your careers page up to date</li>
              </ul>
            </div>
          </div>

          {/* Right: Login Card */}
          <div className="mx-auto w-full max-w-md">
            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ee9d54]">
                  Admin Login
                </p>
                <h2 className="mt-2 text-2xl font-extrabold text-gray-900">
                  Welcome back
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                  Enter your credentials to continue.
                </p>
              </div>

              {error && (
                <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </div>
              )}

              <form onSubmit={onSubmit} className="space-y-4">
                {/* Email */}
                <div>
                  <label className="text-xs font-semibold text-gray-700">
                    Email
                  </label>
                  <div className="mt-1 flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-3 py-3 focus-within:border-[#ee9d54] focus-within:ring-1 focus-within:ring-[#ee9d54]">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <input
                      type="email"
                      placeholder="admin@domain.com"
                      className="w-full text-sm outline-none placeholder:text-gray-400"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="text-xs font-semibold text-gray-700">
                    Password
                  </label>
                  <div className="mt-1 flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-3 py-3 focus-within:border-[#ee9d54] focus-within:ring-1 focus-within:ring-[#ee9d54]">
                    <Lock className="h-4 w-4 text-gray-400" />
                    <input
                      type={show ? "text" : "password"}
                      placeholder="Enter password"
                      className="w-full text-sm outline-none placeholder:text-gray-400"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="current-password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShow((v) => !v)}
                      className="rounded-lg p-1.5 text-gray-600 hover:bg-gray-50"
                      aria-label={show ? "Hide password" : "Show password"}
                    >
                      {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-[#ee9d54] px-4 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? "Signing in..." : "Sign In"}
                </button>

                <p className="text-center text-xs text-gray-500">
                  Authorized access only.
                </p>
              </form>
            </div>

            <div className="mt-4 text-center text-xs text-gray-500">
              National Engineers Admin Panel
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
