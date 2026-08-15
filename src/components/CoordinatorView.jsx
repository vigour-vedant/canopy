import { useState } from "react";
import { CheckCircle2, X, Clock, MapPin, Camera, Users, Recycle, Droplets, Sprout, Sparkles } from "./icons.jsx";
import { Pill, SectionEyebrow, StatCard } from "./ui.jsx";
import { pendingVerifications } from "../data/mock.js";

const toneMap = {
  canopy: "bg-canopy-100 text-canopy-700",
  amber: "bg-amber-300/30 text-soil-600",
  sky: "bg-sky-100 text-sky-700",
  soil: "bg-soil-400/20 text-soil-600",
};

export default function CoordinatorView() {
  const [items, setItems] = useState(pendingVerifications);
  const [decided, setDecided] = useState(0);

  const resolve = (id) => {
    setItems((list) => list.filter((i) => i.id !== id));
    setDecided((n) => n + 1);
  };

  return (
    <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
      <SectionEyebrow>Coordinator · Govt. Sr. Sec. School, Patiala</SectionEyebrow>
      <h1 className="font-display text-2xl font-semibold text-ink sm:text-3xl">Verification queue</h1>
      <p className="mt-2 max-w-xl text-sm text-ink/55">
        Every submission is pre-screened on-device before it reaches you — you're only
        approving the ones that already look plausible. Most coordinators clear this in
        under five minutes between periods.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <StatCard icon={Clock} label="Pending review" value={items.length} sub="across 4 classes" />
        <StatCard icon={CheckCircle2} label="Approved today" value={decided} sub="this session" />
        <StatCard icon={Users} label="Active students" value="312" sub="this school, this week" />
      </div>

      <div className="mt-8">
        <SectionEyebrow>Awaiting your review</SectionEyebrow>
        {items.length === 0 ? (
          <div className="rounded-xl2 border border-dashed border-ink/15 bg-white p-10 text-center text-ink/45">
            <CheckCircle2 size={22} className="mx-auto mb-2 text-canopy-500" />
            Queue clear — nice work.
          </div>
        ) : (
          <div className="space-y-3">
            {items.map((v) => (
              <div
                key={v.id}
                className="flex flex-col gap-4 rounded-xl2 border border-ink/10 bg-white p-4 shadow-card sm:flex-row sm:items-center"
              >
                <div
                  className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-xl ${toneMap[v.thumbnailTone]}`}
                >
                  <Camera size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-ink">{v.student} · {v.grade}</p>
                  <p className="mt-0.5 text-sm text-ink/60">{v.quest}</p>
                  <div className="mt-1.5 flex items-center gap-3 text-xs text-ink/40">
                    <span className="flex items-center gap-1">
                      <Clock size={11} /> {v.submittedAgo}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={11} /> Geo-tag verified
                    </span>
                    <span className="font-semibold text-canopy-600">+{v.points} XP</span>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <button
                    onClick={() => resolve(v.id)}
                    className="flex items-center gap-1.5 rounded-full bg-canopy-700 px-4 py-2 text-xs font-semibold text-paper"
                  >
                    <CheckCircle2 size={14} /> Approve
                  </button>
                  <button
                    onClick={() => resolve(v.id)}
                    className="flex items-center gap-1.5 rounded-full border border-ink/15 px-4 py-2 text-xs font-semibold text-ink/60"
                  >
                    <X size={14} /> Decline
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {[
          { icon: Recycle, label: "Waste quests this week", value: "86 submissions" },
          { icon: Sprout, label: "Saplings logged", value: "31 geo-tagged" },
          { icon: Droplets, label: "Water audits run", value: "44 classrooms" },
        ].map((s) => (
          <div key={s.label} className="flex items-center gap-3 rounded-xl2 border border-ink/10 bg-white p-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-canopy-50 text-canopy-700">
              <s.icon size={16} />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">{s.value}</p>
              <p className="text-xs text-ink/45">{s.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
