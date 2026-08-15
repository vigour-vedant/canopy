import { useState } from "react";
import NavBar from "./components/NavBar.jsx";
import Landing from "./components/Landing.jsx";
import StudentDashboard from "./components/StudentDashboard.jsx";
import CoordinatorView from "./components/CoordinatorView.jsx";
import ImpactDashboard from "./components/ImpactDashboard.jsx";

export default function App() {
  const [tab, setTab] = useState("home");

  return (
    <div className="min-h-screen bg-paper font-body text-ink">
      <NavBar active={tab} onChange={setTab} />
      {tab === "home" && <Landing onTry={setTab} />}
      {tab === "student" && <StudentDashboard />}
      {tab === "teacher" && <CoordinatorView />}
      {tab === "impact" && <ImpactDashboard />}

      <footer className="border-t border-ink/10 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 text-xs text-ink/40 sm:flex-row sm:px-8">
          <span>Canopy — SIH 2026 internal hackathon prototype, VIT Bhopal University</span>
          <span>Built with React, Tailwind CSS · Deployed on Vercel</span>
        </div>
      </footer>
    </div>
  );
}
