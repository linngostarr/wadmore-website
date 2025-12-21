// src/pages/Science.jsx
// Wadmore Science - The research foundation
// Focus: Irrefutable scientific foundations, rigorous methodology, genuine actionability

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
  golden: "#F5C542",
};

export default function Science() {
  return (
    <Layout>
      <Hero />
      <ResearchFoundationSection />
      <DomainsSection />
      <DevelopmentalFrameworkSection />
      <PsychometricRigourSection />
      <ActionabilitySection />
      <NotLearningStylesSection />
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
      <div className="absolute inset-0 pointer-events-none" style={{ 
        background: `radial-gradient(ellipse at 0% 0%, ${BRAND.cerulean}10, transparent 50%), radial-gradient(ellipse at 100% 100%, ${BRAND.indigo}08, transparent 40%)` 
      }} />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28 relative z-10 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8" style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}`, color: BRAND.slate }}>
            <span className="w-2 h-2 rounded-full" style={{ background: BRAND.indigo }} />
            The Science
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight mb-6" style={{ color: BRAND.slate }}>
            Rigorous methodology.<br />
            <span style={{ color: BRAND.indigo }}>Meaningful insights.</span>
          </h1>
          
          <p className="text-xl leading-relaxed mb-8" style={{ color: BRAND.steel }}>
            Wadmore is built on decades of cognitive science research and modern psychometric 
            methodology. Our framework measures <strong style={{ color: BRAND.slate }}>how thinking develops</strong> — 
            not what people know, but how they process, reason, and adapt.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-xl" style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}` }}>
            {[
              { value: "8", label: "Cognitive Domains" },
              { value: "15", label: "Developmental Bands" },
              { value: "360", label: "Unique Constructs" },
              { value: "α≥0.85", label: "Reliability Target" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold" style={{ color: BRAND.indigo }}>{stat.value}</div>
                <div className="text-sm" style={{ color: BRAND.steel }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   RESEARCH FOUNDATION - Lead with the science
   ══════════════════════════════════════════════════════════════ */

function ResearchFoundationSection() {
  return (
    <section className="py-20 md:py-28" style={{ background: BRAND.white }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: BRAND.indigo }}>Research Foundation</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4" style={{ color: BRAND.slate }}>
            Built on established cognitive science
          </h2>
          <p className="text-lg" style={{ color: BRAND.steel }}>
            Each of Wadmore's eight domains draws on well-established research traditions. 
            We measure constructs that cognitive scientists have studied for decades — 
            and that predict real-world outcomes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              area: "Executive Functioning",
              researchers: "Diamond (2013), Miyake et al. (2000)",
              insight: "EF encompasses the cognitive processes that enable goal-directed behaviour: working memory, cognitive flexibility, and inhibitory control. Research shows EF is among the strongest predictors of academic and professional success.",
              color: BRAND.teal,
            },
            {
              area: "Working Memory",
              researchers: "Baddeley & Hitch (1974), Gathercole & Alloway (2008)",
              insight: "The mental workspace that holds and manipulates information during complex tasks. Working memory capacity predicts learning outcomes across domains and can be developed through targeted practice.",
              color: BRAND.cerulean,
            },
            {
              area: "Metacognition",
              researchers: "Flavell (1979), Hattie (2009)",
              insight: "Awareness of one's own thinking processes. Hattie's meta-analysis identified metacognitive strategies as having effect size d=0.69 — among the highest-impact educational interventions available.",
              color: BRAND.indigo,
            },
            {
              area: "Self-Efficacy & Mindset",
              researchers: "Dweck (2006), Bandura (1997)",
              insight: "How beliefs about one's own capabilities shape engagement, persistence, and performance. Growth mindset and self-efficacy are measurable constructs that powerfully influence learning outcomes.",
              color: BRAND.violet,
            },
            {
              area: "Cognitive Load Theory",
              researchers: "Sweller (1988), Rosenshine (2012)",
              insight: "Instruction must align with cognitive architecture. Understanding how learners process information enables optimised teaching that reduces extraneous load and builds schema.",
              color: BRAND.teal,
            },
            {
              area: "Creativity Research",
              researchers: "Guilford (1967), Torrance (1966), Runco (2007)",
              insight: "Divergent thinking — the ability to generate multiple solutions — is measurable, developable, and distinct from convergent reasoning. Creativity develops through structured practice.",
              color: BRAND.golden,
            },
          ].map((item) => (
            <div key={item.area} className="p-6 rounded-xl" style={{ background: BRAND.cloud, borderLeft: `4px solid ${item.color}` }}>
              <h3 className="font-semibold text-lg mb-1" style={{ color: BRAND.slate }}>{item.area}</h3>
              <p className="text-sm mb-3" style={{ color: item.color }}>{item.researchers}</p>
              <p className="text-sm leading-relaxed" style={{ color: BRAND.steel }}>{item.insight}</p>
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
  return (
    <section className="py-20 md:py-28" style={{ background: BRAND.cloud }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: BRAND.indigo }}>The Framework</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4" style={{ color: BRAND.slate }}>
            Eight domains of cognitive development
          </h2>
          <p className="text-lg" style={{ color: BRAND.steel }}>
            Wadmore measures thinking across eight research-grounded domains, organised into three clusters. 
            Together, they provide a complete picture of how someone approaches cognitive challenges.
          </p>
        </div>
        
        <div className="space-y-8">
          {/* Cluster 1: Cognitive Processing */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full" style={{ background: BRAND.cerulean }} />
              <h3 className="font-semibold" style={{ color: BRAND.slate }}>Cognitive Processing</h3>
              <span className="text-sm" style={{ color: BRAND.steel }}>How your mind takes in and works with information</span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { code: "AR", name: "Abstract Reasoning", desc: "Pattern recognition across contexts" },
                { code: "LS", name: "Logical Sequencing", desc: "Building logical structures" },
                { code: "PS", name: "Processing Speed", desc: "Efficient cognitive operations" },
                { code: "MA", name: "Memory & Attention", desc: "Focus, encoding, retrieval" },
              ].map((d) => (
                <div key={d.code} className="p-4 rounded-xl" style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}` }}>
                  <div className="text-xs font-bold mb-1" style={{ color: BRAND.cerulean }}>{d.code}</div>
                  <div className="font-semibold text-sm mb-1" style={{ color: BRAND.slate }}>{d.name}</div>
                  <div className="text-xs" style={{ color: BRAND.steel }}>{d.desc}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Cluster 2: Cognitive Self-Regulation */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full" style={{ background: BRAND.teal }} />
              <h3 className="font-semibold" style={{ color: BRAND.slate }}>Cognitive Self-Regulation</h3>
              <span className="text-sm" style={{ color: BRAND.steel }}>How you manage and direct your thinking</span>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { code: "EF", name: "Executive Functioning", desc: "Planning, flexibility, inhibition" },
                { code: "MR", name: "Metacognition", desc: "Thinking about thinking" },
                { code: "CM", name: "Cognitive Confidence", desc: "Self-belief and persistence" },
              ].map((d) => (
                <div key={d.code} className="p-4 rounded-xl" style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}` }}>
                  <div className="text-xs font-bold mb-1" style={{ color: BRAND.teal }}>{d.code}</div>
                  <div className="font-semibold text-sm mb-1" style={{ color: BRAND.slate }}>{d.name}</div>
                  <div className="text-xs" style={{ color: BRAND.steel }}>{d.desc}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Cluster 3: Creative Thinking */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full" style={{ background: BRAND.violet }} />
              <h3 className="font-semibold" style={{ color: BRAND.slate }}>Creative Thinking</h3>
              <span className="text-sm" style={{ color: BRAND.steel }}>How you generate original ideas</span>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl" style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}` }}>
                <div className="text-xs font-bold mb-1" style={{ color: BRAND.violet }}>CD</div>
                <div className="font-semibold text-sm mb-1" style={{ color: BRAND.slate }}>Creativity & Divergent Thinking</div>
                <div className="text-xs" style={{ color: BRAND.steel }}>Generating novel ideas and solutions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   DEVELOPMENTAL FRAMEWORK
   ══════════════════════════════════════════════════════════════ */

function DevelopmentalFrameworkSection() {
  return (
    <section className="py-20 md:py-28" style={{ background: BRAND.white }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: BRAND.indigo }}>Developmental Framework</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6" style={{ color: BRAND.slate }}>
              15 bands of cognitive development
            </h2>
            <p className="text-lg mb-6" style={{ color: BRAND.steel }}>
              Wadmore's developmental continuum is grounded in <strong style={{ color: BRAND.slate }}>Piagetian and 
              neo-Piagetian theory</strong> — describing qualitatively different stages of cognitive 
              capability, not just statistical percentiles.
            </p>
            <p className="text-lg mb-6" style={{ color: BRAND.steel }}>
              Each band represents a genuine developmental stage with characteristic ways of thinking, 
              typical challenges, and specific growth opportunities. Movement through bands is the 
              goal — every profile shows current position and what comes next.
            </p>
            
            <div className="space-y-4">
              {[
                { range: "Bands 1-5", label: "Foundation Development", desc: "Pre-operational through concrete operations" },
                { range: "Bands 6-9", label: "Advanced Development", desc: "Formal operations through sophisticated reasoning" },
                { range: "Bands 10-12", label: "Professional Application", desc: "Entry-level through advanced professional expertise" },
                { range: "Bands 13-15", label: "Expert Mastery", desc: "Domain expertise through peak documented capability" },
              ].map((item) => (
                <div key={item.range} className="flex gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: BRAND.indigo }} />
                  <div>
                    <span className="font-semibold" style={{ color: BRAND.slate }}>{item.range}:</span>{" "}
                    <span className="font-medium" style={{ color: BRAND.slate }}>{item.label}</span>
                    <span style={{ color: BRAND.steel }}> — {item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-6 rounded-xl" style={{ background: BRAND.cloud, border: `1px solid ${BRAND.dove}` }}>
            <div className="text-sm font-medium mb-4" style={{ color: BRAND.steel }}>THEORETICAL GROUNDING</div>
            <div className="space-y-4">
              {[
                { theorist: "Piaget", contribution: "Stage theory of cognitive development", application: "Foundation for band structure and qualitative stage descriptions" },
                { theorist: "Vygotsky", contribution: "Zone of Proximal Development", application: "Each band defines current capability and scaffolded next steps" },
                { theorist: "Case & Fischer", contribution: "Neo-Piagetian skill theory", application: "Domain-specific development within broader cognitive stages" },
              ].map((item) => (
                <div key={item.theorist} className="p-4 rounded-lg" style={{ background: BRAND.white }}>
                  <div className="font-semibold text-sm" style={{ color: BRAND.indigo }}>{item.theorist}</div>
                  <div className="text-sm mb-1" style={{ color: BRAND.slate }}>{item.contribution}</div>
                  <div className="text-xs" style={{ color: BRAND.steel }}>{item.application}</div>
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
   PSYCHOMETRIC RIGOUR
   ══════════════════════════════════════════════════════════════ */

function PsychometricRigourSection() {
  return (
    <section className="py-20 md:py-28" style={{ background: BRAND.cloud }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: BRAND.indigo }}>Psychometric Standards</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4" style={{ color: BRAND.slate }}>
            Built to professional measurement standards
          </h2>
          <p className="text-lg" style={{ color: BRAND.steel }}>
            Wadmore isn't a quiz or a preference inventory. It's a professionally-developed 
            assessment built to the same psychometric standards as established cognitive measures.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { metric: "Reliability", target: "α ≥ 0.85", desc: "Internal consistency that meets professional assessment standards for educational decision-making" },
            { metric: "IRT Discrimination", target: "a ≥ 0.65", desc: "Item Response Theory parameters ensuring items effectively differentiate between ability levels" },
            { metric: "Rasch Alignment", target: "Logit scaling", desc: "Items calibrated on a common difficulty scale enabling accurate developmental placement" },
            { metric: "DIF Analysis", target: "Bias detection", desc: "Differential Item Functioning analysis to identify and address potential fairness issues" },
            { metric: "Construct Validity", target: "Factor structure", desc: "Confirmed factor structure aligning with the eight-domain cognitive model" },
            { metric: "Content Validity", target: "Expert review", desc: "Domain experts validate item-construct alignment and developmental appropriateness" },
          ].map((item) => (
            <div key={item.metric} className="p-5 rounded-xl" style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}` }}>
              <div className="text-sm font-medium mb-1" style={{ color: BRAND.steel }}>{item.metric}</div>
              <div className="text-xl font-bold mb-2" style={{ color: BRAND.indigo }}>{item.target}</div>
              <p className="text-sm" style={{ color: BRAND.steel }}>{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-6 rounded-xl" style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}` }}>
          <h3 className="font-semibold mb-4" style={{ color: BRAND.slate }}>Quality Assurance Process</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Item Development", desc: "AI-assisted generation with construct-aligned prompts" },
              { step: "2", title: "Expert Review", desc: "Domain specialists validate content and developmental fit" },
              { step: "3", title: "Pilot Testing", desc: "Real-world testing with diverse populations" },
              { step: "4", title: "Statistical Validation", desc: "IRT calibration, DIF analysis, reliability verification" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold" style={{ background: BRAND.indigo, color: BRAND.white }}>{item.step}</div>
                <div className="font-semibold text-sm mb-1" style={{ color: BRAND.slate }}>{item.title}</div>
                <div className="text-xs" style={{ color: BRAND.steel }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   ACTIONABILITY
   ══════════════════════════════════════════════════════════════ */

function ActionabilitySection() {
  return (
    <section className="py-20 md:py-28" style={{ background: BRAND.white }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: BRAND.indigo }}>From Insight to Action</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6" style={{ color: BRAND.slate }}>
              360 constructs. Specific interventions.
            </h2>
            <p className="text-lg mb-6" style={{ color: BRAND.steel }}>
              Most assessments tell you <em>where</em> someone is. Wadmore tells you 
              <strong style={{ color: BRAND.slate }}> what to do about it</strong>.
            </p>
            <p className="text-lg mb-8" style={{ color: BRAND.steel }}>
              Each of our 360 constructs (8 domains × 15 bands × 3 constructs per cell) 
              connects to specific, evidence-based interventions — not generic advice.
            </p>
            
            <div className="p-4 rounded-lg" style={{ background: BRAND.cloud }}>
              <div className="text-sm font-medium mb-2" style={{ color: BRAND.slate }}>The actionability difference:</div>
              <p className="text-sm" style={{ color: BRAND.steel }}>
                "Band 7, Construct 2 in Executive Functioning" doesn't just describe capability — 
                it connects to specific teaching strategies, home activities, and professional 
                development approaches validated for that developmental stage.
              </p>
            </div>
          </div>
          
          <div className="p-6 rounded-xl" style={{ background: BRAND.cloud, border: `1px solid ${BRAND.dove}` }}>
            <div className="text-sm font-medium mb-4" style={{ color: BRAND.steel }}>EXAMPLE: CONSTRUCT-LEVEL INSIGHT</div>
            <div className="p-4 rounded-lg mb-4" style={{ background: BRAND.white }}>
              <div className="text-xs font-medium mb-1" style={{ color: BRAND.teal }}>EXECUTIVE FUNCTIONING · BAND 7 · CONSTRUCT 2</div>
              <p className="text-sm font-medium mb-2" style={{ color: BRAND.slate }}>
                "Plans multi-step projects with emerging independence; benefits from milestone scaffolding"
              </p>
            </div>
            <div className="space-y-3">
              <div className="p-3 rounded-lg" style={{ background: BRAND.white }}>
                <div className="text-xs font-medium mb-1" style={{ color: BRAND.cerulean }}>FOR TEACHERS</div>
                <p className="text-xs" style={{ color: BRAND.steel }}>Provide project templates with pre-set milestones; gradually remove scaffolds as independence grows</p>
              </div>
              <div className="p-3 rounded-lg" style={{ background: BRAND.white }}>
                <div className="text-xs font-medium mb-1" style={{ color: BRAND.teal }}>FOR PARENTS</div>
                <p className="text-xs" style={{ color: BRAND.steel }}>Use visual planning boards for homework; celebrate milestone completion to build confidence</p>
              </div>
              <div className="p-3 rounded-lg" style={{ background: BRAND.white }}>
                <div className="text-xs font-medium mb-1" style={{ color: BRAND.violet }}>GROWTH TRAJECTORY</div>
                <p className="text-xs" style={{ color: BRAND.steel }}>Progressing toward Band 8: "Independently plans complex projects with self-generated milestones"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   NOT LEARNING STYLES
   ══════════════════════════════════════════════════════════════ */

function NotLearningStylesSection() {
  return (
    <section className="py-20 md:py-28" style={{ background: BRAND.cloud }}>
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="p-8 md:p-12 rounded-2xl" style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}` }}>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6" style={{ color: BRAND.slate }}>
            This is not about "learning styles"
          </h2>
          
          <p className="text-lg mb-6" style={{ color: BRAND.steel }}>
            <strong style={{ color: BRAND.slate }}>Learning styles (VAK — Visual, Auditory, Kinaesthetic) 
            have been thoroughly debunked by research.</strong> Despite this, surveys show the majority 
            of teachers still believe in them (Pashler et al., 2008; Newton & Miah, 2017).
          </p>
          
          <p className="text-lg mb-8" style={{ color: BRAND.steel }}>
            Wadmore is fundamentally different. We measure <strong style={{ color: BRAND.slate }}>actual 
            cognitive processes</strong> — how information is encoded, processed, and applied — 
            using psychometrically validated methods. Not self-reported preferences or pseudoscientific categories.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 rounded-lg" style={{ background: `${BRAND.steel}08` }}>
              <div className="text-sm font-semibold mb-3" style={{ color: BRAND.steel }}>WADMORE IS NOT</div>
              <ul className="space-y-2 text-sm" style={{ color: BRAND.steel }}>
                {["Learning styles (VAK)", "'Thinking styles' or preferences", "Left-brain / right-brain myths", "Multiple intelligences typing", "Personality categorisation"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span style={{ color: BRAND.steel }}>✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-4 rounded-lg" style={{ background: `${BRAND.sage}15` }}>
              <div className="text-sm font-semibold mb-3" style={{ color: BRAND.teal }}>WADMORE IS</div>
              <ul className="space-y-2 text-sm" style={{ color: BRAND.slate }}>
                {["Measured cognitive processes", "Developmental progression", "Research-grounded domains", "IRT/Rasch psychometrics", "Strength-based profiling"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span style={{ color: BRAND.teal }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
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
    <section className="py-20 md:py-28" style={{ background: BRAND.indigo }}>
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4" style={{ color: BRAND.white }}>
          Science that serves people
        </h2>
        <p className="text-lg mb-8 opacity-90" style={{ color: BRAND.white }}>
          Rigorous methodology. Meaningful insights. Genuine actionability.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/schools" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all hover:scale-[1.02]" style={{ background: BRAND.cerulean, color: BRAND.white }}>
            For Schools
            <ArrowIcon />
          </Link>
          <Link to="/families" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all hover:scale-[1.02]" style={{ background: BRAND.teal, color: BRAND.white }}>
            For Families
            <ArrowIcon />
          </Link>
          <Link to="/professional" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all hover:scale-[1.02]" style={{ background: BRAND.violet, color: BRAND.white }}>
            For Professional
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