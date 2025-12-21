// src/pages/About.jsx
// Wadmore About - Our story, mission, and the team behind the platform
// Language: Cognitive development focus

import Layout from "../components/Layout";
import { Link } from "react-router-dom";

/* ══════════════════════════════════════════════════════════════
   WADMORE BRAND COLOURS
   ══════════════════════════════════════════════════════════════ */

const BRAND = {
  indigo: "#384275",
  indigoDark: "#2a3259",
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
};

/* ══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════════════════════ */

export default function About() {
  return (
    <Layout>
      <Hero />
      <MissionSection />
      <StorySection />
      <ValuesSection />
      <FounderSection />
      <CTASection />
    </Layout>
  );
}

/* ══════════════════════════════════════════════════════════════
   HERO - Responsive design
   ══════════════════════════════════════════════════════════════ */

function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: BRAND.cloud }}>
      {/* Decorative orbs */}
      <div 
        className="absolute top-0 left-[20%] w-[40vw] max-w-[500px] aspect-square pointer-events-none opacity-25"
        style={{ background: `radial-gradient(circle at center, ${BRAND.indigo}15, transparent 60%)` }}
      />
      <div 
        className="absolute bottom-0 right-[10%] w-[30vw] max-w-[400px] aspect-square pointer-events-none opacity-20"
        style={{ background: `radial-gradient(circle at center, ${BRAND.teal}12, transparent 60%)` }}
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-[clamp(3rem,8vh,5rem)] relative z-10 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}`, color: BRAND.slate }}
          >
            <span className="w-2 h-2 rounded-full" style={{ background: BRAND.indigo }} />
            About Wadmore
          </div>
          
          {/* Main headline - fluid typography */}
          <h1 
            className="font-semibold leading-tight tracking-tight mb-5"
            style={{ 
              color: BRAND.slate,
              fontSize: "clamp(2.25rem, 4vw + 1rem, 3.5rem)"
            }}
          >
            Understanding{" "}
            <span style={{ color: BRAND.indigo }}>cognitive development.</span>
          </h1>
          
          <p 
            className="leading-relaxed max-w-2xl"
            style={{ 
              color: BRAND.steel,
              fontSize: "clamp(1.1rem, 1vw + 0.5rem, 1.25rem)"
            }}
          >
            Wadmore was founded on a simple belief: everyone deserves to understand 
            their cognitive development, and that understanding should lead to growth — not labels.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   MISSION
   ══════════════════════════════════════════════════════════════ */

function MissionSection() {
  return (
    <section className="py-16 md:py-24" style={{ background: BRAND.white }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div 
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{ color: BRAND.indigo }}
            >
              Our Mission
            </div>
            <h2 
              className="text-3xl md:text-4xl font-semibold mb-6"
              style={{ color: BRAND.slate }}
            >
              Thinking, understood.
            </h2>
            <p 
              className="text-lg mb-5 leading-relaxed"
              style={{ color: BRAND.steel }}
            >
              We're building the world's most advanced cognitive profiling platform — 
              one that reveals cognitive development across eight domains and fifteen 
              developmental bands. Our goal is to make deep cognitive understanding 
              accessible to everyone: families, schools, and organisations.
            </p>
            <p 
              className="text-lg leading-relaxed"
              style={{ color: BRAND.steel }}
            >
              Traditional assessments have focused on deficits, comparisons, and 
              gatekeeping. Wadmore takes a different path: strength-based profiling 
              that empowers growth and celebrates cognitive diversity.
            </p>
          </div>
          
          <div 
            className="rounded-2xl p-8 md:p-10"
            style={{ background: BRAND.cloud, border: `1px solid ${BRAND.dove}` }}
          >
            <div className="space-y-6">
              {[
                {
                  number: "01",
                  title: "Understand",
                  description: "Reveal cognitive development across 8 domains and 15 developmental bands",
                },
                {
                  number: "02",
                  title: "Empower",
                  description: "Provide actionable insights that lead to real growth, not just scores and labels",
                },
                {
                  number: "03",
                  title: "Include",
                  description: "Design for fairness from the start — eliminating bias, not perpetuating it",
                },
              ].map((item) => (
                <div key={item.number} className="flex gap-4">
                  <div 
                    className="text-2xl font-bold flex-shrink-0"
                    style={{ color: BRAND.indigo }}
                  >
                    {item.number}
                  </div>
                  <div>
                    <div 
                      className="font-semibold text-lg mb-1"
                      style={{ color: BRAND.slate }}
                    >
                      {item.title}
                    </div>
                    <div className="text-base" style={{ color: BRAND.steel }}>
                      {item.description}
                    </div>
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
   OUR STORY
   ══════════════════════════════════════════════════════════════ */

function StorySection() {
  return (
    <section className="py-16 md:py-24" style={{ background: BRAND.cloud }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div 
            className="text-sm font-semibold uppercase tracking-wider mb-4 text-center"
            style={{ color: BRAND.indigo }}
          >
            Our Story
          </div>
          <h2 
            className="text-3xl md:text-4xl font-semibold mb-8 text-center"
            style={{ color: BRAND.slate }}
          >
            Born from frustration with the status quo
          </h2>
          
          <div className="space-y-5" style={{ color: BRAND.steel }}>
            <p className="text-lg leading-relaxed">
              After years working in educational assessment, the founder of Wadmore 
              saw the same pattern repeat: students reduced to percentile ranks, 
              teachers drowning in data without actionable insights, and families 
              left confused by reports full of jargon.
            </p>
            
            <p className="text-lg leading-relaxed">
              Traditional cognitive assessments — CogAT, WISC, CAT4 — were designed 
              decades ago. They're expensive, culturally biased, deficit-focused, 
              and produce reports that sit in filing cabinets rather than driving 
              meaningful change.
            </p>
            
            <p className="text-lg leading-relaxed">
              Wadmore was created to do things differently: to build assessment 
              that's grounded in modern cognitive science, designed for fairness, 
              focused on strengths, and genuinely useful for the people who need it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   VALUES
   ══════════════════════════════════════════════════════════════ */

function ValuesSection() {
  const values = [
    {
      icon: StrengthIcon,
      title: "Strength-based",
      description: "We lead with what's working. Growth areas are opportunities, not deficits.",
      color: BRAND.teal,
    },
    {
      icon: ScienceIcon,
      title: "Research-grounded",
      description: "Every domain and construct is backed by established cognitive science.",
      color: BRAND.cerulean,
    },
    {
      icon: AccessibleIcon,
      title: "Accessible",
      description: "Deep cognitive understanding shouldn't require a psychology degree to interpret.",
      color: BRAND.violet,
    },
    {
      icon: FairnessIcon,
      title: "Fair by design",
      description: "Bias testing, DIF analysis, and inclusive design are built in from the start.",
      color: BRAND.indigo,
    },
    {
      icon: ActionIcon,
      title: "Actionable",
      description: "360 constructs connect to specific interventions — not generic advice.",
      color: BRAND.golden,
    },
    {
      icon: PrivacyIcon,
      title: "Privacy-first",
      description: "Your data belongs to you. We're committed to ethical data practices.",
      color: BRAND.slate,
    },
  ];

  return (
    <section className="py-16 md:py-24" style={{ background: BRAND.white }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div 
            className="text-sm font-semibold uppercase tracking-wider mb-4"
            style={{ color: BRAND.indigo }}
          >
            Our Values
          </div>
          <h2 
            className="text-3xl md:text-4xl font-semibold mb-4"
            style={{ color: BRAND.slate }}
          >
            What we believe
          </h2>
          <p className="text-lg" style={{ color: BRAND.steel }}>
            These principles guide every decision we make — from assessment design 
            to reporting to how we work with schools and families.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div 
                key={value.title}
                className="group p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ background: BRAND.cloud, border: `1px solid ${BRAND.dove}` }}
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${value.color}12` }}
                >
                  <Icon color={value.color} />
                </div>
                <h3 
                  className="font-semibold text-lg mb-2"
                  style={{ color: BRAND.slate }}
                >
                  {value.title}
                </h3>
                <p className="text-base" style={{ color: BRAND.steel }}>
                  {value.description}
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
   FOUNDER
   ══════════════════════════════════════════════════════════════ */

