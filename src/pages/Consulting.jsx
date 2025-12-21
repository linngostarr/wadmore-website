// src/pages/Consulting.jsx
// Wadmore Professional Learning - Expert development for cognitive assessment
// Brand accent: Violet (#786CFF) - expertise, innovation, premium

import { useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

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
};

export default function Consulting() {
  return (
    <Layout>
      <Hero />
      <AudienceSection />
      <ProgramsSection />
      <WorkshopTopicsSection />
      <DeliveryFormatsSection />
      <OutcomesSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
}

/* ══════════════════════════════════════════════════════════════
   HERO
   ══════════════════════════════════════════════════════════════ */

function Hero() {
  return (
    <section className="min-h-[70vh] flex items-center relative overflow-hidden" style={{ background: BRAND.cloud }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse at 0% 50%, ${BRAND.violet}12, transparent 50%), radial-gradient(ellipse at 100% 100%, ${BRAND.indigo}08, transparent 40%)` }} />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8" style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}`, color: BRAND.slate }}>
              <span className="w-2 h-2 rounded-full" style={{ background: BRAND.violet }} />
              Professional Learning
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight mb-6" style={{ color: BRAND.slate }}>
              Build capability in{" "}
              <span style={{ color: BRAND.violet }}>cognitive assessment.</span>
            </h1>
            
            <p className="text-xl leading-relaxed mb-8 max-w-xl" style={{ color: BRAND.steel }}>
              Empower your educators, leaders, and support staff to understand 
              cognitive profiles and translate insights into meaningful action. 
              Research-grounded, practically focused professional learning.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold transition-all hover:scale-[1.02]"
                style={{ background: BRAND.violet, color: BRAND.white, boxShadow: `0 4px 14px ${BRAND.violet}40` }}
              >
                Enquire About PL
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8.707 3.293a1 1 0 00-1.414 1.414L9.586 7H3a1 1 0 100 2h6.586l-2.293 2.293a1 1 0 101.414 1.414l4-4a1 1 0 000-1.414l-4-4z" /></svg>
              </Link>
              <a 
                href="#programs"
                className="inline-flex items-center px-7 py-3.5 rounded-full text-base font-semibold transition-colors"
                style={{ background: BRAND.white, color: BRAND.slate, border: `1px solid ${BRAND.dove}` }}
              >
                View Programs
              </a>
            </div>
          </div>
          
          <div className="rounded-2xl p-8 lg:p-10" style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}` }}>
            <h3 className="font-semibold text-lg mb-6" style={{ color: BRAND.slate }}>Professional learning that makes a difference</h3>
            
            <div className="space-y-4">
              {[
                { 
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={BRAND.violet} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                  ), 
                  title: "Grounded in cognitive science", 
                  desc: "Not just what to do, but why it works" 
                },
                { 
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={BRAND.violet} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                      <polyline points="14 2 14 8 20 8" />
                      <path d="m9 15 2 2 4-4" />
                    </svg>
                  ), 
                  title: "Immediately applicable", 
                  desc: "Walk away with strategies you can use tomorrow" 
                },
                { 
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={BRAND.violet} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  ), 
                  title: "Tailored to your context", 
                  desc: "Customised for your school, system, or organisation" 
                },
                { 
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={BRAND.violet} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                  ), 
                  title: "Ongoing support", 
                  desc: "Not a one-off event — we're here for the journey" 
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${BRAND.violet}10` }}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-medium" style={{ color: BRAND.slate }}>{item.title}</div>
                    <div className="text-sm" style={{ color: BRAND.steel }}>{item.desc}</div>
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
   AUDIENCE SECTION
   ══════════════════════════════════════════════════════════════ */

