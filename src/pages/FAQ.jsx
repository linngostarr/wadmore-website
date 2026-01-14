// src/pages/FAQ.jsx
// Wadmore Frequently Asked Questions

import { useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import SEO, { PAGE_SEO } from '../components/SEO';

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
};

const FAQ_CATEGORIES = [
  {
    id: "general",
    name: "General",
    color: BRAND.indigo,
    questions: [
      {
        q: "What is Wadmore?",
        a: "Wadmore is a cognitive profiling platform that reveals how thinking appears when people engage with structured cognitive tasks. Unlike traditional tests that rank and compare, Wadmore provides strength-based profiles designed to support decisions in schools, families, and organisations."
      },
      {
        q: "How is Wadmore different from IQ tests or other cognitive assessments?",
        a: "Traditional assessments like IQ tests produce a single score or percentile ranking. Wadmore takes a developmental approach: we describe patterns of thinking across multiple cognitive domains, and provide research-grounded guidance to inform decisions. We focus on strengths and current capabilities, not deficits or predictions."
      },
      {
        q: "What are the eight cognitive domains?",
        a: "Wadmore examines thinking across eight domains: how Abstract Reasoning appears in pattern recognition tasks, how Logical Sequencing manifests in structured reasoning, how Processing Speed is demonstrated under time constraints, how Memory & Attention function during complex tasks, how Executive Functioning shows in planning and adaptation, how Metacognition appears in strategy selection, how Cognitive Confidence influences approach to challenge, and how Creativity emerges in idea generation."
      },
      {
        q: "What are developmental bands?",
        a: "Developmental bands describe stages of cognitive capability, from foundational (Band 1) to peak capability (Band 15). Rather than comparing you to others, bands show where you are on a developmental continuum and clarify plausible next steps for growth."
      },
      {
        q: "Is Wadmore a diagnostic tool?",
        a: "No. Wadmore describes cognitive patterns as observed in specific tasks. It is not a diagnostic instrument and does not diagnose learning disabilities, giftedness, or clinical conditions. If you have concerns about learning or development, please consult a qualified professional."
      },
    ]
  },
  {
    id: "families",
    name: "Families",
    color: BRAND.teal,
    questions: [
      {
        q: "What age is appropriate for Wadmore assessments?",
        a: "Wadmore assessments are designed for individuals aged 6 years and older. Our developmental framework spans from early childhood through adult expertise."
      },
      {
        q: "How long does the assessment take?",
        a: "The full family assessment typically takes less than one hour. It's adaptive, so the exact time varies based on responses. You can pause and resume if needed."
      },
      {
        q: "Can my child complete the assessment independently?",
        a: "For younger children (ages 6-10), we recommend a parent or guardian be nearby to help with reading instructions if needed, though they shouldn't help with the actual questions. Older children and teenagers can typically complete it independently."
      },
      {
        q: "What do I get after the assessment?",
        a: "You'll receive a comprehensive cognitive profile showing strengths and growth areas across all eight domains, your developmental band in each area, and practical guidance for supporting development at home. These patterns describe how your child approaches thinking tasks right now, and they can change with experience and support."
      },
      {
        q: "Can I share the results with my child's school?",
        a: "Absolutely. Your profile includes guidance on discussing cognitive patterns with teachers. Many parents find this transforms their parent-teacher conversations by providing a shared language for understanding how their child thinks."
      },
      {
        q: "How often should we reassess?",
        a: "For children and adolescents, we recommend reassessment every 12-18 months to track how patterns develop. Adults may find value in reassessing every 2-3 years or during significant life transitions."
      },
    ]
  },
  {
    id: "schools",
    name: "Schools",
    color: BRAND.cerulean,
    questions: [
      {
        q: "How does Wadmore help teachers?",
        a: "Wadmore provides evidence about how each student thinks, supporting informed differentiation, meaningful support conversations, and confident pathway decisions. Class-level analytics help identify patterns to inform planning."
      },
      {
        q: "Can Wadmore be used for NCCD evidence?",
        a: "Yes. Wadmore profiles provide documented evidence of cognitive patterns that can support NCCD (Nationally Consistent Collection of Data) submissions for students with disability. The developmental framework aligns with adjustment level documentation requirements."
      },
      {
        q: "How does school administration work?",
        a: "Schools receive hierarchical access: system administrators see cross-campus analytics, principals see whole-school profiles, and teachers see their class cognitive patterns with evidence to inform differentiation decisions. Role-based permissions ensure appropriate access."
      },
      {
        q: "What's the assessment time for students?",
        a: "Student assessments typically take less than one hour. The adaptive design ensures efficient assessment without compromising precision. Sessions can be paused and resumed if needed."
      },
      {
        q: "Can we use Wadmore for gifted identification?",
        a: "Wadmore can provide evidence about cognitive patterns across domains. However, we take a strength-based approach: rather than labelling students as 'gifted' or 'not gifted', we show where each student's capabilities lie and provide evidence to inform decisions about extension and support."
      },
      {
        q: "What training is provided for teachers?",
        a: "We offer professional development packages covering interpretation of cognitive evidence, translating profiles into classroom decisions, and using Wadmore data for learning support planning. Contact us for customised PD options."
      },
    ]
  },
  {
    id: "professional",
    name: "Professional",
    color: BRAND.violet,
    questions: [
      {
        q: "How can Wadmore help our organisation?",
        a: "Wadmore Professional reveals patterns in how your people approach complexity, collaboration, and change under cognitive demand. This provides evidence to support team composition decisions, development planning, and role discussions."
      },
      {
        q: "Is this like a personality test?",
        a: "No. Personality tests describe preferences and traits. Wadmore examines how cognitive patterns appear when people engage with specific tasks: how they process information, solve problems, regulate their thinking, and generate ideas. This provides evidence to inform decisions about team effectiveness and development."
      },
      {
        q: "How long does the professional assessment take?",
        a: "Less than one hour. The assessment is designed to respect professionals' time while gathering meaningful cognitive evidence."
      },
      {
        q: "What team-level insights do you provide?",
        a: "Team reports show collective cognitive patterns, communication style implications, and evidence to inform collaboration and development decisions. Leaders can see how their team's cognitive diversity may affect dynamics."
      },
      {
        q: "Can Wadmore be used in recruitment?",
        a: "Wadmore can inform hiring discussions by revealing candidates' cognitive patterns relative to role demands. We recommend using it to clarify role demands and development support, not as a pass/fail filter. We focus on capability development, not gatekeeping."
      },
    ]
  },
  {
    id: "technical",
    name: "Privacy & Technical",
    color: BRAND.steel,
    questions: [
      {
        q: "How is my data protected?",
        a: "All data is stored on secure servers in Melbourne, Australia. We use encryption for data in transit and at rest, implement strict access controls, and never sell personal information. See our Privacy Policy for full details."
      },
      {
        q: "Who can see my results?",
        a: "For family accounts, only you control access to your data. For school accounts, results are visible to authorised school staff. For professional accounts, your organisation's administrator determines access levels. You can request your data or its deletion at any time."
      },
      {
        q: "Can I delete my data?",
        a: "Yes. You can request deletion of your personal data by contacting privacy@wadmore.com.au. We'll process your request in accordance with Australian privacy law and our data retention policies."
      },
      {
        q: "What browsers and devices are supported?",
        a: "Wadmore works on modern browsers (Chrome, Safari, Firefox, Edge) on desktop, tablet, and mobile devices. For the best assessment experience, we recommend a tablet or desktop with a stable internet connection."
      },
      {
        q: "What if I lose connection during an assessment?",
        a: "Your progress is automatically saved. If you lose connection, simply log back in and continue from where you left off. Assessment sessions can be paused and resumed as needed."
      },
    ]
  },
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openQuestion, setOpenQuestion] = useState(null);

  const currentCategory = FAQ_CATEGORIES.find(c => c.id === activeCategory);

  return (
    <Layout>
            <SEO {...PAGE_SEO.faq} />
      <div className="min-h-screen" style={{ background: BRAND.cloud }}>
        {/* Header */}
        <div style={{ background: BRAND.white, borderBottom: `1px solid ${BRAND.dove}` }}>
          <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
            <div className="max-w-3xl">
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
                style={{ background: BRAND.cloud, border: `1px solid ${BRAND.dove}`, color: BRAND.slate }}
              >
                <span className="w-2 h-2 rounded-full" style={{ background: BRAND.indigo }} />
                Help Centre
              </div>
              <h1 
                className="text-4xl md:text-5xl font-semibold mb-4"
                style={{ color: BRAND.slate }}
              >
                Frequently Asked Questions
              </h1>
              <p 
                className="text-lg md:text-xl"
                style={{ color: BRAND.steel }}
              >
                Find answers about Wadmore's cognitive profiling platform, assessments, 
                and how we can help you understand thinking development.
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            
            {/* Category Navigation */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <nav className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
                {FAQ_CATEGORIES.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id);
                      setOpenQuestion(null);
                    }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-left whitespace-nowrap transition-all"
                    style={{
                      background: activeCategory === category.id ? BRAND.white : "transparent",
                      border: activeCategory === category.id ? `1px solid ${BRAND.dove}` : "1px solid transparent",
                      boxShadow: activeCategory === category.id ? "0 2px 8px rgba(0,0,0,0.04)" : "none",
                    }}
                  >
                    <span 
                      className="w-3 h-3 rounded-full flex-shrink-0"
                      style={{ background: category.color }}
                    />
                    <span 
                      className="font-medium"
                      style={{ color: activeCategory === category.id ? BRAND.slate : BRAND.steel }}
                    >
                      {category.name}
                    </span>
                    <span 
                      className="text-sm ml-auto"
                      style={{ color: BRAND.steel }}
                    >
                      {category.questions.length}
                    </span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Questions */}
            <div>
              <div 
                className="rounded-2xl overflow-hidden"
                style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}` }}
              >
                <div 
                  className="px-6 py-4 border-b"
                  style={{ borderColor: BRAND.dove }}
                >
                  <h2 
                    className="text-xl font-semibold flex items-center gap-3"
                    style={{ color: BRAND.slate }}
                  >
                    <span 
                      className="w-3 h-3 rounded-full"
                      style={{ background: currentCategory.color }}
                    />
                    {currentCategory.name}
                  </h2>
                </div>

                <div className="divide-y" style={{ borderColor: BRAND.dove }}>
                  {currentCategory.questions.map((item, index) => {
                    const isOpen = openQuestion === `${activeCategory}-${index}`;
                    return (
                      <div key={index}>
                        <button
                          onClick={() => setOpenQuestion(isOpen ? null : `${activeCategory}-${index}`)}
                          className="w-full px-6 py-5 text-left flex items-start gap-4 hover:bg-slate-50 transition-colors"
                        >
                          <span 
                            className="text-lg font-medium flex-1"
                            style={{ color: BRAND.slate }}
                          >
                            {item.q}
                          </span>
                          <svg 
                            width="20" 
                            height="20" 
                            viewBox="0 0 20 20" 
                            fill={BRAND.steel}
                            className={`flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                          >
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                        {isOpen && (
                          <div 
                            className="px-6 pb-5"
                            style={{ color: BRAND.steel }}
                          >
                            <p className="leading-relaxed">{item.a}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Still have questions */}
          <div 
            className="mt-12 rounded-2xl p-8 md:p-12 text-center"
            style={{ background: BRAND.indigo }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              We're here to help. Reach out to our team and we'll get back to you 
              as soon as possible.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all hover:scale-[1.02]"
              style={{ background: BRAND.white, color: BRAND.indigo }}
            >
              Contact Us
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8.707 3.293a1 1 0 00-1.414 1.414L9.586 7H3a1 1 0 100 2h6.586l-2.293 2.293a1 1 0 101.414 1.414l4-4a1 1 0 000-1.414l-4-4z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}