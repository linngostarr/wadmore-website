// src/components/SampleProfile.jsx
// Illustrative student cognitive profile — adapted from India prospectus
// Drop into Schools, Home, or Families pages
// Usage: <SampleProfile /> or <SampleProfile compact /> (no detail cards)

const BRAND = {
  indigo: "#384275",
  slate: "#2C2D33",
  cloud: "#F7F8FA",
  dove: "#E4E7EB",
  steel: "#6C7A96",
  teal: "#3CB7AC",
  cerulean: "#5B8BF7",
  violet: "#786CFF",
  white: "#ffffff",
  golden: "#F5C542",
  goldenDark: "#B8860B",
  ceruleanDark: "#3d71e8",
  violetDark: "#5747CC",
};

/* ══════════════════════════════════════════════════════════════
   SAMPLE STUDENT DATA
   ══════════════════════════════════════════════════════════════ */

const STUDENT = { name: "Arjun", grade: "Grade 4", initial: "A" };

const DOMAINS = [
  { code: "AR", name: "Abstract Reasoning",            band: 8, color: BRAND.teal,     pct: 53, arrow: "↑", tag: "peak" },
  { code: "LS", name: "Logical Sequencing",             band: 6, color: BRAND.cerulean, pct: 40 },
  { code: "PS", name: "Processing Speed",               band: 5, color: BRAND.cerulean, pct: 33 },
  { code: "MA", name: "Memory & Attention",             band: 5, color: BRAND.cerulean, pct: 33 },
  { code: "EF", name: "Executive Functioning",          band: 4, color: BRAND.golden,   pct: 27, arrow: "↓", tag: "growth" },
  { code: "MR", name: "Metacognition",                  band: 5, color: BRAND.cerulean, pct: 33 },
  { code: "CD", name: "Creativity & Divergent Thinking", band: 6, color: BRAND.cerulean, pct: 40 },
  { code: "CM", name: "Cognitive Confidence",           band: 5, color: BRAND.violet,   pct: 33 },
];

const GROWTH = [
  { code: "AR", delta: "+2", color: BRAND.teal },
  { code: "LS", delta: "+2", color: BRAND.cerulean },
  { code: "PS", delta: "+2", color: BRAND.cerulean },
  { code: "MA", delta: "+2", color: BRAND.cerulean },
  { code: "EF", delta: "+2", color: BRAND.golden },
  { code: "MR", delta: "+2", color: BRAND.cerulean },
  { code: "CD", delta: "+3", color: BRAND.violet },
  { code: "CM", delta: "+2", color: BRAND.cerulean },
];

/* ══════════════════════════════════════════════════════════════
   RADAR CHART (SVG)
   ══════════════════════════════════════════════════════════════ */

