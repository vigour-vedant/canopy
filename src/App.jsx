import { useState } from "react";
import NavBar from "./components/NavBar.jsx";
import Landing from "./components/Landing.jsx";
import StudentDashboard from "./components/StudentDashboard.jsx";
import CoordinatorView from "./components/CoordinatorView.jsx";
import ImpactDashboard from "./components/ImpactDashboard.jsx";
import AuthPage from "./components/AuthPage.jsx";
import { useAuth } from "./lib/AuthContext.jsx";

export default function App() {
  const [tab, setTab] = useState("home");
  const { session, profile, loading, signOut } = useAuth();

  const needsAuth = tab === "student" || tab === "teacher";
  const showAuthGate = needsAuth && !loading && !session;

  // once logged in, route straight to the account's own role view
  const effectiveTab =
    session && profile && tab !== "home" && tab !== "impact"
      ? profile.role === "coordinator"
        ? "teacher"
        : "student"
      : tab;

  return (
    <div className="min-h-screen bg-paper font-body text-ink">
      <NavBar active={effectiveTab} onChange={setTab} />
      {session && profile && (
        <div className="mx-auto flex max-w-6xl items-center justify-end gap-3 px-5 pt-3 text-xs text-ink/50 sm:px-8">
          <span>{profile.full_name} · {profile.role}</span>
          <button onClick={signOut} className="font-semibold text-canopy-700 hover:underline">
            Log out
          </button>
        </div>
      )}

      {effectiveTab === "home" && <Landing onTry={setTab} />}
      {effectiveTab === "impact" && <ImpactDashboard />}
      {showAuthGate && <AuthPage />}
      {effectiveTab === "student" && session && profile?.role === "student" && <StudentDashboard />}
      {effectiveTab === "teacher" && session && profile?.role === "coordinator" && <CoordinatorView />}

      <footer className="border-t border-ink/10 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 text-xs text-ink/40 sm:flex-row sm:px-8">
          <span>Canopy — SIH 2026 internal hackathon prototype, VIT Bhopal University</span>
          <span>Built with React, Tailwind CSS · Deployed on Vercel</span>
        </div>
      </footer>
    </div>
  );
}
