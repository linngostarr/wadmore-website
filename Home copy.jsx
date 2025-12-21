// src/pages/Home.jsx
// Wadmore Landing Page - Version 5
// 
// Brand-aligned implementation (Coral-Free):
// - Deep Indigo (#384275) as primary anchor
// - Graphite Slate (#2C2D33) for text
// - Cloud Mist (#F7F8FA) for backgrounds
// - Dove Grey (#E4E7EB) for cards, dividers
// - Steel Blue (#6C7A96) for neutral accent (replaces coral)
// - Product accents: Teal (Families), Cerulean (Schools), Violet (Professional)
// - 15-band continuum: Teal → Blue → Indigo → Violet

import { useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

/* ══════════════════════════════════════════════════════════════
   WADMORE BRAND COLOURS (Coral-Free)
   ══════════════════════════════════════════════════════════════ */

const BRAND = {
  // Master brand - anchor palette
  indigo: "#384275",        // Primary — intelligence, trust, gravitas
  slate: "#2C2D33",         // Text — professional, soft contrast
  cloud: "#F7F8FA",         // Background — calm, neutral, spacious
  dove: "#E4E7EB",          // Cards, dividers, subtle UI structure
  steel: "#6C7A96",         // Neutral accent — replaces coral
  
  // Product accents
  teal: "#3CB7AC",          // Families — supportive, human, soothing
  cerulean: "#5B8BF7",      // Schools — academic clarity, reliability
  violet: "#786CFF",        // Professional — modern intelligence
  
  // Extended palette
  indigoLight: "#4a5a94",
  indigoDark: "#2a3259",
  slateMuted: "#6b6d75",
  white: "#ffffff",
  
  // Success/progress
  sage: "#A4D4AE",
  
  // Neural pulse accent
  golden: "#F5C542",
};

/* ══════════════════════════════════════════════════════════════
   15-BAND COLOUR CONTINUUM
   Theme: Cool Growth → Stability → Depth → Mastery
   Palette Family: Teal → Blue → Indigo → Violet
   ══════════════════════════════════════════════════════════════ */

const BAND_COLORS = [
  // B1-B5: Emerging → Developing (Teal-Azure)
  "#C8EEE4",  // B1  - Mist Teal — emergent, gentle start
  "#AEE7DA",  // B2  - Pale Aquamarine — early clarity
  "#8DDACA",  // B3  - Soft Mint Teal — building stability
  "#6ECDBC",  // B4  - Fresh Teal — growing confidence
  "#3CB7AC",  // B5  - Reflective Teal (Families Anchor) — solid emerging reasoning
  
  // B6-B10: Consolidating → Confident (Azure-Blue)
  "#A4D5F7",  // B6  - Light Sky Blue — increasing complexity
  "#7CBFF5",  // B7  - Clear Azure — fluent reasoning
  "#5B8BF7",  // B8  - Cerulean Blue (Schools Anchor) — confident cognition
  "#4378EE",  // B9  - Deep Cerulean — advanced integration
  "#2C5ED6",  // B10 - Royal Blue — high-level pattern accuracy
  
  // B11-B15: Sophisticated → Masterful (Indigo-Violet)
  "#3F4FB2",  // B11 - Indigo Blue — strategic reasoning
  "#384275",  // B12 - Deep Indigo (Wadmore Anchor) — expert cognitive stability
  "#786CFF",  // B13 - Soft Violet (Professional Anchor) — reflective, abstract
  "#6A5BE8",  // B14 - Mid Violet — specialist-level synthesis
  "#5747CC",  // B15 - Royal Violet — exceptional depth/mastery
];

// Text colours for each band (for contrast)
const BAND_TEXT = [
  BRAND.slate, BRAND.slate, BRAND.slate, BRAND.slate, "#ffffff",  // B1-5
  BRAND.slate, BRAND.slate, "#ffffff", "#ffffff", "#ffffff",       // B6-10
  "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff",           // B11-15
];

/* ══════════════════════════════════════════════════════════════
   DOMAIN ICONS - Custom SVGs
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
      <rect x="6" y="32" width="8" height="12" rx="2" fill="currentColor" opacity="0.3" />
      <rect x="17" y="24" width="8" height="20" rx="2" fill="currentColor" opacity="0.5" />
      <rect x="28" y="16" width="8" height="28" rx="2" fill="currentColor" opacity="0.7" />
      <rect x="39" y="8" width="8" height="36" rx="2" fill="currentColor" opacity="0.9" />
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
   COGNITIVE ARCHITECTURE
   ══════════════════════════════════════════════════════════════ */

const DOMAINS = [
  {
    id: "abstract",
    code: "AR",
    name: "Abstract Reasoning & Pattern Recognition",
    userLabel: "Pattern Recognition & Abstract Thinking (Seeing Relationships)",
    cluster: "processing",
    tagline: "Seeing relationships",
    description: "Identifying and synthesizing patterns across contexts without content bias.",
    color: BRAND.cerulean,
  },
  {
    id: "logical",
    code: "LS", 
    name: "Logical Sequencing & Analytical Thinking",
    userLabel: "Logical Analysis & Sequential Thinking (Step-by-Step Problem Solving)",
    cluster: "processing",
    tagline: "Step-by-step problem solving",
    description: "Building and evaluating logical structures from simple steps to complex systems.",
    color: BRAND.cerulean,
  },
  {
    id: "speed",
    code: "PS",
    name: "Processing Speed & Efficiency",
    userLabel: "Thinking Speed & Mental Efficiency (Quick & Accurate Processing)",
    cluster: "processing",
    tagline: "Quick & accurate processing",
    description: "Speed of information processing, decision-making, and cognitive efficiency optimization.",
    color: BRAND.cerulean,
  },
  {
    id: "memory",
    code: "MA",
    name: "Memory & Attention",
    userLabel: "Memory & Focus (Holding & Processing Information)",
    cluster: "processing",
    tagline: "Holding & processing information",
    description: "Sustaining focus, encoding/retrieving information, and using memory strategies.",
    color: BRAND.indigo,
  },
  {
    id: "executive",
    code: "EF",
    name: "Executive Functioning & Flexibility",
    userLabel: "Planning & Adaptability (Managing Tasks & Changes)",
    cluster: "regulation",
    tagline: "Managing tasks & changes",
    description: "Planning, self-regulation, and adaptive strategy use for managing tasks and changes.",
    color: BRAND.teal,
  },
  {
    id: "metacognition",
    code: "MR",
    name: "Metacognition & Self-Regulation",
    userLabel: "Thinking About Thinking (Self-Awareness & Learning Strategy)", 
    cluster: "regulation",
    tagline: "Self-awareness & learning strategy",
    description: "Thinking about thinking, monitoring cognitive processes, and regulating learning strategies.",
    color: BRAND.teal,
  },
  {
    id: "confidence",
    code: "CM",
    name: "Cognitive Confidence & Motivation",
    userLabel: "Learning Confidence & Mindset (Belief in Your Thinking Ability)",
    cluster: "regulation",
    tagline: "Belief in your thinking ability",
    description: "Self-belief, learning mindset, and motivational approaches to cognitive challenges.",
    color: BRAND.violet,
  },
  {
    id: "creativity",
    code: "CD",
    name: "Creativity & Divergent Thinking",
    userLabel: "Creative & Innovative Thinking (Generating Original Ideas)",
    cluster: "creative",
    tagline: "Generating original ideas",
    description: "Generating and refining novel ideas from basic fluency to transformative innovation.",
    color: BRAND.violet,
  },
];

const CLUSTERS = {
  processing: { 
    name: "Cognitive Processing", 
    description: "How your mind takes in and works with information",
    color: BRAND.cerulean,
  },
  regulation: { 
    name: "Cognitive Self-Regulation", 
    description: "How you manage and direct your thinking",
    color: BRAND.teal,
  },
  creative: { 
    name: "Creative Thinking", 
    description: "How you generate original ideas",
    color: BRAND.violet,
  },
};

/* ══════════════════════════════════════════════════════════════
   AUDIENCE CONFIG  
   ══════════════════════════════════════════════════════════════ */

const AUDIENCES = {
  schools: {
    label: "Schools",
    color: BRAND.cerulean,
    headline: "See the whole student.",
    subhead: "Not just grades, behaviour, or test scores.",
    body: "Wadmore gives educators a developmental view of how each student thinks — enabling informed differentiation, meaningful support conversations, and confident pathway decisions.",
    points: [
      "Cognitive profiles across 8 domains and 15 developmental bands",
      "Practical classroom strategies tailored to each student",
      "Evidence for NCCD, learning support, and gifted identification",
      "Cohort-level analytics for curriculum and resource planning",
    ],
    cta: "Wadmore for Schools",
    link: "/schools",
  },
  families: {
    label: "Families",
    color: BRAND.teal,
    headline: "Understand how your child's thinking is developing.",
    subhead: "Without labels, comparison, or blame.",
    body: "Wadmore helps you see your child's unique cognitive strengths and growth areas — with clear guidance you can use at home and in conversations with teachers.",
    points: [
      "Strength-based profiles that celebrate what's working",
      "Plain language explanations, no jargon",
      "Practical activities matched to where your child is developmentally",
      "A shared language for working with schools",
    ],
    cta: "Wadmore for Families",
    link: "/families",
  },
  professional: {
    label: "Professional",
    color: BRAND.violet,
    headline: "Build teams that think well together.",
    subhead: "Beyond personality tests and gut instinct.",
    body: "Wadmore reveals how your people approach complexity, collaboration, and change — enabling smarter team composition, targeted development, and better hiring decisions.",
    points: [
      "Individual cognitive profiles for every team member",
      "Team-level patterns showing collective strengths and gaps",
      "A shared vocabulary for discussing how people work",
      "Data-informed decisions about roles and development",
    ],
    cta: "Wadmore Professional",
    link: "/contact",
  },
};

/** 15-band developmental framework */
const BANDS = [
  { id: 1, name: "Foundational", short: "Beginning capabilities with support" },
  { id: 2, name: "Early Operational", short: "Independence emerging" },
  { id: 3, name: "Consolidating", short: "Confident in familiar contexts" },
  { id: 4, name: "Transitional", short: "Managing increased complexity" },
  { id: 5, name: "Emerging Abstract", short: "Strategic thinking developing" },
  { id: 6, name: "Early Formal", short: "Independent abstract reasoning" },
  { id: 7, name: "Advanced Abstract", short: "Sophisticated integration" },
  { id: 8, name: "Sophisticated", short: "Optimising cognitive processes" },
  { id: 9, name: "Advanced Reasoning", short: "Systematic approaches" },
  { id: 10, name: "Applied Expertise", short: "Professional application" },
  { id: 11, name: "Mastery", short: "Multi-context sophistication" },
  { id: 12, name: "Advanced Expertise", short: "Innovative frameworks" },
  { id: 13, name: "Specialised", short: "Field-advancing capability" },
  { id: 14, name: "Paradigm-Advancing", short: "Cross-disciplinary mastery" },
  { id: 15, name: "Peak Capability", short: "Highest documented achievement" },
];

/* ══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════════════════════ */

export default function Home() {
  return (
    <Layout>
      <Hero />
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
    <section 
      className="min-h-[85vh] flex items-center relative overflow-hidden"
      style={{ background: BRAND.cloud }}
    >
      {/* Subtle gradient accents using brand colours */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ 
          background: `
            radial-gradient(ellipse at 0% 0%, ${BRAND.teal}10, transparent 40%),
            radial-gradient(ellipse at 100% 100%, ${BRAND.violet}08, transparent 40%)
          ` 
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28 relative z-10 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
            style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}`, color: BRAND.slate }}
          >
            <span 
              className="w-2 h-2 rounded-full"
              style={{ background: BRAND.indigo }}
            />
            Developmental cognitive profiling
          </div>
          
          {/* Main headline */}
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight mb-6"
            style={{ color: BRAND.slate }}
          >
            Thinking,<br />
            <span style={{ color: BRAND.indigo }}>understood.</span>
          </h1>
          
          <p 
            className="text-xl md:text-2xl leading-relaxed mb-10 max-w-2xl"
            style={{ color: BRAND.steel }}
          >
            Wadmore reveals <strong style={{ color: BRAND.slate }}>how thinking develops</strong> — 
            across eight cognitive domains and fifteen developmental bands. 
            Strength-based profiles designed for schools, families, and organisations.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <Link 
              to="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold transition-all hover:scale-[1.02]"
              style={{ 
                background: BRAND.indigo, 
                color: BRAND.white,
                boxShadow: `0 4px 14px ${BRAND.indigo}40`
              }}
            >
              Discover Wadmore
              <ArrowIcon />
            </Link>
            <Link 
              to="/schools"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold transition-all hover:scale-[1.02]"
              style={{ 
                background: BRAND.cerulean, 
                color: BRAND.white,
              }}
            >
              Schools
            </Link>
            <Link 
              to="/families"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold transition-all hover:scale-[1.02]"
              style={{ 
                background: BRAND.teal, 
                color: BRAND.white,
              }}
            >
              Families
            </Link>
            <Link 
              to="/professional"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold transition-all hover:scale-[1.02]"
              style={{ 
                background: BRAND.violet, 
                color: BRAND.white,
              }}
            >
              Professional
            </Link>
          </div>
        </div>
        
        {/* Stats bar */}
        <div 
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 py-8 px-8 rounded-2xl"
          style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}` }}
        >
          {[
            { value: "8", label: "Cognitive Domains" },
            { value: "15", label: "Developmental Bands" },
            { value: "360", label: "Unique Constructs" },
            { value: "α≥0.95", label: "Reliability" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div 
                className="text-3xl md:text-4xl font-semibold"
                style={{ color: BRAND.indigo }}
              >
                {stat.value}
              </div>
              <div 
                className="text-sm mt-1"
                style={{ color: BRAND.steel }}
              >
                {stat.label}
              </div>
            </div>
          ))}
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
    <section className="py-24 md:py-32" style={{ background: BRAND.white }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p 
            className="text-sm font-semibold uppercase tracking-wider mb-4"
            style={{ color: BRAND.indigo }}
          >
            The Cognitive Framework
          </p>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4"
            style={{ color: BRAND.slate }}
          >
            Eight domains of thinking.
          </h2>
          <p 
            className="text-lg md:text-xl"
            style={{ color: BRAND.steel }}
          >
            Every Wadmore profile maps thinking across these eight domains. 
            Patterns emerge from the interplay between them.
          </p>
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
                className="rounded-2xl p-6 cursor-pointer transition-all duration-200"
                style={{
                  background: isExpanded ? BRAND.white : BRAND.cloud,
                  border: `2px solid ${isExpanded ? domain.color : 'transparent'}`,
                  boxShadow: isExpanded ? `0 12px 32px ${domain.color}20` : "none",
                  transform: isExpanded ? "scale(1.02)" : "scale(1)"
                }}
              >
                {/* Icon */}
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                  style={{ 
                    background: `${domain.color}15`,
                    color: domain.color 
                  }}
                >
                  <div className="w-8 h-8">
                    <Icon />
                  </div>
                </div>
                
                {/* Code badge */}
                <span 
                  className="text-xs font-mono font-semibold px-2 py-1 rounded"
                  style={{ background: `${domain.color}15`, color: domain.color }}
                >
                  {domain.code}
                </span>
                
                {/* Name & tagline */}
                <h3 
                  className="text-lg font-semibold mt-3 mb-1"
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
                
                {/* Expanded description */}
                {isExpanded && (
                  <div 
                    className="mt-5 pt-5"
                    style={{ borderTop: `1px solid ${BRAND.dove}` }}
                  >
                    <p 
                      className="text-sm leading-relaxed"
                      style={{ color: BRAND.steel }}
                    >
                      {domain.description}
                    </p>
                    <p 
                      className="text-xs mt-3 font-medium"
                      style={{ color: BRAND.slateMuted }}
                    >
                      {CLUSTERS[domain.cluster].name}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        {/* Cluster legend */}
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {Object.entries(CLUSTERS).map(([key, cluster]) => (
            <div key={key} className="flex items-center gap-2">
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
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   BANDS SECTION - Full width, Teal → Violet gradient
   ══════════════════════════════════════════════════════════════ */

function BandsSection() {
  const [activeBand, setActiveBand] = useState(7);
  const band = BANDS[activeBand - 1];
  
  return (
    <section className="py-24 md:py-32" style={{ background: BRAND.cloud }}>
      {/* Header - contained */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-12">
        <div className="max-w-2xl">
          <p 
            className="text-sm font-semibold uppercase tracking-wider mb-4"
            style={{ color: BRAND.indigo }}
          >
            Developmental Framework
          </p>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4"
            style={{ color: BRAND.slate }}
          >
            Growth, not ranking.
          </h2>
          <p 
            className="text-lg md:text-xl"
            style={{ color: BRAND.steel }}
          >
            Wadmore describes where someone is on a developmental continuum — 
            and what growth looks like from there. No percentiles. No comparison to peers.
          </p>
        </div>
      </div>
      
      {/* Full-width band continuum */}
      <div className="w-full px-4 md:px-8 mb-12">
        <div 
          className="rounded-2xl overflow-hidden"
          style={{ background: BRAND.white, boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
        >
          {/* Band track - full bleed inside card */}
          <div className="flex">
            {BANDS.map((b) => {
              const isActive = b.id === activeBand;
              const bandColor = BAND_COLORS[b.id - 1];
              const textColor = BAND_TEXT[b.id - 1];
              
              return (
                <button
                  key={b.id}
                  onClick={() => setActiveBand(b.id)}
                  className="flex-1 h-20 md:h-28 transition-all relative group"
                  style={{
                    background: bandColor,
                    transform: isActive ? "scaleY(1.12)" : "scaleY(1)",
                    transformOrigin: "bottom",
                    zIndex: isActive ? 10 : 1
                  }}
                  aria-label={`Band ${b.id}: ${b.name}`}
                >
                  {/* Band number */}
                  <span 
                    className={`absolute inset-0 flex items-center justify-center text-sm md:text-base font-semibold transition-opacity ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-70'}`}
                    style={{ color: textColor }}
                  >
                    {b.id}
                  </span>
                  
                  {/* Active indicator */}
                  {isActive && (
                    <span 
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0"
                      style={{
                        borderLeft: "8px solid transparent",
                        borderRight: "8px solid transparent",
                        borderTop: `8px solid ${bandColor}`
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
          
          {/* Selected band details */}
          <div className="p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-4 mb-3">
              <span 
                className="text-2xl md:text-3xl font-semibold"
                style={{ color: BRAND.slate }}
              >
                Band {band.id}
              </span>
              <span 
                className="px-3 py-1.5 rounded-full text-sm font-medium"
                style={{ 
                  background: BAND_COLORS[band.id - 1], 
                  color: BAND_TEXT[band.id - 1]
                }}
              >
                {band.name}
              </span>
            </div>
            <p 
              className="text-base md:text-lg"
              style={{ color: BRAND.steel }}
            >
              {band.short}
            </p>
          </div>
        </div>
      </div>
      
      {/* Key principles - contained */}
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { 
              title: "Capability, not comparison", 
              desc: "Bands describe what someone can do — not how they rank against others." 
            },
            { 
              title: "Qualitative growth", 
              desc: "Movement between bands represents real shifts in thinking complexity." 
            },
            { 
              title: "Individual pathways", 
              desc: "Development is personal. Bands show where you are, not where you should be." 
            },
          ].map((item) => (
            <div 
              key={item.title}
              className="rounded-xl p-6"
              style={{ background: BRAND.white }}
            >
              <h4 
                className="font-semibold mb-2"
                style={{ color: BRAND.slate }}
              >
                {item.title}
              </h4>
              <p 
                className="text-sm"
                style={{ color: BRAND.steel }}
              >
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
    <section className="py-24 md:py-32" style={{ background: BRAND.white }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16">
          
          {/* Left */}
          <div>
            <p 
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{ color: BRAND.indigo }}
            >
              Built for your context
            </p>
            <h2 
              className="text-3xl md:text-4xl font-semibold mb-4"
              style={{ color: BRAND.slate }}
            >
              One framework.<br />
              Three platforms.
            </h2>
            <p 
              className="text-lg mb-10"
              style={{ color: BRAND.steel }}
            >
              The cognitive science stays consistent. The insights adapt to 
              what matters most to you.
            </p>
            
            {/* Tab switcher */}
            <div className="flex flex-col gap-2">
              {Object.entries(AUDIENCES).map(([key, aud]) => (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className="text-left px-5 py-4 rounded-xl transition-all"
                  style={{
                    background: active === key ? BRAND.cloud : "transparent",
                    borderLeft: active === key ? `4px solid ${aud.color}` : "4px solid transparent",
                  }}
                >
                  <span 
                    className="text-base font-semibold"
                    style={{ color: active === key ? BRAND.slate : BRAND.steel }}
                  >
                    {aud.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Right */}
          <div 
            className="rounded-2xl p-8 md:p-10"
            style={{ background: BRAND.cloud }}
          >
            <h3 
              className="text-2xl md:text-3xl font-semibold mb-2"
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
              className="text-base mb-8 leading-relaxed"
              style={{ color: BRAND.steel }}
            >
              {audience.body}
            </p>
            
            <ul className="space-y-4 mb-10">
              {audience.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span 
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: audience.color, color: "white" }}
                  >
                    <CheckIcon />
                  </span>
                  <span style={{ color: BRAND.steel }}>{point}</span>
                </li>
              ))}
            </ul>
            
            <Link
              to={audience.link}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-base font-semibold transition-all hover:scale-[1.02]"
              style={{ background: audience.color, color: "white" }}
            >
              {audience.cta}
              <ArrowIcon />
            </Link>
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
    <section className="py-24 md:py-32" style={{ background: BRAND.cloud }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-2xl mb-16">
          <p 
            className="text-sm font-semibold uppercase tracking-wider mb-4"
            style={{ color: BRAND.indigo }}
          >
            Why Wadmore
          </p>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4"
            style={{ color: BRAND.slate }}
          >
            Assessment that serves growth.
          </h2>
          <p 
            className="text-lg md:text-xl"
            style={{ color: BRAND.steel }}
          >
            Traditional cognitive tests were designed for sorting. 
            Wadmore was built for understanding and development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Strength-based",
              description: "Profiles lead with what's working. Growth areas framed as opportunities, not deficits.",
              color: BRAND.teal
            },
            {
              title: "Developmentally progressive", 
              description: "Movement is the point. Every profile shows where someone is and what's next.",
              color: BRAND.cerulean
            },
            {
              title: "Psychometrically rigorous",
              description: "IRT/Rasch-aligned measurement. Reliability standards that exceed clinical tools.",
              color: BRAND.indigo
            },
            {
              title: "Designed for fairness",
              description: "DIF testing, bias review, and EALD-friendly design built in from the start.",
              color: BRAND.violet
            },
          ].map((item) => (
            <div 
              key={item.title}
              className="rounded-2xl p-6 md:p-8"
              style={{ background: BRAND.white }}
            >
              <div 
                className="w-3 h-3 rounded-full mb-5"
                style={{ background: item.color }}
              />
              <h3 
                className="text-lg font-semibold mb-2"
                style={{ color: BRAND.slate }}
              >
                {item.title}
              </h3>
              <p 
                className="text-sm leading-relaxed"
                style={{ color: BRAND.steel }}
              >
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
   FINAL CTA
   ══════════════════════════════════════════════════════════════ */

function CTASection() {
  return (
    <section 
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: BRAND.indigo }}
    >
      {/* Subtle pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px"
        }}
      />
      
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
          Ready to see how thinking develops?
        </h2>
        <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
          Whether you're supporting students, understanding your child, or 
          building a team — Wadmore reveals cognitive strengths and growth pathways.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/schools"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all hover:scale-[1.02]"
            style={{ background: BRAND.cerulean, color: "white" }}
          >
            For Schools
            <ArrowIcon />
          </Link>
          <Link
            to="/families"
            className="inline-flex items-center px-8 py-4 rounded-full text-base font-semibold transition-colors"
            style={{ background: BRAND.teal, color: "white" }}
          >
            For Families
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 rounded-full text-base font-semibold transition-colors"
            style={{ background: "rgba(255,255,255,0.15)", color: "white", border: "1px solid rgba(255,255,255,0.25)" }}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   UTILITY COMPONENTS
   ══════════════════════════════════════════════════════════════ */

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8.707 3.293a1 1 0 00-1.414 1.414L9.586 7H3a1 1 0 100 2h6.586l-2.293 2.293a1 1 0 101.414 1.414l4-4a1 1 0 000-1.414l-4-4z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
      <path d="M11.707 4.293a1 1 0 00-1.414 0L6 8.586 4.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l5-5a1 1 0 000-1.414z" />
    </svg>
  );
}
