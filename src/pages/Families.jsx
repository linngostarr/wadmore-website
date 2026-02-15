// src/pages/Families.jsx
// Wadmore Families - Understanding your child's cognitive development
// World-class design: warm, supportive, parent-friendly
// Brand accent: Teal (#3CB7AC)

import { useState, useEffect } from "react";
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
  useEffect(() => {
    document.title = "Families | Wadmore";
  }, []);

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
    <section className="min-h-[60vh] flex items-center relative overflow-hidden">
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
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full text-sm font-medium mb-8 backdrop-blur-sm"
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
              Know your child beyond their{" "}
              <span 
                className="relative inline-block"
                style={{ color: BRAND.teal }}
              >
                grades.
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
              className="text-lg md:text-xl leading-relaxed mb-3 max-w-xl"
              style={{ color: BRAND.steel }}
            >
              Grades capture outcomes, but not the cognitive performance producing them.
            </p>
            <p 
              className="text-base md:text-lg leading-relaxed mb-8 max-w-xl"
              style={{ color: BRAND.steel }}
            >
              A Wadmore Profile reveals how your child performs across{" "}
              <strong style={{ color: BRAND.slate }}>eight cognitive domains</strong>, 
              with practical guidance for home and school. Whether they're building confidence, finding their stride, or racing ahead.
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
                Register for Early Access
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
                { value: "15", label: "Developmental Bands", desc: "Foundation through expert" },
                { value: "360", label: "Unique Insights", desc: "Actionable guidance" },
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
            Understand your child. Support their growth.
          </h2>
          <p 
            className="text-xl"
            style={{ color: BRAND.steel }}
          >
            A Wadmore Profile gives you a detailed picture of how your child performs cognitively, so you can make better decisions about how to support and extend them every day.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: HomeIcon, 
              title: "Support at home", 
              description: "Research-grounded strategies matched to your child's profile. Know which approaches help, and why.",
              color: BRAND.teal
            },
            { 
              icon: CompassIcon, 
              title: "Guide their enrichment", 
              description: "Choose activities, resources, and experiences that match cognitive strengths and stretch growth areas.",
              color: BRAND.cerulean
            },
            { 
              icon: ChatIcon, 
              title: "Inform school conversations", 
              description: "When you do meet with teachers, you have shared evidence and shared language. Conversations move forward.",
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
            Wadmore profiles cognitive capability across eight research-grounded 
            domains, giving you the complete picture, not just a single number.
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
              No jargon. No percentiles without context. Just a clear, actionable 
              picture of your child's cognitive performance, written in plain language you can use.
            </p>
            
            <div className="space-y-4">
              {[
                { title: "Strength spotlight", desc: "Every profile leads with what's working well" },
                { title: "Growth opportunities", desc: "Areas for development framed positively" },
                { title: "Try at home activities", desc: "15+ practical activities matched to your child's current level" },
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
  const useCases = [
    { 
      icon: PuzzleIcon, 
      title: "Understand daily patterns", 
      desc: "See why some tasks flow and others stall. Strategies matched to the cognitive factors at play.",
      color: BRAND.teal 
    },
    { 
      icon: CompassIcon, 
      title: "Choose the right activities", 
      desc: "Match tutoring, enrichment, and extracurriculars to cognitive strengths and growth areas.",
      color: BRAND.cerulean 
    },
    { 
      icon: SparkIcon, 
      title: "Build on strengths", 
      desc: "Lead with what's working. Strategies pitched at the right level to build confidence and momentum.",
      color: BRAND.violet 
    },
    { 
      icon: UsersIcon, 
      title: "Understand sibling differences", 
      desc: "See why different children need different approaches. Not comparison, just clarity.",
      color: BRAND.teal 
    },
    { 
      icon: ChatBubbleIcon, 
      title: "Inform school conversations", 
      desc: "Shared evidence and shared language when you meet with teachers. One benefit of many.",
      color: BRAND.cerulean 
    },
    { 
      icon: TrendUpIcon, 
      title: "Track growth over time", 
      desc: "Reassess annually. Celebrate progress, adjust strategies, see how the profile evolves.",
      color: BRAND.violet 
    },
  ];

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
            In Practice
          </p>
          <h2 
            className="text-4xl md:text-5xl font-semibold mb-6"
            style={{ color: BRAND.slate }}
          >
            What families do with a Wadmore Profile
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((item) => (
            <div 
              key={item.title}
              className="group p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}` }}
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${item.color}10` }}
              >
                <item.icon color={item.color} />
              </div>
              <h3 
                className="font-semibold text-lg mb-2"
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
    { number: "2", title: "Assess", description: "Your child completes the adaptive assessment online. Engaging, not stressful." },
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
          {steps.map((step) => (
            <div key={step.number}>
              <div 
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6"
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
            Launch Pricing
          </p>
          <h2 
            className="text-4xl md:text-5xl font-semibold mb-6"
            style={{ color: BRAND.slate }}
          >
            Simple, transparent pricing
          </h2>
          <p 
            className="text-xl mb-4"
            style={{ color: BRAND.steel }}
          >
            No subscriptions. No hidden fees. Just understanding.
          </p>
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
              price: "$99", 
              unit: "/child", 
              desc: "One-time assessment", 
              features: ["Complete 8-domain profile", "Strength & growth analysis", "15+ home activities", "School conversation guide", "PDF & online access"],
              cta: "Register Interest",
              ctaLink: "/contact",
            },
            { 
              tier: "Family Package", 
              price: "$249", 
              unit: "", 
              desc: "For 3 children", 
              features: ["Complete 8-domain profile for each child", "Family dynamics overview", "Sibling comparison insights", "Shared activities for all", "PDF & online access"],
              cta: "Register Interest",
              ctaLink: "/contact",
            },
            { 
              tier: "Reassessment", 
              price: "$69", 
              unit: "/child", 
              desc: "Track growth over time", 
              features: ["Updated cognitive profile", "Growth comparison report", "New activity recommendations", "Longitudinal tracking", "Recommended annually"],
              informational: true,
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
                style={{ color: BRAND.teal }}
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
                      style={{ background: `${BRAND.teal}15` }}
                    >
                      <CheckIcon color={BRAND.teal} size={10} />
                    </div>
                    <span className="text-sm" style={{ color: BRAND.slate }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              {item.informational ? (
                <div 
                  className="block w-full text-center py-4 rounded-full text-sm font-medium"
                  style={{ 
                    background: `${BRAND.steel}08`,
                    color: BRAND.steel,
                  }}
                >
                  Available after initial assessment
                </div>
              ) : (
                <Link 
                  to={item.ctaLink}
                  className="block w-full text-center py-4 rounded-full text-base font-semibold transition-all duration-300 hover:scale-[1.02]"
                  style={{ 
                    background: BRAND.teal,
                    color: BRAND.white
                  }}
                >
                  {item.cta}
                </Link>
              )}
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
              If you don't find your profile valuable, we'll refund you, no questions asked.
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
    { question: "What ages is Wadmore suitable for?", answer: "Wadmore Families is designed for children aged 5-18. Our adaptive assessment automatically adjusts to your child's level, ensuring an appropriate and engaging experience regardless of age." },
    { question: "Is this an IQ test?", answer: "No. Wadmore profiles cognitive performance across eight domains. It's not designed to produce a single IQ score. We focus on building a detailed picture of cognitive capability, not ranking children against each other." },
    { question: "Is this about 'learning styles'?", answer: "No. 'Learning styles' (visual, auditory, kinaesthetic) have been debunked by educational research. Wadmore measures how your child actually processes information, their cognitive strengths and growth areas, not subjective preferences." },
    { question: "How long does the assessment take?", answer: "The assessment is designed to be completed in one session but can be paused if needed. Because it's adaptive and adjusts to your child's level, the length varies based on their responses." },
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
          Ready to know your child beyond their grades?
        </h2>
        <p 
          className="text-xl md:text-2xl mb-12 opacity-90"
          style={{ color: BRAND.white }}
        >
          Be among the first families with a Wadmore Profile. Launching March 2026.
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
            Register for Early Access
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

function HomeIcon({ color }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}


function PuzzleIcon({ color }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 01-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 10-3.214 3.214c.446.166.855.497.925.968a.979.979 0 01-.276.837l-1.61 1.61a2.404 2.404 0 01-1.705.707 2.402 2.402 0 01-1.704-.706l-1.568-1.568a1.026 1.026 0 00-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 11-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 00-.289-.877l-1.568-1.568A2.402 2.402 0 011.998 12c0-.617.236-1.234.706-1.704L4.315 8.685a.98.98 0 01.837-.276c.47.07.802.48.968.925a2.501 2.501 0 103.214-3.214c-.446-.166-.855-.497-.925-.968a.979.979 0 01.276-.837l1.61-1.61a2.404 2.404 0 011.705-.707c.618 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.969a2.5 2.5 0 113.237 3.237c-.464.18-.894.527-.967 1.02z" />
    </svg>
  );
}

function ChatBubbleIcon({ color }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7.9 20A9 9 0 104 16.1L2 22z" />
    </svg>
  );
}

function UsersIcon({ color }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}

function CompassIcon({ color }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  );
}

function SparkIcon({ color }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.937 15.5A2 2 0 0012 17.5a2 2 0 002.063-2A6.002 6.002 0 0020 10c0-3.314-3.582-6-8-6s-8 2.686-8 6a6.002 6.002 0 005.937 5.5z" />
      <path d="M12 17.5V22" />
      <path d="M8 21h8" />
    </svg>
  );
}

function TrendUpIcon({ color }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}