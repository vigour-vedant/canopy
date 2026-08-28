import { useState } from "react";
import { supabase } from "../lib/supabase.js";
import { Leaf } from "./icons.jsx";

export default function AuthPage() {
  const [mode, setMode] = useState("login"); // login | signup
  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [school, setSchool] = useState("");
  const [grade, setGrade] = useState("");
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  const [busy, setBusy] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setInfo("");
    setBusy(true);

    try {
      if (mode === "login") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      } else {
        const { data, error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;

        // profile insert only succeeds if a session exists (email confirm off)
        // or after the user confirms their email and logs in.
        if (data.user && data.session) {
          const { error: profileError } = await supabase.from("profiles").insert({
            id: data.user.id,
            role,
            full_name: fullName,
            school,
            grade: role === "student" ? grade : null,
          });
          if (profileError) {
            // roll back: sign out so a half-created account doesn't linger confusingly
            await supabase.auth.signOut();
            throw profileError;
          }
        } else {
          setInfo("Check your email to confirm your account, then log in.");
        }
      }
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-5 py-12">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex items-center justify-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-canopy-700 text-paper">
            <Leaf size={17} strokeWidth={2.25} />
          </span>
          <span className="font-display text-xl font-semibold text-ink">Canopy</span>
        </div>

        <div className="rounded-xl2 border border-ink/10 bg-white p-6 shadow-card">
          <div className="mb-5 flex rounded-full border border-ink/10 bg-mist p-1">
            <button
              type="button"
              onClick={() => setMode("login")}
              className={`flex-1 rounded-full py-2 text-sm font-semibold transition-colors ${
                mode === "login" ? "bg-canopy-700 text-paper" : "text-ink/50"
              }`}
            >
              Log in
            </button>
            <button
              type="button"
              onClick={() => setMode("signup")}
              className={`flex-1 rounded-full py-2 text-sm font-semibold transition-colors ${
                mode === "signup" ? "bg-canopy-700 text-paper" : "text-ink/50"
              }`}
            >
              Sign up
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            {mode === "signup" && (
              <>
                <div className="flex rounded-full border border-ink/10 p-1">
                  <button
                    type="button"
                    onClick={() => setRole("student")}
                    className={`flex-1 rounded-full py-1.5 text-xs font-semibold transition-colors ${
                      role === "student" ? "bg-canopy-100 text-canopy-800" : "text-ink/40"
                    }`}
                  >
                    Student
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole("coordinator")}
                    className={`flex-1 rounded-full py-1.5 text-xs font-semibold transition-colors ${
                      role === "coordinator" ? "bg-canopy-100 text-canopy-800" : "text-ink/40"
                    }`}
                  >
                    Coordinator
                  </button>
                </div>
                {role === "coordinator" && (
                  <p className="rounded-lg bg-amber-300/20 px-3 py-2 text-xs text-soil-600">
                    Coordinator accounts require a verified school email domain.
                  </p>
                )}
                <input
                  required
                  placeholder="Full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full rounded-lg border border-ink/15 px-3 py-2.5 text-sm outline-none focus:border-canopy-500"
                />
                <input
                  required
                  placeholder="School name"
                  value={school}
                  onChange={(e) => setSchool(e.target.value)}
                  className="w-full rounded-lg border border-ink/15 px-3 py-2.5 text-sm outline-none focus:border-canopy-500"
                />
                {role === "student" && (
                  <input
                    required
                    placeholder="Class / Section (e.g. Class 9 - B)"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    className="w-full rounded-lg border border-ink/15 px-3 py-2.5 text-sm outline-none focus:border-canopy-500"
                  />
                )}
              </>
            )}

            <input
              required
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-ink/15 px-3 py-2.5 text-sm outline-none focus:border-canopy-500"
            />
            <input
              required
              type="password"
              placeholder="Password"
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-ink/15 px-3 py-2.5 text-sm outline-none focus:border-canopy-500"
            />

            {error && <p className="text-xs font-medium text-red-600">{error}</p>}
            {info && <p className="text-xs font-medium text-canopy-700">{info}</p>}

            <button
              type="submit"
              disabled={busy}
              className="w-full rounded-full bg-canopy-700 py-2.5 text-sm font-semibold text-paper disabled:opacity-60"
            >
              {busy ? "Please wait…" : mode === "login" ? "Log in" : "Create account"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}