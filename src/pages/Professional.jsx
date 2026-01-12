// src/pages/Professional.jsx
// Wadmore Professional - Cognitive intelligence for teams
// World-class design: modern, sophisticated, business-focused
// Brand accent: Violet (#786CFF)

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
  violetDark: "#6358E0",
};

/* ══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════════════════════ */

export default function Professional() {
  return (
    <Layout>
      <div className="w-full max-w-full overflow-x-hidden">
        <Hero />
        <CapabilitySection />
        <UseCasesSection />
        <TeamDynamicsSection />
        <LifespanSection />
        <PricingSection />
        <CTASection />
      </div>
    </Layout>
  );
}

/* ══════════════════════════════════════════════════════════════
   HERO
   ══════════════════════════════════════════════════════════════ */

function Hero() {
  return (
    <section className="min-h-[70vh] flex items-center relative overflow-hidden">
      {/* Sophisticated gradient background */}
      <div 
        className="absolute inset-0"
        style={{ 
          background: `linear-gradient(150deg, ${BRAND.cloud} 0%, #F0EFFF 40%, ${BRAND.cloud} 100%)`
        }}
      />
      
      {/* Decorative orbs */}
      <div 
        className="absolute top-0 right-[5%] w-[600px] h-[600px] pointer-events-none opacity-30"
        style={{
          background: `radial-gradient(circle at center, ${BRAND.violet}18, transparent 60%)`,
        }}
      />
      <div 
        className="absolute bottom-20 left-[10%] w-[400px] h-[400px] pointer-events-none opacity-20"
        style={{
          background: `radial-gradient(circle at center, ${BRAND.indigo}15, transparent 60%)`,
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Content */}
          <div>
            {/* Eyebrow badge */}
            <div 
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full text-sm font-medium mb-10 backdrop-blur-sm"
              style={{ 
                background: `${BRAND.white}90`, 
                border: `1px solid ${BRAND.violet}25`,
                boxShadow: `0 4px 20px ${BRAND.violet}08`
              }}
            >
              <span 
                className="w-2.5 h-2.5 rounded-full animate-pulse"
                style={{ background: BRAND.violet }}
              />
              <span style={{ color: BRAND.slate }}>Wadmore Professional</span>
            </div>
            
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight mb-6"
              style={{ color: BRAND.slate }}
            >
              Build{" "}
              <span 
                className="relative inline-block"
                style={{ color: BRAND.violet }}
              >
                high-performing
                <svg 
                  className="absolute -bottom-1 left-0 w-full" 
                  height="6" 
                  viewBox="0 0 280 6" 
                  preserveAspectRatio="none"
                >
                  <path 
                    d="M0 5 Q70 1, 140 3 T280 2" 
                    fill="none" 
                    stroke={BRAND.violet} 
                    strokeWidth="2" 
                    strokeLinecap="round"
                    opacity="0.35"
                  />
                </svg>
              </span>
              {" "}teams.
            </h1>
            
            <p 
              className="text-lg md:text-xl leading-relaxed mb-8 max-w-xl"
              style={{ color: BRAND.steel }}
            >
              Great teams aren't accidental. Wadmore maps{" "}
              <strong style={{ color: BRAND.slate }}>cognitive development</strong> across 
              eight domains, so you can compose teams with complementary strengths, 
              target development where it matters, and hire for genuine capability fit. 
              The same rigorous framework trusted in education, grounded in{" "}
              <strong style={{ color: BRAND.slate }}>50+ peer-reviewed sources</strong>.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                style={{ 
                  background: `linear-gradient(135deg, ${BRAND.violet} 0%, ${BRAND.violetDark} 100%)`,
                  color: BRAND.white,
                  boxShadow: `0 8px 30px ${BRAND.violet}35`
                }}
              >
                Register Interest
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </Link>
              <a 
                href="#use-cases"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:bg-white hover:shadow-lg"
                style={{ 
                  background: `${BRAND.white}80`,
                  color: BRAND.slate,
                  border: `1px solid ${BRAND.dove}`,
                  backdropFilter: "blur(8px)"
                }}
              >
                Explore Use Cases
              </a>
            </div>
          </div>
          
          {/* Right: Stats card */}
          <div 
            className="rounded-3xl p-8 lg:p-10 relative overflow-hidden"
            style={{ 
              background: BRAND.white, 
              border: `1px solid ${BRAND.dove}`,
              boxShadow: `0 25px 60px ${BRAND.violet}08, 0 4px 20px ${BRAND.indigo}04`
            }}
          >
            {/* Decorative corner */}
            <div 
              className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
              style={{
                background: `linear-gradient(135deg, ${BRAND.violet}08, transparent)`,
                borderRadius: "0 0 0 100%"
              }}
            />
            
            <div className="grid grid-cols-2 gap-8 relative z-10">
              {[
                { value: "8", label: "Cognitive Domains", desc: "Complete capability picture" },
                { value: "15", label: "Developmental Bands", desc: "Graduate to expert" },
                { value: "360", label: "Constructs", desc: "Granular insights" },
                { value: "25min", label: "Assessment", desc: "Efficient, professional" },
              ].map((stat) => (
                <div key={stat.label} className="group">
                  <div 
                    className="text-4xl lg:text-5xl font-bold mb-2 transition-transform duration-300 group-hover:scale-105"
                    style={{ color: BRAND.violet }}
                  >
                    {stat.value}
                  </div>
                  <div className="font-semibold text-sm mb-0.5" style={{ color: BRAND.slate }}>
                    {stat.label}
                  </div>
                  <div className="text-xs" style={{ color: BRAND.steel }}>
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
                <CheckBadgeIcon color={BRAND.violet} />
              </div>
              <div>
                <div className="font-semibold text-sm" style={{ color: BRAND.slate }}>
                  Measures capability
                </div>
                <div className="text-xs" style={{ color: BRAND.steel }}>
                  Not just preferences or self-perception
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
   CAPABILITY SECTION
   ══════════════════════════════════════════════════════════════ */

function CapabilitySection() {
  return (
    <section className="py-28 md:py-36" style={{ background: BRAND.white }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p 
              className="text-sm font-semibold uppercase tracking-widest mb-5"
              style={{ color: BRAND.violet }}
            >
              The Difference
            </p>
            <h2 
              className="text-4xl md:text-5xl font-semibold leading-tight mb-6"
              style={{ color: BRAND.slate }}
            >
              Capability, not just preference
            </h2>
            <p 
              className="text-xl mb-6 leading-relaxed"
              style={{ color: BRAND.steel }}
            >
              Many tools measure how people <em>describe</em> themselves. But 
              self-perception isn't performance. Wadmore measures how people actually 
              process information, solve problems, and adapt to complexity.
            </p>
            <p 
              className="text-lg mb-8 leading-relaxed"
              style={{ color: BRAND.steel }}
            >
              The result? <strong style={{ color: BRAND.slate }}>Data you can use for 
              real decisions</strong> about team composition, development priorities, 
              and hiring, not just conversation starters.
            </p>
            
            <div className="space-y-4">
              {[
                { title: "IRT/Rasch psychometrics", desc: "Same rigour as clinical and educational assessments" },
                { title: "Eight cognitive domains", desc: "Complete picture including EF, Memory, Metacognition" },
                { title: "360 construct-level insights", desc: "Specific, actionable development recommendations" },
                { title: "Reliability α≥0.85", desc: "Professional-grade measurement you can trust" },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: `${BRAND.violet}15` }}
                  >
                    <CheckIcon color={BRAND.violet} size={12} />
                  </div>
                  <div>
                    <strong style={{ color: BRAND.slate }}>{item.title}:</strong>{" "}
                    <span style={{ color: BRAND.steel }}>{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Profile example */}
          <div 
            className="rounded-3xl p-8 relative overflow-hidden"
            style={{ 
              background: BRAND.cloud, 
              border: `1px solid ${BRAND.dove}`,
              boxShadow: `0 25px 60px ${BRAND.indigo}06`
            }}
          >
            <div className="text-sm font-semibold uppercase tracking-wider mb-6" style={{ color: BRAND.steel }}>
              Example: Individual Profile
            </div>
            
            <div className="space-y-4">
              {[
                { domain: "Abstract Reasoning", level: "Band 11", desc: "Strategic pattern recognition", color: BRAND.sage },
                { domain: "Executive Functioning", level: "Band 9", desc: "Managing growing complexity", color: BRAND.golden },
                { domain: "Metacognition", level: "Band 12", desc: "High self-awareness", color: BRAND.sage },
                { domain: "Creativity", level: "Band 10", desc: "Strong divergent thinking", color: BRAND.sage },
              ].map((item) => (
                <div 
                  key={item.domain}
                  className="p-5 rounded-xl transition-all duration-300 hover:shadow-md"
                  style={{ background: BRAND.white }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold" style={{ color: BRAND.slate }}>
                      {item.domain}
                    </span>
                    <span 
                      className="text-xs font-bold px-3 py-1 rounded-full"
                      style={{ background: `${BRAND.violet}15`, color: BRAND.violet }}
                    >
                      {item.level}
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
   USE CASES
   ══════════════════════════════════════════════════════════════ */

function UseCasesSection() {
  const [activeCase, setActiveCase] = useState(0);
  
  const cases = [
    { title: "Team Formation", desc: "Build cognitively diverse teams with complementary strengths. Know where gaps exist before they become problems.", icon: GridIcon },
    { title: "Leadership Development", desc: "Target development investments where they'll have the most impact. Move beyond generic leadership training.", icon: StarIcon },
    { title: "Hiring & Selection", desc: "Add cognitive capability data to your selection process. Complement CVs and interviews with objective measurement.", icon: UsersIcon },
    { title: "Change Management", desc: "Understand how your people process change and complexity. Tailor communication and support accordingly.", icon: RefreshIcon },
    { title: "Succession Planning", desc: "Identify cognitive capabilities needed for future roles. Develop people toward specific requirements.", icon: TrendIcon },
    { title: "Team Effectiveness", desc: "Diagnose why teams struggle. Often it's cognitive mismatch, not personality conflict.", icon: TargetIcon },
  ];
  
  return (
    <section 
      id="use-cases"
      className="py-28 md:py-36"
      style={{ background: BRAND.cloud }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p 
            className="text-sm font-semibold uppercase tracking-widest mb-5"
            style={{ color: BRAND.violet }}
          >
            Applications
          </p>
          <h2 
            className="text-4xl md:text-5xl font-semibold mb-6"
            style={{ color: BRAND.slate }}
          >
            How organisations use Wadmore
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
                  background: isActive ? BRAND.white : BRAND.white,
                  border: `1px solid ${isActive ? BRAND.violet : BRAND.dove}`,
                  boxShadow: isActive ? `0 20px 40px ${BRAND.violet}10` : "none",
                  transform: isActive ? "translateY(-4px)" : "translateY(0)"
                }}
              >
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300"
                  style={{ background: isActive ? `${BRAND.violet}15` : `${BRAND.steel}08` }}
                >
                  <Icon color={isActive ? BRAND.violet : BRAND.steel} />
                </div>
                <h3 
                  className="font-semibold text-xl mb-3"
                  style={{ color: BRAND.slate }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: BRAND.steel }}>
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
   TEAM DYNAMICS
   ══════════════════════════════════════════════════════════════ */

function TeamDynamicsSection() {
  return (
    <section className="py-28 md:py-36" style={{ background: BRAND.white }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p 
            className="text-sm font-semibold uppercase tracking-widest mb-5"
            style={{ color: BRAND.violet }}
          >
            Team Intelligence
          </p>
          <h2 
            className="text-4xl md:text-5xl font-semibold mb-6"
            style={{ color: BRAND.slate }}
          >
            Cognitive diversity that drives performance
          </h2>
          <p 
            className="text-xl"
            style={{ color: BRAND.steel }}
          >
            High-performing teams aren't cognitively homogeneous. They have 
            complementary strengths that cover each other's gaps.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Team cognitive map */}
          <div 
            className="p-8 rounded-3xl"
            style={{ background: BRAND.cloud, border: `1px solid ${BRAND.dove}` }}
          >
            <h3 className="font-semibold text-xl mb-6" style={{ color: BRAND.slate }}>
              Team Cognitive Map
            </h3>
            <p className="text-sm mb-6" style={{ color: BRAND.steel }}>
              See your team's collective cognitive profile at a glance. Identify 
              strengths, development areas, and where you might need different capabilities.
            </p>
            <div className="grid grid-cols-4 gap-3">
              {[
                { code: "AR", strength: "high" },
                { code: "LS", strength: "high" },
                { code: "EF", strength: "high" },
                { code: "MA", strength: "medium" },
                { code: "PS", strength: "medium" },
                { code: "MR", strength: "medium" },
                { code: "CM", strength: "low" },
                { code: "CD", strength: "low" },
              ].map((item) => (
                <div 
                  key={item.code}
                  className="text-center p-3 rounded-xl transition-all duration-300 hover:scale-105"
                  style={{ 
                    background: item.strength === "high" ? `${BRAND.sage}20` : 
                               item.strength === "medium" ? `${BRAND.golden}15` : 
                               `${BRAND.violet}10`
                  }}
                >
                  <div className="text-sm font-bold mb-1" style={{ color: BRAND.slate }}>
                    {item.code}
                  </div>
                  <div className="text-xs capitalize" style={{ color: BRAND.steel }}>
                    {item.strength === "high" ? "Strong" : item.strength === "medium" ? "Developing" : "Gap"}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Collaboration insights */}
          <div 
            className="p-8 rounded-3xl"
            style={{ background: BRAND.cloud, border: `1px solid ${BRAND.dove}` }}
          >
            <h3 className="font-semibold text-xl mb-6" style={{ color: BRAND.slate }}>
              Collaboration Insights
            </h3>
            <p className="text-sm mb-6" style={{ color: BRAND.steel }}>
              Understand how different cognitive profiles work together. Anticipate 
              friction points and leverage complementary strengths.
            </p>
            <div className="space-y-4">
              {[
                { pair: "High AR + Lower EF", insight: "Strong analysis, may need project structure support" },
                { pair: "High CD + High MR", insight: "Creative with strong self-direction" },
                { pair: "High LS + High EF", insight: "Systematic and well-organised" },
              ].map((item) => (
                <div 
                  key={item.pair}
                  className="p-4 rounded-xl transition-all duration-300 hover:shadow-md"
                  style={{ background: BRAND.white }}
                >
                  <div className="text-xs font-bold mb-1" style={{ color: BRAND.violet }}>
                    {item.pair}
                  </div>
                  <div className="text-sm" style={{ color: BRAND.steel }}>
                    {item.insight}
                  </div>
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
   LIFESPAN SECTION
   ══════════════════════════════════════════════════════════════ */

function LifespanSection() {
  return (
    <section className="py-28 md:py-36" style={{ background: BRAND.cloud }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p 
              className="text-sm font-semibold uppercase tracking-widest mb-5"
              style={{ color: BRAND.violet }}
            >
              Career-Spanning
            </p>
            <h2 
              className="text-4xl md:text-5xl font-semibold leading-tight mb-6"
              style={{ color: BRAND.slate }}
            >
              Assessment that grows with careers
            </h2>
            <p 
              className="text-xl mb-6 leading-relaxed"
              style={{ color: BRAND.steel }}
            >
              Wadmore's 15-band framework extends from early capability through to 
              expert-level mastery, making it relevant across entire careers, from 
              graduate hire to senior leadership.
            </p>
            <p 
              className="text-lg mb-8 leading-relaxed"
              style={{ color: BRAND.steel }}
            >
              The same framework that helps schools understand students helps 
              organisations understand professionals. One coherent assessment 
              platform across the lifespan.
            </p>
            
            {/* Band ranges */}
            <div 
              className="p-6 rounded-2xl"
              style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}` }}
            >
              <div className="text-sm font-semibold mb-4" style={{ color: BRAND.slate }}>
                Professional Developmental Bands
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { bands: "7-9", label: "Entry Level", desc: "Graduate to mid-career" },
                  { bands: "10-12", label: "Professional", desc: "Senior to executive" },
                  { bands: "13-15", label: "Expert", desc: "Thought leaders" },
                ].map((item) => (
                  <div 
                    key={item.bands}
                    className="p-4 rounded-xl"
                    style={{ background: BRAND.cloud }}
                  >
                    <div className="text-2xl font-bold mb-1" style={{ color: BRAND.violet }}>
                      {item.bands}
                    </div>
                    <div className="text-xs font-semibold mb-0.5" style={{ color: BRAND.slate }}>
                      {item.label}
                    </div>
                    <div className="text-xs" style={{ color: BRAND.steel }}>
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Development pathway example */}
          <div 
            className="rounded-3xl p-8 relative overflow-hidden"
            style={{ 
              background: BRAND.white, 
              border: `1px solid ${BRAND.dove}`,
              boxShadow: `0 25px 60px ${BRAND.indigo}06`
            }}
          >
            <div className="text-sm font-semibold uppercase tracking-wider mb-6" style={{ color: BRAND.steel }}>
              Example: Development Pathway
            </div>
            
            <div 
              className="p-5 rounded-xl mb-5"
              style={{ background: BRAND.cloud }}
            >
              <div className="text-base font-semibold mb-3" style={{ color: BRAND.slate }}>
                Sarah, Senior Manager
              </div>
              <div className="space-y-2">
                {[
                  { domain: "Abstract Reasoning", level: "Band 11", color: BRAND.sage },
                  { domain: "Executive Functioning", level: "Band 9", color: BRAND.golden },
                  { domain: "Metacognition", level: "Band 12", color: BRAND.sage },
                ].map((item) => (
                  <div key={item.domain} className="flex justify-between text-sm">
                    <span style={{ color: BRAND.steel }}>{item.domain}</span>
                    <span style={{ color: item.color }}>{item.level}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div 
              className="p-5 rounded-xl"
              style={{ background: `${BRAND.violet}08`, border: `1px solid ${BRAND.violet}20` }}
            >
              <div className="text-sm font-bold mb-2" style={{ color: BRAND.violet }}>
                DEVELOPMENT RECOMMENDATION
              </div>
              <p className="text-sm" style={{ color: BRAND.slate }}>
                Leverage strong analytical and metacognitive capabilities for strategic roles. 
                Focus development on Executive Functioning, delegation frameworks and project 
                management systems will support transition to executive level.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   PRICING
   ══════════════════════════════════════════════════════════════ */

function PricingSection() {
  return (
    <section className="py-28 md:py-36" style={{ background: BRAND.white }}>
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p 
            className="text-sm font-semibold uppercase tracking-widest mb-5"
            style={{ color: BRAND.violet }}
          >
            Launch Pricing
          </p>
          <h2 
            className="text-4xl md:text-5xl font-semibold mb-6"
            style={{ color: BRAND.slate }}
          >
            Pricing that scales with your needs
          </h2>
          <p 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
            style={{ background: `${BRAND.indigo}10`, color: BRAND.indigo }}
          >
            <span className="w-2 h-2 rounded-full" style={{ background: BRAND.indigo }} />
            Available March 2026
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { 
              tier: "Individual", 
              price: "$199", 
              unit: "/person", 
              desc: "One-time assessment", 
              features: ["Complete 8-domain profile", "Individual development plan", "PDF & dashboard access", "Email support"],
            },
            { 
              tier: "Team", 
              price: "$149", 
              unit: "/person", 
              desc: "5–25 people", 
              features: ["Complete 8-domain profile", "Individual development plan", "Team cognitive map", "Collaboration insights", "Priority support"],
            },
            { 
              tier: "Enterprise", 
              price: "Custom", 
              unit: "", 
              desc: "25+ people", 
              features: ["Complete 8-domain profile", "Individual development plan", "Organisation-wide analytics", "Dedicated account manager", "Custom integrations"],
            },
          ].map((item) => (
            <div 
              key={item.tier}
              className="rounded-3xl p-8 relative transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ 
                background: BRAND.white,
                border: `1px solid ${BRAND.dove}`,
              }}
            >
              <div 
                className="text-sm font-semibold uppercase tracking-wider mb-4"
                style={{ color: BRAND.violet }}
              >
                {item.tier}
              </div>
              
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl font-bold" style={{ color: BRAND.slate }}>
                  {item.price}
                </span>
                <span className="text-xl" style={{ color: BRAND.steel }}>
                  {item.unit}
                </span>
              </div>
              
              <p className="text-sm mb-8" style={{ color: BRAND.steel }}>
                {item.desc}
              </p>
              
              <ul className="space-y-4">
                {item.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div 
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: `${BRAND.violet}15` }}
                    >
                      <CheckIcon color={BRAND.violet} size={10} />
                    </div>
                    <span className="text-sm" style={{ color: BRAND.slate }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              {item.tier === "Enterprise" && (
                <Link 
                  to="/contact"
                  className="mt-8 block w-full text-center py-4 rounded-full text-base font-semibold transition-all duration-300 hover:scale-[1.02]"
                  style={{ background: BRAND.violet, color: BRAND.white }}
                >
                  Register Interest
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   CTA
   ══════════════════════════════════════════════════════════════ */

function CTASection() {
  return (
    <section 
      className="py-32 md:py-40 relative overflow-hidden"
      style={{ 
        background: `linear-gradient(135deg, ${BRAND.violet} 0%, ${BRAND.violetDark} 100%)`
      }}
    >
      <div 
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at center, white 1.5px, transparent 1.5px)`,
          backgroundSize: "50px 50px"
        }}
      />
      
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center relative z-10">
        <h2 
          className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight"
          style={{ color: BRAND.white }}
        >
          Ready to build high-performing teams?
        </h2>
        <p 
          className="text-xl md:text-2xl mb-12 opacity-90"
          style={{ color: BRAND.white }}
        >
          Launching March 2026. Register now for early access.
        </p>
        
        <div className="flex flex-wrap justify-center gap-5">
          <Link 
            to="/contact"
            className="group inline-flex items-center gap-3 px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
            style={{ 
              background: BRAND.white, 
              color: BRAND.violet,
              boxShadow: "0 8px 30px rgba(0,0,0,0.15)"
            }}
          >
            Register Interest
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
            Learn About the Science
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
  return <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor"><path d="M8.707 3.293a1 1 0 00-1.414 1.414L9.586 7H3a1 1 0 100 2h6.586l-2.293 2.293a1 1 0 101.414 1.414l4-4a1 1 0 000-1.414l-4-4z" /></svg>;
}

function CheckIcon({ color, size = 14 }) {
  return <svg width={size} height={size} viewBox="0 0 16 16" fill={color}><path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" /></svg>;
}

function CheckBadgeIcon({ color }) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /><polyline points="9 12 11 14 15 10" /></svg>;
}

function GridIcon({ color }) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>;
}

function StarIcon({ color }) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>;
}

function UsersIcon({ color }) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>;
}

function RefreshIcon({ color }) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" /></svg>;
}

function TrendIcon({ color }) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>;
}

function TargetIcon({ color }) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>;
}