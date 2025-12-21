// src/pages/Home.jsx
import { useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import {
  IconShift,
  IconPlan,
  IconPattern,
  IconSteps,
  IconDiverge,
  IconReflect,
  IconApproach,
  IconTransfer,
} from "../components/icons/CognitiveIcons";

const DOMAIN_ITEMS = [
  {
    id: "flexibility",
    title: "Cognitive Flexibility",
    tag: "Shift & reframe",
    summary:
      "Adapting approach, trying new strategies, and seeing problems from more than one angle.",
  },
  {
    id: "executive",
    title: "Executive Functioning",
    tag: "Plan & organise",
    summary:
      "Holding goals in mind, managing steps, and regulating attention and effort.",
  },
  {
    id: "abstract",
    title: "Abstract Reasoning",
    tag: "See the pattern",
    summary:
      "Working with relationships, patterns, and underlying structures beyond surface details.",
  },
  {
    id: "sequencing",
    title: "Analytical Sequencing",
    tag: "Work it through",
    summary:
      "Breaking tasks into steps, spotting gaps, and building logical, ordered solutions.",
  },
  {
    id: "creativity",
    title: "Creativity & Divergent Thinking",
    tag: "Generate options",
    summary:
      "Producing alternative ideas, explanations, and pathways when problems are open-ended.",
  },
  {
    id: "metacognition",
    title: "Metacognition",
    tag: "Think about thinking",
    summary:
      "Monitoring one’s own thinking, checking for sense, and adjusting strategy when needed.",
  },
  {
    id: "confidence",
    title: "Confidence & Disposition",
    tag: "Approach challenges",
    summary:
      "How learners respond to uncertainty, difficulty, and cognitive effort over time.",
  },
  {
    id: "adaptive",
    title: "Adaptive Thinking",
    tag: "Apply & transfer",
    summary:
      "Using what is known in new contexts, flexibly combining strategies and ideas.",
  },
];

const DOMAIN_ICON_MAP = {
  flexibility: IconShift,
  executive: IconPlan,
  abstract: IconPattern,
  sequencing: IconSteps,
  creativity: IconDiverge,
  metacognition: IconReflect,
  confidence: IconApproach,
  adaptive: IconTransfer,
};

export default function Home() {
  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="section wd-hero min-h-[calc(100vh-4rem)] flex items-center">
        <div className="section-inner grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-center">
          {/* Left: copy */}
          <div className="space-y-5">
            <div className="wd-chip">
              <span className="wd-dot" />
              Cognitive profiling for schools, families & organisations
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl lg:text-[3.1rem] font-semibold leading-tight tracking-tight text-wd-ink">
                Wadmore
                <span className="block text-wd-muted text-[0.84em] mt-1">
                  Thinking, Understood.
                </span>
              </h1>

              <p className="text-base md:text-lg text-wd-muted max-w-xl">
                A global cognitive assessment suite that reveals how people think — not
                just what they know. Built for those who want a clearer, fairer view of
                human potential across a lifetime.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link to="/about" className="btn-primary">
                Explore Wadmore
              </Link>
              <Link to="/schools" className="btn-secondary">
                For Schools
              </Link>
              <Link to="/families" className="btn-ghost">
                For Families
              </Link>
            </div>

            <p className="text-xs text-wd-muted max-w-md">
              Underpinned by developmental research, modern psychometrics, and classroom
              practice — with a strength-based, equity-first design.
            </p>
          </div>

          {/* Right: hero visual placeholder */}
          <div className="hidden md:block">
            <div className="card p-5">
              <div className="rounded-2xl bg-white/95 border border-[color:var(--wd-border)] px-5 py-4">
                <div className="flex items-center justify-between text-[11px] text-wd-muted mb-3">
                  <span className="font-semibold tracking-[0.18em] uppercase">
                    Sample cognitive profile
                  </span>
                  <span>Student • Bands 1–15</span>
                </div>

                <div className="grid grid-cols-4 gap-2 mb-4">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="space-y-1">
                      <div className="h-16 rounded-md bg-slate-100 overflow-hidden">
                        <div
                          className="w-full"
                          style={{
                            height: `${40 + (i % 4) * 12}%`,
                            background:
                              "linear-gradient(180deg, var(--wd-accent), var(--wd-pillar))",
                          }}
                        />
                      </div>
                      <div className="h-1.5 rounded-full bg-slate-200" />
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-[11px] text-wd-muted">
                  <span>Domains across 15 developmental bands</span>
                  <span className="inline-flex items-center gap-1">
                    <span className="wd-dot" style={{ background: "#d5dbff" }} />
                    Foundations
                    <span
                      className="wd-dot ml-2"
                      style={{ background: "#9ba8ff" }}
                    />
                    Consolidation
                    <span
                      className="wd-dot ml-2"
                      style={{ background: "#1c2252" }}
                    />
                    Advanced
                  </span>
                </div>
              </div>

              <p className="mt-4 text-[11px] text-wd-muted">
                Placeholder visual — ready to be replaced with live Wadmore dashboards or
                profile screens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AT A GLANCE STRIP */}
      <section className="py-5 bg-white border-y border-[color:var(--wd-border)]">
        <div className="section-inner">
          <div className="grid gap-4 md:grid-cols-3 text-xs md:text-sm text-wd-muted">
            <AtGlanceItem
              number="15"
              label="Developmental bands"
              text="A continuum of increasing complexity, not age labels."
            />
            <AtGlanceItem
              number="8"
              label="Cognitive domains"
              text="Multiple lenses on how people think and decide."
            />
            <AtGlanceItem
              number="3"
              label="Core audiences"
              text="Schools, families, and organisations."
            />
          </div>
        </div>
      </section>

      {/* WHAT WADMORE PROVIDES */}
      <section className="section bg-white">
        <div className="section-inner">
          <div className="grid gap-10 md:grid-cols-[1.1fr_minmax(0,1.1fr)] items-start">
            <div>
              <p className="section-eyebrow">What Wadmore provides</p>
              <h2 className="section-title">
                A structured way to see how people think.
              </h2>
              <p className="section-subtitle">
                Wadmore combines construct-aligned tasks, calibrated difficulty, and a
                15-band developmental model to provide a clearer picture of cognitive growth.
              </p>
            </div>

            <div className="space-y-4">
              <StepCard
                step="1"
                title="Construct-true tasks"
                layer="Task layer"
                text="Context-rich items mapped to precise cognitive constructs that reveal authentic thinking processes."
              />
              <StepCard
                step="2"
                title="Developmental bands"
                layer="Measurement layer"
                text="A 15-band continuum describing qualitative shifts in complexity, not arbitrary point scores."
              />
              <StepCard
                step="3"
                title="Strength-based profiles"
                layer="Insight layer"
                text="Profiles emphasise strengths and next steps, avoiding fixed labels or deficit framing."
              />
            </div>
          </div>
        </div>
      </section>

      {/* DOMAIN SECTION */}
      <section className="section bg-[color:var(--wd-bg)]">
        <div className="section-inner">
          <DomainSection />
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="section bg-white">
        <div className="section-inner">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.3fr)] items-start">
            <div className="space-y-6">
              <p className="section-eyebrow">Who Wadmore serves</p>
              <h2 className="section-title">One framework, different starting points.</h2>
              <p className="section-subtitle">
                Different people meet Wadmore in different ways — but the underlying cognitive
                model remains consistent and defensible.
              </p>

              <ul className="space-y-2 text-sm text-wd-muted">
                <li>• Schools deepen understanding of learner thinking.</li>
                <li>• Families gain meaningful, plain-language insight.</li>
                <li>• Organisations use cognitive clarity for leadership and roles.</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <AudienceCard
                to="/schools"
                eyebrow="Schools"
                title="Whole-school insight"
                text="Cohorts, classes, and individuals — a complete cognitive landscape."
                badge="Profile"
              />
              <AudienceCard
                to="/families"
                eyebrow="Families"
                title="Clear, reassuring insight"
                text="Gentle, practical cognitive profiles for understanding and support."
                badge="Families"
              />
              <AudienceCard
                to="/contact"
                eyebrow="Organisations"
                title="Teams & leadership"
                text="Clarity for capability, roles, and team dynamics."
                badge="Teams"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DEVELOPMENT */}
      <section className="section bg-[color:var(--wd-bg)]">
        <div className="section-inner grid gap-10 md:grid-cols-2 items-start">
          <div>
            <p className="section-eyebrow">Development</p>
            <h2 className="section-title">Growth is a journey — not a race.</h2>
            <p className="section-subtitle">
              Wadmore’s 15-band model describes how thinking becomes more complex over time —
              without ranking or labelling learners against one another.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <DevCard
                title="Progress"
                text="Bands capture qualitative shifts in how learners manage complexity."
              />
              <DevCard
                title="Strengths"
                text="Profiles highlight present capabilities, not just gaps or lag."
              />
              <DevCard
                title="Next steps"
                text="Each band aligns to carefully sequenced recommendations."
              />
            </div>
          </div>

          <div className="card p-6 bg-white/90">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-wd-muted mb-4">
              15-band continuum
            </p>
            <BandRow label="1–5" color="#d5dbff" width="50%" text="Foundations" />
            <BandRow label="6–10" color="#9ba8ff" width="75%" text="Consolidation" />
            <BandRow label="11–15" color="#1c2252" width="100%" text="Advanced" />
            <p className="mt-4 text-xs text-wd-muted">
              Bands describe thinking complexity, not age or fixed ability.
            </p>
          </div>
        </div>
      </section>

      {/* SCIENCE & INTEGRITY */}
      <section className="section bg-white">
        <div className="section-inner grid gap-10 md:grid-cols-2 items-start">
          <div>
            <p className="section-eyebrow">Science</p>
            <h2 className="section-title">Built on research. Designed for practice.</h2>
            <p className="section-subtitle">
              Aligned to cognitive science, developmental research, and modern psychometrics.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="wd-pill-sm">CTT</span>
              <span className="wd-pill-sm">IRT</span>
              <span className="wd-pill-sm">Rasch-aligned</span>
              <span className="wd-pill-sm">DIF & fairness</span>
            </div>

            <div className="mt-6">
              <Link to="/science" className="btn-ghost">
                Explore the methodology
              </Link>
            </div>
          </div>

          <div className="card p-6">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-wd-muted mb-3">
              Integrity
            </p>
            <p className="text-sm text-wd-muted">
              Wadmore keeps its developmental and scoring frameworks proprietary to preserve
              validity and psychometric fairness — but our principles are transparent.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-wd-muted">
              <li>• Construct-aligned development</li>
              <li>• Partial-credit scoring</li>
              <li>• Calibration & research</li>
              <li>• Fairness & inclusive design</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section wd-section-deep">
        <div className="section-inner text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Ready to understand thinking differently?
          </h2>
          <p className="mt-4 text-base md:text-lg text-white/80 max-w-2xl mx-auto">
            Whether you&apos;re a school, family, or organisation, Wadmore provides a careful,
            calibrated way to understand thinking.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/schools" className="btn-primary">
              For Schools
            </Link>
            <Link to="/families" className="btn-ghost">
              For Families
            </Link>
            <Link to="/contact" className="btn-ghost">
              Contact Wadmore
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