function RadarChart() {
  // Band data: AR=8, LS=6, PS=5, MA=5, EF=4, MR=5, CM=5, CD=6
  // Geometry: center (250,250), radius per band = 175/12 ≈ 14.58
  // 8 axes at 45° intervals from North clockwise
  return (
    <svg viewBox="0 0 500 500" className="w-full max-w-md mx-auto">
      <defs>
        <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#5B8BF7" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#5B8BF7" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="radarFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5B8BF7" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#3CB7AC" stopOpacity="0.08" />
        </linearGradient>
      </defs>
      <circle cx="250" cy="250" r="190" fill="url(#bgGlow)" />

      {/* Grid rings — bands 3, 6, 9, 12 */}
      <polygon points="250,75 374,126 425,250 374,374 250,425 126,374 75,250 126,126" fill="none" stroke="#dfe3eb" strokeWidth="1" />
      <polygon points="250,119 343,157 381,250 343,343 250,381 157,343 119,250 157,157" fill="none" stroke="#e6e9f0" strokeWidth="0.8" />
      <polygon points="250,163 312,188 338,250 312,312 250,338 188,312 163,250 188,188" fill="none" stroke="#eceef3" strokeWidth="0.7" />
      <polygon points="250,206 281,219 294,250 281,281 250,294 219,281 206,250 219,219" fill="none" stroke="#f2f4f7" strokeWidth="0.6" />

      {/* Axis lines */}
      {[[250,75],[374,126],[425,250],[374,374],[250,425],[126,374],[75,250],[126,126]].map(([x,y],i) => (
        <line key={i} x1="250" y1="250" x2={x} y2={y} stroke="#dfe3eb" strokeWidth="0.7" />
      ))}

      {/* Scale labels */}
      <text x="257" y="210" fontSize="7.5" fill="#c5cbd8" fontFamily="sans-serif" fontWeight="500">3</text>
      <text x="257" y="167" fontSize="7.5" fill="#c5cbd8" fontFamily="sans-serif" fontWeight="500">6</text>
      <text x="257" y="123" fontSize="7.5" fill="#c5cbd8" fontFamily="sans-serif" fontWeight="500">9</text>
      <text x="257" y="79" fontSize="7.5" fill="#c5cbd8" fontFamily="sans-serif" fontWeight="500">12</text>

      {/* Data polygon — AR=8, LS=6, PS=5, MA=5, EF=4, MR=5, CM=5, CD=6 */}
      <polygon
        points="250,133 312,188 323,250 302,302 250,308 198,302 177,250 188,188"
        fill="url(#radarFill)" stroke="#5B8BF7" strokeWidth="2.5" strokeLinejoin="round"
      />

      {/* Data dots — blue for on-track/peak */}
      {[[250,133],[312,188],[323,250],[302,302],[198,302],[177,250],[188,188]].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r="6" fill="#5B8BF7" />
      ))}
      {/* AR peak dot — teal highlight */}
      <circle cx="250" cy="133" r="7.5" fill="#3CB7AC" stroke="#fff" strokeWidth="2" />
      {/* EF growth dot — golden */}
      <circle cx="250" cy="308" r="7.5" fill="#F5C542" stroke="#fff" strokeWidth="2" />

      {/* Band labels */}
      <text x="250" y="120" textAnchor="middle" fontSize="11" fontWeight="700" fill="#3CB7AC">B8</text>
      <text x="325" y="180" textAnchor="start" fontSize="11" fontWeight="700" fill="#5B8BF7">B6</text>
      <text x="337" y="254" textAnchor="start" fontSize="11" fontWeight="700" fill="#5B8BF7">B5</text>
      <text x="315" y="316" textAnchor="start" fontSize="11" fontWeight="700" fill="#5B8BF7">B5</text>
      <text x="250" y="325" textAnchor="middle" fontSize="11" fontWeight="700" fill="#C99A00">B4</text>
      <text x="184" y="316" textAnchor="end" fontSize="11" fontWeight="700" fill="#5B8BF7">B5</text>
      <text x="163" y="254" textAnchor="end" fontSize="11" fontWeight="700" fill="#5B8BF7">B5</text>
      <text x="176" y="180" textAnchor="end" fontSize="11" fontWeight="700" fill="#5B8BF7">B6</text>

      {/* Domain name labels */}
      <text x="250" y="58" textAnchor="middle" fontSize="11" fontWeight="700" fill="#3CB7AC">Abstract Reasoning</text>
      <text x="246" y="71" textAnchor="middle" fontSize="9.5" fontWeight="500" fill="#3CB7AC">● Peak</text>
      <text x="392" y="114" textAnchor="start" fontSize="11" fontWeight="700" fill={BRAND.slate}>Logical</text>
      <text x="392" y="127" textAnchor="start" fontSize="9.5" fontWeight="500" fill={BRAND.steel}>Sequencing</text>
      <text x="432" y="248" textAnchor="start" fontSize="11" fontWeight="700" fill={BRAND.slate}>Processing</text>
      <text x="432" y="261" textAnchor="start" fontSize="9.5" fontWeight="500" fill={BRAND.steel}>Speed</text>
      <text x="392" y="392" textAnchor="start" fontSize="11" fontWeight="700" fill={BRAND.slate}>Memory &</text>
      <text x="392" y="405" textAnchor="start" fontSize="9.5" fontWeight="500" fill={BRAND.steel}>Attention</text>
      <text x="250" y="450" textAnchor="middle" fontSize="11" fontWeight="700" fill="#C99A00">Executive Function</text>
      <text x="250" y="463" textAnchor="middle" fontSize="9.5" fontWeight="500" fill="#C99A00">● Growth</text>
      <text x="108" y="392" textAnchor="end" fontSize="11" fontWeight="700" fill={BRAND.slate}>Metacognition</text>
      <text x="56" y="248" textAnchor="end" fontSize="11" fontWeight="700" fill={BRAND.slate}>Cognitive</text>
      <text x="56" y="261" textAnchor="end" fontSize="9.5" fontWeight="500" fill={BRAND.steel}>Confidence</text>
      <text x="108" y="110" textAnchor="end" fontSize="11" fontWeight="700" fill={BRAND.slate}>Creativity</text>

      <text x="250" y="488" textAnchor="middle" fontSize="8.5" fill={BRAND.steel} fontStyle="italic">
        Eight cognitive domains, measured independently, profiled together
      </text>
    </svg>
  );
}

