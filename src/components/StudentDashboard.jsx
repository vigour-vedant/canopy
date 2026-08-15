import { useState } from "react";
import {
  Flame,
  Award,
  Sprout,
  Droplets,
  Recycle,
  Zap,
  Shield,
  Trophy,
  Sparkles,
  ChevronRight,
  Camera,
  MapPin,
  CheckCircle2,
  Clock,
  X,
} from "./icons.jsx";
import { Pill, SectionEyebrow } from "./ui.jsx";
import { student, badges, quests, schoolLeaderboard, classLeaderboard } from "../data/mock.js";
import { ArrowUp, ArrowDown, Minus } from "./icons.jsx";

const iconFor = {
  droplets: Droplets,
  recycle: Recycle,
  sprout: Sprout,
  zap: Zap,
  shield: Shield,
  trophy: Trophy,
  sparkles: Sparkles,
};

const difficultyTone = {
  Easy: "canopy",
  Medium: "amber",
  Hard: "ink",
};

const deltaIcon = { up: ArrowUp, down: ArrowDown, same: Minus };
const deltaTone = { up: "text-canopy-600", down: "text-soil-500", same: "text-ink/30" };

export default function StudentDashboard() {
  const [openQuest, setOpenQuest] = useState(null);
  const [submitted, setSubmitted] = useState({});
  const [board, setBoard] = useState("class");
  const pct = Math.round((student.xp / student.xpToNext) * 100);
  const rows = board === "class" ? classLeaderboard : schoolLeaderboard;

  return (
    <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
      {/* Profile header */}
      <div className="flex flex-col gap-6 rounded-xl2 border border-ink/10 bg-white p-6 shadow-card sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-canopy-700 font-display text-xl font-semibold text-paper">
            AK
            <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-amber-400 text-[10px] font-bold text-ink">
              {student.level}
            </span>
          </div>
          <div>
            <p className="font-display text-xl font-semibold text-ink">{student.name}</p>
            <p className="text-sm text-ink/50">
              {student.grade} · {student.school}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5 text-sm font-semibold text-amber-500">
            <Flame size={17} />
            {student.streak}-day streak
          </div>
          <div className="hidden h-8 w-px bg-ink/10 sm:block" />
          <div className="text-sm">
            <span className="font-display text-lg font-semibold text-ink">{student.totalPoints.toLocaleString()}</span>
            <span className="ml-1 text-ink/45">pts</span>
          </div>
        </div>
      </div>

      {/* Level progress */}
      <div className="mt-4 rounded-xl2 border border-ink/10 bg-white p-6 shadow-card">
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold text-ink">
            Level {student.level} · <span className="text-canopy-600">{student.title}</span>
          </span>
          <span className="text-ink/45">
            {student.xp.toLocaleString()} / {student.xpToNext.toLocaleString()} XP
          </span>
        </div>
        <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-mist">
          <div
            className="h-full rounded-full bg-gradient-to-r from-canopy-400 to-canopy-700"
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: "CO₂ saved", value: `${student.co2Kg} kg`, icon: Sparkles },
            { label: "Waste sorted", value: `${student.wasteKg} kg`, icon: Recycle },
            { label: "Water saved", value: `${student.waterL} L`, icon: Droplets },
            { label: "Saplings logged", value: student.treesLogged, icon: Sprout },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-ink/8 bg-mist/60 px-3 py-3">
              <s.icon size={14} className="text-canopy-600" />
              <p className="mt-1.5 font-display text-base font-semibold text-ink">{s.value}</p>
              <p className="text-[11px] text-ink/45">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        {/* Quests */}
        <div>
          <SectionEyebrow>This week's quests</SectionEyebrow>
          <div className="space-y-3">
            {quests.map((q) => {
              const Icon = iconFor[q.icon];
              const isDone = submitted[q.id];
              return (
                <div
                  key={q.id}
                  className="flex items-center gap-4 rounded-xl2 border border-ink/10 bg-white p-4 shadow-card"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-canopy-50 text-canopy-700">
                    <Icon size={18} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-ink">{q.title}</p>
                    <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-ink/45">
                      <Pill tone={difficultyTone[q.difficulty]}>{q.difficulty}</Pill>
                      <span className="flex items-center gap-1">
                        <Clock size={12} /> {q.window}
                      </span>
                    </div>
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-2">
                    <span className="text-sm font-semibold text-canopy-700">+{q.points}</span>
                    {isDone ? (
                      <span className="flex items-center gap-1 text-xs font-medium text-canopy-600">
                        <CheckCircle2 size={13} /> Submitted
                      </span>
                    ) : (
                      <button
                        onClick={() => setOpenQuest(q)}
                        className="rounded-full bg-ink px-3.5 py-1.5 text-xs font-semibold text-paper hover:bg-canopy-700"
                      >
                        Start
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Badges */}
        <div>
          <SectionEyebrow>Badge shelf</SectionEyebrow>
          <div className="rounded-xl2 border border-ink/10 bg-white p-5 shadow-card">
            <div className="grid grid-cols-3 gap-4">
              {badges.map((b) => {
                const Icon = iconFor[b.icon];
                return (
                  <div key={b.id} className="flex flex-col items-center text-center">
                    <span
                      className={`flex h-14 w-14 items-center justify-center rounded-full ${
                        b.earned ? "bg-canopy-700 text-paper" : "bg-mist text-ink/25"
                      }`}
                    >
                      <Icon size={20} />
                    </span>
                    <p className={`mt-2 text-[11px] font-medium leading-tight ${b.earned ? "text-ink/75" : "text-ink/35"}`}>
                      {b.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-4 rounded-xl2 border border-ink/10 bg-canopy-800 p-5 text-paper">
            <Award size={18} className="text-amber-300" />
            <p className="mt-2 font-display text-base font-semibold">Next badge: Energy Sentinel</p>
            <p className="mt-1 text-sm text-canopy-100/75">
              Log 3 more energy-saving actions to unlock it.
            </p>
          </div>
        </div>
      </div>

      {/* Leaderboard */}
      <div className="mt-8">
        <div className="flex items-center justify-between">
          <SectionEyebrow>Leaderboard</SectionEyebrow>
          <div className="mb-3 flex rounded-full border border-ink/10 bg-white p-1">
            {[
              { id: "class", label: "Class" },
              { id: "school", label: "School vs school" },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setBoard(t.id)}
                className={`rounded-full px-3.5 py-1 text-xs font-semibold transition-colors ${
                  board === t.id ? "bg-canopy-700 text-paper" : "text-ink/50"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-xl2 border border-ink/10 bg-white shadow-card">
          {rows.map((r, i) => {
            const DIcon = deltaIcon[r.delta];
            return (
              <div
                key={r.rank}
                className={`flex items-center gap-4 px-5 py-3.5 ${
                  i !== rows.length - 1 ? "border-b border-ink/8" : ""
                } ${r.isYou ? "bg-canopy-50" : ""}`}
              >
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${
                    r.rank <= 3 ? "bg-amber-400 text-ink" : "bg-mist text-ink/50"
                  }`}
                >
                  {r.rank}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-ink">
                    {r.name} {r.isYou && <span className="text-canopy-600">(you)</span>}
                  </p>
                  {r.grade && <p className="text-xs text-ink/40">Class {r.grade}</p>}
                </div>
                <span className="text-sm font-semibold text-ink/70">{r.points.toLocaleString()} pts</span>
                <DIcon size={14} className={deltaTone[r.delta]} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Quest submission modal */}
      {openQuest && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-ink/40 p-4 backdrop-blur-sm sm:items-center">
          <div className="w-full max-w-sm rounded-xl2 bg-white p-6 shadow-soft">
            <div className="flex items-start justify-between">
              <p className="font-display text-lg font-semibold text-ink pr-4">{openQuest.title}</p>
              <button onClick={() => setOpenQuest(null)} className="text-ink/40 hover:text-ink">
                <X size={18} />
              </button>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-ink/55">{openQuest.description}</p>
            <div className="mt-4 flex h-32 flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-ink/15 bg-mist text-ink/40">
              <Camera size={20} />
              <span className="text-xs">Tap to attach photo proof</span>
            </div>
            <div className="mt-2 flex items-center gap-1.5 text-xs text-ink/40">
              <MapPin size={12} /> Location tag: auto-captured on submit
            </div>
            <button
              onClick={() => {
                setSubmitted((s) => ({ ...s, [openQuest.id]: true }));
                setOpenQuest(null);
              }}
              className="mt-5 w-full rounded-full bg-canopy-700 py-3 text-sm font-semibold text-paper"
            >
              Submit for verification · +{openQuest.points} XP
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
