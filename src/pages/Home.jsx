// src/pages/Home.jsx
// Wadmore Landing Page - World-class design
// Premium, refined aesthetic with meaningful interactions

import { useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import PersonaGallery from "../components/PersonaGallery";

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
  
  indigoLight: "#4a5a94",
  indigoDark: "#2a3259",
  tealDark: "#2A9A91",
  ceruleanDark: "#4A75D9",
  violetDark: "#6358E0",
};

/* ══════════════════════════════════════════════════════════════
   15-BAND COLOUR CONTINUUM
   ══════════════════════════════════════════════════════════════ */

const BAND_COLORS = [
  "#C8EEE4", "#AEE7DA", "#8DDACA", "#6ECDBC", "#3CB7AC",
  "#A4D5F7", "#7CBFF5", "#5B8BF7", "#4378EE", "#2C5ED6",
  "#3F4FB2", "#384275", "#786CFF", "#6A5BE8", "#5747CC",
];

const BAND_TEXT = [
  BRAND.slate, BRAND.slate, BRAND.slate, BRAND.slate, "#ffffff",
  BRAND.slate, BRAND.slate, "#ffffff", "#ffffff", "#ffffff",
  "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff",
];

/* ══════════════════════════════════════════════════════════════
   DOMAIN ICONS
   ══════════════════════════════════════════════════════════════ */

const DomainIcons = {
  AR: () => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="12" r="6" />
      <circle cx="12" cy="36" r="6" />
      <circle cx="36" cy="36" r="6" />
      <line x1="24" y1="18" x2="15" y2="31" />
      <line x1="24" y1="18" x2="33" y2="31" />
      <line x1="18" y1="36" x2="30" y2="36" />
    </svg>
  ),
  LS: () => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 40 L8 32 L16 32 L16 24 L24 24 L24 16 L32 16 L32 8 L40 8" />
      <circle cx="8" cy="40" r="3" fill="currentColor" />
      <circle cx="40" cy="8" r="3" fill="currentColor" />
    </svg>
  ),
  PS: () => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M26 4 L12 24 L22 24 L20 44 L36 20 L26 20 Z" fill="currentColor" opacity="0.15" />
      <path d="M26 4 L12 24 L22 24 L20 44 L36 20 L26 20 Z" />
    </svg>
  ),
  MA: () => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="24" r="20" opacity="0.3" />
      <circle cx="24" cy="24" r="14" opacity="0.5" />
      <circle cx="24" cy="24" r="8" />
      <circle cx="24" cy="24" r="3" fill="currentColor" />
    </svg>
  ),
  EF: () => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="8" r="5" />
      <circle cx="12" cy="26" r="4" />
      <circle cx="36" cy="26" r="4" />
      <circle cx="6" cy="40" r="3" />
      <circle cx="18" cy="40" r="3" />
      <circle cx="30" cy="40" r="3" />
      <circle cx="42" cy="40" r="3" />
      <line x1="24" y1="13" x2="24" y2="18" />
      <line x1="24" y1="18" x2="12" y2="22" />
      <line x1="24" y1="18" x2="36" y2="22" />
      <line x1="12" y1="30" x2="6" y2="37" />
      <line x1="12" y1="30" x2="18" y2="37" />
      <line x1="36" y1="30" x2="30" y2="37" />
      <line x1="36" y1="30" x2="42" y2="37" />
    </svg>
  ),
  MR: () => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="24" r="16" />
      <path d="M24 14 C30 14, 34 18, 34 24 C34 30, 30 34, 24 34" />
      <path d="M24 18 C27 18, 30 21, 30 24 C30 27, 27 30, 24 30" />
      <circle cx="24" cy="24" r="4" fill="currentColor" />
      <path d="M20 12 L24 8 L28 12" />
    </svg>
  ),
  CM: () => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="20" r="12" />
      <path d="M16 44 L24 36 L32 44" />
      <path d="M18 20 L22 24 L30 16" />
    </svg>
  ),
  CD: () => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="24" r="8" fill="currentColor" opacity="0.15" />
      <circle cx="24" cy="24" r="8" />
      <line x1="24" y1="4" x2="24" y2="12" />
      <line x1="24" y1="36" x2="24" y2="44" />
      <line x1="4" y1="24" x2="12" y2="24" />
      <line x1="36" y1="24" x2="44" y2="24" />
      <line x1="9.86" y1="9.86" x2="15.52" y2="15.52" />
      <line x1="32.48" y1="32.48" x2="38.14" y2="38.14" />
      <line x1="9.86" y1="38.14" x2="15.52" y2="32.48" />
      <line x1="32.48" y1="15.52" x2="38.14" y2="9.86" />
    </svg>
  ),
};

