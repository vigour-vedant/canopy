import { useState } from "react";
import {
  Leaf,
  Sprout,
  Droplets,
  Recycle,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Camera,
  Flame,
  School,
  Users,
  Award,
  MapPin,
} from "./icons.jsx";
import { Pill, SectionEyebrow, StatCard } from "./ui.jsx";

const STEPS = [
  {
    icon: Sprout,
    title: "Discover",
    body: "Students see a short list of eco-quests tied to their class syllabus and to Mission LiFE themes — waste, water, energy, plantation.",
  },
  {
    icon: Camera,
    title: "Act & prove",
    body: "They complete the action in the real world and submit a geo-tagged photo — offline capture works too, and syncs when back online.",
  },
  {
    icon: CheckCircle2,
    title: "Verify",
    body: "An on-device model pre-screens the photo; the eco-club coordinator confirms it in one tap from a queue built for a five-minute recess.",
  },
  {
    icon: Award,
    title: "Earn & compete",
    body: "Points, streaks and badges unlock — and every verified action rolls up into the class, school and district leaderboard.",
  },
];

export default function Landing({ onTry }) {
  const [demoState, setDemoState] = useState("idle"); // idle | submitted | verified

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="leaf-texture pointer-events-none absolute inset-0 opacity-[0.5]" />
        <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="relative">
            <Pill tone="amber">SIH25009 · Smart Education · Govt. of Punjab</Pill>
            <h1 className="mt-5 font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-ink sm:text-[3.4rem]">
              Environmental
              <br />
              education, earned
              <br />
              one <span className="italic text-canopy-600">real</span> action
              <br />
              at a time.
            </h1>
            <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-ink/65">
              Canopy turns Eco Club activity into a gamified, verified habit —
              quests, streaks and school leaderboards built on top of
              real-world proof, not just quiz scores.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onTry("student")}
                className="group inline-flex items-center gap-2 rounded-full bg-canopy-700 px-6 py-3 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5"
              >
                Try it as a student
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </button>
              <button
                onClick={() => onTry("impact")}
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink/75 transition-colors hover:border-ink/30"
              >
                See the impact dashboard
              </button>
            </div>
            <div className="mt-10 flex items-center gap-6 text-xs text-ink/45">
              <span>NEP 2020 · Mission LiFE Eco Clubs</span>
              <span className="h-1 w-1 rounded-full bg-ink/25" />
              <span>Offline-first PWA</span>
            </div>
          </div>

          {/* Signature interactive element: live quest verification loop */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="rounded-[1.75rem] border border-ink/10 bg-white p-5 shadow-soft">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-canopy-100 text-canopy-700">
                    <Sprout size={17} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">Today's quest</p>
                    <p className="text-xs text-ink/45">Plant &amp; geo-tag a sapling</p>
                  </div>
                </div>
                <Pill tone="canopy">+200 XP</Pill>
              </div>

              <div className="mt-4 flex h-36 items-center justify-center rounded-xl2 border border-dashed border-ink/15 bg-mist">
                {demoState === "idle" && (
                  <div className="flex flex-col items-center gap-2 text-ink/40">
                    <Camera size={22} />
                    <span className="text-xs">Photo proof preview</span>
                  </div>
                )}
                {demoState === "submitted" && (
                  <div className="flex flex-col items-center gap-2 text-amber-500">
                    <MapPin size={22} />
                    <span className="text-xs font-medium text-ink/60">Geo-tag captured — pending review</span>
                  </div>
                )}
                {demoState === "verified" && (
                  <div className="flex flex-col items-center gap-2 text-canopy-600">
                    <CheckCircle2 size={26} />
                    <span className="text-xs font-medium text-ink/60">Verified by coordinator</span>
                  </div>
                )}
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-medium text-ink/50">
                  <Flame size={14} className="text-amber-500" />
                  12-day streak
                </div>
                {demoState !== "verified" ? (
                  <button
                    onClick={() =>
                      setDemoState(demoState === "idle" ? "submitted" : "verified")
                    }
                    className="rounded-full bg-ink px-4 py-2 text-xs font-semibold text-paper transition-colors hover:bg-canopy-700"
                  >
                    {demoState === "idle" ? "Submit proof" : "Coordinator: approve"}
                  </button>
                ) : (
                  <button
                    onClick={() => setDemoState("idle")}
                    className="rounded-full border border-ink/15 px-4 py-2 text-xs font-semibold text-ink/60"
                  >
                    Reset demo
                  </button>
                )}
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-ink/40">
              Click through the actual verification loop — no login needed.
            </p>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="border-t border-ink/10 bg-white/50 py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionEyebrow>Why this, why now</SectionEyebrow>
          <h2 className="max-w-2xl font-display text-2xl font-semibold text-ink sm:text-3xl">
            Eco Clubs already exist in most schools. What's missing is a habit loop.
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <StatCard
              icon={School}
              label="CBSE schools in India"
              value="28,960+"
              sub="each already required to run an Eco Club under Mission LiFE"
            />
            <StatCard
              icon={Sparkles}
              label="Gamified learning effect"
              value="g = 0.82"
              sub="large effect size on outcomes, 41-study meta-analysis"
            />
            <StatCard
              icon={Users}
              label="Today's tracking method"
              value="Posters & logbooks"
              sub="activity is real, but rarely measured or compared across schools"
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionEyebrow>How Canopy works</SectionEyebrow>
          <h2 className="max-w-2xl font-display text-2xl font-semibold text-ink sm:text-3xl">
            Four steps, five minutes a day.
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <div key={s.title} className="relative rounded-xl2 border border-ink/10 bg-white p-5">
                <span className="font-display text-sm text-canopy-500">0{i + 1}</span>
                <span className="mt-3 flex h-10 w-10 items-center justify-center rounded-full bg-canopy-700 text-paper">
                  <s.icon size={18} />
                </span>
                <p className="mt-4 font-display text-lg font-semibold text-ink">{s.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/55">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-ink/10 bg-canopy-800 py-16 text-paper">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div>
            <p className="font-display text-2xl font-semibold sm:text-3xl">
              Built to run on the phone in a coordinator's pocket.
            </p>
            <p className="mt-2 max-w-xl text-canopy-100/80">
              React + Tailwind PWA, FastAPI backend, Supabase for auth/storage —
              the same stack pattern our team already ships in production.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => onTry("teacher")}
              className="rounded-full bg-paper px-6 py-3 text-sm font-semibold text-canopy-800"
            >
              Open coordinator view
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