/* ══════════════════════════════════════════════════════════════
   DOMAIN BARS
   ══════════════════════════════════════════════════════════════ */

function DomainBars() {
  return (
    <div className="space-y-1">
      {/* Legend */}
      <div className="flex justify-end gap-4 mb-2 pr-1">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full" style={{ background: BRAND.teal }} />
          <span className="text-xs" style={{ color: BRAND.steel }}>Peak strengths</span>
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full" style={{ background: BRAND.cerulean }} />
          <span className="text-xs" style={{ color: BRAND.steel }}>On track</span>
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full" style={{ background: BRAND.golden }} />
          <span className="text-xs" style={{ color: BRAND.steel }}>Growth opportunities</span>
        </span>
      </div>

      {DOMAINS.map((d) => (
        <div key={d.code} className="flex items-center gap-2 py-1">
          <div
            className="w-7 h-7 rounded-md flex items-center justify-center text-xs font-extrabold flex-shrink-0"
            style={{
              background: `${d.color}18`,
              color: d.tag === "growth" ? BRAND.goldenDark : d.code === "CM" ? BRAND.violetDark : BRAND.ceruleanDark,
            }}
          >
            {d.code}
          </div>
          <div className="w-36 flex-shrink-0 text-sm font-semibold leading-tight" style={{ color: BRAND.slate }}>
            {d.name}
          </div>
          <div className="flex-1 h-1.5 rounded-full relative" style={{ background: "#EEF0F3" }}>
            <div
              className="h-full rounded-full absolute left-0 top-0 transition-all duration-700"
              style={{ width: `${d.pct}%`, background: d.color }}
            />
          </div>
          <div
            className="w-20 text-right text-sm font-bold flex-shrink-0"
            style={{ color: d.tag === "growth" ? BRAND.goldenDark : d.code === "CM" ? BRAND.violetDark : BRAND.ceruleanDark }}
          >
            Band {d.band} {d.arrow || ""}
          </div>
        </div>
      ))}

      {/* Scale labels — aligned under the bar area */}
      <div className="flex items-center gap-2 mt-2">
        <div className="w-7 flex-shrink-0" />
        <div className="w-36 flex-shrink-0" />
        <div className="flex-1 grid grid-cols-5 text-center">
          <span className="text-[8px] font-semibold tracking-wide" style={{ color: "#C8CBCF" }}>FOUND.</span>
          <span className="text-[8px] font-semibold tracking-wide" style={{ color: "#C8CBCF" }}>FUNCT.</span>
          <span className="text-[8px] font-semibold tracking-wide" style={{ color: "#C8CBCF" }}>ADV.</span>
          <span className="text-[8px] font-semibold tracking-wide" style={{ color: "#C8CBCF" }}>PROF.</span>
          <span className="text-[8px] font-semibold tracking-wide" style={{ color: "#C8CBCF" }}>EXPERT</span>
        </div>
        <div className="w-20 flex-shrink-0" />
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   LONGITUDINAL GROWTH STRIP
   ══════════════════════════════════════════════════════════════ */

function LongitudinalStrip() {
  // Distinct year colours
  const YEARS = [
    { y: "2024", h: 10, color: "#8B95A8", barOpacity: 1 },    // slate/muted
    { y: "2025", h: 16, color: "#5B8BF7", barOpacity: 1 },    // cerulean
    { y: "2026", h: 22, color: "#3CB7AC", barOpacity: 1 },     // teal
  ];

  return (
    <div className="rounded-2xl px-5 py-4" style={{ background: BRAND.indigo }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-wider" style={{ color: BRAND.golden }}>
            Longitudinal Growth Tracking
          </div>
          <div className="text-[10px] mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>
            At the student, cohort, and school level. Year-Over-Year
          </div>
        </div>
        <div className="flex gap-4 items-center">
          {YEARS.map((yr) => (
            <div key={yr.y} className="flex items-center gap-1.5">
              <div className="rounded-sm" style={{ width: 7, height: yr.h, background: yr.color }} />
              <span className="text-[10px] font-bold" style={{ color: yr.color }}>{yr.y}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Domain columns */}
      <div className="flex items-end">
        {GROWTH.map((g) => (
          <div key={g.code} className="flex flex-col items-center gap-1.5 flex-1">
            <div className="text-[9px] font-extrabold tracking-wider" style={{ color: "rgba(255,255,255,0.45)" }}>
              {g.code}
            </div>
            <div className="flex gap-1 items-end" style={{ height: 28 }}>
              <div className="rounded-t-sm" style={{ width: 7, height: 12, background: YEARS[0].color }} />
              <div className="rounded-t-sm" style={{ width: 7, height: 20, background: YEARS[1].color }} />
              <div className="rounded-t-sm" style={{ width: 7, height: 28, background: YEARS[2].color }} />
            </div>
            <div className="text-sm font-extrabold leading-none" style={{ color: g.color }}>{g.delta}</div>
          </div>
        ))}
      </div>

      <div className="mt-2.5 pt-2 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <p className="text-[10px] leading-relaxed m-0" style={{ color: "rgba(255,255,255,0.4)" }}>
          Consistent growth across all domains over three years. Creativity shows the strongest trajectory (+3 bands) following targeted strategies.
        </p>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   DETAIL CARDS (Peak Strength + Growth Opportunity)
   ══════════════════════════════════════════════════════════════ */

function DetailCards() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {/* PEAK: Abstract Reasoning */}
      <div className="rounded-2xl border overflow-hidden" style={{ background: BRAND.white, borderColor: BRAND.dove }}>
        <div className="h-1" style={{ background: `linear-gradient(to right, ${BRAND.teal}, #5eead4)` }} />
        <div className="p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-extrabold text-white" style={{ background: BRAND.teal }}>AR</div>
              <span className="text-sm font-bold" style={{ color: BRAND.slate }}>Abstract Reasoning</span>
            </div>
            <span
              className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
              style={{ color: BRAND.teal, border: `1px solid rgba(60,183,172,0.35)` }}
            >
              Peak Strengths
            </span>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <div className="text-5xl font-bold leading-none" style={{ color: BRAND.teal }}>8</div>
            <div className="pl-3" style={{ borderLeft: `2px solid ${BRAND.dove}` }}>
              <div className="text-[10px] font-bold uppercase tracking-wider mb-0.5" style={{ color: BRAND.steel }}>Band 8</div>
              <div className="text-sm font-semibold" style={{ color: BRAND.slate }}>Sophisticated Pattern Integration</div>
            </div>
          </div>
          <div className="h-1 rounded-full mb-3" style={{ background: "#EEF0F3" }}>
            <div className="h-full rounded-full" style={{ width: "53%", background: BRAND.teal }} />
          </div>
          
          {/* Current capabilities */}
          <div className="rounded-lg p-3 mb-3" style={{ background: BRAND.cloud }}>
            <div className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: BRAND.teal }}>Current Capabilities</div>
            <p className="text-sm leading-relaxed m-0" style={{ color: BRAND.slate }}>
              Identifies complex transformation rules across visual and conceptual formats. Applies analogical thinking to novel problems with minimal scaffolding. Reasons abstractly well beyond age expectation.
            </p>
          </div>
          
          {/* Strategies */}
          <div className="rounded-xl p-3.5" style={{ background: "#F0FBF9", borderLeft: `3px solid ${BRAND.teal}` }}>
            <div className="text-[10px] font-extrabold uppercase tracking-wider mb-1.5" style={{ color: BRAND.teal }}>
              Teacher · Enrichment
            </div>
            <ul className="text-sm leading-relaxed pl-4 m-0 space-y-1" style={{ color: BRAND.slate }}>
              <li>Introduce open-ended problems where rules must be inferred, not given.</li>
              <li>Multi-step pattern challenges with increasing complexity sustain engagement.</li>
              <li>Cross-domain transfer tasks leverage this strength productively.</li>
            </ul>
            <div className="mt-2.5 pt-2" style={{ borderTop: `1px solid ${BRAND.teal}15` }}>
              <p className="text-xs leading-relaxed m-0" style={{ color: BRAND.steel }}>
                <span className="font-semibold" style={{ color: BRAND.teal }}>Research: </span>
                Transfer of abstract reasoning improves with explicit cross-domain practice (Holyoak &amp; Thagard, 1995). Challenge-matched enrichment sustains intrinsic motivation in high-ability learners (Csikszentmihalyi, 1990).
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* GROWTH: Executive Functioning */}
      <div className="rounded-2xl border overflow-hidden" style={{ background: BRAND.white, borderColor: BRAND.dove }}>
        <div className="h-1" style={{ background: `linear-gradient(to right, ${BRAND.golden}, #f0a830)` }} />
        <div className="p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-extrabold text-white" style={{ background: BRAND.golden }}>EF</div>
              <span className="text-sm font-bold" style={{ color: BRAND.slate }}>Executive Functioning</span>
            </div>
            <span
              className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
              style={{ color: BRAND.goldenDark, border: `1px solid rgba(245,197,66,0.45)` }}
            >
              Growth Opportunities
            </span>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <div className="text-5xl font-bold leading-none" style={{ color: BRAND.goldenDark }}>4</div>
            <div className="pl-3" style={{ borderLeft: `2px solid ${BRAND.dove}` }}>
              <div className="text-[10px] font-bold uppercase tracking-wider mb-0.5" style={{ color: BRAND.steel }}>Band 4</div>
              <div className="text-sm font-semibold" style={{ color: BRAND.slate }}>Transitional Complexity</div>
            </div>
          </div>
          <div className="h-1 rounded-full mb-3" style={{ background: "#EEF0F3" }}>
            <div className="h-full rounded-full" style={{ width: "27%", background: BRAND.golden }} />
          </div>
          
          {/* Current capabilities */}
          <div className="rounded-lg p-3 mb-3" style={{ background: BRAND.cloud }}>
            <div className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: BRAND.goldenDark }}>Current Capabilities</div>
            <p className="text-sm leading-relaxed m-0" style={{ color: BRAND.slate }}>
              Plans multi-step projects with emerging independence. Benefits from milestone scaffolding. May start tasks confidently but lose track across multiple steps. This is a developmental opportunity, not a deficit.
            </p>
          </div>
          
          {/* Strategies */}
          <div className="rounded-xl p-3.5" style={{ background: "#FEFAED", borderLeft: `3px solid ${BRAND.golden}` }}>
            <div className="text-[10px] font-extrabold uppercase tracking-wider mb-1.5" style={{ color: BRAND.goldenDark }}>
              Parent · Home Support
            </div>
            <ul className="text-sm leading-relaxed pl-4 m-0 space-y-1" style={{ color: BRAND.slate }}>
              <li>Use visual task breakdowns with checkboxes for multi-step activities at home.</li>
              <li>Cooking projects work well. They require holding instructions in mind whilst monitoring progress.</li>
              <li>Celebrate completing each step, not just the final outcome.</li>
            </ul>
            <div className="mt-2.5 pt-2" style={{ borderTop: `1px solid ${BRAND.golden}15` }}>
              <p className="text-xs leading-relaxed m-0" style={{ color: BRAND.steel }}>
                <span className="font-semibold" style={{ color: BRAND.goldenDark }}>Research: </span>
                External planning structures support internalisation through guided practice (Diamond, 2013). Reducing extraneous cognitive load through visible structure supports complex task performance (Sweller, 2019).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   MAIN EXPORT
   compact = true → just header + bars + radar + growth strip
   compact = false (default) → full profile including detail cards
   ══════════════════════════════════════════════════════════════ */

export default function SampleProfile({ 
  compact = false,
  eyebrow = "Inside a Wadmore Profile",
  heading = "What your school receives.",
  subheading = "Illustrative student profile. Every student assessed receives this level of cognitive intelligence.",
}) {
  return (
    <section className="py-20 md:py-28" style={{ background: BRAND.cloud }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: BRAND.cerulean }}>
            {eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4" style={{ color: BRAND.slate }}>
            {heading}
          </h2>
          <p className="text-base md:text-lg" style={{ color: BRAND.steel }}>
            {subheading}
          </p>
        </div>

        {/* Student badge */}
        <div className="flex justify-end mb-4">
          <div className="flex items-center gap-3 px-4 py-2 rounded-xl" style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}` }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold text-white" style={{ background: BRAND.cerulean }}>
              {STUDENT.initial}
            </div>
            <div>
              <div className="text-sm font-bold" style={{ color: BRAND.slate }}>{STUDENT.name} · {STUDENT.grade}</div>
              <div className="text-xs" style={{ color: BRAND.steel }}>8-domain cognitive profile</div>
            </div>
          </div>
        </div>

        {/* Main profile card */}
        <div className="rounded-2xl p-6 md:p-8 mb-5" style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}` }}>
          {/* Summary row */}
          <div className="grid md:grid-cols-3 gap-6 mb-8 pb-6" style={{ borderBottom: `1px solid ${BRAND.dove}` }}>
            {/* Overall band */}
            <div className="rounded-xl p-4 relative overflow-hidden" style={{ background: BRAND.cloud }}>
              <div className="absolute top-0 left-0 w-full h-0.5" style={{ background: BRAND.teal }} />
              <div className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: BRAND.teal }}>Overall Band</div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold" style={{ color: BRAND.teal }}>6</span>
                <div>
                  <div className="text-sm font-semibold" style={{ color: BRAND.slate }}>Functional</div>
                  <div className="text-xs" style={{ color: BRAND.steel }}>Development</div>
                </div>
              </div>
              <p className="text-xs mt-2 leading-relaxed" style={{ color: BRAND.steel }}>
                Solid functional development across most domains, with Abstract Reasoning emerging well above age expectation.
              </p>
            </div>

            {/* Peak domain */}
            <div className="rounded-xl p-4 relative overflow-hidden" style={{ background: BRAND.cloud }}>
              <div className="absolute top-0 left-0 w-full h-0.5" style={{ background: BRAND.cerulean }} />
              <div className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: BRAND.cerulean }}>Peak Domain</div>
              <div className="text-xl font-bold mb-1" style={{ color: BRAND.slate }}>Abstract Reasoning</div>
              <div className="inline-block px-2 py-0.5 rounded text-xs font-bold" style={{ background: `${BRAND.cerulean}15`, color: BRAND.cerulean }}>Band 8</div>
              <p className="text-xs mt-2 leading-relaxed" style={{ color: BRAND.steel }}>
                Well above the developmental cluster. A clear cognitive strength with strategies for extension.
              </p>
            </div>

            {/* Strategies */}
            <div className="rounded-xl p-4 relative overflow-hidden" style={{ background: BRAND.cloud }}>
              <div className="absolute top-0 left-0 w-full h-0.5" style={{ background: BRAND.golden }} />
              <div className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: BRAND.golden }}>Strategies</div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-5xl font-bold" style={{ color: BRAND.slate }}>12</span>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full" style={{ background: BRAND.teal }} />
                    <span className="text-xs" style={{ color: BRAND.steel }}>6 strength-based</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full" style={{ background: BRAND.golden }} />
                    <span className="text-xs" style={{ color: BRAND.steel }}>6 growth-focused</span>
                  </div>
                </div>
              </div>
              <p className="text-xs mt-1 leading-relaxed" style={{ color: BRAND.steel }}>
                Mapped to specific constructs. Actionable for teachers, parents, and students.
              </p>
            </div>
          </div>

          {/* Two-column: Radar + Bars */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="hidden lg:block">
              <RadarChart />
            </div>
            <div>
              <h3 className="text-base font-bold mb-4" style={{ color: BRAND.slate }}>Full Domain Profile</h3>
              <DomainBars />
            </div>
          </div>
        </div>

        {/* Longitudinal strip */}
        <div className="mb-5">
          <LongitudinalStrip />
        </div>

        {/* Detail cards (full mode only) */}
        {!compact && <DetailCards />}

        {/* Insight footer */}
        <div
          className="rounded-xl p-4 mt-5 flex items-start gap-3"
          style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}` }}
        >
          <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${BRAND.cerulean}12` }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={BRAND.cerulean} strokeWidth="2.5" strokeLinecap="round">
              <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
            </svg>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: BRAND.steel }}>
            <span className="font-bold" style={{ color: BRAND.slate }}>Typical Developmental Variation: </span>
            4-band range across domains. Abstract Reasoning is a clear outlier strength at Band 8. Executive Functioning is a growth opportunity with targeted strategies attached.
          </p>
        </div>
      </div>
    </section>
  );
}