/* ══════════════════════════════════════════════════════════════
   DATA
   ══════════════════════════════════════════════════════════════ */

const DOMAINS = [
  { id: "abstract", code: "AR", name: "Abstract Reasoning", tagline: "Pattern recognition", cluster: "processing", color: BRAND.cerulean },
  { id: "logical", code: "LS", name: "Logical Sequencing", tagline: "Step-by-step thinking", cluster: "processing", color: BRAND.cerulean },
  { id: "speed", code: "PS", name: "Processing Speed", tagline: "Cognitive efficiency", cluster: "processing", color: BRAND.cerulean },
  { id: "memory", code: "MA", name: "Memory & Attention", tagline: "Focus and recall", cluster: "processing", color: BRAND.indigo },
  { id: "executive", code: "EF", name: "Executive Functioning", tagline: "Planning and flexibility", cluster: "regulation", color: BRAND.teal },
  { id: "metacognition", code: "MR", name: "Metacognition", tagline: "Thinking about thinking", cluster: "regulation", color: BRAND.teal },
  { id: "confidence", code: "CM", name: "Cognitive Confidence", tagline: "Learning mindset", cluster: "regulation", color: BRAND.violet },
  { id: "creativity", code: "CD", name: "Creativity", tagline: "Divergent thinking", cluster: "creative", color: BRAND.violet },
];

const CLUSTERS = {
  processing: { name: "Cognitive Processing", color: BRAND.cerulean },
  regulation: { name: "Cognitive Self-Regulation", color: BRAND.teal },
  creative: { name: "Creative Thinking", color: BRAND.violet },
};

const BANDS = [
  { id: 1, name: "Foundational", short: "Beginning capabilities" },
  { id: 2, name: "Early Operational", short: "Independence emerging" },
  { id: 3, name: "Consolidating", short: "Confident in familiar contexts" },
  { id: 4, name: "Transitional", short: "Managing complexity" },
  { id: 5, name: "Emerging Abstract", short: "Strategic thinking developing" },
  { id: 6, name: "Early Formal", short: "Independent abstract reasoning" },
  { id: 7, name: "Advanced Abstract", short: "Sophisticated integration" },
  { id: 8, name: "Sophisticated", short: "Optimising processes" },
  { id: 9, name: "Advanced Reasoning", short: "Systematic approaches" },
  { id: 10, name: "Applied Expertise", short: "Professional application" },
  { id: 11, name: "Mastery", short: "Multi-context sophistication" },
  { id: 12, name: "Advanced Expertise", short: "Innovative frameworks" },
  { id: 13, name: "Specialised", short: "Field-advancing capability" },
  { id: 14, name: "Paradigm-Advancing", short: "Cross-disciplinary mastery" },
  { id: 15, name: "Peak Capability", short: "Highest achievement" },
];