function AudienceSection() {
  const audiences = [
    {
      title: "Classroom Teachers",
      description: "Learn to interpret cognitive profiles and differentiate instruction based on how your students think.",
      outcomes: ["Read and apply cognitive profiles", "Design differentiated learning experiences", "Identify students who need extension or support"],
    },
    {
      title: "Learning Support & Intervention",
      description: "Understand the cognitive foundations of learning difficulties and design targeted interventions.",
      outcomes: ["Link cognitive patterns to learning challenges", "Build evidence-based intervention plans", "Document and communicate effectively with families"],
    },
    {
      title: "School Leaders",
      description: "Use cognitive data strategically to inform whole-school planning, resource allocation, and professional development.",
      outcomes: ["Interpret cohort-level cognitive patterns", "Align cognitive insights with school priorities", "Lead data-informed conversations"],
    },
    {
      title: "Counsellors & Psychologists",
      description: "Deepen your understanding of cognitive assessment for guidance, pathway planning, and wellbeing support.",
      outcomes: ["Integrate cognitive profiles into counselling", "Support career and pathway conversations", "Identify students at risk"],
    },
  ];

  return (
    <section className="py-20 md:py-28" style={{ background: BRAND.white }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4" style={{ color: BRAND.slate }}>
            Professional learning for every role
          </h2>
          <p className="text-lg" style={{ color: BRAND.steel }}>
            Whether you're in the classroom, leading a team, or supporting individual students, 
            we have programs designed for your specific needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl"
              style={{ background: BRAND.cloud, border: `1px solid ${BRAND.dove}` }}
            >
              <h3 className="font-semibold text-xl mb-3" style={{ color: BRAND.slate }}>
                {audience.title}
              </h3>
              <p className="mb-4" style={{ color: BRAND.steel }}>
                {audience.description}
              </p>
              <div className="space-y-2">
                <div className="text-sm font-medium" style={{ color: BRAND.slate }}>You'll learn to:</div>
                {audience.outcomes.map((outcome, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill={BRAND.violet} className="flex-shrink-0 mt-0.5">
                      <path fillRule="evenodd" d="M13.707 4.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L7 9.586l5.293-5.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span style={{ color: BRAND.steel }}>{outcome}</span>
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
      title: "Foundations of Cognitive Profiling",
      duration: "Half day (3 hours)",
      audience: "All staff",
      description: "An introduction to cognitive assessment — what it is, why it matters, and how to read a Wadmore profile. Perfect for whole-staff professional development days.",
      topics: [
        "The science of cognitive development",
        "Understanding the 8 cognitive domains",
        "Reading and interpreting profiles",
        "Strength-based language and framing",
      ],
    },
    {
      title: "Differentiation in Practice",
      duration: "Full day (6 hours)",
      audience: "Classroom teachers",
      description: "Move from understanding profiles to using them. Hands-on workshop focused on translating cognitive insights into practical classroom strategies.",
      topics: [
        "Cognitive diversity in your classroom",
        "Differentiation strategies by domain",
        "Grouping and collaboration approaches",
        "Assessment and feedback alignment",
      ],
    },
    {
      title: "Leading with Cognitive Data",
      duration: "Half day (3 hours)",
      audience: "School leaders",
      description: "Strategic use of cognitive assessment data for school improvement, resource allocation, and evidence-based decision making.",
      topics: [
        "Interpreting cohort-level patterns",
        "Identifying school-wide priorities",
        "Building a data-informed culture",
        "Communicating with stakeholders",
      ],
    },
    {
      title: "Intervention Design & NCCD Evidence",
      duration: "Full day (6 hours)",
      audience: "Learning support teams",
      description: "Deep dive into using cognitive profiles to design interventions and build robust NCCD evidence documentation.",
      topics: [
        "Cognitive foundations of learning difficulties",
        "Designing targeted interventions",
        "NCCD evidence requirements",
        "Progress monitoring and adjustment",
      ],
    },
    {
      title: "Train the Trainer",
      duration: "2 days",
      audience: "PL leaders & coaches",
      description: "Build internal capability to deliver Wadmore professional learning. For schools and systems wanting to scale cognitive assessment understanding.",
      topics: [
        "Deep content mastery",
        "Adult learning principles",
        "Facilitation techniques",
        "Ongoing accreditation and support",
      ],
    },
  ];

  return (
    <section id="programs" className="py-20 md:py-28" style={{ background: BRAND.cloud }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4" style={{ color: BRAND.slate }}>
            Professional learning programs
          </h2>
          <p className="text-lg" style={{ color: BRAND.steel }}>
            Structured programs designed to build deep understanding and practical capability. 
            All programs can be customised for your context.
          </p>
        </div>
        
        <div className="space-y-6">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="rounded-xl overflow-hidden"
              style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}` }}
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-semibold text-xl mb-2" style={{ color: BRAND.slate }}>
                      {program.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs px-2.5 py-1 rounded-full" style={{ background: `${BRAND.violet}12`, color: BRAND.violet }}>
                        {program.duration}
                      </span>
                      <span className="text-xs px-2.5 py-1 rounded-full" style={{ background: BRAND.cloud, color: BRAND.steel }}>
                        {program.audience}
                      </span>
                    </div>
                  </div>
                  <Link 
                    to="/contact"
                    className="text-sm font-medium px-4 py-2 rounded-lg transition-colors"
                    style={{ background: BRAND.cloud, color: BRAND.violet }}
                  >
                    Enquire
                  </Link>
                </div>
                
                <p className="mb-4" style={{ color: BRAND.steel }}>
                  {program.description}
                </p>
                
                <div className="grid sm:grid-cols-2 gap-2">
                  {program.topics.map((topic, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: BRAND.violet }} />
                      <span style={{ color: BRAND.slate }}>{topic}</span>
                    </div>
                  ))}
                </div>
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
    { title: "Understanding Abstract Reasoning", desc: "How pattern recognition develops and what it means for learning" },
    { title: "Executive Function in the Classroom", desc: "Supporting planning, flexibility, and self-regulation" },
    { title: "Memory & Attention Strategies", desc: "Practical approaches for diverse working memory profiles" },
    { title: "Cognitive Profiles & Literacy", desc: "Linking cognitive patterns to reading and writing development" },
    { title: "Cognitive Profiles & Numeracy", desc: "Understanding mathematical thinking through a cognitive lens" },
    { title: "Gifted & High Potential Learners", desc: "Identification and differentiation using cognitive data" },
    { title: "Communicating with Parents", desc: "Explaining cognitive profiles in accessible, strength-based language" },
    { title: "Data-Informed Team Meetings", desc: "Using cognitive data to drive collaborative planning" },
  ];

  return (
    <section className="py-20 md:py-28" style={{ background: BRAND.white }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4" style={{ color: BRAND.slate }}>
              Focused workshop topics
            </h2>
            <p className="text-lg mb-6" style={{ color: BRAND.steel }}>
              In addition to our structured programs, we offer focused workshops on specific topics. 
              These can be delivered standalone or combined into a customised professional learning series.
            </p>
            <p className="mb-6" style={{ color: BRAND.steel }}>
              Each workshop is 60-90 minutes and can be delivered face-to-face or online. 
              Perfect for staff meetings, planning days, or learning team sessions.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 text-base font-semibold"
              style={{ color: BRAND.violet }}
            >
              Discuss your needs
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8.707 3.293a1 1 0 00-1.414 1.414L9.586 7H3a1 1 0 100 2h6.586l-2.293 2.293a1 1 0 101.414 1.414l4-4a1 1 0 000-1.414l-4-4z" />
              </svg>
            </Link>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {topics.map((topic, index) => (
              <div 
                key={index}
                className="p-4 rounded-xl"
                style={{ background: BRAND.cloud, border: `1px solid ${BRAND.dove}` }}
              >
                <h4 className="font-medium mb-1" style={{ color: BRAND.slate }}>{topic.title}</h4>
                <p className="text-sm" style={{ color: BRAND.steel }}>{topic.desc}</p>
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
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={BRAND.violet} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: "Face-to-Face",
      description: "On-site delivery at your school or venue. Maximum engagement and opportunity for hands-on activities with real student data.",
      best: "Whole-staff PD days, deep-dive workshops",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={BRAND.violet} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      title: "Live Online",
      description: "Interactive virtual sessions via Zoom or Teams. Same quality content with the flexibility of remote participation.",
      best: "Geographically dispersed teams, follow-up sessions",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={BRAND.violet} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      ),
      title: "Self-Paced Modules",
      description: "Pre-recorded content with embedded activities. Complete at your own pace with optional live Q&A sessions.",
      best: "Individual upskilling, onboarding new staff",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={BRAND.violet} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          <path d="M8 7h8" />
          <path d="M8 11h8" />
          <path d="M8 15h4" />
        </svg>
      ),
      title: "Blended Programs",
      description: "Combination of self-paced learning, live sessions, and practical application. The most comprehensive approach for lasting change.",
      best: "System-wide rollouts, leadership development",
    },
  ];

  return (
    <section className="py-20 md:py-28" style={{ background: BRAND.cloud }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4" style={{ color: BRAND.slate }}>
            Flexible delivery formats
          </h2>
          <p className="text-lg" style={{ color: BRAND.steel }}>
            We meet you where you are. Choose the format that works best for your team, 
            schedule, and learning goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {formats.map((format, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl text-center"
              style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}` }}
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: `${BRAND.violet}10` }}>
                {format.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: BRAND.slate }}>
                {format.title}
              </h3>
              <p className="text-sm mb-4" style={{ color: BRAND.steel }}>
                {format.description}
              </p>
              <div className="text-xs px-3 py-1.5 rounded-full inline-block" style={{ background: BRAND.cloud, color: BRAND.violet }}>
                Best for: {format.best}
              </div>
            </div>
          ))}
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
    <section className="py-20 md:py-28" style={{ background: BRAND.white }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6" style={{ color: BRAND.slate }}>
              What you can expect
            </h2>
            <p className="text-lg mb-8" style={{ color: BRAND.steel }}>
              Our professional learning is designed to create lasting change — not just awareness, 
              but genuine capability and confidence to use cognitive assessment effectively.
            </p>
            
            <div className="space-y-6">
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
                  desc: "A common vocabulary for discussing cognitive diversity across your school community.",
                },
                {
                  title: "Sustainable practice",
                  desc: "Systems and routines that embed cognitive understanding into everyday work.",
                },
              ].map((outcome, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: `${BRAND.sage}30` }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill={BRAND.teal}>
                      <path fillRule="evenodd" d="M13.707 4.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L7 9.586l5.293-5.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1" style={{ color: BRAND.slate }}>{outcome.title}</h4>
                    <p className="text-sm" style={{ color: BRAND.steel }}>{outcome.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="rounded-2xl p-8" style={{ background: BRAND.cloud, border: `1px solid ${BRAND.dove}` }}>
            <h3 className="font-semibold text-lg mb-6" style={{ color: BRAND.slate }}>Impact by the numbers</h3>
            
            <div className="space-y-6">
              {[
                { value: "94%", label: "of participants rate our PL as 'highly applicable' to their role" },
                { value: "87%", label: "report increased confidence interpreting cognitive data" },
                { value: "4.8/5", label: "average facilitator rating across all sessions" },
                { value: "92%", label: "would recommend Wadmore PL to colleagues" },
              ].map((stat, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="text-3xl font-bold" style={{ color: BRAND.violet }}>{stat.value}</div>
                  <div className="text-sm pt-1" style={{ color: BRAND.steel }}>{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-6 text-xs" style={{ borderTop: `1px solid ${BRAND.dove}`, color: BRAND.steel }}>
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
    <section className="py-20 md:py-28" style={{ background: BRAND.cloud }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4" style={{ color: BRAND.slate }}>
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
              <svg width="32" height="32" viewBox="0 0 24 24" fill={`${BRAND.violet}20`} className="mb-4">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="mb-4" style={{ color: BRAND.slate }}>
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
    <section className="py-20 md:py-28" style={{ background: BRAND.violet }}>
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4" style={{ color: BRAND.white }}>
          Ready to build capability in cognitive assessment?
        </h2>
        <p className="text-lg mb-8 opacity-90" style={{ color: BRAND.white }}>
          Let's discuss how Wadmore professional learning can support your school, 
          system, or organisation. We'll design a program that fits your context and goals.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all hover:scale-[1.02]"
            style={{ background: BRAND.white, color: BRAND.violet }}
          >
            Request a Proposal
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8.707 3.293a1 1 0 00-1.414 1.414L9.586 7H3a1 1 0 100 2h6.586l-2.293 2.293a1 1 0 101.414 1.414l4-4a1 1 0 000-1.414l-4-4z" />
            </svg>
          </Link>
          <a 
            href="mailto:learning@wadmore.com"
            className="inline-flex items-center px-8 py-4 rounded-full text-base font-semibold transition-colors"
            style={{ background: "rgba(255,255,255,0.15)", color: "white", border: "1px solid rgba(255,255,255,0.3)" }}
          >
            learning@wadmore.com
          </a>
        </div>
        
        <div className="mt-12 pt-8 grid sm:grid-cols-3 gap-6 text-left" style={{ borderTop: "1px solid rgba(255,255,255,0.2)" }}>
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
