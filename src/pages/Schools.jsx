// src/pages/Schools.jsx
// Wadmore Schools - Cognitive profiling for educational settings
// World-class design: refined, academic, trustworthy
// Brand accent: Cerulean (#5B8BF7)

import { useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

/* ══════════════════════════════════════════════════════════════
   WADMORE BRAND COLOURS
   ══════════════════════════════════════════════════════════════ */

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
  
  // Extended
  indigoLight: "#4a5a94",
  ceruleanDark: "#4A75D9",
  ceruleanLight: "#7BA8F9",
};

/* ══════════════════════════════════════════════════════════════
   DOMAIN DATA
   ══════════════════════════════════════════════════════════════ */

const DOMAINS = [
  { code: "AR", name: "Abstract Reasoning", color: BRAND.cerulean },
  { code: "LS", name: "Logical Sequencing", color: BRAND.cerulean },
  { code: "PS", name: "Processing Speed", color: BRAND.cerulean },
  { code: "MA", name: "Memory & Attention", color: BRAND.indigo },
  { code: "EF", name: "Executive Functioning", color: BRAND.teal },
  { code: "MR", name: "Metacognition", color: BRAND.teal },
  { code: "CM", name: "Cognitive Confidence", color: BRAND.violet },
  { code: "CD", name: "Creativity", color: BRAND.violet },
];

/* ══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════════════════════ */

export default function Schools() {
  return (
    <Layout>
      <Hero />
      <PilotBanner />
      <WhyComprehensiveSection />
      <DomainsShowcase />
      <UseCasesSection />
      <ForEducatorsSection />
      <ActionabilitySection />
      <EALDSection />
      <PricingSection />
      <CTASection />
    </Layout>
  );
}

/* ══════════════════════════════════════════════════════════════
   HERO - Immersive, confidence-building
   ══════════════════════════════════════════════════════════════ */

