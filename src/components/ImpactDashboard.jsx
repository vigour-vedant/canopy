import { Sparkles, Recycle, Droplets, Sprout, School, Users, BarChart3 } from "./icons.jsx";
import { SectionEyebrow, StatCard, Pill } from "./ui.jsx";
import { impactTotals, impactBySchool, weeklyTrend } from "../data/mock.js";

export default function ImpactDashboard() {
  const max = Math.max(...impactBySchool.map((s) => s.co2));
  const trendMax = Math.max(...weeklyTrend);

  return (
    <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <SectionEyebrow>District impact · exportable for Eco Club / EEP reporting</SectionEyebrow>
          <h1 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            What 42 schools verified this term
          </h1>
        </div>
        <Pill tone="amber">Punjab · Term 2, 2026</Pill>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
        <StatCard icon={School} label="Schools onboarded" value={impactTotals.schools} />
        <StatCard icon={Users} label="Active students" value={impactTotals.students.toLocaleString()} />
        <StatCard icon={Sparkles} label="CO₂ saved" value={`${(impactTotals.co2Kg / 1000).toFixed(1)} t`} />
        <StatCard icon={Recycle} label="Waste segregated" value={`${(impactTotals.wasteKg / 1000).toFixed(1)} t`} />
        <StatCard icon={Droplets} label="Water saved" value={`${(impactTotals.waterL / 1000).toFixed(0)} kL`} />
        <StatCard icon={Sprout} label="Saplings geo-tagged" value={impactTotals.saplings.toLocaleString()} />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        {/* School breakdown */}
        <div className="rounded-xl2 border border-ink/10 bg-white p-6 shadow-card">
          <div className="mb-5 flex items-center justify-between">
            <p className="font-display text-lg font-semibold text-ink">CO₂ saved by district</p>
            <BarChart3 size={16} className="text-ink/30" />
          </div>
          <div className="space-y-4">
            {impactBySchool.map((s) => (
              <div key={s.name}>
                <div className="mb-1.5 flex items-center justify-between text-sm">
                  <span className="font-medium text-ink/70">{s.name}</span>
                  <span className="text-ink/45">{(s.co2 / 1000).toFixed(1)} t CO₂</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-mist">
                  <div
                    className="h-full rounded-full bg-canopy-600"
                    style={{ width: `${(s.co2 / max) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly trend + note */}
        <div className="space-y-6">
          <div className="rounded-xl2 border border-ink/10 bg-white p-6 shadow-card">
            <p className="font-display text-lg font-semibold text-ink">Weekly verified quests</p>
            <p className="mt-1 text-xs text-ink/45">Last 7 weeks, all schools</p>
            <div className="mt-5 flex h-28 items-end gap-2">
              {weeklyTrend.map((v, i) => (
                <div key={i} className="flex-1 rounded-t bg-canopy-500/80" style={{ height: `${(v / trendMax) * 100}%` }} />
              ))}
            </div>
          </div>

          <div className="rounded-xl2 border border-ink/10 bg-canopy-800 p-6 text-paper">
            <p className="font-display text-lg font-semibold">Built for compliance, not just charts</p>
            <p className="mt-2 text-sm leading-relaxed text-canopy-100/80">
              Every number here traces back to a coordinator-approved, geo-tagged
              submission — exportable as the same activity report Eco Clubs already
              file under the Environment Education Programme.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
