// src/pages/Families.jsx
// Wadmore Families - Understanding your child's cognitive development
// World-class design: warm, supportive, parent-friendly
// Brand accent: Teal (#3CB7AC)

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
  tealDark: "#2A9A91",
};

/* ══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════════════════════ */

export default function Families() {
  return (
    <Layout>
      <div className="w-full max-w-full overflow-x-hidden">
        <Hero />
        <WhyItMattersSection />
        <EightDomainsSection />
        <ProfilePreviewSection />
        <UseCasesSection />
        <HowItWorksSection />
        <PricingSection />
        <FAQSection />
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
      {/* Warm gradient background */}
      <div 
        className="absolute inset-0"
        style={{ 
          background: `linear-gradient(150deg, ${BRAND.cloud} 0%, #E8F6F5 40%, ${BRAND.cloud} 100%)`
        }}
      />
      
      {/* Decorative orbs */}
      <div 
        className="absolute top-10 right-[15%] w-[500px] h-[500px] pointer-events-none opacity-35"
        style={{
          background: `radial-gradient(circle at center, ${BRAND.teal}18, transparent 60%)`,
        }}
      />
      <div 
        className="absolute bottom-0 left-[5%] w-[400px] h-[400px] pointer-events-none opacity-25"
        style={{
          background: `radial-gradient(circle at center, ${BRAND.sage}20, transparent 60%)`,
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
                border: `1px solid ${BRAND.teal}25`,
                boxShadow: `0 4px 20px ${BRAND.teal}08`
              }}
            >
              <span 
                className="w-2.5 h-2.5 rounded-full animate-pulse"
                style={{ background: BRAND.teal }}
              />
              <span style={{ color: BRAND.slate }}>Wadmore for Families</span>
            </div>
            
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight mb-6"
              style={{ color: BRAND.slate }}
            >
              Understand your child's{" "}
              <span 
                className="relative inline-block"
                style={{ color: BRAND.teal }}
              >
                development.
                <svg 
                  className="absolute -bottom-1 left-0 w-full" 
                  height="6" 
                  viewBox="0 0 200 6" 
                  preserveAspectRatio="none"
                >
                  <path 
                    d="M0 5 Q50 1, 100 3 T200 2" 
                    fill="none" 
                    stroke={BRAND.teal} 
                    strokeWidth="2" 
                    strokeLinecap="round"
                    opacity="0.35"
                  />
                </svg>
              </span>
            </h1>
            
            <p 
              className="text-lg md:text-xl leading-relaxed mb-8 max-w-xl"
              style={{ color: BRAND.steel }}
            >
              Wadmore shows you your child's unique cognitive strengths and growth 
              areas — a <strong style={{ color: BRAND.slate }}>strength-based profile</strong> across 
              eight domains, with clear guidance you can use at 
              home and in conversations with teachers. Grounded in{" "}
              <strong style={{ color: BRAND.slate }}>50+ peer-reviewed sources</strong>.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                style={{ 
                  background: `linear-gradient(135deg, ${BRAND.teal} 0%, ${BRAND.tealDark} 100%)`,
                  color: BRAND.white,
                  boxShadow: `0 8px 30px ${BRAND.teal}35`
                }}
              >
                Get Started — $99
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </Link>
              <a 
                href="#how-it-works"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:bg-white hover:shadow-lg"
                style={{ 
                  background: `${BRAND.white}80`,
                  color: BRAND.slate,
                  border: `1px solid ${BRAND.dove}`,
                  backdropFilter: "blur(8px)"
                }}
              >
                How It Works
              </a>
            </div>
          </div>
          
          {/* Right: Stats card */}
          <div 
            className="rounded-3xl p-8 lg:p-10 relative overflow-hidden"
            style={{ 
              background: BRAND.white, 
              border: `1px solid ${BRAND.dove}`,
              boxShadow: `0 25px 60px ${BRAND.teal}08, 0 4px 20px ${BRAND.indigo}04`
            }}
          >
            {/* Decorative corner */}
            <div 
              className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
              style={{
                background: `linear-gradient(135deg, ${BRAND.teal}08, transparent)`,
                borderRadius: "0 0 0 100%"
              }}
            />
            
            <div className="grid grid-cols-2 gap-8 relative z-10">
              {[
                { value: "8", label: "Cognitive Domains", desc: "Complete picture" },
                { value: "15", label: "Developmental Bands", desc: "Growth journey" },
                { value: "45min", label: "Assessment", desc: "Engaging, not stressful" },
                { value: "24hrs", label: "Results", desc: "Fast insights" },
              ].map((stat) => (
                <div key={stat.label} className="group">
                  <div 
                    className="text-4xl lg:text-5xl font-bold mb-2 transition-transform duration-300 group-hover:scale-105"
                    style={{ color: BRAND.teal }}
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
                <HeartIcon color={BRAND.teal} />
              </div>
              <div>
                <div className="font-semibold text-sm" style={{ color: BRAND.slate }}>
                  Strength-based profiles
                </div>
                <div className="text-xs" style={{ color: BRAND.steel }}>
                  Celebrating what's working
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
   WHY IT MATTERS
   ══════════════════════════════════════════════════════════════ */

function WhyItMattersSection() {
  return (
    <section className="py-28 md:py-36" style={{ background: BRAND.white }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p 
            className="text-sm font-semibold uppercase tracking-widest mb-5"
            style={{ color: BRAND.teal }}
          >
            Why It Matters
          </p>
          <h2 
            className="text-4xl md:text-5xl font-semibold leading-tight mb-6"
            style={{ color: BRAND.slate }}
          >
            What understanding unlocks
          </h2>
          <p 
            className="text-xl"
            style={{ color: BRAND.steel }}
          >
            When you understand your child's cognitive development, everything changes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: HeartIcon, 
              title: "Less frustration", 
              description: "Stop guessing why homework is hard. Understand the cognitive factors at play and target support where it actually helps.",
              color: BRAND.teal
            },
            { 
              icon: ChatIcon, 
              title: "Better conversations", 
              description: "Walk into parent-teacher meetings with objective data. Create shared understanding and aligned support strategies.",
              color: BRAND.cerulean
            },
            { 
              icon: StarIcon, 
              title: "Targeted support", 
              description: "Know exactly which activities and approaches match your child's developmental level in each domain.",
              color: BRAND.violet
            },
          ].map((item) => (
            <div 
              key={item.title}
              className="group text-center p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{ background: BRAND.cloud, border: `1px solid ${BRAND.dove}` }}
            >
              <div 
                className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${item.color}12` }}
              >
                <item.icon color={item.color} />
              </div>
              <h3 
                className="font-semibold text-xl mb-3"
                style={{ color: BRAND.slate }}
              >
                {item.title}
              </h3>
              <p style={{ color: BRAND.steel }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   EIGHT DOMAINS
   ══════════════════════════════════════════════════════════════ */

function EightDomainsSection() {
  const clusters = {
    processing: { name: "Cognitive Processing", color: BRAND.cerulean, desc: "How your child handles information" },
    regulation: { name: "Cognitive Self-Regulation", color: BRAND.teal, desc: "How your child manages their thinking" },
    creative: { name: "Creative Thinking", color: BRAND.violet, desc: "How your child generates ideas" },
  };

  const domains = [
    { code: "AR", name: "Abstract Reasoning", desc: "Solving novel problems", cluster: "processing" },
    { code: "LS", name: "Logical Sequencing", desc: "Step-by-step thinking", cluster: "processing" },
    { code: "PS", name: "Processing Speed", desc: "Quick, accurate thinking", cluster: "processing" },
    { code: "MA", name: "Memory & Attention", desc: "Holding information while working", cluster: "processing" },
    { code: "EF", name: "Executive Functioning", desc: "Planning and organisation", cluster: "regulation" },
    { code: "MR", name: "Metacognition", desc: "Awareness of thinking", cluster: "regulation" },
    { code: "CM", name: "Cognitive Confidence", desc: "Persisting through challenge", cluster: "regulation" },
    { code: "CD", name: "Creativity", desc: "Original ideas", cluster: "creative" },
  ];

  return (
    <section 
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: BRAND.cloud }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p 
            className="text-sm font-semibold uppercase tracking-widest mb-5"
            style={{ color: BRAND.teal }}
          >
            Complete Coverage
          </p>
          <h2 
            className="text-3xl md:text-4xl font-semibold leading-tight mb-5"
            style={{ color: BRAND.slate }}
          >
            Eight domains of thinking
          </h2>
          <p 
            className="text-lg"
            style={{ color: BRAND.steel }}
          >
            Wadmore measures cognitive development across eight research-grounded 
            domains — giving you the complete picture, not just a single number.
          </p>
        </div>
        
        {/* Cluster legend */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10">
          {Object.entries(clusters).map(([key, cluster]) => (
            <div key={key} className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full" style={{ background: cluster.color }} />
              <span className="text-sm" style={{ color: BRAND.slate }}>
                <strong>{cluster.name}</strong>
              </span>
            </div>
          ))}
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {domains.map((domain) => {
            const cluster = clusters[domain.cluster];
            return (
              <div
                key={domain.code}
                className="group p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}` }}
              >
                <div 
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-sm font-bold mb-3 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${cluster.color}15`, color: cluster.color }}
                >
                  {domain.code}
                </div>
                <h3 className="font-semibold text-sm mb-1" style={{ color: BRAND.slate }}>
                  {domain.name}
                </h3>
                <p className="text-xs mb-2" style={{ color: BRAND.steel }}>
                  {domain.desc}
                </p>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full" style={{ background: cluster.color }} />
                  <span className="text-[10px]" style={{ color: BRAND.steel }}>{cluster.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   PROFILE PREVIEW
   ══════════════════════════════════════════════════════════════ */

function ProfilePreviewSection() {
  return (
    <section className="py-28 md:py-36" style={{ background: BRAND.white }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p 
              className="text-sm font-semibold uppercase tracking-widest mb-5"
              style={{ color: BRAND.teal }}
            >
              Clear Insights
            </p>
            <h2 
              className="text-4xl md:text-5xl font-semibold leading-tight mb-6"
              style={{ color: BRAND.slate }}
            >
              Profiles that make sense
            </h2>
            <p 
              className="text-xl mb-8 leading-relaxed"
              style={{ color: BRAND.steel }}
            >
              No jargon. No percentiles without context. Just clear, actionable 
              understanding of your child's cognitive development — written in plain language you can use.
            </p>
            
            <div className="space-y-4">
              {[
                { title: "Strength spotlight", desc: "Every profile leads with what's working well" },
                { title: "Growth opportunities", desc: "Areas for development framed positively" },
                { title: "Try at home activities", desc: "15+ practical activities matched to developmental level" },
                { title: "School conversation guide", desc: "Talking points for productive parent-teacher meetings" },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: `${BRAND.teal}15` }}
                  >
                    <CheckIcon color={BRAND.teal} size={12} />
                  </div>
                  <div>
                    <strong style={{ color: BRAND.slate }}>{item.title}:</strong>{" "}
                    <span style={{ color: BRAND.steel }}>{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Sample profile card */}
          <div 
            className="rounded-3xl p-8 relative overflow-hidden"
            style={{ 
              background: BRAND.cloud, 
              border: `1px solid ${BRAND.dove}`,
              boxShadow: `0 25px 60px ${BRAND.indigo}06`
            }}
          >
            <div className="text-sm font-semibold uppercase tracking-wider mb-6" style={{ color: BRAND.steel }}>
              Sample Profile Insight
            </div>
            
            {/* Strength */}
            <div 
              className="p-5 rounded-xl mb-4"
              style={{ background: `${BRAND.teal}08`, border: `1px solid ${BRAND.teal}20` }}
            >
              <div className="text-sm font-bold mb-2" style={{ color: BRAND.teal }}>
                STRENGTH: Abstract Reasoning (Band 7)
              </div>
              <p className="text-sm" style={{ color: BRAND.slate }}>
                Emma shows sophisticated pattern recognition across multiple contexts. 
                She can identify complex relationships and apply them to new situations 
                with growing independence.
              </p>
            </div>
            
            {/* Growth area */}
            <div 
              className="p-5 rounded-xl mb-4"
              style={{ background: `${BRAND.golden}08`, border: `1px solid ${BRAND.golden}25` }}
            >
              <div className="text-sm font-bold mb-2" style={{ color: BRAND.golden }}>
                GROWTH AREA: Executive Functioning (Band 4)
              </div>
              <p className="text-sm" style={{ color: BRAND.slate }}>
                Emma is developing her planning and organisation skills. She benefits 
                from external structure and visual checklists when managing multi-step tasks.
              </p>
            </div>
            
            {/* Try at home */}
            <div 
              className="p-5 rounded-xl"
              style={{ background: BRAND.white }}
            >
              <div className="text-sm font-bold mb-2" style={{ color: BRAND.slate }}>
                TRY AT HOME
              </div>
              <p className="text-sm" style={{ color: BRAND.steel }}>
                Use a visual "homework roadmap" with checkboxes. Break assignments into 
                3-4 steps and celebrate completing each step.
              </p>
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
  return (
    <section 
      className="py-28 md:py-36"
      style={{ background: BRAND.cloud }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p 
            className="text-sm font-semibold uppercase tracking-widest mb-5"
            style={{ color: BRAND.teal }}
          >
            Real Applications
          </p>
          <h2 
            className="text-4xl md:text-5xl font-semibold mb-6"
            style={{ color: BRAND.slate }}
          >
            Families use Wadmore for...
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Homework struggles", desc: "Understand why homework is hard and find approaches that actually work for your child's cognitive profile." },
            { title: "School conversations", desc: "Transform parent-teacher meetings with objective cognitive data and shared vocabulary." },
            { title: "Sibling differences", desc: "See why different children need different approaches — no comparison, just understanding." },
            { title: "Activity matching", desc: "Choose extracurriculars, games, and learning activities that match cognitive strengths." },
            { title: "Building confidence", desc: "Build cognitive confidence with activities pitched at exactly the right level." },
            { title: "Tracking growth", desc: "Reassess annually to celebrate progress and adjust support strategies over time." },
          ].map((item, i) => (
            <div 
              key={item.title}
              className="group p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}` }}
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   HOW IT WORKS
   ══════════════════════════════════════════════════════════════ */

function HowItWorksSection() {
  const steps = [
    { number: "1", title: "Purchase", description: "Choose individual or family package. Receive login credentials instantly." },
    { number: "2", title: "Assess", description: "Your child completes the 45-minute adaptive assessment. Engaging, not stressful." },
    { number: "3", title: "Receive", description: "Get your comprehensive profile within 24 hours. PDF and online access." },
    { number: "4", title: "Apply", description: "Use insights at home and school. Reassess annually to track growth." },
  ];

  return (
    <section id="how-it-works" className="py-28 md:py-36" style={{ background: BRAND.white }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p 
            className="text-sm font-semibold uppercase tracking-widest mb-5"
            style={{ color: BRAND.teal }}
          >
            Simple Process
          </p>
          <h2 
            className="text-4xl md:text-5xl font-semibold mb-6"
            style={{ color: BRAND.slate }}
          >
            How it works
          </h2>
          <p 
            className="text-xl"
            style={{ color: BRAND.steel }}
          >
            From assessment to actionable insights in four simple steps.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div 
                  className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5"
                  style={{ background: BRAND.dove }}
                />
              )}
              
              <div 
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 relative z-10"
                style={{ background: BRAND.teal, color: BRAND.white }}
              >
                {step.number}
              </div>
              <h3 
                className="font-semibold text-xl mb-3"
                style={{ color: BRAND.slate }}
              >
                {step.title}
              </h3>
              <p style={{ color: BRAND.steel }}>
                {step.description}
              </p>
            </div>
          ))}
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
    <section className="py-28 md:py-36" style={{ background: BRAND.cloud }}>
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p 
            className="text-sm font-semibold uppercase tracking-widest mb-5"
            style={{ color: BRAND.teal }}
          >
            Pricing
          </p>
          <h2 
            className="text-4xl md:text-5xl font-semibold mb-6"
            style={{ color: BRAND.slate }}
          >
            Simple, transparent pricing
          </h2>
          <p 
            className="text-xl"
            style={{ color: BRAND.steel }}
          >
            No subscriptions. No hidden fees. Just understanding.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { 
              tier: "Individual", 
              price: "$99", 
              unit: "/child", 
              desc: "One-time assessment", 
              features: ["Complete 8-domain profile", "Strength & growth analysis", "15+ home activities", "School conversation guide", "PDF & online access"],
              featured: false
            },
            { 
              tier: "Family Package", 
              price: "$249", 
              unit: "/family", 
              desc: "Up to 3 children", 
              features: ["Everything in Individual", "Family dynamics overview", "Sibling comparison insights", "Shared activities for all", "Priority support"],
              featured: true
            },
            { 
              tier: "Reassessment", 
              price: "$69", 
              unit: "/child", 
              desc: "Track growth over time", 
              features: ["Updated cognitive profile", "Growth comparison report", "New activity recommendations", "Progress celebration", "Recommended annually"],
              featured: false
            },
          ].map((item) => (
            <div 
              key={item.tier}
              className={`rounded-3xl p-8 relative transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${item.featured ? 'lg:-mt-4 lg:mb-4' : ''}`}
              style={{ 
                background: BRAND.white,
                border: item.featured ? `2px solid ${BRAND.teal}` : `1px solid ${BRAND.dove}`,
                boxShadow: item.featured ? `0 30px 60px ${BRAND.teal}12` : "none"
              }}
            >
              {item.featured && (
                <div 
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold"
                  style={{ background: BRAND.teal, color: BRAND.white }}
                >
                  MOST POPULAR
                </div>
              )}
              
              <div 
                className="text-sm font-semibold uppercase tracking-wider mb-4"
                style={{ color: item.featured ? BRAND.teal : BRAND.steel }}
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
              
              <ul className="space-y-4 mb-8">
                {item.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div 
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: `${item.featured ? BRAND.teal : BRAND.sage}15` }}
                    >
                      <CheckIcon color={item.featured ? BRAND.teal : BRAND.sage} size={10} />
                    </div>
                    <span className="text-sm" style={{ color: BRAND.slate }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Link 
                to="/contact"
                className="block w-full text-center py-4 rounded-full text-base font-semibold transition-all duration-300 hover:scale-[1.02]"
                style={{ 
                  background: item.featured ? BRAND.teal : BRAND.cloud,
                  color: item.featured ? BRAND.white : BRAND.slate
                }}
              >
                {item.tier === "Reassessment" ? "Learn More" : "Get Started"}
              </Link>
            </div>
          ))}
        </div>
        
        {/* Guarantee */}
        <div 
          className="mt-12 p-6 rounded-2xl text-center"
          style={{ background: `${BRAND.sage}12`, border: `1px solid ${BRAND.sage}30` }}
        >
          <p className="text-sm" style={{ color: BRAND.slate }}>
            <strong>100% satisfaction guarantee.</strong>{" "}
            <span style={{ color: BRAND.steel }}>
              If you don't find your profile valuable, we'll refund you — no questions asked.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   FAQ
   ══════════════════════════════════════════════════════════════ */

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  
  const faqs = [
    { question: "What ages is Wadmore suitable for?", answer: "Wadmore Families is designed for children aged 5-18. Our adaptive assessment automatically adjusts to your child's developmental level, ensuring an appropriate and engaging experience regardless of age." },
    { question: "Is this an IQ test?", answer: "No. Wadmore measures cognitive development across eight domains — it's not designed to produce a single IQ score. We focus on how thinking develops, not ranking children against each other." },
    { question: "Is this about 'learning styles'?", answer: "No. 'Learning styles' (visual, auditory, kinaesthetic) have been debunked by educational research. Wadmore measures how your child actually processes information — their cognitive strengths and developmental areas — not subjective preferences." },
    { question: "How long does the assessment take?", answer: "Most children complete the assessment in 45-60 minutes. It's designed to be completed in one sitting, but can be paused if needed. The assessment is adaptive, so the length varies." },
    { question: "Will my child find it stressful?", answer: "We've designed Wadmore to be engaging rather than stressful. There's no time pressure on individual items, the difficulty adjusts to your child's level, and we use varied formats to maintain engagement." },
    { question: "Can I share results with my child's school?", answer: "Absolutely. Your profile includes a school conversation guide specifically designed to help you discuss your child's cognitive profile with teachers in productive ways." },
  ];

  return (
    <section className="py-28 md:py-36" style={{ background: BRAND.white }}>
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <p 
            className="text-sm font-semibold uppercase tracking-widest mb-5"
            style={{ color: BRAND.teal }}
          >
            Questions
          </p>
          <h2 
            className="text-4xl md:text-5xl font-semibold"
            style={{ color: BRAND.slate }}
          >
            Common questions
          </h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="rounded-2xl overflow-hidden transition-all duration-300"
              style={{ 
                background: BRAND.cloud, 
                border: `1px solid ${openIndex === index ? BRAND.teal : BRAND.dove}`,
                boxShadow: openIndex === index ? `0 10px 30px ${BRAND.teal}08` : "none"
              }}
            >
              <button 
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold" style={{ color: BRAND.slate }}>
                  {faq.question}
                </span>
                <ChevronIcon open={openIndex === index} />
              </button>
              {openIndex === index && (
                <div 
                  className="px-6 pb-5"
                  style={{ color: BRAND.steel }}
                >
                  {faq.answer}
                </div>
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
        background: `linear-gradient(135deg, ${BRAND.teal} 0%, ${BRAND.tealDark} 100%)`
      }}
    >
      {/* Decorative elements */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at center, white 1.5px, transparent 1.5px)`,
          backgroundSize: "40px 40px"
        }}
      />
      
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center relative z-10">
        <h2 
          className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight"
          style={{ color: BRAND.white }}
        >
          Ready to understand your child's cognitive development?
        </h2>
        <p 
          className="text-xl md:text-2xl mb-12 opacity-90"
          style={{ color: BRAND.white }}
        >
          Get the complete cognitive picture — strength-based, actionable, and designed for families.
        </p>
        
        <div className="flex flex-wrap justify-center gap-5">
          <Link 
            to="/contact"
            className="group inline-flex items-center gap-3 px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
            style={{ 
              background: BRAND.white, 
              color: BRAND.teal,
              boxShadow: "0 8px 30px rgba(0,0,0,0.15)"
            }}
          >
            Get Started — $99
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

function ChevronIcon({ open }) {
  return (
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 20 20" 
      fill={BRAND.steel}
      className={`flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
    >
      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  );
}

function HeartIcon({ color }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  );
}

function ChatIcon({ color }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  );
}

function StarIcon({ color }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}