function Hero() {
  return (
    <section className="min-h-[70vh] flex items-center relative overflow-hidden">
      {/* Rich gradient background */}
      <div 
        className="absolute inset-0"
        style={{ 
          background: `
            linear-gradient(135deg, ${BRAND.cloud} 0%, #EEF4FF 50%, ${BRAND.cloud} 100%)
          `
        }}
      />
      
      {/* Decorative elements */}
      <div 
        className="absolute top-0 right-0 w-[800px] h-[800px] pointer-events-none opacity-40"
        style={{
          background: `radial-gradient(circle at center, ${BRAND.cerulean}15, transparent 70%)`,
          transform: "translate(30%, -30%)"
        }}
      />
      <div 
        className="absolute bottom-0 left-0 w-[600px] h-[600px] pointer-events-none opacity-30"
        style={{
          background: `radial-gradient(circle at center, ${BRAND.teal}12, transparent 70%)`,
          transform: "translate(-30%, 30%)"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-20 items-center">
          {/* Left: Content */}
          <div>
            {/* Eyebrow badge */}
            <div 
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full text-sm font-medium mb-10 backdrop-blur-sm"
              style={{ 
                background: `${BRAND.white}90`, 
                border: `1px solid ${BRAND.cerulean}30`,
                boxShadow: `0 4px 20px ${BRAND.cerulean}10`
              }}
            >
              <span 
                className="w-2.5 h-2.5 rounded-full animate-pulse"
                style={{ background: BRAND.cerulean }}
              />
              <span style={{ color: BRAND.slate }}>Wadmore for Schools</span>
            </div>
            
            {/* Headline */}
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight mb-6"
              style={{ color: BRAND.slate }}
            >
              See the{" "}
              <span 
                className="relative inline-block"
                style={{ color: BRAND.cerulean }}
              >
                whole
                {/* Underline accent */}
                <svg 
                  className="absolute -bottom-1 left-0 w-full" 
                  height="6" 
                  viewBox="0 0 200 6" 
                  preserveAspectRatio="none"
                >
                  <path 
                    d="M0 5 Q50 1, 100 3 T200 2" 
                    fill="none" 
                    stroke={BRAND.cerulean} 
                    strokeWidth="2" 
                    strokeLinecap="round"
                    opacity="0.4"
                  />
                </svg>
              </span>
              {" "}student.
            </h1>
            
            <p 
              className="text-lg md:text-xl leading-relaxed mb-8 max-w-xl"
              style={{ color: BRAND.steel }}
            >
              Not just grades, behaviour, or test scores. Wadmore reveals{" "}
              <strong style={{ color: BRAND.slate }}>cognitive development</strong> across 
              eight domains — enabling informed differentiation, meaningful 
              support conversations, and confident pathway decisions.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                style={{ 
                  background: `linear-gradient(135deg, ${BRAND.cerulean} 0%, ${BRAND.ceruleanDark} 100%)`,
                  color: BRAND.white,
                  boxShadow: `0 8px 30px ${BRAND.cerulean}35`
                }}
              >
                Request a Demo
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </Link>
              <Link 
                to="/science"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:bg-white hover:shadow-lg"
                style={{ 
                  background: `${BRAND.white}80`,
                  color: BRAND.slate,
                  border: `1px solid ${BRAND.dove}`,
                  backdropFilter: "blur(8px)"
                }}
              >
                View the Research
              </Link>
            </div>
          </div>
          
          {/* Right: Stats card */}
          <div 
            className="rounded-3xl p-8 lg:p-10 relative overflow-hidden"
            style={{ 
              background: BRAND.white, 
              border: `1px solid ${BRAND.dove}`,
              boxShadow: `0 20px 60px ${BRAND.indigo}08, 0 4px 20px ${BRAND.cerulean}05`
            }}
          >
            {/* Decorative corner */}
            <div 
              className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
              style={{
                background: `linear-gradient(135deg, ${BRAND.cerulean}08, transparent)`,
                borderRadius: "0 0 0 100%"
              }}
            />
            
            <div className="grid grid-cols-2 gap-8 relative z-10">
              {[
                { value: "8", label: "Cognitive Domains", desc: "Complete coverage" },
                { value: "360", label: "Constructs", desc: "Actionable precision" },
                { value: "α≥0.85", label: "Reliability", desc: "Psychometric rigour" },
                { value: "25-45", label: "Minutes", desc: "Adaptive, efficient" },
              ].map((stat, i) => (
                <div 
                  key={stat.label}
                  className="group"
                  style={{ 
                    animationDelay: `${i * 100}ms`
                  }}
                >
                  <div 
                    className="text-4xl lg:text-5xl font-bold mb-2 transition-transform duration-300 group-hover:scale-105"
                    style={{ 
                      color: BRAND.cerulean,
                      fontVariantNumeric: "tabular-nums"
                    }}
                  >
                    {stat.value}
                  </div>
                  <div 
                    className="font-semibold text-sm mb-0.5"
                    style={{ color: BRAND.slate }}
                  >
                    {stat.label}
                  </div>
                  <div 
                    className="text-xs"
                    style={{ color: BRAND.steel }}
                  >
                    {stat.desc}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Trust indicator */}
            <div 
              className="mt-10 pt-8 flex items-center gap-4"
              style={{ borderTop: `1px solid ${BRAND.dove}` }}
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: `${BRAND.sage}20` }}
              >
                <CheckBadgeIcon color={BRAND.teal} />
              </div>
              <div>
                <div className="font-semibold text-sm" style={{ color: BRAND.slate }}>
                  Australian-built
                </div>
                <div className="text-xs" style={{ color: BRAND.steel }}>
                  Local support, AUD pricing, NCCD alignment
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   PILOT BANNER - Subtle, informative
   ══════════════════════════════════════════════════════════════ */

function PilotBanner() {
  return (
    <section 
      className="py-4 relative overflow-hidden"
      style={{ 
        background: `linear-gradient(90deg, ${BRAND.golden}08, ${BRAND.golden}15, ${BRAND.golden}08)`,
        borderTop: `1px solid ${BRAND.golden}25`,
        borderBottom: `1px solid ${BRAND.golden}25`
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: BRAND.golden }}
            >
              <SparkleIcon />
            </div>
            <p className="text-sm" style={{ color: BRAND.slate }}>
              <strong>2026 Pilot Program:</strong>{" "}
              <span style={{ color: BRAND.steel }}>
                Early adopter schools receive $10/student pricing and complimentary PD.
              </span>
            </p>
          </div>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-[1.02]"
            style={{ 
              background: BRAND.cerulean, 
              color: BRAND.white,
              boxShadow: `0 4px 14px ${BRAND.cerulean}30`
            }}
          >
            Express Interest
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   WHY COMPREHENSIVE - Research-backed messaging
   ══════════════════════════════════════════════════════════════ */

function WhyComprehensiveSection() {
  return (
    <section className="py-28 md:py-36" style={{ background: BRAND.white }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div>
            <p 
              className="text-sm font-semibold uppercase tracking-widest mb-5"
              style={{ color: BRAND.cerulean }}
            >
              The Research
            </p>
            <h2 
              className="text-4xl md:text-5xl font-semibold leading-tight mb-8"
              style={{ color: BRAND.slate }}
            >
              Why comprehensive assessment matters
            </h2>
            <p 
              className="text-xl leading-relaxed mb-8"
              style={{ color: BRAND.steel }}
            >
              You know the pattern. Strong reasoning on standardised tests. 
              But still struggling in class. Grades that don't match potential.{" "}
              <strong style={{ color: BRAND.slate }}>What's missing?</strong>
            </p>
            <p 
              className="text-lg leading-relaxed mb-10"
              style={{ color: BRAND.steel }}
            >
              Research shows that Executive Functioning, Memory, Metacognition, 
              and Cognitive Confidence are critical for academic success — often 
              more predictive than reasoning alone. Wadmore measures all of them.
            </p>
            
            {/* Example insight card */}
            <div 
              className="p-6 rounded-2xl relative overflow-hidden"
              style={{ 
                background: `linear-gradient(135deg, ${BRAND.cloud} 0%, ${BRAND.white} 100%)`,
                border: `1px solid ${BRAND.dove}`
              }}
            >
              <div 
                className="absolute top-0 left-0 w-1 h-full rounded-r-full"
                style={{ background: BRAND.cerulean }}
              />
              <div className="pl-4">
                <div className="text-sm font-semibold mb-3" style={{ color: BRAND.slate }}>
                  Example insight:
                </div>
                <p className="text-sm leading-relaxed" style={{ color: BRAND.steel }}>
                  A student shows strong Abstract Reasoning (Band 8) but weaker Executive 
                  Functioning (Band 5). Now you understand: they can solve complex problems 
                  but struggle with planning and task management. The intervention is clear — 
                  <strong style={{ color: BRAND.slate }}> support organisation, not more reasoning practice.</strong>
                </p>
              </div>
            </div>
          </div>
          
          {/* Right: Research cards */}
          <div className="space-y-5">
            {[
              { 
                domain: "Executive Functioning", 
                desc: "Planning, task management, cognitive flexibility", 
                research: "Diamond (2013): EF predicts academic success",
                color: BRAND.teal
              },
              { 
                domain: "Memory & Attention", 
                desc: "Working memory, focus, encoding strategies", 
                research: "Gathercole & Alloway (2008)",
                color: BRAND.cerulean
              },
              { 
                domain: "Metacognition", 
                desc: "Self-awareness, learning strategies, self-monitoring", 
                research: "Hattie (2009): d=0.69 effect size",
                color: BRAND.indigo
              },
              { 
                domain: "Cognitive Confidence", 
                desc: "Self-belief, persistence, growth mindset", 
                research: "Dweck (2006), Bandura (1997)",
                color: BRAND.violet
              },
            ].map((item, i) => (
              <div 
                key={item.domain}
                className="group p-5 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{ 
                  background: BRAND.cloud,
                  border: `1px solid ${BRAND.dove}`,
                }}
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${item.color}15` }}
                  >
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ background: item.color }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1" style={{ color: BRAND.slate }}>
                      {item.domain}
                    </h3>
                    <p className="text-sm mb-2" style={{ color: BRAND.steel }}>
                      {item.desc}
                    </p>
                    <p className="text-xs font-medium" style={{ color: item.color }}>
                      {item.research}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   DOMAINS SHOWCASE - Visual domain overview
   ══════════════════════════════════════════════════════════════ */

function DomainsShowcase() {
  return (
    <section 
      className="py-20 relative overflow-hidden"
      style={{ background: BRAND.cloud }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <p 
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: BRAND.indigo }}
          >
            Complete Coverage
          </p>
          <h2 
            className="text-3xl md:text-4xl font-semibold mb-4"
            style={{ color: BRAND.slate }}
          >
            Eight domains of cognitive development
          </h2>
        </div>
        
        {/* Domain pills in a flowing layout */}
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {DOMAINS.map((domain, i) => (
            <div
              key={domain.code}
              className="group px-5 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-md cursor-default"
              style={{ 
                background: BRAND.white,
                border: `1px solid ${BRAND.dove}`,
              }}
            >
              <div className="flex items-center gap-3">
                <span 
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-transform duration-300 group-hover:scale-110"
                  style={{ 
                    background: `${domain.color}15`,
                    color: domain.color
                  }}
                >
                  {domain.code}
                </span>
                <span className="font-medium text-sm" style={{ color: BRAND.slate }}>
                  {domain.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   USE CASES - Interactive cards
   ══════════════════════════════════════════════════════════════ */

function UseCasesSection() {
  const [activeCase, setActiveCase] = useState(0);
  
  const cases = [
    { 
      title: "Differentiated Instruction", 
      desc: "Understand the cognitive landscape of your classroom. Group students by thinking patterns and tailor instruction to how they actually learn.",
      icon: GridIcon
    },
    { 
      title: "Learning Support & Intervention", 
      desc: "Move beyond observable behaviours to understand the cognitive factors driving learning challenges. Target interventions where they'll have the most impact.",
      icon: TargetIcon
    },
    { 
      title: "Gifted & Talented", 
      desc: "Identify cognitive strengths across all eight domains. Support the whole student, not just academic performance.",
      icon: StarIcon
    },
    { 
      title: "NCCD Evidence", 
      desc: "Generate comprehensive cognitive profiles that provide robust evidence for NCCD documentation — including Executive Functioning and Memory data.",
      icon: DocumentIcon
    },
    { 
      title: "Career & Pathways", 
      desc: "Help students understand their cognitive strengths and match them to potential pathways. Lifespan profiling from school through career.",
      icon: PathIcon
    },
    { 
      title: "Parent Conversations", 
      desc: "Transform parent-teacher meetings with objective, strength-based cognitive data. A shared language for discussing student development.",
      icon: ChatIcon
    },
  ];
  
  return (
    <section className="py-28 md:py-36" style={{ background: BRAND.white }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <p 
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: BRAND.cerulean }}
          >
            Applications
          </p>
          <h2 
            className="text-4xl md:text-5xl font-semibold mb-4"
            style={{ color: BRAND.slate }}
          >
            How schools use Wadmore
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((item, i) => {
            const Icon = item.icon;
            const isActive = activeCase === i;
            
            return (
              <div
                key={item.title}
                onMouseEnter={() => setActiveCase(i)}
                className="group p-7 rounded-2xl transition-all duration-300 cursor-default"
                style={{ 
                  background: isActive ? BRAND.white : BRAND.cloud,
                  border: `1px solid ${isActive ? BRAND.cerulean : BRAND.dove}`,
                  boxShadow: isActive ? `0 20px 40px ${BRAND.cerulean}10` : "none",
                  transform: isActive ? "translateY(-4px)" : "translateY(0)"
                }}
              >
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300"
                  style={{ 
                    background: isActive ? `${BRAND.cerulean}15` : `${BRAND.steel}08`,
                  }}
                >
                  <Icon color={isActive ? BRAND.cerulean : BRAND.steel} />
                </div>
                <h3 
                  className="font-semibold text-xl mb-3 transition-colors duration-300"
                  style={{ color: BRAND.slate }}
                >
                  {item.title}
                </h3>
                <p 
                  className="text-sm leading-relaxed"
                  style={{ color: BRAND.steel }}
                >
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   FOR EDUCATORS - Progressive disclosure showcase
   ══════════════════════════════════════════════════════════════ */

function ForEducatorsSection() {
  const [activeRole, setActiveRole] = useState("teachers");
  
  const roles = {
    teachers: {
      label: "Teachers",
      features: ["Class cognitive heatmaps", "Individual action plans", "Differentiation toolkits", "Progress tracking"],
      color: BRAND.cerulean
    },
    support: {
      label: "Support Staff",
      features: ["Targeted intervention planning", "Case management tools", "Specialist referral data", "NCCD evidence generation"],
      color: BRAND.teal
    },
    leadership: {
      label: "Leadership",
      features: ["Whole-school cognitive profiles", "Cohort analytics", "Resource allocation insights", "Strategic planning data"],
      color: BRAND.indigo
    },
    system: {
      label: "System Admin",
      features: ["Cross-campus benchmarking", "Policy impact assessment", "PD planning intelligence", "Trend analysis"],
      color: BRAND.violet
    },
  };
  
  return (
    <section 
      className="py-28 md:py-36 relative overflow-hidden"
      style={{ background: BRAND.cloud }}
    >
      {/* Background decoration */}
      <div 
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none opacity-50"
        style={{
          background: `radial-gradient(circle at center, ${BRAND.cerulean}05, transparent 70%)`,
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div>
            <p 
              className="text-sm font-semibold uppercase tracking-widest mb-5"
              style={{ color: BRAND.cerulean }}
            >
              Built for Educators
            </p>
            <h2 
              className="text-4xl md:text-5xl font-semibold leading-tight mb-8"
              style={{ color: BRAND.slate }}
            >
              Designed for how you actually work
            </h2>
            <p 
              className="text-xl leading-relaxed mb-10"
              style={{ color: BRAND.steel }}
            >
              Progressive disclosure means you get what you need, when you need it. 
              30-second overview for quick reference. 5-minute domain review for planning. 
              15-minute deep dive for intervention design.
            </p>
            
            {/* Role tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {Object.entries(roles).map(([key, role]) => (
                <button
                  key={key}
                  onClick={() => setActiveRole(key)}
                  className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
                  style={{ 
                    background: activeRole === key ? role.color : BRAND.white,
                    color: activeRole === key ? BRAND.white : BRAND.slate,
                    border: `1px solid ${activeRole === key ? role.color : BRAND.dove}`,
                    boxShadow: activeRole === key ? `0 4px 14px ${role.color}30` : "none"
                  }}
                >
                  {role.label}
                </button>
              ))}
            </div>
            
            {/* Features list */}
            <div className="grid grid-cols-2 gap-3">
              {roles[activeRole].features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: `${roles[activeRole].color}15` }}
                  >
                    <CheckIcon color={roles[activeRole].color} size={12} />
                  </div>
                  <span className="text-sm" style={{ color: BRAND.slate }}>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right: Progressive disclosure demo */}
          <div 
            className="rounded-3xl p-8 relative overflow-hidden"
            style={{ 
              background: BRAND.white, 
              border: `1px solid ${BRAND.dove}`,
              boxShadow: `0 30px 60px ${BRAND.indigo}08`
            }}
          >
            <div className="text-xs font-semibold uppercase tracking-wider mb-6" style={{ color: BRAND.steel }}>
              Progressive Disclosure
            </div>
            
            <div className="space-y-4">
              {[
                { time: "30 seconds", label: "At-a-glance", desc: "Top strengths, growth areas, one-sentence summary", active: true },
                { time: "5 minutes", label: "Domain review", desc: "All eight domains with key patterns and recommendations", active: false },
                { time: "15 minutes", label: "Deep dive", desc: "Construct-level analysis with specific intervention strategies", active: false },
              ].map((item, i) => (
                <div 
                  key={item.label}
                  className="p-5 rounded-xl transition-all duration-300"
                  style={{ 
                    background: item.active ? `${BRAND.cerulean}08` : BRAND.cloud,
                    border: `1px solid ${item.active ? BRAND.cerulean : "transparent"}`
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold" style={{ color: BRAND.slate }}>
                      {item.label}
                    </span>
                    <span 
                      className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{ 
                        background: item.active ? BRAND.cerulean : `${BRAND.steel}15`,
                        color: item.active ? BRAND.white : BRAND.steel
                      }}
                    >
                      {item.time}
                    </span>
                  </div>
                  <p className="text-sm" style={{ color: BRAND.steel }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   ACTIONABILITY - Construct-level example
   ══════════════════════════════════════════════════════════════ */

function ActionabilitySection() {
  return (
    <section className="py-28 md:py-36" style={{ background: BRAND.white }}>
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <p 
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: BRAND.cerulean }}
          >
            Genuine Actionability
          </p>
          <h2 
            className="text-4xl md:text-5xl font-semibold mb-4"
            style={{ color: BRAND.slate }}
          >
            From insight to intervention
          </h2>
          <p 
            className="text-xl max-w-2xl mx-auto"
            style={{ color: BRAND.steel }}
          >
            Every construct connects to specific, evidence-based strategies — not generic advice.
          </p>
        </div>
        
        {/* Intervention example */}
        <div 
          className="rounded-3xl overflow-hidden"
          style={{ 
            background: BRAND.white, 
            border: `1px solid ${BRAND.dove}`,
            boxShadow: `0 30px 60px ${BRAND.indigo}08`
          }}
        >
          {/* Header */}
          <div 
            className="px-8 py-6"
            style={{ 
              background: `linear-gradient(135deg, ${BRAND.cerulean}10, ${BRAND.cerulean}05)`,
              borderBottom: `1px solid ${BRAND.dove}`
            }}
          >
            <div className="flex flex-wrap items-center gap-3">
              <span 
                className="px-4 py-2 rounded-full text-xs font-bold"
                style={{ background: BRAND.cerulean, color: BRAND.white }}
              >
                LOGICAL SEQUENCING
              </span>
              <span 
                className="px-4 py-2 rounded-full text-xs font-bold"
                style={{ background: `${BRAND.cerulean}20`, color: BRAND.cerulean }}
              >
                BAND 7
              </span>
              <span 
                className="px-4 py-2 rounded-full text-xs font-bold"
                style={{ background: `${BRAND.cerulean}10`, color: BRAND.cerulean }}
              >
                CONSTRUCT 2
              </span>
            </div>
            <p 
              className="mt-4 text-lg font-medium"
              style={{ color: BRAND.slate }}
            >
              "Constructs logical proof in 5-7 steps with growing meta-strategic awareness"
            </p>
          </div>
          
          {/* Content */}
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div 
                className="p-6 rounded-2xl"
                style={{ background: BRAND.cloud }}
              >
                <div 
                  className="text-xs font-bold uppercase tracking-wider mb-4"
                  style={{ color: BRAND.cerulean }}
                >
                  Classroom Strategies
                </div>
                <ul className="space-y-3">
                  {[
                    "Present 5-step logic puzzles with visible reasoning chains",
                    "Scaffold by providing the first 2 steps initially",
                    "Ask student to verbalize their reasoning process",
                    "Use graphic organizers to map logical sequences"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm" style={{ color: BRAND.steel }}>
                      <div 
                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                        style={{ background: BRAND.cerulean }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div 
                className="p-6 rounded-2xl"
                style={{ background: `${BRAND.sage}10` }}
              >
                <div 
                  className="text-xs font-bold uppercase tracking-wider mb-4"
                  style={{ color: BRAND.teal }}
                >
                  Expected Progression
                </div>
                <p className="text-sm mb-4" style={{ color: BRAND.steel }}>
                  <strong style={{ color: BRAND.slate }}>Band 8:</strong> "Independently constructs 
                  logical arguments with self-monitoring and error correction"
                </p>
                <div 
                  className="flex items-center gap-2 text-sm font-medium"
                  style={{ color: BRAND.teal }}
                >
                  <ClockIcon size={16} />
                  Timeline: 6-8 weeks with consistent practice
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   EAL/D SECTION - Inclusive design
   ══════════════════════════════════════════════════════════════ */

function EALDSection() {
  return (
    <section 
      className="py-20"
      style={{ background: BRAND.cloud }}
    >
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div 
          className="p-10 md:p-14 rounded-3xl relative overflow-hidden"
          style={{ 
            background: BRAND.white,
            border: `1px solid ${BRAND.dove}`,
            boxShadow: `0 20px 50px ${BRAND.indigo}06`
          }}
        >
          {/* Decorative accent */}
          <div 
            className="absolute top-0 left-0 w-2 h-full"
            style={{ 
              background: `linear-gradient(180deg, ${BRAND.teal}, ${BRAND.cerulean})`
            }}
          />
          
          <div className="pl-6">
            <div className="flex items-center gap-4 mb-6">
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ background: `${BRAND.teal}15` }}
              >
                <GlobeIcon color={BRAND.teal} />
              </div>
              <div>
                <h2 
                  className="text-2xl md:text-3xl font-semibold"
                  style={{ color: BRAND.slate }}
                >
                  Designed for diverse learners
                </h2>
                <p className="text-sm" style={{ color: BRAND.steel }}>
                  Including EAL/D students
                </p>
              </div>
            </div>
            
            <p 
              className="text-lg mb-8 leading-relaxed"
              style={{ color: BRAND.steel }}
            >
              Cognitive assessments can confuse language proficiency with cognitive ability. 
              A student developing English may show lower verbal scores not because of cognitive 
              limitations, but because of language background.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "Reduced language load in non-verbal domains",
                "DIF analysis on every item for fairness",
                "Interpretation guidance for verbal-spatial patterns",
                "EALD-friendly readability standards"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: `${BRAND.teal}15` }}
                  >
                    <CheckIcon color={BRAND.teal} size={12} />
                  </div>
                  <span className="text-sm" style={{ color: BRAND.slate }}>{item}</span>
                </div>
              ))}
            </div>
            
            <div 
              className="p-5 rounded-xl"
              style={{ background: `${BRAND.teal}08` }}
            >
              <p className="text-sm" style={{ color: BRAND.steel }}>
                <strong style={{ color: BRAND.slate }}>Interpretation note:</strong>{" "}
                When students show strong Spatial/Abstract reasoning but lower Verbal scores, 
                Wadmore reports flag this pattern and provide guidance on distinguishing 
                language background from cognitive difference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   PRICING - Clean, transparent
   ══════════════════════════════════════════════════════════════ */

function PricingSection() {
  return (
    <section className="py-28 md:py-36" style={{ background: BRAND.white }}>
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <p 
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: BRAND.cerulean }}
          >
            Pricing
          </p>
          <h2 
            className="text-4xl md:text-5xl font-semibold mb-4"
            style={{ color: BRAND.slate }}
          >
            Simple, transparent pricing
          </h2>
          <p 
            className="text-xl"
            style={{ color: BRAND.steel }}
          >
            AUD pricing. Local support. No surprises.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { 
              tier: "Small School", 
              price: "$20", 
              unit: "/student", 
              desc: "Up to 200 students", 
              features: ["Full 8-domain assessment", "Individual student profiles", "Teacher dashboard access", "Email support"],
              featured: false
            },
            { 
              tier: "Medium School", 
              price: "$18", 
              unit: "/student", 
              desc: "201-500 students", 
              features: ["Everything in Small", "Cohort analytics", "Priority support", "PD workshop (1 session)"],
              featured: true
            },
            { 
              tier: "Large / System", 
              price: "$15", 
              unit: "/student", 
              desc: "500+ students", 
              features: ["Everything in Medium", "System-wide analytics", "Dedicated account manager", "Custom integrations"],
              featured: false
            },
          ].map((item) => (
            <div 
              key={item.tier}
              className={`rounded-3xl p-8 relative transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${item.featured ? 'lg:-mt-4 lg:mb-4' : ''}`}
              style={{ 
                background: item.featured ? BRAND.white : BRAND.cloud,
                border: item.featured ? `2px solid ${BRAND.cerulean}` : `1px solid ${BRAND.dove}`,
                boxShadow: item.featured ? `0 30px 60px ${BRAND.cerulean}15` : "none"
              }}
            >
              {item.featured && (
                <div 
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold"
                  style={{ background: BRAND.cerulean, color: BRAND.white }}
                >
                  MOST POPULAR
                </div>
              )}
              
              <div 
                className="text-sm font-semibold uppercase tracking-wider mb-4"
                style={{ color: item.featured ? BRAND.cerulean : BRAND.steel }}
              >
                {item.tier}
              </div>
              
              <div className="flex items-baseline gap-1 mb-2">
                <span 
                  className="text-5xl font-bold"
                  style={{ color: BRAND.slate }}
                >
                  {item.price}
                </span>
                <span 
                  className="text-xl"
                  style={{ color: BRAND.steel }}
                >
                  {item.unit}
                </span>
              </div>
              
              <p 
                className="text-sm mb-8"
                style={{ color: BRAND.steel }}
              >
                {item.desc}
              </p>
              
              <ul className="space-y-4">
                {item.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div 
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ 
                        background: item.featured ? `${BRAND.cerulean}15` : `${BRAND.teal}15`
                      }}
                    >
                      <CheckIcon color={item.featured ? BRAND.cerulean : BRAND.teal} size={10} />
                    </div>
                    <span className="text-sm" style={{ color: BRAND.slate }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Pilot banner */}
        <div 
          className="mt-12 p-6 rounded-2xl text-center"
          style={{ 
            background: `linear-gradient(135deg, ${BRAND.golden}15, ${BRAND.golden}08)`,
            border: `1px solid ${BRAND.golden}30`
          }}
        >
          <p className="text-sm" style={{ color: BRAND.slate }}>
            <strong>2026 Pilot Program:</strong>{" "}
            <span style={{ color: BRAND.steel }}>
              Early adopter schools receive <strong style={{ color: BRAND.slate }}>$10/student</strong> and 
              complimentary professional development.
            </span>
          </p>
        </div>
        
        <div className="text-center mt-10">
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            style={{ 
              background: `linear-gradient(135deg, ${BRAND.cerulean} 0%, ${BRAND.ceruleanDark} 100%)`,
              color: BRAND.white,
              boxShadow: `0 8px 30px ${BRAND.cerulean}30`
            }}
          >
            Request a Quote
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   CTA - Impactful close
   ══════════════════════════════════════════════════════════════ */

function CTASection() {
  return (
    <section 
      className="py-28 md:py-36 relative overflow-hidden"
      style={{ 
        background: `linear-gradient(135deg, ${BRAND.cerulean} 0%, ${BRAND.ceruleanDark} 50%, ${BRAND.indigo} 100%)`
      }}
    >
      {/* Decorative elements */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px)`,
          backgroundSize: "40px 40px"
        }}
      />
      
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center relative z-10">
        <h2 
          className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight"
          style={{ color: BRAND.white }}
        >
          Ready to see the whole student?
        </h2>
        <p 
          className="text-xl md:text-2xl mb-12 opacity-90 max-w-2xl mx-auto"
          style={{ color: BRAND.white }}
        >
          Book a demo to see how Wadmore reveals cognitive development with precision and actionability.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            to="/contact"
            className="group inline-flex items-center gap-3 px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
            style={{ 
              background: BRAND.white, 
              color: BRAND.cerulean,
              boxShadow: "0 8px 30px rgba(0,0,0,0.15)"
            }}
          >
            Request a Demo
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <ArrowIcon />
            </span>
          </Link>
          <Link 
            to="/science"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-white/20"
            style={{ 
              background: "rgba(255,255,255,0.1)", 
              color: "white",
              border: "1px solid rgba(255,255,255,0.3)",
              backdropFilter: "blur(8px)"
            }}
          >
            View the Research
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   ICONS
   ══════════════════════════════════════════════════════════════ */

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8.707 3.293a1 1 0 00-1.414 1.414L9.586 7H3a1 1 0 100 2h6.586l-2.293 2.293a1 1 0 101.414 1.414l4-4a1 1 0 000-1.414l-4-4z" />
    </svg>
  );
}

function CheckIcon({ color, size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill={color}>
      <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
    </svg>
  );
}

function CheckBadgeIcon({ color }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
      <path d="M12 2L14.4 8.4L21 12L14.4 15.6L12 22L9.6 15.6L3 12L9.6 8.4L12 2Z" />
    </svg>
  );
}

function GlobeIcon({ color }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );
}

function ClockIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function GridIcon({ color }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  );
}

function TargetIcon({ color }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function StarIcon({ color }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function DocumentIcon({ color }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function PathIcon({ color }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="18" r="3" />
      <path d="M6 9v6a3 3 0 003 3h6" />
    </svg>
  );
}

function ChatIcon({ color }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  );
}