function FounderSection() {
  return (
    <section className="py-16 md:py-24" style={{ background: BRAND.cloud }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-center">
          {/* Photo placeholder */}
          <div 
            className="aspect-square max-w-sm mx-auto lg:mx-0 rounded-2xl flex items-center justify-center"
            style={{ background: BRAND.dove }}
          >
            <div className="text-center p-8">
              <div 
                className="w-28 h-28 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold"
                style={{ background: BRAND.indigo, color: BRAND.white }}
              >
                MW
              </div>
              <div className="text-sm" style={{ color: BRAND.steel }}>
                Founder photo
              </div>
            </div>
          </div>
          
          <div>
            <div 
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{ color: BRAND.indigo }}
            >
              The Founder
            </div>
            <h2 
              className="text-3xl md:text-4xl font-semibold mb-2"
              style={{ color: BRAND.slate }}
            >
              Matt Wadmore
            </h2>
            <div 
              className="text-lg font-medium mb-6"
              style={{ color: BRAND.indigo }}
            >
              Founder & CEO
            </div>
            
            <div className="space-y-4" style={{ color: BRAND.steel }}>
              <p className="text-base leading-relaxed">
                Matt brings over 15 years of experience in educational assessment, 
                including roles as a school principal and senior positions in 
                assessment technology. He's seen firsthand how traditional testing 
                fails students, teachers, and families.
              </p>
              <p className="text-base leading-relaxed">
                His background spans psychometric development, educational leadership, 
                and technology implementation — a unique combination that informs 
                Wadmore's approach to building assessment that actually works.
              </p>
              <p className="text-base leading-relaxed">
                Matt holds qualifications in education and educational psychology, 
                and is passionate about making cognitive science accessible to everyone 
                who can benefit from it.
              </p>
            </div>
            
            <div className="flex gap-4 mt-6">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}` }}
              >
                <LinkedInIcon color={BRAND.slate} />
              </a>
            </div>
          </div>
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
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${BRAND.indigo} 0%, ${BRAND.indigoDark} 100%)` }}
    >
      {/* Decorative pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{ 
          backgroundImage: `radial-gradient(circle at center, white 1.5px, transparent 1.5px)`,
          backgroundSize: "40px 40px"
        }}
      />
      
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center relative z-10">
        <h2 
          className="text-3xl md:text-4xl font-semibold mb-5"
          style={{ color: BRAND.white }}
        >
          Ready to understand cognitive development?
        </h2>
        <p 
          className="text-lg mb-10 opacity-90 max-w-2xl mx-auto"
          style={{ color: BRAND.white }}
        >
          Explore how Wadmore can help you understand cognitive strengths — 
          for yourself, your family, your students, or your team.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/families"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            style={{ background: BRAND.teal, color: BRAND.white, boxShadow: `0 6px 20px ${BRAND.teal}40` }}
          >
            For Families
          </Link>
          <Link
            to="/schools"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            style={{ background: BRAND.cerulean, color: BRAND.white, boxShadow: `0 6px 20px ${BRAND.cerulean}40` }}
          >
            For Schools
          </Link>
          <Link
            to="/professional"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            style={{ background: BRAND.violet, color: BRAND.white, boxShadow: `0 6px 20px ${BRAND.violet}40` }}
          >
            For Professional
          </Link>
        </div>
        
        <div 
          className="mt-10 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.2)" }}
        >
          <Link
            to="/science"
            className="inline-flex items-center gap-2 text-base font-medium opacity-90 hover:opacity-100 transition-opacity"
            style={{ color: BRAND.white }}
          >
            Learn about our methodology
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
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8.707 3.293a1 1 0 00-1.414 1.414L9.586 7H3a1 1 0 100 2h6.586l-2.293 2.293a1 1 0 101.414 1.414l4-4a1 1 0 000-1.414l-4-4z" />
    </svg>
  );
}

function StrengthIcon({ color }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
  );
}

function ScienceIcon({ color }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3H15M12 3V8M12 8L6 21H18L12 8Z" />
      <circle cx="12" cy="14" r="1" fill={color} />
      <circle cx="9" cy="17" r="1" fill={color} />
      <circle cx="15" cy="17" r="1" fill={color} />
    </svg>
  );
}

function AccessibleIcon({ color }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="8" r="2" />
      <path d="M12 10V14" />
      <path d="M9 18L12 14L15 18" />
    </svg>
  );
}

function FairnessIcon({ color }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3V21" />
      <path d="M5 6L12 3L19 6" />
      <path d="M5 6V10C5 11 6 12 8 12" />
      <path d="M19 6V10C19 11 18 12 16 12" />
      <circle cx="8" cy="15" r="3" />
      <circle cx="16" cy="15" r="3" />
    </svg>
  );
}

function ActionIcon({ color }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12,6 12,12 16,14" />
    </svg>
  );
}

function PrivacyIcon({ color }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      <circle cx="12" cy="16" r="1" fill={color} />
    </svg>
  );
}

function LinkedInIcon({ color }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill={color}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}