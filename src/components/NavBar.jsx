import { Leaf, GitBranch, Menu, X } from "./icons.jsx";
import { useState } from "react";

const TABS = [
  { id: "home", label: "Overview" },
  { id: "student", label: "Student" },
  { id: "teacher", label: "Coordinator" },
  { id: "impact", label: "Impact" },
];

export default function NavBar({ active, onChange }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
        <button
          className="flex items-center gap-2"
          onClick={() => onChange("home")}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-canopy-700 text-paper">
            <Leaf size={16} strokeWidth={2.25} />
          </span>
          <span className="font-display text-[1.15rem] font-semibold tracking-tight text-ink">
            Canopy
          </span>
        </button>

        <nav className="hidden items-center gap-1 rounded-full border border-ink/10 bg-white/70 p-1 sm:flex">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => onChange(t.id)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                active === t.id
                  ? "bg-canopy-700 text-paper"
                  : "text-ink/60 hover:text-ink"
              }`}
            >
              {t.label}
            </button>
          ))}
        </nav>

        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-1.5 rounded-full border border-ink/15 px-3.5 py-1.5 text-sm font-medium text-ink/70 transition-colors hover:border-ink/30 hover:text-ink sm:flex"
        >
          <GitBranch size={15} />
          Repo
        </a>

        <button className="sm:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/10 bg-paper px-5 py-3 sm:hidden">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                onChange(t.id);
                setOpen(false);
              }}
              className={`block w-full rounded-lg px-3 py-2.5 text-left text-sm font-medium ${
                active === t.id ? "bg-canopy-100 text-canopy-800" : "text-ink/70"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
