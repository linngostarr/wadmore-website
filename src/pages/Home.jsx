// src/pages/Home.jsx
// Wadmore Landing Page - World-class design
// Language: Cognitive development focus (not "thinking styles")

import { useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import PersonaGallery from "../components/PersonaGallery";

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

const DomainIcons = {
  AR: () => (<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="24" cy="12" r="6" /><circle cx="12" cy="36" r="6" /><circle cx="36" cy="36" r="6" /><line x1="24" y1="18" x2="15" y2="31" /><line x1="24" y1="18" x2="33" y2="31" /><line x1="18" y1="36" x2="30" y2="36" /></svg>),
  LS: () => (<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 40 L8 32 L16 32 L16 24 L24 24 L24 16 L32 16 L32 8 L40 8" /><circle cx="8" cy="40" r="3" fill="currentColor" /><circle cx="40" cy="8" r="3" fill="currentColor" /></svg>),
  PS: () => (<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M26 4 L12 24 L22 24 L20 44 L36 20 L26 20 Z" fill="currentColor" opacity="0.15" /><path d="M26 4 L12 24 L22 24 L20 44 L36 20 L26 20 Z" /></svg>),
  MA: () => (<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="24" cy="24" r="20" opacity="0.3" /><circle cx="24" cy="24" r="14" opacity="0.5" /><circle cx="24" cy="24" r="8" /><circle cx="24" cy="24" r="3" fill="currentColor" /></svg>),
  EF: () => (<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="24" cy="8" r="5" /><circle cx="12" cy="26" r="4" /><circle cx="36" cy="26" r="4" /><circle cx="6" cy="40" r="3" /><circle cx="18" cy="40" r="3" /><circle cx="30" cy="40" r="3" /><circle cx="42" cy="40" r="3" /><line x1="24" y1="13" x2="24" y2="18" /><line x1="24" y1="18" x2="12" y2="22" /><line x1="24" y1="18" x2="36" y2="22" /><line x1="12" y1="30" x2="6" y2="37" /><line x1="12" y1="30" x2="18" y2="37" /><line x1="36" y1="30" x2="30" y2="37" /><line x1="36" y1="30" x2="42" y2="37" /></svg>),
  MR: () => (<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="24" cy="24" r="16" /><path d="M24 14 C30 14, 34 18, 34 24 C34 30, 30 34, 24 34" /><path d="M24 18 C27 18, 30 21, 30 24 C30 27, 27 30, 24 30" /><circle cx="24" cy="24" r="4" fill="currentColor" /><path d="M20 12 L24 8 L28 12" /></svg>),
  CM: () => (<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="24" cy="20" r="12" /><path d="M16 44 L24 36 L32 44" /><path d="M18 20 L22 24 L30 16" /></svg>),
  CD: () => (<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="24" cy="24" r="8" fill="currentColor" opacity="0.15" /><circle cx="24" cy="24" r="8" /><line x1="24" y1="4" x2="24" y2="12" /><line x1="24" y1="36" x2="24" y2="44" /><line x1="4" y1="24" x2="12" y2="24" /><line x1="36" y1="24" x2="44" y2="24" /></svg>),
};

const DOMAINS = [
  { id: "abstract", code: "AR", name: "Abstract Reasoning", tagline: "Solving novel problems", cluster: "processing", color: BRAND.cerulean },
  { id: "logical", code: "LS", name: "Logical Sequencing", tagline: "Following and building arguments", cluster: "processing", color: BRAND.cerulean },
  { id: "speed", code: "PS", name: "Processing Speed", tagline: "Thinking under time pressure", cluster: "processing", color: BRAND.cerulean },
  { id: "memory", code: "MA", name: "Memory & Attention", tagline: "Holding information while working", cluster: "processing", color: BRAND.indigo },
  { id: "executive", code: "EF", name: "Executive Functioning", tagline: "Planning, adapting, self-correcting", cluster: "regulation", color: BRAND.teal },
  { id: "metacognition", code: "MR", name: "Metacognition", tagline: "Understanding and directing your thinking processes", cluster: "regulation", color: BRAND.teal },
  { id: "confidence", code: "CM", name: "Cognitive Confidence", tagline: "Persisting through challenge", cluster: "regulation", color: BRAND.violet },
  { id: "creativity", code: "CD", name: "Creativity", tagline: "Generating original ideas", cluster: "creative", color: BRAND.violet },
];

const CLUSTERS = {
  processing: { name: "Cognitive Processing", color: BRAND.cerulean },
  regulation: { name: "Cognitive Self-Regulation", color: BRAND.teal },
  creative: { name: "Creative Thinking", color: BRAND.violet },
};

const BANDS = [
  { 
    id: 1, 
    name: "Foundational Development", 
    description: "Beginning cognitive capabilities requiring significant external support and modeling. Concrete, immediate, context-dependent thinking.",
    typical: "Early childhood",
  },
  { 
    id: 2, 
    name: "Early Operational Thinking", 
    description: "Developing independence in familiar contexts. Beginning to internalise cognitive strategies. Concrete operational thinking emerging.",
    typical: "Early primary years",
  },
  { 
    id: 3, 
    name: "Consolidating Foundations", 
    description: "Independent performance in familiar domains. Beginning transfer of learned strategies. Concrete operational thinking consolidating.",
    typical: "Primary school",
  },
  { 
    id: 4, 
    name: "Transitional Complexity", 
    description: "Managing increased cognitive demands. Strategic thinking emerging. Beginning abstract thinking in supported contexts.",
    typical: "Upper primary",
  },
  { 
    id: 5, 
    name: "Emerging Abstract Thinking", 
    description: "Metacognitive awareness developing. Strategic cognitive control emerging. Formal operational thinking beginning.",
    typical: "Early secondary",
  },
  { 
    id: 6, 
    name: "Early Formal Operations", 
    description: "Independent abstract thinking. Strategic self-regulation established. Complex problem-solving capability developing.",
    typical: "Secondary school",
  },
  { 
    id: 7, 
    name: "Advanced Abstract Thinking", 
    description: "Sophisticated cognitive integration. Transfer across domains. Meta-strategic thinking established.",
    typical: "Senior secondary",
  },
  { 
    id: 8, 
    name: "Cognitive Sophistication", 
    description: "Cross-domain integration. Optimisation of cognitive processes. Advanced academic reasoning capability.",
    typical: "Post-secondary",
  },
  { 
    id: 9, 
    name: "Advanced Reasoning", 
    description: "Systematic approaches to novel problems. Integration of multiple knowledge domains. Strategic expertise developing.",
    typical: "Tertiary / early career",
  },
  { 
    id: 10, 
    name: "Applied Expertise", 
    description: "Professional-level capability. Sophisticated application across contexts. Entry-level domain expertise.",
    typical: "Professional entry",
  },
  { 
    id: 11, 
    name: "Mastery", 
    description: "Multi-context sophistication. Advanced professional expertise. Leadership-level cognitive capability.",
    typical: "Experienced professional",
  },
  { 
    id: 12, 
    name: "Advanced Expertise", 
    description: "Innovative framework development. Cross-disciplinary integration. Expert-level capability.",
    typical: "Senior professional",
  },
  { 
    id: 13, 
    name: "Specialised Excellence", 
    description: "Field-advancing capability. Original contribution to domain knowledge. Thought leadership emerging.",
    typical: "Domain specialist",
  },
  { 
    id: 14, 
    name: "Paradigm-Advancing", 
    description: "Cross-disciplinary mastery. Methodological innovation. Recognition as authority in specialised domains.",
    typical: "Recognised authority",
  },
  { 
    id: 15, 
    name: "Peak Capability", 
    description: "Highest levels of human cognitive achievement. Groundbreaking contribution. Paradigm-shifting insight.",
    typical: "Exceptional achievement",
  },
];

const AUDIENCES = {
  schools: {
    label: "Schools",
    color: BRAND.cerulean,
    headline: "See the whole student.",
    subhead: "Beyond grades, behaviour, or test scores.",
    body: "Wadmore gives educators a developmental view of cognitive capabilities, enabling informed differentiation, meaningful support conversations, and confident pathway decisions.",
    points: ["Cognitive profiles across 8 domains", "Practical classroom strategies", "NCCD evidence documentation", "Cohort-level analytics"],
    link: "/schools",
  },
  families: {
    label: "Families",
    color: BRAND.teal,
    headline: "Understand your child's development.",
    subhead: "Without labels, comparison, or blame.",
    body: "Wadmore helps you see your child's unique cognitive strengths and growth areas, with clear guidance you can use at home and in conversations with teachers.",
    points: ["Strength-based profiles", "Plain language explanations", "Practical home activities", "School conversation guides"],
    link: "/families",
  },
  professional: {
    label: "Professional",
    color: BRAND.violet,
    headline: "Build cognitively diverse teams.",
    subhead: "Beyond personality preferences.",
    body: "Wadmore reveals how your people approach complexity, collaboration, and change, enabling smarter team composition, targeted development, and better hiring decisions.",
    points: ["Individual cognitive profiles", "Team cognitive maps", "Collaboration insights", "Development priorities"],
    link: "/professional",
  },
};

export default function Home() {
  return (
    <Layout>
      {/* Prevent horizontal overflow on mobile - max-w-full ensures content doesn't exceed viewport */}
      <div className="w-full max-w-full overflow-x-hidden">
        <Hero />
        <CognitiveFrameworkSection />
        <BandsSection />
        <ActionableSection />
        <AudienceSection />
        <DifferenceSection />
        <CTASection />
      </div>
    </Layout>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: `linear-gradient(150deg, ${BRAND.cloud} 0%, #F0F4FF 40%, ${BRAND.cloud} 100%)` }} />
      <div className="absolute top-20 right-[10%] w-[40vw] max-w-[500px] aspect-square pointer-events-none opacity-30" style={{ background: `radial-gradient(circle at center, ${BRAND.teal}20, transparent 60%)` }} />
      <div className="absolute bottom-0 left-[5%] w-[30vw] max-w-[400px] aspect-square pointer-events-none opacity-25" style={{ background: `radial-gradient(circle at center, ${BRAND.violet}15, transparent 60%)` }} />
      
      {/* Mobile-optimized padding */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-[clamp(2rem,5vh,3.5rem)] relative z-10 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-[clamp(2rem,4vw,4rem)] items-center">
          <div className="min-w-0">
            {/* Fluid typography: scales smoothly between breakpoints */}
            <h1 
              className="font-semibold leading-[0.95] tracking-tight mb-4 md:mb-[clamp(1rem,2vh,1.5rem)]" 
              style={{ 
                color: BRAND.slate,
                fontSize: "clamp(2.25rem, 5vw + 1rem, 4rem)"
              }}
            >
              Thinking,
              <br />
              <span className="relative inline-block" style={{ color: BRAND.indigo }}>
                understood.
                <svg className="absolute -bottom-1 left-0 w-full" height="8" viewBox="0 0 300 8" preserveAspectRatio="none">
                  <path d="M0 6 Q75 1, 150 4 T300 3" fill="none" stroke={BRAND.indigo} strokeWidth="2.5" strokeLinecap="round" opacity="0.25" />
                </svg>
              </span>
            </h1>
            
            <p 
              className="leading-relaxed mb-6 md:mb-[clamp(1.25rem,3vh,2rem)]" 
              style={{ 
                color: BRAND.steel,
                fontSize: "clamp(0.95rem, 1vw + 0.5rem, 1.25rem)"
              }}
            >
              Wadmore maps <strong style={{ color: BRAND.slate }}>cognitive development</strong> across 
              eight research-grounded domains and fifteen developmental bands. 
              Strength-based profiles for schools, families, and organisations.
            </p>
            
            {/* Mobile: stacked CTAs. Desktop: inline row */}
            <div className="space-y-3 md:space-y-0 md:flex md:flex-wrap md:gap-3">
              {/* Primary CTA - full width on mobile */}
              <Link to="/about" className="group flex md:inline-flex items-center justify-center gap-2 px-6 py-3.5 md:py-3 rounded-full text-base md:text-sm font-semibold transition-all duration-300 hover:scale-[1.02] w-full md:w-auto" style={{ background: `linear-gradient(135deg, ${BRAND.indigo} 0%, ${BRAND.indigoDark} 100%)`, color: BRAND.white, boxShadow: `0 6px 20px ${BRAND.indigo}35` }}>
                Discover Wadmore
                <span className="transition-transform duration-300 group-hover:translate-x-1"><ArrowIcon /></span>
              </Link>
              {/* Secondary CTAs - row on mobile, inline on desktop */}
              <div className="flex gap-2 md:contents">
                <Link to="/schools" className="flex-1 md:flex-none inline-flex items-center justify-center px-3 md:px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg truncate" style={{ background: BRAND.cerulean, color: BRAND.white }}>Schools</Link>
                <Link to="/families" className="flex-1 md:flex-none inline-flex items-center justify-center px-3 md:px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg truncate" style={{ background: BRAND.teal, color: BRAND.white }}>Families</Link>
                <Link to="/professional" className="flex-1 md:flex-none inline-flex items-center justify-center px-3 md:px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg truncate" style={{ background: BRAND.violet, color: BRAND.white }}>Professional</Link>
              </div>
            </div>
          </div>
          
          {/* PersonaGallery: hidden on mobile, scales on larger screens */}
          <div className="hidden lg:flex justify-center items-center">
            <PersonaGallery />
          </div>
        </div>
        
        {/* Stats bar: 2 columns on mobile, 4 on desktop */}
        <div 
          className="mt-8 md:mt-[clamp(1.5rem,4vh,2.5rem)] grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 py-4 md:py-6 px-4 md:px-8 rounded-2xl" 
          style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}`, boxShadow: `0 12px 35px ${BRAND.indigo}05` }}
        >
          {[
            { value: "8", label: "Cognitive Domains", sub: "Complete coverage" },
            { value: "15", label: "Developmental Bands", sub: "Growth continuum" },
            { value: "360", label: "Unique Constructs", sub: "Actionable precision" },
            { value: "α≥0.85", label: "Reliability Target", sub: "Psychometric rigour" },
          ].map((stat) => (
            <div key={stat.label} className="text-center py-1 min-w-0">
              <div className="text-xl md:text-3xl font-bold mb-0.5 truncate" style={{ color: BRAND.indigo }}>{stat.value}</div>
              <div className="text-[11px] md:text-xs font-semibold truncate" style={{ color: BRAND.slate }}>{stat.label}</div>
              <div className="text-[10px] md:text-xs hidden sm:block truncate" style={{ color: BRAND.steel }}>{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CognitiveFrameworkSection() {
  const domains = [
    { code: "AR", name: "Abstract Reasoning", desc: "Solving novel problems without relying on prior knowledge", cluster: "processing" },
    { code: "LS", name: "Logical Sequencing", desc: "Following chains of reasoning and cause-effect relationships", cluster: "processing" },
    { code: "PS", name: "Processing Speed", desc: "Taking in information quickly and responding efficiently", cluster: "processing" },
    { code: "MA", name: "Memory & Attention", desc: "Holding information in mind while working with it", cluster: "processing" },
    { code: "EF", name: "Executive Functioning", desc: "Planning, staying focused, and adapting when needed", cluster: "regulation" },
    { code: "MR", name: "Metacognition", desc: "Awareness of your own thinking and ability to choose effective strategies", cluster: "regulation" },
    { code: "CM", name: "Cognitive Confidence", desc: "Persisting through difficulty and believing you can improve", cluster: "regulation" },
    { code: "CD", name: "Creativity", desc: "Generating original ideas and seeing unexpected connections", cluster: "creative" },
  ];

  const clusterColors = {
    processing: BRAND.cerulean,
    regulation: BRAND.teal,
    creative: BRAND.violet,
  };

  const clusterNames = {
    processing: "Cognitive Processing",
    regulation: "Self-Regulation", 
    creative: "Creative Thinking",
  };

  return (
    <section className="pt-12 md:pt-20 lg:pt-28 pb-12 md:pb-20 lg:pb-28" style={{ background: BRAND.white }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: BRAND.indigo }}>The Cognitive Framework</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-4" style={{ color: BRAND.slate }}>
            Eight domains of thinking
          </h2>
          <p className="text-base md:text-lg" style={{ color: BRAND.steel }}>
            Wadmore profiles cognitive development across eight research-grounded domains, 
            organised into three clusters.
          </p>
        </div>

        {/* Cluster legend */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8 md:mb-10">
          {Object.entries(clusterNames).map(([key, name]) => (
            <div key={key} className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full" style={{ background: clusterColors[key] }} />
              <span className="text-sm font-medium" style={{ color: BRAND.slate }}>{name}</span>
            </div>
          ))}
        </div>

        {/* Domain grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {domains.map((domain) => {
            const color = clusterColors[domain.cluster];
            return (
              <div 
                key={domain.code}
                className="group p-4 md:p-5 rounded-2xl transition-all duration-300 hover:shadow-lg"
                style={{ 
                  background: BRAND.cloud,
                  border: `1px solid ${BRAND.dove}`,
                }}
              >
                {/* Code badge */}
                <div 
                  className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-sm md:text-base font-bold mb-3 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: color, color: BRAND.white }}
                >
                  {domain.code}
                </div>
                
                {/* Name */}
                <h3 className="font-semibold text-sm md:text-base mb-1.5" style={{ color: BRAND.slate }}>
                  {domain.name}
                </h3>
                
                {/* Description */}
                <p className="text-xs md:text-sm leading-relaxed" style={{ color: BRAND.steel }}>
                  {domain.desc}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* Link to science page */}
        <div className="mt-8 md:mt-10 text-center">
          <Link 
            to="/science" 
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80" 
            style={{ color: BRAND.indigo }}
          >
            Explore the research foundation <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

function BandsSection() {
  const [activeBand, setActiveBand] = useState(7);
  const band = BANDS[activeBand - 1];
  
  // Mobile swipe handlers
  const handlePrev = () => setActiveBand((prev) => Math.max(1, prev - 1));
  const handleNext = () => setActiveBand((prev) => Math.min(15, prev + 1));
  
  return (
    <section className="pt-4 md:pt-8 pb-12 md:pb-20 lg:pb-28" style={{ background: BRAND.white }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl mb-8 md:mb-12">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-widest mb-3 md:mb-4" style={{ color: BRAND.indigo }}>Developmental Framework</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-3 md:mb-4" style={{ color: BRAND.slate }}>Growth, not ranking.</h2>
          <p className="text-base md:text-lg" style={{ color: BRAND.steel }}>
            Wadmore describes where someone is on a developmental continuum, and what growth looks like from there.
          </p>
        </div>
        
        <div className="rounded-2xl overflow-hidden mb-8 md:mb-10" style={{ background: BRAND.cloud, boxShadow: `0 15px 40px ${BRAND.indigo}05` }}>
          
          {/* DESKTOP: 15-bar selector (hidden on mobile) */}
          <div className="hidden md:flex overflow-hidden">
            {BANDS.map((b) => {
              const isActive = b.id === activeBand;
              const bandColor = BAND_COLORS[b.id - 1];
              const textColor = BAND_TEXT[b.id - 1];
              return (
                <button key={b.id} onClick={() => setActiveBand(b.id)} className="flex-1 min-w-0 h-14 md:h-16 transition-all duration-300 relative group" style={{ background: bandColor, transform: isActive ? "scaleY(1.2)" : "scaleY(1)", transformOrigin: "bottom", zIndex: isActive ? 10 : 1 }}>
                  <span className={`absolute inset-0 flex items-center justify-center text-[10px] md:text-sm font-bold transition-opacity duration-200 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'}`} style={{ color: textColor }}>{b.id}</span>
                  {isActive && <span className="absolute -bottom-2 left-1/2 -translate-x-1/2" style={{ width: 0, height: 0, borderLeft: "6px solid transparent", borderRight: "6px solid transparent", borderTop: `6px solid ${bandColor}` }} />}
                </button>
              );
            })}
          </div>
          
          {/* MOBILE: Stepper navigation (hidden on desktop) */}
          <div className="md:hidden">
            {/* Progress bar showing position */}
            <div className="flex h-2">
              {BANDS.map((b) => (
                <div 
                  key={b.id} 
                  className="flex-1 transition-opacity duration-300"
                  style={{ 
                    background: BAND_COLORS[b.id - 1],
                    opacity: b.id <= activeBand ? 1 : 0.3
                  }} 
                />
              ))}
            </div>
            
            {/* Stepper controls */}
            <div className="flex items-center justify-between px-4 py-3" style={{ background: BRAND.white, borderBottom: `1px solid ${BRAND.dove}` }}>
              <button 
                onClick={handlePrev}
                disabled={activeBand === 1}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                style={{ 
                  background: activeBand === 1 ? BRAND.dove : BRAND.cloud,
                  color: activeBand === 1 ? BRAND.steel : BRAND.slate,
                  opacity: activeBand === 1 ? 0.5 : 1
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              
              <div className="flex items-center gap-2">
                <span 
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ background: BAND_COLORS[activeBand - 1], color: BAND_TEXT[activeBand - 1] }}
                >
                  {activeBand}
                </span>
                <span className="text-sm font-medium" style={{ color: BRAND.steel }}>of 15</span>
              </div>
              
              <button 
                onClick={handleNext}
                disabled={activeBand === 15}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                style={{ 
                  background: activeBand === 15 ? BRAND.dove : BRAND.cloud,
                  color: activeBand === 15 ? BRAND.steel : BRAND.slate,
                  opacity: activeBand === 15 ? 0.5 : 1
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Band detail panel */}
          <div className="p-4 md:p-6 lg:p-8" style={{ background: BRAND.white }}>
            <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <span className="text-xl md:text-2xl lg:text-3xl font-bold" style={{ color: BRAND.slate }}>Band {band.id}</span>
              <span className="px-2.5 md:px-3 py-1 md:py-1.5 rounded-full text-[10px] md:text-sm font-semibold" style={{ background: BAND_COLORS[band.id - 1], color: BAND_TEXT[band.id - 1] }}>{band.name}</span>
              <span className="px-2.5 md:px-3 py-1 md:py-1.5 rounded-lg text-[10px] md:text-xs font-medium" style={{ background: BRAND.cloud, color: BRAND.steel }}>{band.typical}</span>
            </div>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed mb-4 md:mb-5" style={{ color: BRAND.steel }}>{band.description}</p>
            <Link to="/science" className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80" style={{ color: BRAND.indigo }}>
              See detailed construct breakdowns
              <ArrowIcon />
            </Link>
          </div>
        </div>
        
        {/* Supporting cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {[
            { title: "Capability, not comparison", desc: "Bands describe what someone can do, not how they rank against peers.", color: BRAND.teal },
            { title: "Development is the goal", desc: "Every band shows current capabilities and illuminates the path forward.", color: BRAND.cerulean },
            { title: "Grounded in theory", desc: "Aligned to Piagetian and neo-Piagetian developmental stages.", color: BRAND.violet },
          ].map((item) => (
            <div key={item.title} className="p-4 md:p-5 rounded-xl" style={{ background: BRAND.cloud, border: `1px solid ${BRAND.dove}` }}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style={{ background: `${item.color}15` }}>
                <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
              </div>
              <h3 className="font-semibold text-sm md:text-base mb-1" style={{ color: BRAND.slate }}>{item.title}</h3>
              <p className="text-xs md:text-sm" style={{ color: BRAND.steel }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ActionableSection() {
  return (
    <section className="py-12 md:py-20 lg:py-28" style={{ background: BRAND.cloud }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Content */}
          <div className="min-w-0">
            <p className="text-xs md:text-sm font-semibold uppercase tracking-widest mb-3 md:mb-4" style={{ color: BRAND.indigo }}>
              From Profile to Practice
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-3 md:mb-4" style={{ color: BRAND.slate }}>
              Profiles that guide action
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-5 md:mb-6" style={{ color: BRAND.steel }}>
              Understanding cognitive development matters most when it informs what happens next. 
              Every Wadmore profile includes <strong style={{ color: BRAND.slate }}>research-grounded guidance</strong>: 
              strategies linked to established learning science, matched to developmental position.
            </p>
            
            <div className="space-y-4 mb-6">
              {[
                { title: "Band-specific strategies", desc: "Guidance matched to current developmental position, not generic advice", color: BRAND.teal },
                { title: "Evidence-linked", desc: "Every recommendation connected to peer-reviewed research", color: BRAND.cerulean },
                { title: "Context-appropriate", desc: "Different guidance for teachers, parents, and learners", color: BRAND.violet },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${item.color}15` }}>
                    <CheckIcon color={item.color} size={12} />
                  </div>
                  <div className="min-w-0">
                    <span className="font-semibold text-sm" style={{ color: BRAND.slate }}>{item.title}:</span>{" "}
                    <span className="text-sm" style={{ color: BRAND.steel }}>{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <Link to="/science" className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80" style={{ color: BRAND.indigo }}>
              Explore the research foundation <ArrowIcon />
            </Link>
          </div>
          
          {/* Right: Example guidance card */}
          <div className="rounded-2xl overflow-hidden min-w-0" style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}`, boxShadow: `0 15px 40px ${BRAND.indigo}06` }}>
            <div className="px-4 md:px-6 py-4 flex items-center gap-3" style={{ background: `${BRAND.indigo}08`, borderBottom: `1px solid ${BRAND.dove}` }}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: BRAND.indigo }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: BRAND.indigo }}>Sample Profile Guidance</p>
                <p className="text-xs" style={{ color: BRAND.steel }}>Executive Functioning · Band 5</p>
              </div>
            </div>
            
            <div className="p-4 md:p-6 space-y-4">
              <div className="p-4 rounded-xl" style={{ background: BRAND.cloud }}>
                <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: BRAND.teal }}>Current Capabilities</p>
                <p className="text-sm" style={{ color: BRAND.slate }}>Plans multi-step projects with emerging independence; benefits from milestone scaffolding</p>
              </div>
              
              <div>
                <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: BRAND.cerulean }}>Recommended Strategies</p>
                <p className="text-sm" style={{ color: BRAND.steel }}>Provide project templates with pre-set milestones. Model planning through think-alouds. Gradually fade scaffolds as independence develops.</p>
              </div>
              
              <div>
                <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: BRAND.violet }}>Research Base</p>
                <p className="text-sm" style={{ color: BRAND.steel }}>External planning structures support internalisation through guided practice (Diamond, 2013). Reducing extraneous cognitive load through visible structure supports complex task performance (Sweller, 2019).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AudienceSection() {
  const [active, setActive] = useState("schools");
  const audience = AUDIENCES[active];
  
  return (
    <section className="py-12 md:py-20 lg:py-28 relative overflow-hidden" style={{ background: BRAND.white }}>
      <div className="absolute bottom-0 right-0 w-[50vw] max-w-[400px] h-[50vw] max-h-[400px] pointer-events-none opacity-30" style={{ background: `radial-gradient(circle at center, ${audience.color}15, transparent 60%)` }} />
      
      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-12 items-start">
          <div className="min-w-0 w-full">
            <p className="text-xs md:text-sm font-semibold uppercase tracking-widest mb-3 md:mb-4" style={{ color: BRAND.indigo }}>Built for Your Context</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-3 md:mb-4" style={{ color: BRAND.slate }}>One framework.<br />Three platforms.</h2>
            <p className="text-sm md:text-base mb-6 md:mb-8" style={{ color: BRAND.steel }}>The cognitive science stays consistent. The insights adapt to what matters most to you.</p>
            
            {/* Vertical stack on mobile, horizontal on tablet, vertical on desktop */}
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-2 lg:flex-col lg:gap-2">
              {Object.entries(AUDIENCES).map(([key, aud]) => (
                <button key={key} onClick={() => setActive(key)} className="text-left px-4 lg:px-5 py-3 lg:py-4 rounded-xl transition-all duration-300 w-full sm:flex-1 lg:w-full" style={{ background: active === key ? BRAND.cloud : "transparent", border: active === key ? `2px solid ${aud.color}` : `2px solid transparent`, boxShadow: active === key ? `0 8px 25px ${aud.color}12` : "none" }}>
                  <div className="flex items-center gap-2 lg:gap-3">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg flex items-center justify-center transition-transform duration-300 flex-shrink-0" style={{ background: `${aud.color}15`, transform: active === key ? "scale(1.1)" : "scale(1)" }}>
                      <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full" style={{ background: aud.color }} />
                    </div>
                    <span className="text-sm lg:text-base font-semibold" style={{ color: active === key ? BRAND.slate : BRAND.steel }}>{aud.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          <div className="rounded-2xl p-5 md:p-8 lg:p-10 relative overflow-hidden min-w-0 w-full" style={{ background: BRAND.cloud, border: `1px solid ${BRAND.dove}`, boxShadow: `0 20px 50px ${BRAND.indigo}05` }}>
            <div className="absolute top-0 left-0 w-1 md:w-1.5 h-full" style={{ background: audience.color }} />
            <div className="pl-3 md:pl-4 min-w-0">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2" style={{ color: BRAND.slate }}>{audience.headline}</h3>
              <p className="text-sm md:text-base mb-3 md:mb-4" style={{ color: audience.color }}>{audience.subhead}</p>
              <p className="text-xs md:text-sm mb-6 md:mb-8 leading-relaxed" style={{ color: BRAND.steel }}>{audience.body}</p>
              
              {/* Features: single column on mobile */}
              <div className="space-y-2.5 md:grid md:grid-cols-2 md:gap-3 md:space-y-0 mb-6 md:mb-8">
                {audience.points.map((point) => (
                  <div key={point} className="flex items-start gap-2 min-w-0">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${audience.color}15` }}>
                      <CheckIcon color={audience.color} size={10} />
                    </div>
                    <span className="text-xs md:text-sm" style={{ color: BRAND.slate }}>{point}</span>
                  </div>
                ))}
              </div>
              
              <Link to={audience.link} className="group inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-[1.02]" style={{ background: `linear-gradient(135deg, ${audience.color} 0%, ${audience.color}dd 100%)`, color: BRAND.white, boxShadow: `0 6px 20px ${audience.color}30` }}>
                Wadmore for {audience.label}
                <span className="transition-transform duration-300 group-hover:translate-x-1"><ArrowIcon /></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DifferenceSection() {
  return (
    <section className="py-12 md:py-20 lg:py-28" style={{ background: BRAND.cloud }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-widest mb-3 md:mb-4" style={{ color: BRAND.indigo }}>Why Wadmore</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-3 md:mb-4" style={{ color: BRAND.slate }}>Assessment that serves growth.</h2>
          <p className="text-base md:text-lg" style={{ color: BRAND.steel }}>Wadmore was built for understanding and development.</p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {[
            { title: "Strength-based", desc: "Profiles lead with what's working. Growth areas framed as opportunities.", color: BRAND.teal },
            { title: "Developmental", desc: "Movement is the point. Every profile shows where and what's next.", color: BRAND.cerulean },
            { title: "Actionable", desc: "360 constructs connect to specific interventions, not generic advice.", color: BRAND.indigo },
            { title: "Research-aligned", desc: "Built on current cognitive science. Intuition, memory, and self-regulation matter.", color: BRAND.violet },
          ].map((item) => (
            <div key={item.title} className="group p-4 md:p-6 rounded-xl transition-all duration-300 md:hover:-translate-y-2 md:hover:shadow-xl min-w-0" style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}` }}>
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-3 md:mb-5 transition-transform duration-300 group-hover:scale-110" style={{ background: `${item.color}12` }}>
                <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full" style={{ background: item.color }} />
              </div>
              <h3 className="text-sm md:text-lg font-semibold mb-1 md:mb-2" style={{ color: BRAND.slate }}>{item.title}</h3>
              <p className="text-[11px] md:text-sm leading-relaxed" style={{ color: BRAND.steel }}>{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-6 md:mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {[
            { title: "Psychometrically rigorous", desc: "IRT/Rasch-aligned measurement with α≥0.85 reliability." },
            { title: "Designed for fairness", desc: "DIF testing, bias review, and EALD-friendly design." },
            { title: "Lifespan coverage", desc: "Early childhood through professional expertise." },
            { title: "Australian-built", desc: "Local support and data sovereignty." },
          ].map((item) => (
            <div key={item.title} className="flex gap-3 min-w-0">
              <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: BRAND.sage }} />
              <div className="min-w-0">
                <h4 className="font-semibold text-xs md:text-sm mb-0.5" style={{ color: BRAND.slate }}>{item.title}</h4>
                <p className="text-[11px] md:text-xs" style={{ color: BRAND.steel }}>{item.desc}</p>
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
    <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${BRAND.indigo} 0%, ${BRAND.indigoDark} 50%, #1a2040 100%)` }}>
      <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: `radial-gradient(circle at 30% 70%, ${BRAND.teal} 1px, transparent 1px), radial-gradient(circle at 70% 30%, ${BRAND.violet} 1px, transparent 1px)`, backgroundSize: "50px 50px" }} />
      
      <div className="max-w-4xl mx-auto px-5 md:px-8 text-center relative z-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-4 md:mb-6 leading-tight" style={{ color: BRAND.white }}>Ready to understand cognitive development?</h2>
        <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 opacity-85 max-w-2xl mx-auto" style={{ color: BRAND.white }}>
          Launching March 2026. Register now for early access.
        </p>
        
        {/* Mobile: stacked full-width. Desktop: inline row */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 md:gap-4">
          <Link to="/contact" className="group inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3.5 md:py-4 rounded-full text-sm md:text-base font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl" style={{ background: BRAND.white, color: BRAND.indigo, boxShadow: "0 6px 25px rgba(0,0,0,0.2)" }}>
            Register for Early Access <span className="transition-transform duration-300 group-hover:translate-x-1"><ArrowIcon /></span>
          </Link>
        </div>
        
        <div className="mt-8 md:mt-10 pt-6 md:pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
          <Link to="/science" className="inline-flex items-center gap-2 text-sm font-medium opacity-70 hover:opacity-100 transition-opacity" style={{ color: BRAND.white }}>
            Explore the science behind Wadmore <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8.707 3.293a1 1 0 00-1.414 1.414L9.586 7H3a1 1 0 100 2h6.586l-2.293 2.293a1 1 0 101.414 1.414l4-4a1 1 0 000-1.414l-4-4z" /></svg>;
}

function CheckIcon({ color, size = 14 }) {
  return <svg width={size} height={size} viewBox="0 0 16 16" fill={color}><path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" /></svg>;
}