const AUDIENCES = {
  schools: {
    label: "Schools",
    color: BRAND.cerulean,
    headline: "See the whole student.",
    subhead: "Not just grades, behaviour, or test scores.",
    body: "Wadmore gives educators a developmental view of how each student thinks — enabling informed differentiation, meaningful support conversations, and confident pathway decisions.",
    points: ["Cognitive profiles across 8 domains", "Practical classroom strategies", "NCCD evidence documentation", "Cohort-level analytics"],
    link: "/schools",
  },
  families: {
    label: "Families",
    color: BRAND.teal,
    headline: "Understand how your child thinks.",
    subhead: "Without labels, comparison, or blame.",
    body: "Wadmore helps you see your child's unique cognitive strengths and growth areas — with clear guidance you can use at home and in conversations with teachers.",
    points: ["Strength-based profiles", "Plain language explanations", "Practical home activities", "School conversation guides"],
    link: "/families",
  },
  professional: {
    label: "Professional",
    color: BRAND.violet,
    headline: "Build teams that think well together.",
    subhead: "Beyond personality preferences.",
    body: "Wadmore reveals how your people approach complexity, collaboration, and change — enabling smarter team composition, targeted development, and better hiring decisions.",
    points: ["Individual cognitive profiles", "Team cognitive maps", "Collaboration insights", "Development priorities"],
    link: "/professional",
  },
};

/* ══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════════════════════ */

export default function Home() {
  return (
    <Layout>
      <Hero />
      <ResearchSection />
      <DomainsSection />
      <BandsSection />
      <AudienceSection />
      <DifferenceSection />
      <CTASection />
    </Layout>
  );
}

/* ══════════════════════════════════════════════════════════════
   HERO
   ══════════════════════════════════════════════════════════════ */

