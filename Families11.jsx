// src/pages/Families.jsx
// Wadmore Families - Understanding your child's cognitive development
// 
// Brand accent: Teal (#3CB7AC) - supportive, human, soothing

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
};

/* ══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════════════════════ */

export default function Families() {
  return (
    <Layout>
      <Hero />
      <WhatYouGetSection />
      <HowItWorksSection />
      <SampleProfileSection />
      <FAQSection />
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
      className="min-h-[80vh] flex items-center relative overflow-hidden"
      style={{ background: BRAND.cloud }}
    >
      {/* Subtle gradient accent */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ 
          background: `
            radial-gradient(ellipse at 0% 50%, ${BRAND.teal}12, transparent 50%),
            radial-gradient(ellipse at 100% 0%, ${BRAND.sage}10, transparent 40%)
          ` 
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            {/* Eyebrow */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
              style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}`, color: BRAND.slate }}
            >
              <span 
                className="w-2 h-2 rounded-full"
                style={{ background: BRAND.teal }}
              />
              Wadmore for Families
            </div>
            
            {/* Main headline */}
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight mb-6"
              style={{ color: BRAND.slate }}
            >
              Understand how your child{" "}
              <span style={{ color: BRAND.teal }}>thinks.</span>
            </h1>
            
            <p 
              className="text-xl leading-relaxed mb-8 max-w-xl"
              style={{ color: BRAND.steel }}
            >
              Not labels. Not comparisons. Not blame. Wadmore shows you your child's 
              unique cognitive strengths and growth areas — with clear guidance you 
              can use at home and in conversations with teachers.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold transition-all hover:scale-[1.02]"
                style={{ 
                  background: BRAND.teal, 
                  color: BRAND.white,
                  boxShadow: `0 4px 14px ${BRAND.teal}40`
                }}
              >
                Get Started
                <ArrowIcon />
              </Link>
              <Link 
                to="/science"
                className="inline-flex items-center px-7 py-3.5 rounded-full text-base font-semibold transition-colors"
                style={{ 
                  background: BRAND.white, 
                  color: BRAND.slate,
                  border: `1px solid ${BRAND.dove}`
                }}
              >
                How It Works
              </Link>
            </div>
          </div>
          
          {/* Visual element */}
          <div 
            className="rounded-2xl p-8 lg:p-10"
            style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}` }}
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${BRAND.teal}15` }}
                >
                  <HeartIcon color={BRAND.teal} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1" style={{ color: BRAND.slate }}>
                    Strength-based
                  </h3>
                  <p style={{ color: BRAND.steel }}>
                    Celebrates what's working, not what's "wrong"
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${BRAND.teal}15` }}
                >
                  <BookIcon color={BRAND.teal} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1" style={{ color: BRAND.slate }}>
                    Plain language
                  </h3>
                  <p style={{ color: BRAND.steel }}>
                    No jargon, no confusing scores — just clear insights
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${BRAND.teal}15` }}
                >
                  <HomeIcon color={BRAND.teal} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1" style={{ color: BRAND.slate }}>
                    Practical activities
                  </h3>
                  <p style={{ color: BRAND.steel }}>
                    Matched to where your child is developmentally
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${BRAND.teal}15` }}
                >
                  <UsersIcon color={BRAND.teal} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1" style={{ color: BRAND.slate }}>
                    Shared language
                  </h3>
                  <p style={{ color: BRAND.steel }}>
                    A framework for productive conversations with schools
                  </p>
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
   WHAT YOU GET
   ══════════════════════════════════════════════════════════════ */

