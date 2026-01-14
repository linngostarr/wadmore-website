// src/pages/Consulting.jsx
// Wadmore Professional Learning - Expert development for cognitive assessment
// Brand accent: Violet (#786CFF) - expertise, innovation, premium

import { useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import SEO, { PAGE_SEO } from '../components/SEO';

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
  violetDark: "#5f54cc",
  white: "#ffffff",
  sage: "#A4D4AE",
};

export default function Consulting() {
  return (
    <Layout>
            <SEO {...PAGE_SEO.consulting} />
      <div className="w-full max-w-full overflow-x-hidden">
        <Hero />
        <AudienceSection />
        <ProgramsSection />
        <WorkshopTopicsSection />
        <DeliveryFormatsSection />
        <OutcomesSection />
        <CTASection />
      </div>
    </Layout>
  );
}

/* ══════════════════════════════════════════════════════════════
   HERO - Responsive
   ══════════════════════════════════════════════════════════════ */

function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: BRAND.cloud }}>
      {/* Decorative orbs */}
      <div 
        className="absolute top-0 left-[10%] w-[35vw] max-w-[450px] aspect-square pointer-events-none opacity-25"
        style={{ background: `radial-gradient(circle at center, ${BRAND.violet}18, transparent 60%)` }}
      />
      <div 
        className="absolute bottom-0 right-[5%] w-[30vw] max-w-[400px] aspect-square pointer-events-none opacity-20"
        style={{ background: `radial-gradient(circle at center, ${BRAND.indigo}12, transparent 60%)` }}
      />
      
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="min-w-0">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}`, color: BRAND.slate }}
            >
              <span className="w-2 h-2 rounded-full" style={{ background: BRAND.violet }} />
              Professional Learning
            </div>
            
            <h1 
              className="font-semibold leading-[1.1] tracking-tight mb-5"
              style={{ 
                color: BRAND.slate,
                fontSize: "clamp(2.25rem, 4vw + 1rem, 3.5rem)"
              }}
            >
              Build capability in{" "}
              <span className="relative inline-block" style={{ color: BRAND.violet }}>
                cognitive assessment.
                <svg className="absolute -bottom-1 left-0 w-full" height="8" viewBox="0 0 380 8" preserveAspectRatio="none">
                  <path d="M0 6 Q95 1, 190 4 T380 3" fill="none" stroke={BRAND.violet} strokeWidth="2.5" strokeLinecap="round" opacity="0.3" />
                </svg>
              </span>
            </h1>
            
            <p 
              className="leading-relaxed mb-5"
              style={{ 
                color: BRAND.steel,
                fontSize: "clamp(1.05rem, 1vw + 0.5rem, 1.25rem)"
              }}
            >
              Build capability in interpreting cognitive evidence and translating 
              profiles into informed professional decisions. Research-grounded, 
              practically focused professional learning.
            </p>
            
            {/* v1.1: Safeguard statement */}
            <div 
              className="p-4 rounded-xl mb-7"
              style={{ 
                background: BRAND.white,
                border: `1px solid ${BRAND.dove}`
              }}
            >
              <p 
                className="text-sm leading-relaxed"
                style={{ color: BRAND.steel }}
              >
                <strong style={{ color: BRAND.slate }}>Important:</strong> Wadmore consulting 
                supports interpretation and translation of cognitive evidence. It does not 
                involve introducing proprietary teaching, coaching, or development programmes.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Link 
                to="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 hover:scale-[1.02]"
                style={{ background: BRAND.violet, color: BRAND.white, boxShadow: `0 6px 20px ${BRAND.violet}35` }}
              >
                Enquire About PL
                <ArrowIcon />
              </Link>
              <a 
                href="#programs"
                className="inline-flex items-center px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 hover:shadow-md"
                style={{ background: BRAND.white, color: BRAND.slate, border: `1px solid ${BRAND.dove}` }}
              >
                View Programs
              </a>
            </div>
          </div>
          
          <div 
            className="rounded-2xl p-6 lg:p-8 min-w-0"
            style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}`, boxShadow: `0 10px 30px ${BRAND.indigo}05` }}
          >
            <h3 className="font-semibold text-lg mb-5" style={{ color: BRAND.slate }}>
              Professional learning that makes a difference
            </h3>
            
            <div className="space-y-4">
              {[
                { 
                  icon: GraduateIcon, 
                  title: "Grounded in cognitive science", 
                  desc: "Not just what to do, but why it works" 
                },
                { 
                  icon: ChecklistIcon, 
                  title: "Immediately applicable", 
                  desc: "Walk away with strategies you can use tomorrow" 
                },
                { 
                  icon: UsersIcon, 
                  title: "Tailored to your context", 
                  desc: "Customised for your school, system, or organisation" 
                },
                { 
                  icon: PenIcon, 
                  title: "Ongoing support", 
                  desc: "Not a one-off event, we're here for the journey" 
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${BRAND.violet}10` }}
                    >
                      <Icon color={BRAND.violet} />
                    </div>
                    <div className="min-w-0">
                      <div className="font-medium" style={{ color: BRAND.slate }}>{item.title}</div>
                      <div className="text-sm" style={{ color: BRAND.steel }}>{item.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   AUDIENCE SECTION
   ══════════════════════════════════════════════════════════════ */

function AudienceSection() {
  const audiences = [
    {
      title: "Classroom Teachers",
      description: "Learn to interpret cognitive profiles and differentiate instruction based on cognitive development.",
      outcomes: ["Read and apply cognitive profiles", "Design differentiated learning experiences", "Identify students who need extension or support"],
    },
    {
      title: "Learning Support & Intervention",
      description: "Understand the cognitive foundations of learning difficulties and design targeted interventions.",
      outcomes: ["Link cognitive patterns to learning challenges", "Build evidence-based intervention plans", "Document and communicate effectively with families"],
    },
    {
      title: "School Leaders",
      description: "Build whole-school capability in cognitive assessment and use data to inform strategic decisions.",
      outcomes: ["Lead professional learning in cognitive assessment", "Use cohort data for resource allocation", "Build a culture of cognitive diversity appreciation"],
    },
    {
      title: "Educational Psychologists",
      description: "Deepen your understanding of Wadmore's framework and how it complements clinical assessment.",
      outcomes: ["Integrate Wadmore profiles with clinical data", "Guide schools in interpretation and action", "Support complex cases with developmental insight"],
    },
  ];

  return (
    <section className="py-16 md:py-24" style={{ background: BRAND.white }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div 
            className="text-sm font-semibold uppercase tracking-wider mb-4"
            style={{ color: BRAND.violet }}
          >
            Who It's For
          </div>
          <h2 
            className="text-3xl md:text-4xl font-semibold mb-4"
            style={{ color: BRAND.slate }}
          >
            Tailored for every role
          </h2>
          <p className="text-lg" style={{ color: BRAND.steel }}>
            Our professional learning is designed for the specific needs and contexts 
            of different roles within schools and educational organisations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="group p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ background: BRAND.cloud, border: `1px solid ${BRAND.dove}` }}
            >
              <h3 
                className="font-semibold text-xl mb-2"
                style={{ color: BRAND.slate }}
              >
                {audience.title}
              </h3>
              <p className="text-base mb-4" style={{ color: BRAND.steel }}>
                {audience.description}
              </p>
              <div className="space-y-2">
                {audience.outcomes.map((outcome, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div 
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${BRAND.violet}15` }}
                    >
                      <CheckIcon color={BRAND.violet} size={10} />
                    </div>
                    <span className="text-sm" style={{ color: BRAND.steel }}>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   PROGRAMS SECTION
   ══════════════════════════════════════════════════════════════ */

function ProgramsSection() {
  const programs = [
    {
      title: "Foundation Program",
      duration: "Half-day (3 hours)",
      description: "An introduction to Wadmore's cognitive development framework and how to read profiles.",
      ideal: "New users, whole-staff introduction",
      topics: ["The 8 domains of cognitive development", "Reading and interpreting profiles", "Strength-based language", "Next steps for action"],
      color: BRAND.teal,
    },
    {
      title: "Practitioner Program",
      duration: "Full day (6 hours)",
      description: "Deep dive into cognitive profiles and practical strategies for classroom application.",
      ideal: "Classroom teachers, learning support",
      topics: ["Deep domain exploration", "Case study analysis", "Differentiation strategies", "Action planning workshop"],
      color: BRAND.cerulean,
    },
    {
      title: "Leadership Program",
      duration: "2 x half-days",
      description: "Strategic use of cognitive data for school improvement and capability building.",
      ideal: "Principals, heads of department, coordinators",
      topics: ["Cohort-level data analysis", "Building PL capability", "Strategic planning with cognitive data", "Leading culture change"],
      color: BRAND.violet,
    },
  ];

  return (
    <section id="programs" className="py-16 md:py-24" style={{ background: BRAND.cloud }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div 
            className="text-sm font-semibold uppercase tracking-wider mb-4"
            style={{ color: BRAND.violet }}
          >
            Programs
          </div>
          <h2 
            className="text-3xl md:text-4xl font-semibold mb-4"
            style={{ color: BRAND.slate }}
          >
            Structured learning pathways
          </h2>
          <p className="text-lg" style={{ color: BRAND.steel }}>
            Choose from our core programs or work with us to design something custom for your needs.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative overflow-hidden"
              style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}` }}
            >
              <div 
                className="absolute top-0 left-0 w-full h-1"
                style={{ background: program.color }}
              />
              
              <div 
                className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
                style={{ background: `${program.color}12`, color: program.color }}
              >
                {program.duration}
              </div>
              
              <h3 
                className="font-semibold text-xl mb-2"
                style={{ color: BRAND.slate }}
              >
                {program.title}
              </h3>
              
              <p className="text-base mb-3" style={{ color: BRAND.steel }}>
                {program.description}
              </p>
              
              <div className="text-sm mb-4" style={{ color: program.color }}>
                Ideal for: {program.ideal}
              </div>
              
              <div className="space-y-2">
                {program.topics.map((topic, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div 
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: program.color }}
                    />
                    <span className="text-sm" style={{ color: BRAND.steel }}>{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   WORKSHOP TOPICS
   ══════════════════════════════════════════════════════════════ */

function WorkshopTopicsSection() {
  const topics = [
    { title: "Understanding Executive Functioning", desc: "Deep dive into EF and classroom implications" },
    { title: "Memory & Attention in Learning", desc: "How working memory affects learning" },
    { title: "Metacognition & Self-Regulation", desc: "Teaching students to monitor their own learning" },
    { title: "Cognitive Confidence & Mindset", desc: "Building resilient learners" },
    { title: "Differentiation Through Cognitive Profiles", desc: "Practical strategies for mixed-ability classrooms" },
    { title: "NCCD Evidence & Documentation", desc: "Using Wadmore for disability adjustment evidence" },
    { title: "Parent Conversations", desc: "Communicating cognitive profiles to families" },
    { title: "Gifted & Talented Identification", desc: "Using cognitive data for extension programs" },
  ];

  return (
    <section className="py-16 md:py-24" style={{ background: BRAND.white }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-start">
          <div>
            <div 
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{ color: BRAND.violet }}
            >
              Workshop Topics
            </div>
            <h2 
              className="text-3xl md:text-4xl font-semibold mb-4"
              style={{ color: BRAND.slate }}
            >
              Focused sessions for specific needs
            </h2>
            <p className="text-lg mb-6" style={{ color: BRAND.steel }}>
              Beyond our core programs, we offer targeted workshops on specific 
              aspects of cognitive development and assessment practice.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 text-base font-semibold transition-colors hover:opacity-80"
              style={{ color: BRAND.violet }}
            >
              Request a custom workshop
              <ArrowIcon />
            </Link>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {topics.map((topic, index) => (
              <div 
                key={index}
                className="p-4 rounded-xl transition-all duration-300 hover:shadow-md"
                style={{ background: BRAND.cloud, border: `1px solid ${BRAND.dove}` }}
              >
                <h4 className="font-semibold text-base mb-1" style={{ color: BRAND.slate }}>
                  {topic.title}
                </h4>
                <p className="text-sm" style={{ color: BRAND.steel }}>
                  {topic.desc}
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
   DELIVERY FORMATS
   ══════════════════════════════════════════════════════════════ */

function DeliveryFormatsSection() {
  const formats = [
    {
      title: "On-site at your school",
      description: "We come to you. Face-to-face professional learning in your context, with your team.",
      icon: SchoolIcon,
    },
    {
      title: "Virtual sessions",
      description: "Live, interactive online workshops. Same quality, flexible scheduling.",
      icon: VideoIcon,
    },
    {
      title: "Hybrid programs",
      description: "Combine on-site intensive days with follow-up virtual coaching sessions.",
      icon: HybridIcon,
    },
    {
      title: "Conference presentations",
      description: "Keynotes and breakout sessions for educational conferences and events.",
      icon: MicIcon,
    },
  ];

  return (
    <section className="py-16 md:py-24" style={{ background: BRAND.cloud }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div 
            className="text-sm font-semibold uppercase tracking-wider mb-4"
            style={{ color: BRAND.violet }}
          >
            Delivery Options
          </div>
          <h2 
            className="text-3xl md:text-4xl font-semibold mb-4"
            style={{ color: BRAND.slate }}
          >
            Flexible formats to suit your needs
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {formats.map((format, index) => {
            const Icon = format.icon;
            return (
              <div 
                key={index}
                className="group p-5 rounded-xl text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}` }}
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${BRAND.violet}10` }}
                >
                  <Icon color={BRAND.violet} />
                </div>
                <h4 className="font-semibold text-base mb-2" style={{ color: BRAND.slate }}>
                  {format.title}
                </h4>
                <p className="text-sm" style={{ color: BRAND.steel }}>
                  {format.description}
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
   OUTCOMES
   ══════════════════════════════════════════════════════════════ */

function OutcomesSection() {
  return (
    <section className="py-16 md:py-24" style={{ background: BRAND.white }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div 
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{ color: BRAND.violet }}
            >
              Outcomes
            </div>
            <h2 
              className="text-3xl md:text-4xl font-semibold mb-6"
              style={{ color: BRAND.slate }}
            >
              What you'll walk away with
            </h2>
            
            <div className="space-y-5">
              {[
                {
                  title: "Confident interpretation",
                  desc: "Staff who can read cognitive profiles and understand what they mean for individual students.",
                },
                {
                  title: "Practical application",
                  desc: "Classroom strategies, intervention designs, and differentiation approaches ready to implement.",
                },
                {
                  title: "Shared language",
                  desc: "A common vocabulary for discussing cognitive development across your school community.",
                },
                {
                  title: "Sustainable practice",
                  desc: "Systems and routines that embed cognitive understanding into everyday work.",
                },
              ].map((outcome, index) => (
                <div key={index} className="flex gap-4">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: `${BRAND.sage}30` }}
                  >
                    <CheckIcon color={BRAND.teal} size={14} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: BRAND.slate }}>{outcome.title}</h4>
                    <p className="text-sm" style={{ color: BRAND.steel }}>{outcome.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div 
            className="rounded-2xl p-7"
            style={{ background: BRAND.cloud, border: `1px solid ${BRAND.dove}` }}
          >
            <h3 className="font-semibold text-lg mb-6" style={{ color: BRAND.slate }}>
              Impact by the numbers
            </h3>
            
            <div className="space-y-5">
              {[
                { value: "94%", label: "of participants rate our PL as 'highly applicable' to their role" },
                { value: "87%", label: "report increased confidence interpreting cognitive data" },
                { value: "4.8/5", label: "average facilitator rating across all sessions" },
                { value: "92%", label: "would recommend Wadmore PL to colleagues" },
              ].map((stat, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="text-3xl font-bold" style={{ color: BRAND.violet }}>{stat.value}</div>
                  <div className="text-sm pt-1.5" style={{ color: BRAND.steel }}>{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div 
              className="mt-6 pt-5 text-xs"
              style={{ borderTop: `1px solid ${BRAND.dove}`, color: BRAND.steel }}
            >
              Based on participant feedback from 2024 professional learning programs (n=847)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   TESTIMONIALS
   ══════════════════════════════════════════════════════════════ */

function TestimonialsSection() {
  const testimonials = [
    {
      quote: "This was the most practical PD I've attended in years. I walked away with actual strategies I could use on Monday morning.",
      author: "Year 4 Teacher",
      org: "Independent Primary School, Melbourne",
    },
    {
      quote: "The way Matt explained the cognitive science made it accessible without dumbing it down. Our whole team now has a shared understanding.",
      author: "Head of Learning Support",
      org: "Catholic Secondary College, Sydney",
    },
    {
      quote: "We've done cognitive testing for years but never really knew how to use the data. This program changed that completely.",
      author: "Deputy Principal",
      org: "Public School, Regional QLD",
    },
  ];

  return (
    <section className="py-16 md:py-24" style={{ background: BRAND.cloud }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold" style={{ color: BRAND.slate }}>
            What educators say
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl"
              style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}` }}
            >
              <QuoteIcon color={`${BRAND.violet}20`} />
              <p className="mt-4 mb-5" style={{ color: BRAND.slate }}>
                "{testimonial.quote}"
              </p>
              <div>
                <div className="font-medium text-sm" style={{ color: BRAND.slate }}>{testimonial.author}</div>
                <div className="text-sm" style={{ color: BRAND.steel }}>{testimonial.org}</div>
              </div>
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
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${BRAND.violet} 0%, ${BRAND.violetDark} 100%)` }}
    >
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
          Ready to build capability in cognitive assessment?
        </h2>
        <p 
          className="text-lg mb-10 opacity-90"
          style={{ color: BRAND.white }}
        >
          Let's discuss how Wadmore professional learning can support your school, 
          system, or organisation. We'll design a program that fits your context and goals.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:scale-[1.02]"
            style={{ background: BRAND.white, color: BRAND.violet }}
          >
            Request a Proposal
            <ArrowIcon />
          </Link>
          <a 
            href="mailto:learning@wadmore.com.au"
            className="inline-flex items-center px-8 py-4 rounded-full text-base font-semibold transition-colors"
            style={{ background: "rgba(255,255,255,0.15)", color: "white", border: "1px solid rgba(255,255,255,0.3)" }}
          >
            learning@wadmore.com.au
          </a>
        </div>
        
        <div 
          className="mt-12 pt-8 grid sm:grid-cols-3 gap-6 text-left"
          style={{ borderTop: "1px solid rgba(255,255,255,0.2)" }}
        >
          {[
            { label: "Single school", desc: "Customised PL for your staff" },
            { label: "School systems", desc: "Scalable programs across campuses" },
            { label: "Education organisations", desc: "Partnerships and licensing" },
          ].map((item, index) => (
            <div key={index}>
              <div className="font-medium mb-1" style={{ color: BRAND.white }}>{item.label}</div>
              <div className="text-sm opacity-75" style={{ color: BRAND.white }}>{item.desc}</div>
            </div>
          ))}
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

function CheckIcon({ color, size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill={color}>
      <path fillRule="evenodd" d="M13.707 4.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L7 9.586l5.293-5.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

function QuoteIcon({ color }) {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill={color}>
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

function GraduateIcon({ color }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

function ChecklistIcon({ color }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="m9 15 2 2 4-4" />
    </svg>
  );
}

function UsersIcon({ color }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function PenIcon({ color }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  );
}

function SchoolIcon({ color }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18" />
      <path d="M5 21V7l7-4 7 4v14" />
      <path d="M9 21v-4h6v4" />
    </svg>
  );
}

function VideoIcon({ color }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="14" height="12" rx="2" />
      <path d="M16 10l6-4v12l-6-4v-4z" />
    </svg>
  );
}

function HybridIcon({ color }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function MicIcon({ color }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 1v11" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <rect x="9" y="1" width="6" height="11" rx="3" />
      <line x1="12" y1="19" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </svg>
  );
}