/* ──────────────────────────────────────────────
   PRESENTATIONAL COMPONENTS
   ────────────────────────────────────────────── */

function AtGlanceItem({ number, label, text }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-9 w-9 rounded-full bg-wd-accent-soft border border-[color:var(--wd-accent)] flex items-center justify-center text-[11px] font-semibold text-wd-accent">
        {number}
      </div>
      <div>
        <div className="font-semibold text-wd-ink">{label}</div>
        <div className="text-wd-muted">{text}</div>
      </div>
    </div>
  );
}

function StepCard({ step, title, layer, text }) {
  return (
    <div className="card p-5 flex gap-4 items-start sm:items-center">
      <div className="flex-shrink-0">
        <div className="h-7 w-7 rounded-full bg-wd-accent-soft text-[11px] flex items-center justify-center text-wd-accent font-semibold">
          {step}
        </div>
      </div>
      <div className="flex-1 flex items-start sm:items-center gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-wd-muted mb-1">
            {layer}
          </p>
          <p className="text-sm font-semibold text-wd-ink mb-1">{title}</p>
          <p className="text-xs text-wd-muted">{text}</p>
        </div>

        {/* Mini diagram – three bars, indigo spectrum */}
        <div className="hidden sm:flex items-end gap-1.5 ml-auto">
          <span className="w-1.5 h-2 rounded-full bg-wd-accent-soft" />
          <span
            className="w-1.5 h-3 rounded-full"
            style={{ backgroundColor: "var(--wd-accent)" }}
          />
          <span
            className="w-1.5 h-4 rounded-full"
            style={{ backgroundColor: "var(--wd-pillar)" }}
          />
        </div>
      </div>
    </div>
  );
}