function WhatYouGetSection() {
  const features = [
    {
      title: "Complete Cognitive Profile",
      description: "See how your child's thinking develops across 8 cognitive domains — from pattern recognition to creative thinking, executive function to memory.",
      icon: ProfileIcon,
    },
    {
      title: "Developmental Context",
      description: "Understand where your child sits within a 15-band developmental framework. No comparisons to other children — just their own growth journey.",
      icon: GrowthIcon,
    },
    {
      title: "Strength Spotlight",
      description: "Every profile leads with what your child does well. Cognitive strengths that can be leveraged for learning and confidence.",
      icon: StarIcon,
    },
    {
      title: "Growth Opportunities",
      description: "Clear, non-judgmental identification of areas where development is emerging — with specific suggestions for support.",
      icon: SeedlingIcon,
    },
    {
      title: "Home Activities",
      description: "Practical, everyday activities matched to your child's current developmental band. No special equipment needed.",
      icon: PuzzleIcon,
    },
    {
      title: "School Conversation Guide",
      description: "Talking points and questions to help you advocate effectively in parent-teacher meetings and support discussions.",
      icon: ChatIcon,
    },
  ];

  return (
    <section className="py-20 md:py-28" style={{ background: BRAND.white }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            className="text-3xl md:text-4xl font-semibold mb-4"
            style={{ color: BRAND.slate }}
          >
            What you'll receive
          </h2>
          <p 
            className="text-lg"
            style={{ color: BRAND.steel }}
          >
            A comprehensive understanding of your child's cognitive profile, 
            delivered in language that makes sense and actions you can take.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="p-6 rounded-xl"
              style={{ background: BRAND.cloud, border: `1px solid ${BRAND.dove}` }}
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${BRAND.teal}15` }}
              >
                <feature.icon color={BRAND.teal} />
              </div>
              <h3 
                className="font-semibold text-lg mb-2"
                style={{ color: BRAND.slate }}
              >
                {feature.title}
              </h3>
              <p style={{ color: BRAND.steel }}>
                {feature.description}
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
    {
      number: "1",
      title: "Complete the assessment",
      description: "Your child completes our adaptive assessment — typically 45-60 minutes. It's designed to be engaging, not stressful, and adjusts to their level as they go.",
    },
    {
      number: "2",
      title: "Receive your profile",
      description: "Within 24 hours, you'll receive a comprehensive cognitive profile. Start with the summary, then explore deeper when you're ready.",
    },
    {
      number: "3",
      title: "Understand the insights",
      description: "Every section is written in plain language with practical implications. No psychology degree required.",
    },
    {
      number: "4",
      title: "Take action",
      description: "Use the suggested activities at home and the conversation guides with your child's school. Track development over time with optional reassessment.",
    },
  ];

  return (
    <section className="py-20 md:py-28" style={{ background: BRAND.cloud }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            className="text-3xl md:text-4xl font-semibold mb-4"
            style={{ color: BRAND.slate }}
          >
            How it works
          </h2>
          <p 
            className="text-lg"
            style={{ color: BRAND.steel }}
          >
            From assessment to actionable insights in four simple steps.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div 
                  className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5"
                  style={{ background: BRAND.dove }}
                />
              )}
              
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6"
                style={{ background: BRAND.teal, color: BRAND.white }}
              >
                {step.number}
              </div>
              <h3 
                className="font-semibold text-lg mb-2"
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
   SAMPLE PROFILE PREVIEW
   ══════════════════════════════════════════════════════════════ */

function SampleProfileSection() {
  return (
    <section className="py-20 md:py-28" style={{ background: BRAND.white }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 
              className="text-3xl md:text-4xl font-semibold mb-4"
              style={{ color: BRAND.slate }}
            >
              Profiles that make sense
            </h2>
            <p 
              className="text-lg mb-6"
              style={{ color: BRAND.steel }}
            >
              Every Wadmore profile is designed for clarity. We lead with strengths, 
              explain development in context, and give you specific things to try.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckIcon color={BRAND.teal} />
                <span style={{ color: BRAND.slate }}>
                  <strong>At-a-glance summary</strong> — understand the big picture in 30 seconds
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon color={BRAND.teal} />
                <span style={{ color: BRAND.slate }}>
                  <strong>Domain deep-dives</strong> — explore each cognitive area in detail
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon color={BRAND.teal} />
                <span style={{ color: BRAND.slate }}>
                  <strong>Growth trajectories</strong> — see development as a journey, not a snapshot
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon color={BRAND.teal} />
                <span style={{ color: BRAND.slate }}>
                  <strong>Practical recommendations</strong> — activities you can start today
                </span>
              </div>
            </div>
            
            <div className="mt-8">
              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-base font-semibold transition-all hover:scale-[1.02]"
                style={{ 
                  background: BRAND.teal, 
                  color: BRAND.white,
                }}
              >
                See a sample profile
                <ArrowIcon />
              </Link>
            </div>
          </div>
          
          {/* Profile preview mockup */}
          <div 
            className="rounded-2xl p-6 lg:p-8"
            style={{ background: BRAND.cloud, border: `1px solid ${BRAND.dove}` }}
          >
            <div 
              className="rounded-xl p-6"
              style={{ background: BRAND.white }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold"
                  style={{ background: `${BRAND.teal}15`, color: BRAND.teal }}
                >
                  E
                </div>
                <div>
                  <div className="font-semibold" style={{ color: BRAND.slate }}>Emma's Profile</div>
                  <div className="text-sm" style={{ color: BRAND.steel }}>Age 9 • Year 4</div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="text-sm font-medium mb-2" style={{ color: BRAND.steel }}>
                  COGNITIVE STRENGTHS
                </div>
                <div className="flex flex-wrap gap-2">
                  <span 
                    className="px-3 py-1 rounded-full text-sm font-medium"
                    style={{ background: `${BRAND.teal}15`, color: BRAND.teal }}
                  >
                    Pattern Recognition
                  </span>
                  <span 
                    className="px-3 py-1 rounded-full text-sm font-medium"
                    style={{ background: `${BRAND.teal}15`, color: BRAND.teal }}
                  >
                    Creative Thinking
                  </span>
                </div>
              </div>
              
              <div className="space-y-3">
                {[
                  { domain: "Abstract Reasoning", band: 6, color: "#5B8BF7" },
                  { domain: "Executive Function", band: 5, color: "#3CB7AC" },
                  { domain: "Memory & Attention", band: 5, color: "#3CB7AC" },
                  { domain: "Creativity", band: 7, color: "#786CFF" },
                ].map((item) => (
                  <div key={item.domain}>
                    <div className="flex justify-between text-sm mb-1">
                      <span style={{ color: BRAND.slate }}>{item.domain}</span>
                      <span style={{ color: BRAND.steel }}>Band {item.band}</span>
                    </div>
                    <div 
                      className="h-2 rounded-full"
                      style={{ background: BRAND.dove }}
                    >
                      <div 
                        className="h-2 rounded-full transition-all"
                        style={{ 
                          width: `${(item.band / 15) * 100}%`,
                          background: item.color 
                        }}
                      />
                    </div>
                  </div>
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
   FAQ
   ══════════════════════════════════════════════════════════════ */

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  
  const faqs = [
    {
      question: "What ages is Wadmore suitable for?",
      answer: "Wadmore Families is designed for children aged 5-18. Our adaptive assessment automatically adjusts to your child's developmental level, ensuring an appropriate and engaging experience regardless of age.",
    },
    {
      question: "How long does the assessment take?",
      answer: "Most children complete the assessment in 45-60 minutes. It's designed to be completed in one sitting, but can be paused if needed. The assessment is adaptive, so the length varies based on how your child responds.",
    },
    {
      question: "Is this an IQ test?",
      answer: "No. Wadmore measures cognitive development across multiple domains — it's not designed to produce a single IQ score. We focus on how thinking develops, not ranking children against each other.",
    },
    {
      question: "Will my child find it stressful?",
      answer: "We've designed Wadmore to be engaging rather than stressful. There's no time pressure on individual items, the difficulty adjusts to your child's level, and we use varied, interesting formats to maintain engagement.",
    },
    {
      question: "How is this different from school testing?",
      answer: "School tests typically measure knowledge and academic achievement. Wadmore measures how your child thinks — the cognitive processes underlying learning. This gives you insights that academic grades alone can't provide.",
    },
    {
      question: "Can I share the results with my child's school?",
      answer: "Absolutely. Your profile includes a school conversation guide specifically designed to help you discuss your child's cognitive profile with teachers in productive ways. Many parents find this transforms their parent-teacher meetings.",
    },
    {
      question: "How often should we reassess?",
      answer: "For most families, we recommend reassessment every 12-18 months. This gives enough time for meaningful development to occur while allowing you to track growth over time. You'll receive a notification when reassessment is recommended.",
    },
  ];

  return (
    <section className="py-20 md:py-28" style={{ background: BRAND.cloud }}>
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-semibold mb-4"
            style={{ color: BRAND.slate }}
          >
            Common questions
          </h2>
        </div>
        
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="rounded-xl overflow-hidden"
              style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}` }}
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between gap-4"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span 
                  className="font-semibold"
                  style={{ color: BRAND.slate }}
                >
                  {faq.question}
                </span>
                <ChevronIcon 
                  className={`flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  color={BRAND.steel}
                />
              </button>
              {openIndex === index && (
                <div 
                  className="px-6 pb-4"
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
      className="py-20 md:py-28"
      style={{ background: BRAND.teal }}
    >
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
        <h2 
          className="text-3xl md:text-4xl font-semibold mb-4"
          style={{ color: BRAND.white }}
        >
          Ready to understand how your child thinks?
        </h2>
        <p 
          className="text-lg mb-8 opacity-90"
          style={{ color: BRAND.white }}
        >
          Join thousands of families using Wadmore to support their children's 
          cognitive development with insight and confidence.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all hover:scale-[1.02]"
            style={{ background: BRAND.white, color: BRAND.teal }}
          >
            Get Started
            <ArrowIcon />
          </Link>
          <Link
            to="/science"
            className="inline-flex items-center px-8 py-4 rounded-full text-base font-semibold transition-colors"
            style={{ background: "rgba(255,255,255,0.15)", color: "white", border: "1px solid rgba(255,255,255,0.3)" }}
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
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8.707 3.293a1 1 0 00-1.414 1.414L9.586 7H3a1 1 0 100 2h6.586l-2.293 2.293a1 1 0 101.414 1.414l4-4a1 1 0 000-1.414l-4-4z" />
    </svg>
  );
}

function CheckIcon({ color }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill={color} className="flex-shrink-0 mt-0.5">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

function ChevronIcon({ color, className }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill={color} className={className}>
      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  );
}

function HeartIcon({ color }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function BookIcon({ color }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

function HomeIcon({ color }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9,22 9,12 15,12 15,22" />
    </svg>
  );
}

function UsersIcon({ color }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function ProfileIcon({ color }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function GrowthIcon({ color }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" />
    </svg>
  );
}

function StarIcon({ color }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
  );
}

function SeedlingIcon({ color }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22v-8" />
      <path d="M12 14c-4 0-6-2-6-6 4 0 6 2 6 6" />
      <path d="M12 14c4 0 6-2 6-6-4 0-6 2-6 6" />
    </svg>
  );
}

function PuzzleIcon({ color }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.611a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.315 8.685a.98.98 0 0 1 .837-.276c.47.07.802.48.968.925a2.501 2.501 0 1 0 3.214-3.214c-.446-.166-.855-.497-.925-.968a.979.979 0 0 1 .276-.837l1.61-1.611a2.404 2.404 0 0 1 1.705-.707c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
    </svg>
  );
}

function ChatIcon({ color }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
