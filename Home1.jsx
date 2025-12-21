// src/pages/Home.jsx
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

export default function Home() {
  const domains = [
    {
      title: "Cognitive Flexibility",
      tag: "Shift & reframe",
      text: "Adapting approach, trying new strategies, and seeing problems from more than one angle.",
    },
    {
      title: "Executive Functioning",
      tag: "Plan & organise",
      text: "Holding goals in mind, managing steps, and regulating attention and effort.",
    },
    {
      title: "Abstract Reasoning",
      tag: "See the pattern",
      text: "Working with relationships, patterns, and underlying structures beyond surface details.",
    },
    {
      title: "Analytical Sequencing",
      tag: "Work it through",
      text: "Breaking tasks into steps, spotting gaps, and building logical, ordered solutions.",
    },
    {
      title: "Creativity & Divergent Thinking",
      tag: "Generate options",
      text: "Producing alternative ideas, explanations, and pathways when problems are open-ended.",
    },
    {
      title: "Metacognition",
      tag: "Think about thinking",
      text: "Monitoring one’s own thinking, checking for sense, and adjusting strategy when needed.",
    },
    {
      title: "Confidence & Disposition",
      tag: "Approach challenges",
      text: "How learners respond to uncertainty, difficulty, and cognitive effort over time.",
    },
    {
      title: "Adaptive Thinking",
      tag: "Apply & transfer",
      text: "Using what is known in new contexts, flexibly combining strategies and ideas.",
    },
  ];

  return (
    <Layout>
      {/* HERO */}
      <section className="relative bg-white">
        {/* Soft accent blob */}
        <div className="pointer-events-none absolute inset-x-0 -top-40 h-72 bg-gradient-to-b from-slate-100/90 via-white to-transparent" />

        <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-20 md:pt-20 md:pb-24 grid gap-12 lg:grid-cols-[1.25fr_minmax(0,1fr)] items-center">
          {/* Left: Brand & promise */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-[11px] font-medium text-slate-600 shadow-xs">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Cognitive profiling for schools, families & organisations
            </div>

            <h1 className="mt-5 font-display text-[2.6rem] md:text-[3.1rem] lg:text-[3.4rem] leading-tight text-slate-900">
              Wadmore
              <span className="block text-slate-600">
                Thinking, Understood.
              </span>
            </h1>

            <p className="mt-5 text-base md:text-lg text-slate-700 max-w-xl">
              A global cognitive assessment suite that reveals how people think
              — not just what they know. Designed for those who want a clearer,
              fairer view of human potential across a lifetime.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-full border border-slate-900 px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-900 hover:text-white transition"
              >
                Explore Wadmore
              </Link>
              <Link
                to="/schools"
                className="inline-flex items-center justify-center rounded-full bg-slate-900/90 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-900 transition"
              >
                For Schools
              </Link>
              <Link
                to="/families"
                className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition"
              >
                For Families
              </Link>
            </div>

            <p className="mt-4 text-xs text-slate-500 max-w-md">
              Underpinned by developmental research, modern psychometrics, and
              classroom practice — with a strength-based, equity-first design.
            </p>
          </div>

          {/* Right: product-style placeholder (ready to swap for real UI) */}
          <div className="hidden md:block">
            <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-4 shadow-sm">
              <div className="rounded-2xl bg-white border border-slate-200 px-5 py-4">
                <div className="flex items-center justify-between text-[11px] text-slate-500 mb-3">
                  <span className="font-semibold tracking-[0.16em] uppercase">
                    Sample cognitive profile
                  </span>
                  <span>Student • Bands 1–15</span>
                </div>

                {/* Faux mini dashboard */}
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="space-y-1">
                      <div className="h-16 rounded-md bg-slate-100 overflow-hidden">
                        <div
                          className="w-full bg-slate-800"
                          style={{ height: `${40 + (i % 4) * 12}%` }}
                        />
                      </div>
                      <div className="h-1.5 rounded-full bg-gradient-to-r from-slate-300 via-slate-400 to-slate-600" />
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-600">
                  <span>Domains across 15 developmental bands</span>
                  <span className="inline-flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-slate-300" />
                    Foundations
                    <span className="h-2 w-2 rounded-full bg-slate-500 ml-2" />
                    Consolidation
                    <span className="h-2 w-2 rounded-full bg-slate-900 ml-2" />
                    Advanced
                  </span>
                </div>
              </div>

              <p className="mt-4 text-[11px] text-slate-500">
                Placeholder visual — ready to be replaced with real Wadmore
                dashboards or profile screens.
              </p>
            </div>
          </div>
        </div>

        {/* Pathway strip overlapping next section */}
        <div className="relative -mt-8">
          <div className="max-w-6xl mx-auto px-6">
            <div className="rounded-2xl border border-slate-200 bg-slate-900 text-slate-50 px-4 py-3 md:px-6 md:py-4 flex flex-wrap items-center gap-3 shadow-md">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                The Wadmore Suite
              </span>
              <div className="flex flex-wrap gap-2 text-xs md:text-[13px]">
                <span className="inline-flex items-center rounded-full bg-slate-800 px-3 py-1">
                  Schools • whole-cohort & individual profiling
                </span>
                <span className="inline-flex items-center rounded-full bg-slate-800 px-3 py-1">
                  Families • clear, reassuring insight
                </span>
                <span className="inline-flex items-center rounded-full bg-slate-800 px-3 py-1">
                  Organisations • teams & leadership
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WADMORE IS */}
      <section className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-14 md:pt-20 md:pb-18">
          <div className="grid gap-10 md:grid-cols-[1.1fr_minmax(0,1.1fr)] items-start">
            {/* Narrative */}
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500">
                What Wadmore provides
              </p>
              <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-slate-900">
                A structured way to see how people think.
              </h2>
              <p className="mt-4 max-w-3xl text-base md:text-lg text-slate-700">
                Wadmore combines construct-aligned tasks, calibrated difficulty,
                and a 15-band developmental model to offer a clearer picture of
                cognitive strengths and growth — across contexts and over time.
              </p>
            </div>

            {/* Pillars */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 mb-2">
                  Task layer
                </h3>
                <p className="text-sm font-semibold text-slate-900 mb-1">
                  Construct-true tasks
                </p>
                <p className="text-xs text-slate-700">
                  Context-rich items mapped to specific cognitive constructs so
                  we measure real aspects of thinking — not just correctness.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 mb-2">
                  Measurement layer
                </h3>
                <p className="text-sm font-semibold text-slate-900 mb-1">
                  Developmental bands
                </p>
                <p className="text-xs text-slate-700">
                  A 15-band continuum describing qualitative shifts in
                  complexity, rather than arbitrary score thresholds.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 mb-2">
                  Insight layer
                </h3>
                <p className="text-sm font-semibold text-slate-900 mb-1">
                  Strength-based profiles
                </p>
                <p className="text-xs text-slate-700">
                  Clear, practical profiles for schools, families, and
                  organisations — built to prompt productive decisions, not
                  fixed labels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOMAINS SNAPSHOT */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 grid gap-10 lg:grid-cols-[1.1fr_minmax(0,1.1fr)] items-start">
          {/* Framing text */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500">
              Cognitive domains
            </p>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-slate-900">
              Eight lenses on how people think.
            </h2>
            <p className="mt-4 text-base md:text-lg text-slate-700">
              Wadmore profiles thinking across domains that matter for learning,
              decision-making, and future pathways. Together, they form a
              multidimensional picture of how a person engages with complexity.
            </p>

            {/* Bands legend */}
            <div className="mt-6 inline-flex flex-wrap gap-2 rounded-full bg-slate-50 border border-slate-200 px-3 py-2 text-[11px] font-medium text-slate-600">
              <span className="inline-flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-slate-300" />
                Bands 1–5: Foundations
              </span>
              <span className="inline-flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-slate-500" />
                Bands 6–10: Consolidation
              </span>
              <span className="inline-flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-slate-900" />
                Bands 11–15: Advanced reasoning
              </span>
            </div>

            <p className="mt-3 text-xs text-slate-500 max-w-md">
              The model is developmental, not age-locked. It describes how
              thinking becomes more complex, without turning profiles into
              rankings.
            </p>
          </div>

          {/* Domain grid */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 md:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {domains.map((domain) => (
                <div
                  key={domain.title}
                  className="rounded-xl border border-slate-200 bg-white p-4 hover:border-slate-400 hover:-translate-y-[2px] transition"
                >
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 mb-1">
                    {domain.tag}
                  </div>
                  <div className="text-sm font-semibold text-slate-900 mb-1.5">
                    {domain.title}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {domain.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500">
            Who Wadmore serves
          </p>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-slate-900">
            One framework, different starting points.
          </h2>
          <p className="mt-4 max-w-3xl text-base md:text-lg text-slate-700">
            Wadmore is designed to support schools, families, and organisations
            through a single, coherent cognitive model — with different entry
            points and reporting styles for each context.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Link
              to="/schools"
              className="group rounded-2xl border border-slate-200 bg-white p-6 hover:-translate-y-1 hover:shadow-md transition"
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Schools
              </div>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">
                Whole-school insight
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                Understand how students think to inform teaching, pathways,
                extension, and support. Cohort views, individual profiles, and
                developmental guidance.
              </p>
              <span className="mt-3 inline-block text-sm font-semibold text-slate-900 group-hover:underline">
                Learn more →
              </span>
            </Link>

            <Link
              to="/families"
              className="group rounded-2xl border border-slate-200 bg-white p-6 hover:-translate-y-1 hover:shadow-md transition"
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Families
              </div>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">
                Clear, reassuring profiles
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                See your child’s cognitive strengths and emerging capacities in
                plain language, with gentle, practical ideas for supporting
                growth at home.
              </p>
              <span className="mt-3 inline-block text-sm font-semibold text-slate-900 group-hover:underline">
                Learn more →
              </span>
            </Link>

            <Link
              to="/contact"
              className="group rounded-2xl border border-slate-200 bg-white p-6 hover:-translate-y-1 hover:shadow-md transition"
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Organisations
              </div>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">
                Teams & leadership
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                Use cognitive insight to support leadership development, role
                alignment, and team dynamics, with a focus on fairness and fit.
              </p>
              <span className="mt-3 inline-block text-sm font-semibold text-slate-900 group-hover:underline">
                Discuss options →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* DEVELOPMENTAL MODEL */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 grid gap-10 md:grid-cols-2 items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500">
              Development
            </p>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-slate-900">
              Growth is a journey — not a race.
            </h2>
            <p className="mt-4 text-base md:text-lg text-slate-700">
              Wadmore’s 15-band developmental model is designed to show how
              thinking becomes more complex, without turning profiles into
              rankings. It is calibrated, cautious, and centred on growth.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                <h3 className="text-sm font-semibold text-slate-900 mb-1">
                  Progress
                </h3>
                <p className="text-xs text-slate-700">
                  Bands describe shifts in how learners understand, connect, and
                  use information — not quick jumps in score.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                <h3 className="text-sm font-semibold text-slate-900 mb-1">
                  Strengths
                </h3>
                <p className="text-xs text-slate-700">
                  Profiles highlight the cognitive capacities a person is
                  currently demonstrating, rather than what they “lack”.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                <h3 className="text-sm font-semibold text-slate-900 mb-1">
                  Next steps
                </h3>
                <p className="text-xs text-slate-700">
                  Each band can be paired with developmentally aligned guidance
                  for teaching, support, and self-reflection.
                </p>
              </div>
            </div>
          </div>

          {/* Simple band visual */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6">
            <div className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-500 mb-4">
              15-Band Continuum
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="w-20 text-[11px] text-slate-500 uppercase tracking-[0.14em]">
                  1–5
                </span>
                <div className="flex-1 h-2 rounded-full bg-slate-200">
                  <div className="h-2 rounded-full bg-slate-300 w-1/2" />
                </div>
                <span className="text-xs text-slate-600">Foundations</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-20 text-[11px] text-slate-500 uppercase tracking-[0.14em]">
                  6–10
                </span>
                <div className="flex-1 h-2 rounded-full bg-slate-200">
                  <div className="h-2 rounded-full bg-slate-500 w-3/4" />
                </div>
                <span className="text-xs text-slate-600">Consolidation</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-20 text-[11px] text-slate-500 uppercase tracking-[0.14em]">
                  11–15
                </span>
                <div className="flex-1 h-2 rounded-full bg-slate-200">
                  <div className="h-2 rounded-full bg-slate-900 w-full" />
                </div>
                <span className="text-xs text-slate-600">Advanced reasoning</span>
              </div>
            </div>

            <p className="mt-4 text-xs text-slate-600">
              Bands are not age labels or ability labels. They offer a consistent
              language for describing cognitive complexity over time.
            </p>
          </div>
        </div>
      </section>

      {/* SCIENCE & INTEGRITY */}
      <section className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 grid gap-10 md:grid-cols-2 items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500">
              Science
            </p>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-slate-900">
              Built on research. Designed for practice.
            </h2>
            <p className="mt-4 text-base md:text-lg text-slate-700">
              Wadmore draws on cognitive science, developmental psychology, and
              modern psychometrics. Tasks are construct-aligned, calibrated, and
              reviewed to ensure they reflect meaningful differences in how
              people reason.
            </p>
            <div className="mt-6">
              <Link
                to="/science"
                className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-100 transition"
              >
                Explore the methodology
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-500 mb-3">
              Integrity
            </p>
            <p className="text-sm text-slate-700">
              We are clear about what Wadmore measures and careful about how
              results are interpreted. Our developmental model and scoring
              architecture remain proprietary to protect psychometric security
              and validity, but our principles and high-level approach are
              transparent.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>• Construct-aligned development and review</li>
              <li>• Partial-credit scoring and calibration</li>
              <li>• Ongoing validation and fairness analysis</li>
              <li>• Equity-first design for inclusive use</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-slate-900">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Ready to understand thinking differently?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-slate-200">
            Whether you&apos;re a school, family, or organisation, we can help
            you use cognitive insight in a way that is fair, careful, and
            genuinely useful.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/schools"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition"
            >
              For Schools
            </Link>
            <Link
              to="/families"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              For Families
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              Contact Wadmore
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