function AudienceCard({ to, eyebrow, title, text, badge }) {
  return (
    <Link
      to={to}
      className="card audience-card p-6 hover:-translate-y-1 hover:shadow-lg transition"
    >
      <div className="flex items-center justify-between">
        <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-wd-muted">
          {eyebrow}
        </div>
        {badge && <span className="wd-pill-sm">{badge}</span>}
      </div>
      <h3 className="mt-3 text-lg font-semibold text-wd-ink">{title}</h3>
      <p className="mt-2 text-sm text-wd-muted">{text}</p>
      <span
        className="mt-3 inline-block text-sm font-semibold"
        style={{ color: "var(--wd-pillar)" }}
      >
        Learn more →
      </span>
    </Link>
  );
}

function DevCard({ title, text }) {
  return (
    <div className="card p-4">
      <h3 className="text-sm font-semibold text-wd-ink mb-1">{title}</h3>
      <p className="text-xs text-wd-muted">{text}</p>
    </div>
  );
}

function BandRow({ label, color, width, text }) {
  return (
    <div className="flex items-center gap-3 mb-2">
      <span className="w-20 text-[11px] text-wd-muted uppercase tracking-[0.14em]">
        {label}
      </span>
      <div className="flex-1 h-2 rounded-full bg-slate-200">
        <div
          className="h-2 rounded-full"
          style={{ width, backgroundColor: color }}
        />
      </div>
      <span className="text-xs text-wd-muted">{text}</span>
    </div>
  );
}

