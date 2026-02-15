// src/pages/Gifted2e.jsx
// Wadmore Gifted & Twice-Exceptional Learners
// REDESIGNED - Professional icons, interactive features, world-class design

import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

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
  sage: "#A4D4AE",
  golden: "#F5C542",
  indigoLight: "#4a5a94",
  indigoDark: "#2a3259",
};

export default function Gifted2e() {
  useEffect(() => {
    document.title = "Gifted & 2e | Wadmore";
  }, []);

  return (
    <Layout>
      <div className="w-full max-w-full overflow-x-hidden">
        <Hero />
        <TrustBar />
        <RecognitionSection />
        <VisualComparison />
        <WhyTraditionalFails />
        <HowWadmoreHelps />
        <ProfileExamples />
        <ResearchBacking />
        <CTASection />
      </div>
    </Layout>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: `linear-gradient(150deg, ${BRAND.cloud} 0%, #F5F0FF 40%, ${BRAND.cloud} 100%)` }} />
      <div className="absolute top-20 right-[10%] w-[40vw] max-w-[500px] aspect-square pointer-events-none opacity-25" style={{ background: `radial-gradient(circle at center, ${BRAND.violet}20, transparent 60%)` }} />
      <div className="absolute bottom-0 left-[5%] w-[30vw] max-w-[400px] aspect-square pointer-events-none opacity-20" style={{ background: `radial-gradient(circle at center, ${BRAND.golden}15, transparent 60%)` }} />
      
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-[clamp(2rem,5vh,3.5rem)] relative z-10 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-[clamp(2rem,4vw,4rem)] items-center">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ background: `${BRAND.violet}10`, color: BRAND.violet, border: `1px solid ${BRAND.violet}30` }}>
              <SparkleIcon color={BRAND.violet} size={14} />
              <span>Gifted & Twice-Exceptional</span>
            </div>
            
            <h1 
              className="font-semibold leading-[1.15] tracking-tight mb-5 md:mb-6" 
              style={{ 
                color: BRAND.slate,
                fontSize: "clamp(2rem, 4vw + 0.5rem, 3rem)"
              }}
            >
              The most{" "}
              <span className="relative inline-block" style={{ color: BRAND.violet }}>
                holistic
                <svg className="absolute -bottom-1 left-0 w-full" height="8" viewBox="0 0 200 8" preserveAspectRatio="none">
                  <path d="M0 6 Q50 1, 100 4 T200 3" fill="none" stroke={BRAND.violet} strokeWidth="2.5" strokeLinecap="round" opacity="0.25" />
                </svg>
              </span>
              {" "}assessment
              <br />
              for gifted and 2e learners.
            </h1>
            
            <p 
              className="leading-relaxed mb-3" 
              style={{ 
                color: BRAND.steel,
                fontSize: "clamp(0.95rem, 1vw + 0.5rem, 1.15rem)"
              }}
            >
              Eight cognitive domains, profiled separately. No averaging. No single score that hides the unevenness defining your child's experience.
            </p>
            <p 
              className="leading-relaxed mb-6 md:mb-[clamp(1.25rem,3vh,2rem)]" 
              style={{ 
                color: BRAND.steel,
                fontSize: "clamp(0.95rem, 1vw + 0.5rem, 1.15rem)"
              }}
            >
              Evidence you can take to school, to a psychologist, to anyone who needs to see the full picture.
            </p>
            
            <div className="space-y-3 md:space-y-0 md:flex md:flex-wrap md:gap-3 mb-8">
              <Link to="/contact" className="group flex md:inline-flex items-center justify-center gap-2 px-6 py-3.5 md:py-3 rounded-full text-base md:text-sm font-semibold transition-all duration-300 hover:scale-[1.02] w-full md:w-auto" style={{ background: `linear-gradient(135deg, ${BRAND.violet} 0%, #6A5BE8 100%)`, color: BRAND.white, boxShadow: `0 6px 20px ${BRAND.violet}35` }}>
                Register for Early Access
                <span className="transition-transform duration-300 group-hover:translate-x-1"><ArrowIcon /></span>
              </Link>
              <Link to="/families" className="flex md:inline-flex items-center justify-center gap-2 px-6 py-3.5 md:py-3 rounded-full text-base md:text-sm font-semibold transition-all duration-300 hover:scale-[1.02] w-full md:w-auto" style={{ background: BRAND.white, color: BRAND.violet, border: `2px solid ${BRAND.violet}` }}>
                Explore Families Platform
              </Link>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm" style={{ color: BRAND.steel }}>
              <div className="flex items-center gap-2">
                <CheckIcon color={BRAND.violet} size={16} />
                <span>Uneven profiles expected</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon color={BRAND.violet} size={16} />
                <span>Strength-based pathways</span>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block rounded-3xl p-8 md:p-10 relative overflow-hidden" style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}`, boxShadow: `0 25px 60px ${BRAND.violet}08` }}>
            <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none" style={{ background: `linear-gradient(135deg, ${BRAND.violet}08, transparent)`, borderRadius: "0 0 0 100%" }} />
            
            <div className="relative z-10">
              <div className="text-xs font-bold uppercase tracking-wider mb-6" style={{ color: BRAND.violet }}>What Sets Wadmore Apart</div>
              
              <div className="space-y-5">
                {[
                  { title: "No averaging", desc: "Eight separate domains mean uneven profiles stay uneven. Band 12 reasoning and Band 4 executive functioning both get reported.", icon: <GridIcon color={BRAND.violet} /> },
                  { title: "Uneven profiles expected", desc: "Wide variation across domains isn't pathological. It's how capable minds often work. Our framework expects it.", icon: <TrendingIcon color={BRAND.violet} /> },
                  { title: "Pathways for advanced learners", desc: "Bands 10-12 profile professional-level capability. Clear growth pathways for gifted learners.", icon: <TargetIcon color={BRAND.violet} /> },
                  { title: "Evidence for advocacy", desc: "Precise data showing both exceptional capability and specific support needs.", icon: <ClipboardIcon color={BRAND.violet} /> },
                ].map((item, i) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${BRAND.violet}10` }}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-sm mb-1" style={{ color: BRAND.slate }}>{item.title}</div>
                      <div className="text-xs leading-relaxed" style={{ color: BRAND.steel }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RecognitionSection() {
  const scenarios = [
    {
      scenario: "Exceptional abstract thinker who needs step-by-step support for daily routines",
      what: "Band 11 Abstract Reasoning, Band 4 Executive Functioning",
      traditional: "Composite score averages to 'above average.' Both the exceptional strength and the genuine support need become invisible. Family and school see inconsistency but lack data to understand the pattern.",
    },
    {
      scenario: "Reads complex texts fluently but handwriting and written expression create significant barriers",
      what: "Band 10 Logical Sequencing, Band 5 Processing Speed",
      traditional: "Qualifies for advanced reading but assessment doesn't capture the processing speed discrepancy. Written work doesn't reflect comprehension. Teachers and parents both see the gap but can't quantify it.",
    },
    {
      scenario: "Solves problems creatively and intuitively but struggles to show working or explain reasoning",
      what: "Band 12 Abstract Reasoning, Band 6 Metacognition, Band 5 Cognitive Confidence",
      traditional: "Test anxiety and difficulty articulating process means scores don't reflect capability. Observers see flashes of brilliance but assessment captures uncertainty. Everyone knows something doesn't add up.",
    },
    {
      scenario: "Remembers detailed information across topics but has difficulty shifting focus or adapting to changes",
      what: "Band 10 Memory & Attention, Band 4 Executive Functioning",
      traditional: "Strong performance in structured tasks but difficulty with transitions and novel situations creates confusion. Single score provides no framework to understand why consistency varies so dramatically across contexts.",
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32" style={{ background: BRAND.cloud }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: BRAND.violet }}>Recognition</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-5" style={{ color: BRAND.slate }}>
            The results say one thing.
            <br />Your experience says another.
          </h2>
          <p className="text-lg md:text-xl" style={{ color: BRAND.steel }}>
            Strong scores in some areas, real struggles in others, and an overall picture that doesn't quite capture either. That's not a contradiction. It's an uneven cognitive profile, and most assessments weren't built to show it.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {scenarios.map((item, i) => (
            <div 
              key={item.scenario} 
              className="group p-6 md:p-8 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2" 
              style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}` }}
            >
              <div className="flex items-start gap-5 mb-5">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110" style={{ background: `${BRAND.violet}12`, color: BRAND.violet, fontWeight: "bold", fontSize: "18px" }}>
                  {i + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-lg mb-4 leading-snug" style={{ color: BRAND.slate }}>"{item.scenario}"</div>
                  <div className="space-y-3">
                    <div className="text-sm px-4 py-3 rounded-xl" style={{ background: `${BRAND.violet}08`, color: BRAND.violet, border: `1px solid ${BRAND.violet}20` }}>
                      <strong>Wadmore shows:</strong> {item.what}
                    </div>
                    <div className="text-sm px-4 py-3 rounded-xl" style={{ background: `${BRAND.dove}40`, color: BRAND.steel }}>
                      <strong>Traditional assessment:</strong> {item.traditional}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-base leading-relaxed" style={{ color: BRAND.steel }}>
            When assessment tools can't capture uneven cognitive profiles, families and educators both struggle with incomplete information. 
            <strong style={{ color: BRAND.slate }}> Wadmore gives everyone the complete picture.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="py-8 md:py-12" style={{ background: BRAND.white, borderTop: `1px solid ${BRAND.dove}`, borderBottom: `1px solid ${BRAND.dove}` }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-sm" style={{ color: BRAND.steel }}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: `${BRAND.indigo}10` }}>
              <BookIcon color={BRAND.indigo} size={18} />
            </div>
            <div>
              <div className="font-semibold" style={{ color: BRAND.slate }}>50+ Research Sources</div>
              <div className="text-xs">Evidence-grounded framework</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: `${BRAND.violet}10` }}>
              <LayersIcon color={BRAND.violet} size={18} />
            </div>
            <div>
              <div className="font-semibold" style={{ color: BRAND.slate }}>8 Cognitive Domains</div>
              <div className="text-xs">Complete coverage</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: `${BRAND.teal}10` }}>
              <TrendingUpIcon color={BRAND.teal} size={18} />
            </div>
            <div>
              <div className="font-semibold" style={{ color: BRAND.slate }}>15 Developmental Bands</div>
              <div className="text-xs">Foundation through peak</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: `${BRAND.cerulean}10` }}>
              <ShieldCheckIcon color={BRAND.cerulean} size={18} />
            </div>
            <div>
              <div className="font-semibold" style={{ color: BRAND.slate }}>Psychometrically Rigorous</div>
              <div className="text-xs">IRT/Rasch-aligned</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VisualComparison() {
  return (
    <section className="py-16 md:py-24 lg:py-32" style={{ background: BRAND.white }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: BRAND.cerulean }}>The Difference</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-5" style={{ color: BRAND.slate }}>
            Traditional assessments hide the pattern
          </h2>
          <p className="text-lg md:text-xl" style={{ color: BRAND.steel }}>
            Wadmore reveals the complete cognitive profile
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Traditional - Single Composite */}
          <div className="p-8 md:p-10 rounded-2xl" style={{ background: `${BRAND.dove}30`, border: `1px solid ${BRAND.dove}` }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: `${BRAND.steel}15` }}>
                <AlertCircleIcon color={BRAND.steel} />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: BRAND.steel }}>Traditional Assessment</div>
                <div className="font-semibold text-lg" style={{ color: BRAND.slate }}>Single Composite Score</div>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="text-center py-10 px-6 rounded-xl" style={{ background: BRAND.white, border: `2px solid ${BRAND.steel}30` }}>
                <div className="text-6xl font-bold mb-3" style={{ color: BRAND.steel }}>115</div>
                <div className="text-base font-semibold mb-1" style={{ color: BRAND.slate }}>Composite Score</div>
                <div className="text-sm" style={{ color: BRAND.steel }}>84th percentile</div>
              </div>
            </div>
            
            <div className="text-sm leading-relaxed p-4 rounded-lg" style={{ background: `${BRAND.white}80`, color: BRAND.steel }}>
              <strong style={{ color: BRAND.slate }}>What this hides:</strong> Child scores Band 12 in Abstract Reasoning (exceptional) but Band 4 in Executive Functioning (significant support needed). The average obscures both the strength and the challenge.
            </div>
          </div>
          
          {/* Wadmore - Domain Breakdown */}
          <div className="p-8 md:p-10 rounded-2xl" style={{ background: `${BRAND.violet}05`, border: `2px solid ${BRAND.violet}30` }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: `${BRAND.violet}20` }}>
                <GridIcon color={BRAND.violet} />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: BRAND.violet }}>Wadmore Assessment</div>
                <div className="font-semibold text-lg" style={{ color: BRAND.slate }}>Domain-Specific Performance</div>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              {[
                { domain: "Abstract Reasoning", band: 12, color: BRAND.sage, width: "95%" },
                { domain: "Memory & Attention", band: 8, color: BRAND.cerulean, width: "65%" },
                { domain: "Processing Speed", band: 6, color: BRAND.teal, width: "50%" },
                { domain: "Executive Functioning", band: 4, color: BRAND.golden, width: "35%" },
              ].map((item) => (
                <div key={item.domain}>
                  <div className="flex justify-between items-baseline mb-2">
                    <div className="text-sm font-semibold" style={{ color: BRAND.slate }}>{item.domain}</div>
                    <div className="text-sm font-bold" style={{ color: item.color }}>Band {item.band}</div>
                  </div>
                  <div className="h-3 rounded-full overflow-hidden" style={{ background: `${BRAND.dove}` }}>
                    <div className="h-full rounded-full transition-all duration-500" style={{ width: item.width, background: item.color }} />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-sm leading-relaxed p-4 rounded-lg" style={{ background: `${BRAND.white}`, border: `1px solid ${BRAND.violet}20`, color: BRAND.steel }}>
              <strong style={{ color: BRAND.slate }}>What this reveals:</strong> A clear uneven profile. Exceptional abstract reasoning, executive skills still growing. Both validated, both addressed.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResearchBacking() {
  return (
    <section className="py-16 md:py-24 lg:py-32" style={{ background: BRAND.white }}>
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: BRAND.indigo }}>Research Foundation</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-5" style={{ color: BRAND.slate }}>
            Grounded in science, not trends
          </h2>
        </div>
        
        <div className="p-10 md:p-12 rounded-3xl" style={{ background: `${BRAND.indigo}05`, border: `1px solid ${BRAND.indigo}20` }}>
          <div className="grid md:grid-cols-3 gap-8 md:gap-10 mb-10">
            {[
              { number: "50+", label: "Research Sources", desc: "Peer-reviewed foundations" },
              { number: "360", label: "Constructs", desc: "Precisely defined" },
              { number: "15", label: "Developmental Bands", desc: "Foundation through expert" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-2" style={{ color: BRAND.indigo }}>{stat.number}</div>
                <div className="font-semibold text-base mb-1" style={{ color: BRAND.slate }}>{stat.label}</div>
                <div className="text-sm" style={{ color: BRAND.steel }}>{stat.desc}</div>
              </div>
            ))}
          </div>
          
          <div className="text-center text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8" style={{ color: BRAND.steel }}>
            Every domain in Wadmore connects to established research in cognitive psychology, developmental science, and learning theory. 
            The framework draws on multiple sources including Gagné's work on talent development, contemporary gifted education research, and evidence-based cognitive science.
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium" style={{ background: `${BRAND.indigo}10`, color: BRAND.indigo, border: `1px solid ${BRAND.indigo}30` }}>
              <BookIcon color={BRAND.indigo} size={16} />
              <span>Informed by contemporary gifted education and cognitive science research</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyTraditionalFails() {
  const [activeTab, setActiveTab] = useState(0);
  
  const problems = [
    {
      title: "Composite scores hide the pattern",
      example: "Overall score: 120 (91st percentile)",
      reality: "Verbal Comprehension: 145 / Processing Speed: 95",
      impact: "Assessment shows 'above average overall' but misses both the exceptional strength AND the significant support need. The averaging obscures the actual profile.",
      icon: <BarChartIcon color={BRAND.cerulean} />,
    },
    {
      title: "Binary labels obscure needs",
      example: "Qualifies for gifted program based on reasoning",
      reality: "Executive functioning significantly below age expectations",
      impact: "Enrichment addresses strengths but assessment provides no data for support planning. Families and educators both see the struggle but lack tools to address it systematically.",
      icon: <TagIcon color={BRAND.cerulean} />,
    },
    {
      title: "Doesn't capture uneven profiles",
      example: "Age-based norms assume relatively even capability",
      reality: "Reasoning at 16-year-old level, emotional regulation at 7-year-old level (both age 10)",
      impact: "Traditional frameworks don't account for this pattern. Observers see inconsistency across contexts but lack a framework to understand it. Expectations become confused for everyone.",
      icon: <TrendingUpIcon color={BRAND.cerulean} />,
    },
    {
      title: "No pathway for advanced learners",
      example: "Scores ceiling out at 99th percentile",
      reality: "Capability extends far beyond test ceiling",
      impact: "Assessment says '99th percentile' but now what? No guidance. Boredom, disengagement.",
      icon: <AlertCircleIcon color={BRAND.cerulean} />,
    },
  ];
  
  const problem = problems[activeTab];
  
  return (
    <section className="py-12 md:py-20 lg:py-28" style={{ background: BRAND.cloud }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: BRAND.cerulean }}>The Problem</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-4" style={{ color: BRAND.slate }}>
            Traditional assessments weren't built for minds like your child's
          </h2>
          <p className="text-base md:text-lg" style={{ color: BRAND.steel }}>
            They weren't designed for uneven profiles. They were designed assuming even capability.
          </p>
        </div>
        
        <div className="rounded-2xl overflow-hidden" style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}`, boxShadow: `0 20px 50px ${BRAND.indigo}08` }}>
          {/* Tab Selector */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b" style={{ borderColor: BRAND.dove }}>
            {problems.map((p, i) => (
              <button
                key={p.title}
                onClick={() => setActiveTab(i)}
                className="p-4 md:p-5 text-left transition-all duration-300"
                style={{
                  background: activeTab === i ? BRAND.cloud : BRAND.white,
                  borderBottom: activeTab === i ? `3px solid ${BRAND.cerulean}` : `3px solid transparent`,
                  color: activeTab === i ? BRAND.slate : BRAND.steel,
                }}
              >
                <div className="mb-2 flex items-center justify-center md:justify-start">{p.icon}</div>
                <div className="text-xs md:text-sm font-semibold">{p.title}</div>
              </button>
            ))}
          </div>
          
          {/* Tab Content */}
          <div className="p-6 md:p-8 lg:p-10">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-5 rounded-xl" style={{ background: `${BRAND.dove}40`, border: `1px solid ${BRAND.dove}` }}>
                <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: BRAND.steel }}>Traditional Assessment Shows</div>
                <div className="text-base font-medium" style={{ color: BRAND.slate }}>{problem.example}</div>
              </div>
              <div className="p-5 rounded-xl" style={{ background: `${BRAND.violet}05`, border: `1px solid ${BRAND.violet}20` }}>
                <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: BRAND.violet }}>Reality</div>
                <div className="text-base font-medium" style={{ color: BRAND.slate }}>{problem.reality}</div>
              </div>
            </div>
            
            <div className="p-5 rounded-xl" style={{ background: `${BRAND.golden}08`, border: `1px solid ${BRAND.golden}30` }}>
              <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: BRAND.slate }}>Impact</div>
              <div className="text-base leading-relaxed" style={{ color: BRAND.steel }}>{problem.impact}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowWadmoreHelps() {
  const benefits = [
    {
      title: "No more averaging",
      desc: "Eight separate domains mean uneven profiles stay clear. Band 11 Abstract Reasoning and Band 4 Executive Functioning both get reported. No composite hiding the pattern.",
      color: BRAND.violet,
      icon: <GridIcon color={BRAND.violet} />,
    },
    {
      title: "Uneven profiles expected",
      desc: "Our 15-band framework expects wide variation. Large spreads between domains are normal, not concerning. It's how capable minds often work.",
      color: BRAND.cerulean,
      icon: <TrendingIcon color={BRAND.cerulean} />,
    },
    {
      title: "Growth pathways for advanced learners",
      desc: "Bands 10-12 profile professional-level capability. Clear pathways forward for gifted learners with room to grow.",
      color: BRAND.teal,
      icon: <TargetIcon color={BRAND.teal} />,
    },
    {
      title: "Strength-based support planning",
      desc: "Lead with strengths, identify growth areas, provide evidence for accommodations - without questioning capability. Gifted AND needs support.",
      color: BRAND.golden,
      icon: <ShieldIcon color={BRAND.golden} />,
    },
    {
      title: "Evidence for school advocacy",
      desc: "Precise data showing both exceptional capability and specific support needs. IEP/504 documentation that validates the full picture.",
      color: BRAND.sage,
      icon: <ClipboardIcon color={BRAND.sage} />,
    },
    {
      title: "From confusion to clarity",
      desc: "Understand the pattern behind inconsistent performance. Why brilliant one moment, struggling the next. The cognitive profile reveals the 'why.'",
      color: BRAND.indigo,
      icon: <LightbulbIcon color={BRAND.indigo} />,
    },
  ];
  
  return (
    <section className="py-12 md:py-20 lg:py-28" style={{ background: BRAND.white }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: BRAND.violet }}>The Solution</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-4" style={{ color: BRAND.slate }}>
            How Wadmore helps gifted and 2e learners
          </h2>
          <p className="text-base md:text-lg" style={{ color: BRAND.steel }}>
            Assessment architecture designed for uneven cognitive profiles.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {benefits.map((benefit) => (
            <div 
              key={benefit.title} 
              className="group p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1" 
              style={{ background: BRAND.cloud, border: `1px solid ${BRAND.dove}` }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110" style={{ background: `${benefit.color}10` }}>
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: BRAND.slate }}>{benefit.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: BRAND.steel }}>{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProfileExamples() {
  const profiles = [
    {
      label: "Gifted + ADHD",
      pattern: "High reasoning, low executive functioning, variable processing",
      wadmore: "Band 10-11 Abstract Reasoning, Band 4 Executive Functioning, Band 5-8 Processing Speed (context-dependent). Validates both capability and support needs.",
      color: BRAND.violet,
    },
    {
      label: "Gifted + Dyslexia",
      pattern: "Strong reasoning, low processing speed, memory compensations",
      wadmore: "Band 11 Abstract Reasoning, Band 5 Processing Speed, Band 9 Memory & Attention (strength compensating). Clear evidence for extended time.",
      color: BRAND.cerulean,
    },
    {
      label: "Gifted + Sensory Processing",
      pattern: "High reasoning, low cognitive confidence, executive variability",
      wadmore: "Band 12 Abstract Reasoning, Band 5 Cognitive Confidence, Band 6-9 Executive Functioning (environment-dependent). Supports accommodations.",
      color: BRAND.teal,
    },
    {
      label: "Gifted + ASD",
      pattern: "Exceptional pattern recognition, variable metacognition",
      wadmore: "Band 12 Abstract Reasoning (domain-specific), Band 6 Metacognition (context-dependent), Band 10 Processing Speed. Validates cognitive profile.",
      color: BRAND.golden,
    },
  ];
  
  return (
    <section className="py-12 md:py-20 lg:py-28" style={{ background: BRAND.cloud }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: BRAND.indigo }}>Profile Examples</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-4" style={{ color: BRAND.slate }}>
            Common twice-exceptional patterns
          </h2>
          <p className="text-base md:text-lg" style={{ color: BRAND.steel }}>
            How Wadmore captures what traditional assessments miss.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {profiles.map((profile) => (
            <div 
              key={profile.label} 
              className="p-6 md:p-8 rounded-2xl" 
              style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}`, boxShadow: `0 10px 30px ${BRAND.indigo}05` }}
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="px-4 py-2 rounded-lg font-semibold text-sm" style={{ background: `${profile.color}10`, color: profile.color }}>
                  {profile.label}
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: BRAND.steel }}>Cognitive Pattern</div>
                  <div className="text-sm" style={{ color: BRAND.slate }}>{profile.pattern}</div>
                </div>
                <div className="p-4 rounded-xl" style={{ background: `${profile.color}05`, border: `1px solid ${profile.color}20` }}>
                  <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: profile.color }}>What Wadmore Shows</div>
                  <div className="text-sm" style={{ color: BRAND.slate }}>{profile.wadmore}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${BRAND.violet} 0%, #6A5BE8 100%)` }}>
      <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: `radial-gradient(circle at 30% 70%, ${BRAND.white} 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
      
      <div className="max-w-4xl mx-auto px-5 md:px-8 text-center relative z-10">
        <h2 
          className="font-semibold mb-4 md:mb-6 leading-tight" 
          style={{ 
            color: BRAND.white,
            fontSize: "clamp(1.75rem, 4vw + 0.5rem, 3rem)"
          }}
        >
          Ready to see the full picture?
        </h2>
        <p 
          className="mb-8 md:mb-10 opacity-90 max-w-2xl mx-auto" 
          style={{ 
            color: BRAND.white,
            fontSize: "clamp(1rem, 2vw + 0.25rem, 1.25rem)"
          }}
        >
          Eight domains, profiled separately. Evidence for advocacy, support planning, and extension. Launching March 2026.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/contact" className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:scale-[1.02]" style={{ background: BRAND.white, color: BRAND.violet, boxShadow: "0 8px 25px rgba(0,0,0,0.2)" }}>
            Register for Early Access
            <span className="transition-transform duration-300 group-hover:translate-x-1"><ArrowIcon /></span>
          </Link>
          <Link to="/families" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:scale-[1.02]" style={{ background: 'transparent', color: BRAND.white, border: `2px solid ${BRAND.white}` }}>
            Learn More About Families Platform
          </Link>
        </div>
        
        <div className="mt-12 pt-8" style={{ borderTop: `1px solid rgba(255,255,255,0.2)` }}>
          <p className="text-sm opacity-75" style={{ color: BRAND.white }}>
            Questions? Email us at <a href="mailto:hello@wadmore.com.au" className="underline font-medium hover:opacity-100">hello@wadmore.com.au</a>
          </p>
        </div>
      </div>
    </section>
  );
}

/* Professional SVG Icons - Feather Icons style */
function SparkleIcon({ color, size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
      <circle cx="12" cy="12" r="3" fill={color} stroke="none" />
    </svg>
  );
}

function GridIcon({ color }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  );
}

function TrendingIcon({ color }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}

function TrendingUpIcon({ color }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

function TargetIcon({ color }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function ClipboardIcon({ color }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    </svg>
  );
}

function ShieldIcon({ color }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function LightbulbIcon({ color }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
    </svg>
  );
}

function BarChartIcon({ color }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  );
}

function TagIcon({ color }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  );
}

function AlertCircleIcon({ color }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

function BookIcon({ color, size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

function LayersIcon({ color, size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

function ShieldCheckIcon({ color, size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function ArrowIcon() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8.707 3.293a1 1 0 00-1.414 1.414L9.586 7H3a1 1 0 100 2h6.586l-2.293 2.293a1 1 0 101.414 1.414l4-4a1 1 0 000-1.414l-4-4z" /></svg>;
}

function CheckIcon({ color, size = 14 }) {
  return <svg width={size} height={size} viewBox="0 0 16 16" fill={color}><path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" /></svg>;
}