function Hero() {
  return (
    <section className="min-h-[92vh] flex items-center relative overflow-hidden">
      {/* Rich gradient background */}
      <div 
        className="absolute inset-0"
        style={{ 
          background: `linear-gradient(150deg, ${BRAND.cloud} 0%, #F0F4FF 40%, ${BRAND.cloud} 100%)`
        }}
      />
      
      {/* Decorative orbs */}
      <div 
        className="absolute top-20 right-[10%] w-[600px] h-[600px] pointer-events-none opacity-30"
        style={{
          background: `radial-gradient(circle at center, ${BRAND.teal}20, transparent 60%)`,
        }}
      />
      <div 
        className="absolute bottom-0 left-[5%] w-[500px] h-[500px] pointer-events-none opacity-25"
        style={{
          background: `radial-gradient(circle at center, ${BRAND.violet}15, transparent 60%)`,
        }}
      />
      
      {/* Subtle grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(${BRAND.indigo} 1px, transparent 1px), linear-gradient(90deg, ${BRAND.indigo} 1px, transparent 1px)`,
          backgroundSize: "80px 80px"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-[1.4fr_0.6fr] gap-16 lg:gap-20 items-center">
          {/* Left: Content */}
          <div>
            <h1 
              className="text-6xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] tracking-tight mb-8"
              style={{ color: BRAND.slate }}
            >
              Thinking,
              <br />
              <span 
                className="relative inline-block"
                style={{ color: BRAND.indigo }}
              >
                understood.
                {/* Decorative underline */}
                <svg 
                  className="absolute -bottom-3 left-0 w-full" 
                  height="12" 
                  viewBox="0 0 300 12" 
                  preserveAspectRatio="none"
                >
                  <path 
                    d="M0 10 Q75 2, 150 6 T300 4" 
                    fill="none" 
                    stroke={BRAND.indigo} 
                    strokeWidth="4" 
                    strokeLinecap="round"
                    opacity="0.25"
                  />
                </svg>
              </span>
            </h1>
            
            <p 
              className="text-xl md:text-2xl leading-relaxed mb-12 max-w-xl"
              style={{ color: BRAND.steel }}
            >
              Wadmore reveals <strong style={{ color: BRAND.slate }}>how thinking develops</strong> — 
              across eight cognitive domains and fifteen developmental bands. 
              Strength-based profiles for schools, families, and organisations.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/about"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:scale-[1.02]"
                style={{ 
                  background: `linear-gradient(135deg, ${BRAND.indigo} 0%, ${BRAND.indigoDark} 100%)`,
                  color: BRAND.white,
                  boxShadow: `0 8px 30px ${BRAND.indigo}35`
                }}
              >
                Discover Wadmore
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </Link>
              <Link 
                to="/schools"
                className="inline-flex items-center px-6 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:shadow-lg"
                style={{ background: BRAND.cerulean, color: BRAND.white }}
              >
                Schools
              </Link>
              <Link 
                to="/families"
                className="inline-flex items-center px-6 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:shadow-lg"
                style={{ background: BRAND.teal, color: BRAND.white }}
              >
                Families
              </Link>
              <Link 
                to="/professional"
                className="inline-flex items-center px-6 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:shadow-lg"
                style={{ background: BRAND.violet, color: BRAND.white }}
              >
                Professional
              </Link>
            </div>
          </div>
          
          {/* Right: Persona Gallery */}
          <div className="hidden lg:flex justify-center">
            <PersonaGallery />
          </div>
        </div>
        
        {/* Stats bar */}
        <div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 py-10 px-10 rounded-3xl relative overflow-hidden"
          style={{ 
            background: BRAND.white, 
            border: `1px solid ${BRAND.dove}`,
            boxShadow: `0 20px 50px ${BRAND.indigo}06`
          }}
        >
          {/* Decorative corner */}
          <div 
            className="absolute top-0 right-0 w-40 h-40 pointer-events-none"
            style={{
              background: `linear-gradient(135deg, ${BRAND.indigo}05, transparent)`,
              borderRadius: "0 0 0 100%"
            }}
          />
          
          {[
            { value: "8", label: "Cognitive Domains", sub: "Complete coverage" },
            { value: "15", label: "Developmental Bands", sub: "Growth continuum" },
            { value: "360", label: "Unique Constructs", sub: "Actionable precision" },
            { value: "α≥0.85", label: "Reliability Target", sub: "Psychometric rigour" },
          ].map((stat, i) => (
            <div key={stat.label} className="text-center relative z-10">
              <div 
                className="text-4xl md:text-5xl font-bold mb-2"
                style={{ color: BRAND.indigo }}
              >
                {stat.value}
              </div>
              <div 
                className="text-sm font-semibold mb-0.5"
                style={{ color: BRAND.slate }}
              >
                {stat.label}
              </div>
              <div 
                className="text-xs"
                style={{ color: BRAND.steel }}
              >
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   RESEARCH SECTION - Scientific credibility
   ══════════════════════════════════════════════════════════════ */

function ResearchSection() {
  return (
    <section className="py-24 md:py-32" style={{ background: BRAND.white }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
          {/* Left: Content */}
          <div>
            <p 
              className="text-sm font-semibold uppercase tracking-widest mb-5"
              style={{ color: BRAND.indigo }}
            >
              Research Foundation
            </p>
            <h2 
              className="text-4xl md:text-5xl font-semibold leading-tight mb-6"
              style={{ color: BRAND.slate }}
            >
              Grounded in cognitive science
            </h2>
            <p 
              className="text-xl leading-relaxed mb-8"
              style={{ color: BRAND.steel }}
            >
              Wadmore's eight-domain framework draws on decades of research into how humans 
              think, learn, and develop. Every domain reflects established cognitive science.
            </p>
            <Link 
              to="/science"
              className="inline-flex items-center gap-2 text-base font-semibold transition-colors hover:opacity-80"
              style={{ color: BRAND.indigo }}
            >
              Explore the full research foundation
              <ArrowIcon />
            </Link>
          </div>
          
          {/* Right: Research cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { area: "Executive Functioning", researchers: "Diamond (2013)", insight: "Core to planning and self-regulation", color: BRAND.teal },
              { area: "Working Memory", researchers: "Baddeley & Hitch", insight: "The mental workspace for reasoning", color: BRAND.cerulean },
              { area: "Metacognition", researchers: "Hattie (2009)", insight: "Effect size d=0.69 for learning", color: BRAND.indigo },
              { area: "Growth Mindset", researchers: "Dweck (2006)", insight: "How belief shapes engagement", color: BRAND.violet },
            ].map((item) => (
              <div 
                key={item.area}
                className="group p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ 
                  background: BRAND.cloud,
                  border: `1px solid ${BRAND.dove}`
                }}
              >
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${item.color}15` }}
                >
                  <div 
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: item.color }}
                  />
                </div>
                <h3 className="font-semibold text-base mb-1" style={{ color: BRAND.slate }}>
                  {item.area}
                </h3>
                <p className="text-xs mb-2" style={{ color: item.color }}>
                  {item.researchers}
                </p>
                <p className="text-sm" style={{ color: BRAND.steel }}>
                  {item.insight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   DOMAINS SECTION
   ══════════════════════════════════════════════════════════════ */

function DomainsSection() {
  const [expanded, setExpanded] = useState(null);
  
  return (
    <section 
      className="py-28 md:py-36 relative overflow-hidden"
      style={{ background: BRAND.cloud }}
    >
      {/* Background decoration */}
      <div 
        className="absolute top-0 left-0 w-[600px] h-[600px] pointer-events-none opacity-40"
        style={{
          background: `radial-gradient(circle at center, ${BRAND.cerulean}08, transparent 60%)`,
          transform: "translate(-30%, -30%)"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p 
            className="text-sm font-semibold uppercase tracking-widest mb-5"
            style={{ color: BRAND.indigo }}
          >
            The Cognitive Framework
          </p>
          <h2 
            className="text-4xl md:text-5xl font-semibold leading-tight mb-6"
            style={{ color: BRAND.slate }}
          >
            Eight domains of thinking.
          </h2>
          <p 
            className="text-xl"
            style={{ color: BRAND.steel }}
          >
            Every Wadmore profile maps thinking across these eight domains. 
            Patterns emerge from the interplay between them.
          </p>
        </div>
        
        {/* Cluster legend */}
        <div className="flex flex-wrap gap-6 mb-10">
          {Object.entries(CLUSTERS).map(([key, cluster]) => (
            <div key={key} className="flex items-center gap-3">
              <span 
                className="w-3 h-3 rounded-full"
                style={{ background: cluster.color }}
              />
              <span className="text-sm font-medium" style={{ color: BRAND.slate }}>
                {cluster.name}
              </span>
            </div>
          ))}
        </div>
        
        {/* Domain grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DOMAINS.map((domain) => {
            const Icon = DomainIcons[domain.code];
            const isExpanded = expanded === domain.id;
            
            return (
              <div
                key={domain.id}
                onClick={() => setExpanded(isExpanded ? null : domain.id)}
                className="rounded-2xl p-6 cursor-pointer transition-all duration-300"
                style={{
                  background: BRAND.white,
                  border: `2px solid ${isExpanded ? domain.color : BRAND.dove}`,
                  boxShadow: isExpanded ? `0 20px 40px ${domain.color}15` : "none",
                  transform: isExpanded ? "translateY(-4px)" : "translateY(0)"
                }}
              >
                {/* Icon */}
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300"
                  style={{ 
                    background: `${domain.color}12`,
                    color: domain.color,
                    transform: isExpanded ? "scale(1.1)" : "scale(1)"
                  }}
                >
                  <div className="w-7 h-7">
                    <Icon />
                  </div>
                </div>
                
                {/* Code badge */}
                <span 
                  className="inline-block text-xs font-bold px-2.5 py-1 rounded-lg mb-3"
                  style={{ background: `${domain.color}12`, color: domain.color }}
                >
                  {domain.code}
                </span>
                
                {/* Name & tagline */}
                <h3 
                  className="text-lg font-semibold mb-1"
                  style={{ color: BRAND.slate }}
                >
                  {domain.name}
                </h3>
                <p 
                  className="text-sm"
                  style={{ color: BRAND.steel }}
                >
                  {domain.tagline}
                </p>
                
                {/* Expanded: cluster indicator */}
                {isExpanded && (
                  <div 
                    className="mt-5 pt-5 flex items-center gap-2"
                    style={{ borderTop: `1px solid ${BRAND.dove}` }}
                  >
                    <span 
                      className="w-2 h-2 rounded-full"
                      style={{ background: CLUSTERS[domain.cluster].color }}
                    />
                    <span className="text-xs font-medium" style={{ color: BRAND.steel }}>
                      {CLUSTERS[domain.cluster].name}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   BANDS SECTION
   ══════════════════════════════════════════════════════════════ */

function BandsSection() {
  const [activeBand, setActiveBand] = useState(7);
  const band = BANDS[activeBand - 1];
  
  return (
    <section className="py-28 md:py-36" style={{ background: BRAND.white }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p 
            className="text-sm font-semibold uppercase tracking-widest mb-5"
            style={{ color: BRAND.indigo }}
          >
            Developmental Framework
          </p>
          <h2 
            className="text-4xl md:text-5xl font-semibold leading-tight mb-6"
            style={{ color: BRAND.slate }}
          >
            Growth, not ranking.
          </h2>
          <p 
            className="text-xl"
            style={{ color: BRAND.steel }}
          >
            Wadmore describes where someone is on a developmental continuum — 
            and what growth looks like from there. No percentiles. No peer comparison.
          </p>
        </div>
        
        {/* Band selector */}
        <div 
          className="rounded-3xl overflow-hidden mb-12"
          style={{ 
            background: BRAND.cloud, 
            boxShadow: `0 20px 50px ${BRAND.indigo}06`
          }}
        >
          {/* Band track */}
          <div className="flex">
            {BANDS.map((b) => {
              const isActive = b.id === activeBand;
              const bandColor = BAND_COLORS[b.id - 1];
              const textColor = BAND_TEXT[b.id - 1];
              
              return (
                <button
                  key={b.id}
                  onClick={() => setActiveBand(b.id)}
                  className="flex-1 h-20 md:h-28 transition-all duration-300 relative group"
                  style={{
                    background: bandColor,
                    transform: isActive ? "scaleY(1.15)" : "scaleY(1)",
                    transformOrigin: "bottom",
                    zIndex: isActive ? 10 : 1
                  }}
                >
                  <span 
                    className={`absolute inset-0 flex items-center justify-center text-sm md:text-base font-bold transition-opacity duration-200 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'}`}
                    style={{ color: textColor }}
                  >
                    {b.id}
                  </span>
                  
                  {isActive && (
                    <span 
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2"
                      style={{
                        width: 0,
                        height: 0,
                        borderLeft: "10px solid transparent",
                        borderRight: "10px solid transparent",
                        borderTop: `10px solid ${bandColor}`
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
          
          {/* Selected band details */}
          <div className="p-8 md:p-10" style={{ background: BRAND.white }}>
            <div className="flex flex-wrap items-center gap-4 mb-3">
              <span 
                className="text-3xl md:text-4xl font-bold"
                style={{ color: BRAND.slate }}
              >
                Band {band.id}
              </span>
              <span 
                className="px-4 py-2 rounded-full text-sm font-semibold"
                style={{ 
                  background: BAND_COLORS[band.id - 1], 
                  color: BAND_TEXT[band.id - 1]
                }}
              >
                {band.name}
              </span>
            </div>
            <p 
              className="text-lg md:text-xl"
              style={{ color: BRAND.steel }}
            >
              {band.short}
            </p>
          </div>
        </div>
        
        {/* Key principles */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Capability, not comparison", desc: "Bands describe what someone can do — not how they rank.", color: BRAND.teal },
            { title: "Development is the goal", desc: "Every band shows current position and what comes next.", color: BRAND.cerulean },
            { title: "Grounded in theory", desc: "Piagetian and neo-Piagetian developmental stages.", color: BRAND.violet },
          ].map((item) => (
            <div 
              key={item.title}
              className="p-6 rounded-2xl"
              style={{ background: BRAND.cloud, border: `1px solid ${BRAND.dove}` }}
            >
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${item.color}15` }}
              >
                <div 
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: item.color }}
                />
              </div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: BRAND.slate }}>
                {item.title}
              </h3>
              <p className="text-sm" style={{ color: BRAND.steel }}>
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
   AUDIENCE SECTION
   ══════════════════════════════════════════════════════════════ */

function AudienceSection() {
  const [active, setActive] = useState("schools");
  const audience = AUDIENCES[active];
  
  return (
    <section 
      className="py-28 md:py-36 relative overflow-hidden"
      style={{ background: BRAND.cloud }}
    >
      {/* Background decoration */}
      <div 
        className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none opacity-30"
        style={{
          background: `radial-gradient(circle at center, ${audience.color}15, transparent 60%)`,
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start">
          {/* Left: Tabs */}
          <div>
            <p 
              className="text-sm font-semibold uppercase tracking-widest mb-5"
              style={{ color: BRAND.indigo }}
            >
              Built for Your Context
            </p>
            <h2 
              className="text-4xl md:text-5xl font-semibold leading-tight mb-6"
              style={{ color: BRAND.slate }}
            >
              One framework.
              <br />
              Three platforms.
            </h2>
            <p 
              className="text-lg mb-10"
              style={{ color: BRAND.steel }}
            >
              The cognitive science stays consistent. The insights adapt to what matters most to you.
            </p>
            
            {/* Audience tabs */}
            <div className="space-y-3">
              {Object.entries(AUDIENCES).map(([key, aud]) => (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className="w-full text-left px-6 py-5 rounded-2xl transition-all duration-300"
                  style={{ 
                    background: active === key ? BRAND.white : "transparent",
                    border: active === key ? `2px solid ${aud.color}` : `2px solid transparent`,
                    boxShadow: active === key ? `0 10px 30px ${aud.color}15` : "none"
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300"
                      style={{ 
                        background: `${aud.color}15`,
                        transform: active === key ? "scale(1.1)" : "scale(1)"
                      }}
                    >
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ background: aud.color }}
                      />
                    </div>
                    <span 
                      className="text-lg font-semibold"
                      style={{ color: active === key ? BRAND.slate : BRAND.steel }}
                    >
                      {aud.label}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Right: Content card */}
          <div 
            className="rounded-3xl p-10 md:p-12 relative overflow-hidden"
            style={{ 
              background: BRAND.white,
              border: `1px solid ${BRAND.dove}`,
              boxShadow: `0 30px 60px ${BRAND.indigo}06`
            }}
          >
            {/* Decorative accent */}
            <div 
              className="absolute top-0 left-0 w-2 h-full"
              style={{ background: audience.color }}
            />
            
            <div className="pl-4">
              <h3 
                className="text-3xl md:text-4xl font-semibold mb-3"
                style={{ color: BRAND.slate }}
              >
                {audience.headline}
              </h3>
              <p 
                className="text-lg mb-6"
                style={{ color: audience.color }}
              >
                {audience.subhead}
              </p>
              <p 
                className="text-base mb-10 leading-relaxed"
                style={{ color: BRAND.steel }}
              >
                {audience.body}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-10">
                {audience.points.map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <div 
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: `${audience.color}15` }}
                    >
                      <CheckIcon color={audience.color} size={12} />
                    </div>
                    <span className="text-sm" style={{ color: BRAND.slate }}>
                      {point}
                    </span>
                  </div>
                ))}
              </div>
              
              <Link 
                to={audience.link}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:scale-[1.02]"
                style={{ 
                  background: `linear-gradient(135deg, ${audience.color} 0%, ${audience.color}dd 100%)`,
                  color: BRAND.white,
                  boxShadow: `0 8px 25px ${audience.color}30`
                }}
              >
                Wadmore for {audience.label}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   DIFFERENCE SECTION
   ══════════════════════════════════════════════════════════════ */

function DifferenceSection() {
  return (
    <section className="py-28 md:py-36" style={{ background: BRAND.white }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p 
            className="text-sm font-semibold uppercase tracking-widest mb-5"
            style={{ color: BRAND.indigo }}
          >
            Why Wadmore
          </p>
          <h2 
            className="text-4xl md:text-5xl font-semibold leading-tight mb-6"
            style={{ color: BRAND.slate }}
          >
            Assessment that serves growth.
          </h2>
          <p 
            className="text-xl"
            style={{ color: BRAND.steel }}
          >
            Wadmore was built for understanding and development — not sorting or labelling.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              title: "Strength-based", 
              desc: "Profiles lead with what's working. Growth areas framed as opportunities, not deficits.",
              color: BRAND.teal
            },
            { 
              title: "Developmentally progressive", 
              desc: "Movement is the point. Every profile shows where someone is and what's next.",
              color: BRAND.cerulean
            },
            { 
              title: "Genuinely actionable", 
              desc: "360 constructs connect to specific interventions — not generic advice.",
              color: BRAND.indigo
            },
            { 
              title: "Psychometrically rigorous", 
              desc: "IRT/Rasch-aligned measurement with reliability standards that meet professional requirements.",
              color: BRAND.violet
            },
          ].map((item) => (
            <div 
              key={item.title}
              className="group p-7 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{ background: BRAND.cloud, border: `1px solid ${BRAND.dove}` }}
            >
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${item.color}12` }}
              >
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ background: item.color }}
                />
              </div>
              <h3 
                className="text-xl font-semibold mb-3"
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
          ))}
        </div>
        
        {/* Additional features */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { title: "Designed for fairness", desc: "DIF testing, bias review, and EALD-friendly design built in from the start." },
            { title: "Lifespan coverage", desc: "From early childhood through professional expertise — one coherent framework." },
            { title: "Australian-built", desc: "Local support, local data sovereignty, designed for Australian educational contexts." },
          ].map((item) => (
            <div key={item.title} className="flex gap-4">
              <div 
                className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                style={{ background: BRAND.sage }}
              />
              <div>
                <h4 className="font-semibold mb-1" style={{ color: BRAND.slate }}>
                  {item.title}
                </h4>
                <p className="text-sm" style={{ color: BRAND.steel }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   CTA SECTION
   ══════════════════════════════════════════════════════════════ */

function CTASection() {
  return (
    <section 
      className="py-32 md:py-40 relative overflow-hidden"
      style={{ 
        background: `linear-gradient(135deg, ${BRAND.indigo} 0%, ${BRAND.indigoDark} 50%, #1a2040 100%)`
      }}
    >
      {/* Decorative elements */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 70%, ${BRAND.teal} 1px, transparent 1px), radial-gradient(circle at 70% 30%, ${BRAND.violet} 1px, transparent 1px)`,
          backgroundSize: "60px 60px"
        }}
      />
      
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center relative z-10">
        <h2 
          className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 leading-tight"
          style={{ color: BRAND.white }}
        >
          Ready to understand thinking?
        </h2>
        <p 
          className="text-xl md:text-2xl mb-14 opacity-85 max-w-2xl mx-auto"
          style={{ color: BRAND.white }}
        >
          Discover how Wadmore reveals cognitive development with scientific precision and genuine actionability.
        </p>
        
        <div className="flex flex-wrap justify-center gap-5">
          <Link 
            to="/schools"
            className="group inline-flex items-center gap-3 px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
            style={{ 
              background: BRAND.cerulean, 
              color: BRAND.white,
              boxShadow: `0 8px 30px ${BRAND.cerulean}40`
            }}
          >
            For Schools
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <ArrowIcon />
            </span>
          </Link>
          <Link 
            to="/families"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
            style={{ 
              background: BRAND.teal, 
              color: BRAND.white,
              boxShadow: `0 8px 30px ${BRAND.teal}40`
            }}
          >
            For Families
            <ArrowIcon />
          </Link>
          <Link 
            to="/professional"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
            style={{ 
              background: BRAND.violet, 
              color: BRAND.white,
              boxShadow: `0 8px 30px ${BRAND.violet}40`
            }}
          >
            For Professional
            <ArrowIcon />
          </Link>
        </div>
        
        <div className="mt-14 pt-10" style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
          <Link 
            to="/science"
            className="inline-flex items-center gap-2 text-base font-medium opacity-70 hover:opacity-100 transition-opacity"
            style={{ color: BRAND.white }}
          >
            Explore the science behind Wadmore
            <ArrowIcon />
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