/* ──────────────────────────────────────────────
   DOMAIN SECTION
   ────────────────────────────────────────────── */

function DomainSection() {
  const [openId, setOpenId] = useState(DOMAIN_ITEMS[0].id);

  return (
    <div className="space-y-8">
      <div className="space-y-4 max-w-3xl">
        <p className="section-eyebrow">Cognitive domains</p>
        <h2 className="section-title">Eight lenses on how people think.</h2>
        <p className="section-subtitle">
          Wadmore profiles thinking across domains that matter for learning,
          decision-making, and future pathways.
        </p>

        <div className="inline-flex flex-wrap gap-2 rounded-full px-3 py-2 text-[11px] font-medium bg-white border border-[color:var(--wd-border)] text-wd-muted">
          <span className="inline-flex items-center gap-1">
            <span className="wd-dot" style={{ background: "#d5dbff" }} />
            Bands 1–5: Foundations
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="wd-dot" style={{ background: "#9ba8ff" }} />
            Bands 6–10: Consolidation
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="wd-dot" style={{ background: "#1c2252" }} />
            Bands 11–15: Advanced reasoning
          </span>
        </div>

        <p className="text-[0.75rem] text-wd-muted max-w-md">
          Each domain focuses on a distinct aspect of cognition. Profiles are never about
          a single score; they emerge from meaningful patterns across domains.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 domain-accordion">
        {DOMAIN_ITEMS.map((d) => {
          const isOpen = d.id === openId;
          const Icon = DOMAIN_ICON_MAP[d.id];

          return (
            <div
              key={d.id}
              className={`domain-acc-item ${
                isOpen ? "domain-acc-item--open" : ""
              }`}
            >
              <button
                type="button"
                className="domain-acc-header"
                onClick={() => setOpenId(isOpen ? null : d.id)}
              >
                <div className="flex items-center justify-between w-full gap-3">
                  <div className="flex items-start gap-3">
                    {Icon && (
                      <Icon className="w-5 h-5 mt-0.5 text-wd-deep" />
                    )}
                    <div className="flex flex-col items-start gap-0.5">
                      <span className="domain-acc-title">{d.title}</span>
                      <span className="domain-acc-tag">{d.tag}</span>
                    </div>
                  </div>
                  <span className="domain-acc-toggle">{isOpen ? "−" : "+"}</span>
                </div>
              </button>

              {isOpen && (
                <div className="domain-acc-body">
                  <p className="domain-acc-summary">{d.summary}</p>

                  <div className="domain-acc-meta">
                    <div className="domain-acc-meta-item">
                      <span className="meta-label">Used across</span>
                      <span className="meta-value">
                        Wadmore Profile • Insight • Futures
                      </span>
                    </div>
                    <div className="domain-acc-meta-item">
                      <span className="meta-label">Typical emphasis</span>
                      <span className="meta-value">
                        Scenario-based tasks, multi-step reasoning, and reflective prompts
                        aligned to this domain.
                      </span>
                    </div>
                  </div>

                  <div className="domain-acc-bands">
                    <div className="bands-label">Developmental emphasis</div>
                    <div className="bands-track">
                      <div className="bands-segment bands-segment--low" />
                      <div className="bands-segment bands-segment--mid" />
                      <div className="bands-segment bands-segment--high" />
                    </div>
                    <div className="bands-text">
                      Spans Bands 1–15, with task design and interpretation calibrated to
                      age and product context.
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
