// src/pages/About.jsx
// Wadmore About - Our story, mission, and values
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
      <div className="w-full max-w-full overflow-x-hidden">
        <Hero />
        <MissionSection />
        <StorySection />
        <ValuesSection />
        <CredentialsSection />
        <CTASection />
      </div>
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
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-center">
          <div className="min-w-0">
            {/* Eyebrow */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}`, color: BRAND.slate }}
            >
              <span className="w-2 h-2 rounded-full" style={{ background: BRAND.indigo }} />
              About Wadmore
            </div>
            
            {/* Main headline - fluid typography with underline */}
            <h1 
              className="font-semibold leading-tight tracking-tight mb-5"
              style={{ 
                color: BRAND.slate,
                fontSize: "clamp(2.25rem, 4vw + 1rem, 3.5rem)"
              }}
            >
              Understanding{" "}
              <span className="relative inline-block" style={{ color: BRAND.indigo }}>
                thinking.
                <svg className="absolute -bottom-1 left-0 w-full" height="8" viewBox="0 0 200 8" preserveAspectRatio="none">
                  <path d="M0 6 Q50 1, 100 4 T200 3" fill="none" stroke={BRAND.indigo} strokeWidth="2.5" strokeLinecap="round" opacity="0.3" />
                </svg>
              </span>
            </h1>
            
            <p 
              className="leading-relaxed"
              style={{ 
                color: BRAND.steel,
                fontSize: "clamp(1.1rem, 1vw + 0.5rem, 1.25rem)"
              }}
            >
              Wadmore was founded on a belief: everyone deserves to understand 
              their thinking development, and that understanding should lead to <strong style={{ color: BRAND.slate }}>growth, not labels</strong>.
            </p>
          </div>
          
          {/* Right: Mission card */}
          <div className="hidden lg:block">
            <div className="rounded-2xl p-6 lg:p-8" style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}`, boxShadow: `0 20px 50px ${BRAND.indigo}08` }}>
              <div className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: BRAND.indigo }}>Our Mission</div>
              <p className="text-lg font-semibold mb-4 leading-snug" style={{ color: BRAND.slate }}>
                Profiles that guide action.
              </p>
              <p className="text-sm leading-relaxed mb-5" style={{ color: BRAND.steel }}>
                We're building cognitive profiling that reveals how people's thinking capability develops, with research-grounded guidance for what to do next.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Strength-based", "Research-grounded", "Developmentally progressive"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-full text-xs font-medium" style={{ background: `${BRAND.indigo}10`, color: BRAND.indigo }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
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
              Profiles that guide action.
            </h2>
            <p 
              className="text-lg mb-5 leading-relaxed"
              style={{ color: BRAND.steel }}
            >
              We're building a cognitive profiling platform that reveals how people's 
              thinking capability develops. Our framework maps 
              development across eight domains and fifteen bands, creating 360 constructs 
              that describe cognitive capability with genuine precision.
            </p>
            <p 
              className="text-lg mb-5 leading-relaxed"
              style={{ color: BRAND.steel }}
            >
              Where traditional assessments rank and compare, Wadmore profiles and guides. 
              Our strength-based approach celebrates cognitive diversity and provides 
              genuinely actionable insights for schools, families, and organisations.
            </p>
            <p 
              className="text-lg leading-relaxed"
              style={{ color: BRAND.steel }}
            >
              Every profile includes{" "}
              <strong style={{ color: BRAND.indigo }}>research-grounded guidance</strong>, 
              strategies linked to over 50 peer-reviewed sources across cognitive science 
              and learning research. Because understanding thinking should lead to growth.
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
                  title: "Map",
                  description: "Profile cognitive development across 8 domains with professional psychometric standards",
                },
                {
                  number: "02",
                  title: "Understand",
                  description: "Place development on a 15-band continuum, showing current capabilities and growth pathways",
                },
                {
                  number: "03",
                  title: "Guide",
                  description: "Connect insights to research-grounded strategies for teachers, parents, and learners",
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
            Decades of assessment expertise
          </h2>
          
          <div className="space-y-5" style={{ color: BRAND.steel }}>
            <p className="text-lg leading-relaxed">
              The Wadmore team brings decades of experience in cognitive assessment, 
              having worked across some of the world's largest testing programmes. 
              From national examinations to international assessments reaching millions 
              of students, we've seen what works and what doesn't.
            </p>
            
            <p className="text-lg leading-relaxed">
              One question kept emerging: <em>what if we could map how thinking 
              capability develops?</em> Traditional 
              cognitive assessments produce percentile ranks. Useful for comparison, 
              but limited for development. Teachers would ask: "This student is at the 
              62nd percentile. Now what?" The assessments had no answer.
            </p>
            
            <p className="text-lg leading-relaxed">
              Wadmore takes a different approach. We profile cognitive development across 
              eight domains, from abstract reasoning to executive functioning to 
              metacognition, revealing how a person processes, regulates, and creates. 
              And we show what growth looks like from wherever you are.
            </p>
            
            <p className="text-lg leading-relaxed">
              The result is strength-based profiling that empowers development. Assessment 
              designed for fairness from the start. Insights connected to research-grounded 
              strategies. And a framework that spans the full developmental journey, from 
              early childhood through professional expertise.
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
      description: "Over 50 peer-reviewed sources. Every recommendation linked to established science.",
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
      description: "Bias testing, DIF analysis, and inclusive design built in from the start.",
      color: BRAND.indigo,
    },
    {
      icon: ActionIcon,
      title: "Actionable",
      description: "360 constructs connect to specific strategies, not generic advice.",
      color: BRAND.golden,
    },
    {
      icon: PrivacyIcon,
      title: "Privacy-first",
      description: "Your data belongs to you. Ethical data practices. Transparent governance.",
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
            These principles guide every decision we make, from assessment design 
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
   CREDENTIALS SECTION - Replacing Founder Section
   ══════════════════════════════════════════════════════════════ */

function CredentialsSection() {
  return (
    <section className="py-16 md:py-24" style={{ background: BRAND.cloud }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div 
            className="text-sm font-semibold uppercase tracking-wider mb-4"
            style={{ color: BRAND.indigo }}
          >
            Our Approach
          </div>
          <h2 
            className="text-3xl md:text-4xl font-semibold mb-4"
            style={{ color: BRAND.slate }}
          >
            Built on rigorous foundations
          </h2>
          <p className="text-lg" style={{ color: BRAND.steel }}>
            Wadmore combines deep psychometric expertise with modern technology 
            to deliver assessment that maps thinking development with scientific rigour and genuine utility.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              stat: "50+",
              label: "Peer-reviewed sources",
              desc: "Grounding every domain and construct",
            },
            {
              stat: "8",
              label: "Cognitive domains",
              desc: "Complete coverage of thinking capability",
            },
            {
              stat: "360",
              label: "Constructs",
              desc: "Precise developmental descriptors",
            },
            {
              stat: "15",
              label: "Developmental bands",
              desc: "Mapping growth from foundation to expert",
            },
          ].map((item) => (
            <div 
              key={item.label}
              className="text-center p-6 rounded-xl"
              style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}` }}
            >
              <div 
                className="text-4xl md:text-5xl font-bold mb-2"
                style={{ color: BRAND.indigo }}
              >
                {item.stat}
              </div>
              <div 
                className="font-semibold mb-1"
                style={{ color: BRAND.slate }}
              >
                {item.label}
              </div>
              <div className="text-sm" style={{ color: BRAND.steel }}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>
        
        {/* Psychometric standards */}
        <div 
          className="mt-12 p-8 rounded-2xl"
          style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}` }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 
                className="text-xl font-semibold mb-4"
                style={{ color: BRAND.slate }}
              >
                Professional psychometric standards
              </h3>
              <p className="text-base leading-relaxed" style={{ color: BRAND.steel }}>
                Wadmore applies the same rigorous psychometric methodology used in 
                high-stakes educational assessment. IRT/Rasch modelling, reliability 
                analysis, DIF testing for fairness, and continuous calibration ensure 
                every profile meets professional standards.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                "IRT/Rasch modelling",
                "α ≥ 0.85 reliability",
                "DIF analysis",
                "Adaptive testing",
                "Bias detection",
                "Continuous calibration",
              ].map((item) => (
                <span 
                  key={item}
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{ background: `${BRAND.indigo}08`, color: BRAND.indigo }}
                >
                  {item}
                </span>
              ))}
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
          Explore how Wadmore can help you understand cognitive strengths, 
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
            For Organisations
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