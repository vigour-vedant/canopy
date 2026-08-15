export function Pill({ children, tone = "canopy" }) {
  const tones = {
    canopy: "bg-canopy-100 text-canopy-800",
    amber: "bg-amber-300/30 text-soil-600",
    ink: "bg-ink/8 text-ink/70",
  };
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${tones[tone]}`}>
      {children}
    </span>
  );
}

export function SectionEyebrow({ children }) {
  return (
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-canopy-600">
      {children}
    </p>
  );
}

export function StatCard({ label, value, sub, icon: Icon }) {
  return (
    <div className="rounded-xl2 border border-ink/10 bg-white/80 p-5 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wide text-ink/45">{label}</span>
        {Icon && (
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-canopy-50 text-canopy-700">
            <Icon size={14} />
          </span>
        )}
      </div>
      <p className="font-display text-3xl font-semibold text-ink">{value}</p>
      {sub && <p className="mt-1 text-sm text-ink/50">{sub}</p>}
    </div>
  );
}
