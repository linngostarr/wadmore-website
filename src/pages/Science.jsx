// src/pages/Science.jsx
// Wadmore Science - Research foundation and methodology
// Accurate citations from actual data, tightened claim language

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
  indigoDark: "#2a3259",
};

export default function Science() {
  return (
    <Layout>
      <div className="w-full max-w-full overflow-x-hidden">
        <Hero />
        <DomainsResearchSection />
        <DevelopmentalFrameworkSection />
        <PsychometricSection />
        <DifferentiationSection />
        <EvidenceLinkedSection />
        <CTASection />
      </div>
    </Layout>
  );
}

/* ══════════════════════════════════════════════════════════════
   HERO
   ══════════════════════════════════════════════════════════════ */

function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: BRAND.cloud }}>
      <div className="absolute inset-0" style={{ background: `linear-gradient(150deg, ${BRAND.cloud} 0%, #EDF1FF 50%, ${BRAND.cloud} 100%)` }} />
      <div className="absolute top-0 left-[20%] w-[40vw] max-w-[500px] aspect-square pointer-events-none opacity-25" style={{ background: `radial-gradient(circle at center, ${BRAND.indigo}15, transparent 60%)` }} />
      <div className="absolute bottom-0 right-[10%] w-[30vw] max-w-[350px] aspect-square pointer-events-none opacity-20" style={{ background: `radial-gradient(circle at center, ${BRAND.cerulean}12, transparent 60%)` }} />
      
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-center">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ background: `${BRAND.white}90`, border: `1px solid ${BRAND.indigo}20` }}>
              <span className="w-2 h-2 rounded-full" style={{ background: BRAND.indigo }} />
              <span style={{ color: BRAND.slate }}>The Science</span>
            </div>
            
            <h1 
              className="font-semibold leading-[1.08] tracking-tight mb-5"
              style={{ 
                color: BRAND.slate,
                fontSize: "clamp(2.25rem, 4vw + 1rem, 3.5rem)"
              }}
            >
              Rigorous{" "}
              <span className="relative inline-block" style={{ color: BRAND.indigo }}>
                methodology.
                <svg className="absolute -bottom-1 left-0 w-full" height="8" viewBox="0 0 280 8" preserveAspectRatio="none">
                  <path d="M0 6 Q70 1, 140 4 T280 3" fill="none" stroke={BRAND.indigo} strokeWidth="2.5" strokeLinecap="round" opacity="0.3" />
                </svg>
              </span>
              <br />
              <span className="text-[0.85em]" style={{ color: BRAND.steel }}>Meaningful insights.</span>
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl leading-relaxed" style={{ color: BRAND.steel }}>
              Wadmore measures <strong style={{ color: BRAND.slate }}>cognitive development</strong>, 
              the processes through which people reason, learn, and adapt. Our framework draws on 
              50+ peer-reviewed sources across cognitive science, developmental psychology, and learning research.
            </p>
          </div>
          
          {/* Right: Stats card */}
          <div className="hidden lg:block">
            <div className="rounded-2xl p-6 lg:p-8" style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}`, boxShadow: `0 20px 50px ${BRAND.indigo}08` }}>
              <div className="text-xs font-bold uppercase tracking-wider mb-5" style={{ color: BRAND.indigo }}>Framework at a glance</div>
              <div className="space-y-4">
                {[
                  { value: "8", label: "Cognitive Domains", desc: "Complete coverage of thinking capability" },
                  { value: "15", label: "Developmental Bands", desc: "Lifespan growth continuum" },
                  { value: "360", label: "Unique Constructs", desc: "Precise, actionable profiling" },
                ].map((stat, i) => (
                  <div key={stat.label} className="flex items-center gap-4 p-3 rounded-xl" style={{ background: i === 0 ? `${BRAND.indigo}08` : BRAND.cloud }}>
                    <div className="text-2xl font-bold w-12 text-center" style={{ color: BRAND.indigo }}>{stat.value}</div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold" style={{ color: BRAND.slate }}>{stat.label}</div>
                      <div className="text-xs" style={{ color: BRAND.steel }}>{stat.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile stats bar */}
        <div className="lg:hidden mt-8 grid grid-cols-3 gap-4 p-5 rounded-2xl" style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}`, boxShadow: `0 12px 35px ${BRAND.indigo}05` }}>
          {[
            { value: "8", label: "Domains" },
            { value: "15", label: "Bands" },
            { value: "360", label: "Constructs" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold mb-0.5" style={{ color: BRAND.indigo }}>{stat.value}</div>
              <div className="text-xs font-medium" style={{ color: BRAND.slate }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   DOMAINS & RESEARCH - Combined interactive section
   ══════════════════════════════════════════════════════════════ */

function DomainsResearchSection() {
  const [activeDomain, setActiveDomain] = useState(0);
  
  const domains = [
    { 
      code: "AR", 
      name: "Abstract Reasoning", 
      fullName: "Abstract Reasoning & Pattern Recognition",
      cluster: "processing",
      desc: "The ability to identify patterns, recognise relationships, and solve novel problems without relying on prior knowledge. Central to fluid intelligence and transfer of learning.",
      researchers: "Klauer (2008), Gentner (2003), Rittle-Johnson (2001)",
      researchInsight: "Inductive reasoning, identifying rules from examples, is trainable through systematic practice. Klauer's meta-analysis demonstrates significant transfer effects when pattern recognition is explicitly taught. Analogical reasoning (Gentner) enables learning transfer across domains.",
      keyConstructs: ["Pattern identification", "Rule induction", "Analogical transfer", "Novel problem-solving"]
    },
    { 
      code: "LS", 
      name: "Logical Sequencing", 
      fullName: "Logical Sequencing & Analytical Thinking",
      cluster: "processing",
      desc: "The capacity to follow and construct logical arguments, understand cause-effect relationships, and think systematically through multi-step problems.",
      researchers: "Johnson-Laird (1983), Evans (2008), Stanovich (2011)",
      researchInsight: "Logical reasoning develops through explicit instruction in argument structure and practice with varied problem types. Mental model theory (Johnson-Laird) explains how people construct and manipulate internal representations to draw conclusions.",
      keyConstructs: ["Sequential reasoning", "Cause-effect analysis", "Argument evaluation", "Systematic thinking"]
    },
    { 
      code: "PS", 
      name: "Processing Speed", 
      fullName: "Processing Speed & Efficiency",
      cluster: "processing",
      desc: "The rate at which cognitive operations are executed. Influences capacity for complex thinking by determining how much information can be processed within working memory constraints.",
      researchers: "Kail (1991, 2007), Salthouse (1996), Fry & Hale (2000)",
      researchInsight: "Processing speed develops predictably through childhood and adolescence, with individual differences remaining stable. Kail's research shows speed improvements free cognitive resources for higher-order thinking. Processing efficiency supports working memory function.",
      keyConstructs: ["Cognitive efficiency", "Automaticity", "Response fluency", "Mental speed"]
    },
    { 
      code: "MA", 
      name: "Memory & Attention", 
      fullName: "Working Memory & Attention",
      cluster: "processing",
      desc: "The mental workspace for holding and manipulating information during complex tasks. Working memory capacity is one of the strongest predictors of learning outcomes.",
      researchers: "Baddeley (1974, 2000), Gathercole (2008), Cowan (2001)",
      researchInsight: "Working memory has limited capacity but can be supported through strategic scaffolding. Gathercole's research shows working memory constraints significantly impact classroom learning. Reducing extraneous load (Sweller) frees capacity for learning.",
      keyConstructs: ["Information maintenance", "Attentional control", "Cognitive load management", "Dual-task coordination"]
    },
    { 
      code: "EF", 
      name: "Executive Functioning", 
      fullName: "Executive Functioning & Flexibility",
      cluster: "regulation",
      desc: "The higher-order processes that enable goal-directed behaviour: planning, inhibitory control, cognitive flexibility, and self-monitoring. Among the strongest predictors of life outcomes.",
      researchers: "Diamond (2013), Miyake (2000), Zelazo (2013)",
      researchInsight: "Executive functions are separable but related capabilities that develop through childhood into early adulthood. Diamond's framework identifies core components: inhibition, working memory, and cognitive flexibility. EF predicts academic achievement more strongly than IQ.",
      keyConstructs: ["Planning & organisation", "Inhibitory control", "Cognitive flexibility", "Self-monitoring"]
    },
    { 
      code: "MR", 
      name: "Metacognition", 
      fullName: "Metacognition & Self-Regulation",
      cluster: "regulation",
      desc: "Awareness and regulation of one's own thinking processes. Metacognitive strategies are among the most powerful tools for improving learning outcomes.",
      researchers: "Flavell (1979), Veenman (2006), Brown (1978)",
      researchInsight: "Metacognition involves both monitoring (awareness of understanding) and control (strategic regulation). Veenman's research shows metacognitive skillfulness accounts for significant variance in learning outcomes beyond intelligence. Explicitly taught and develops with practice.",
      keyConstructs: ["Self-monitoring", "Strategy selection", "Comprehension awareness", "Reflective thinking"]
    },
    { 
      code: "CM", 
      name: "Cognitive Confidence", 
      fullName: "Cognitive Confidence & Motivation",
      cluster: "regulation",
      desc: "Beliefs about one's ability to learn and succeed at cognitive challenges. Self-efficacy and motivation powerfully influence engagement, persistence, and ultimately achievement.",
      researchers: "Bandura (1977, 1997), Schunk (2003), Deci & Ryan (1985)",
      researchInsight: "Self-efficacy (Bandura) is domain-specific and built through mastery experiences, modelling, and feedback. Self-determination theory (Deci & Ryan) shows autonomy, competence, and relatedness support intrinsic motivation. Beliefs are malleable and responsive to intervention.",
      keyConstructs: ["Self-efficacy", "Persistence", "Challenge-seeking", "Intrinsic motivation"]
    },
    { 
      code: "CD", 
      name: "Creativity", 
      fullName: "Creativity & Divergent Thinking",
      cluster: "creative",
      desc: "The capacity to generate original ideas, think divergently, and approach problems from novel angles. Creativity is measurable, developable, and distinct from convergent reasoning.",
      researchers: "Amabile (1983), Torrance (1987), Scott (2004)",
      researchInsight: "Scott's meta-analysis shows creativity training produces moderate-to-large effects under structured conditions. Amabile's research demonstrates environmental factors (autonomy, psychological safety) significantly impact creative output. Divergent thinking can be explicitly developed.",
      keyConstructs: ["Idea fluency", "Originality", "Flexible thinking", "Elaboration"]
    },
  ];

  const clusters = {
    processing: { name: "Cognitive Processing", color: BRAND.cerulean, desc: "How your mind handles information" },
    regulation: { name: "Cognitive Self-Regulation", color: BRAND.teal, desc: "How you manage your thinking" },
    creative: { name: "Creative Thinking", color: BRAND.violet, desc: "How you generate original ideas" },
  };

  const domain = domains[activeDomain];
  const clusterInfo = clusters[domain.cluster];

  return (
    <section className="py-12 md:py-20 lg:py-24" style={{ background: BRAND.white }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="max-w-4xl mb-10 md:mb-14">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: BRAND.indigo }}>Domains & Research Foundation</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-5" style={{ color: BRAND.slate }}>
            Eight domains, grounded in cognitive science
          </h2>
          <p className="text-base md:text-lg mb-8" style={{ color: BRAND.steel }}>
            Each domain measures distinct cognitive processes validated by decades of research. 
            Click any domain to explore its research foundation.
          </p>
        </div>

        {/* Cluster tabs - styled like band selector */}
        <div className="rounded-2xl overflow-hidden mb-8" style={{ background: BRAND.cloud, boxShadow: `0 15px 40px ${BRAND.indigo}05` }}>
          <div className="flex">
            {Object.entries(clusters).map(([key, cluster]) => {
              const isActive = domain.cluster === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveDomain(domains.findIndex(d => d.cluster === key))}
                  className="flex-1 relative p-4 md:p-5 text-center transition-all duration-300"
                  style={{ 
                    background: isActive ? cluster.color : 'transparent',
                  }}
                >
                  <div 
                    className="text-sm md:text-base font-semibold mb-0.5"
                    style={{ color: isActive ? BRAND.white : BRAND.slate }}
                  >
                    {cluster.name}
                  </div>
                  <div 
                    className="text-xs"
                    style={{ color: isActive ? `${BRAND.white}cc` : BRAND.steel }}
                  >
                    {cluster.desc}
                  </div>
                  {isActive && (
                    <span 
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-10" 
                      style={{ 
                        width: 0, 
                        height: 0, 
                        borderLeft: "10px solid transparent", 
                        borderRight: "10px solid transparent", 
                        borderTop: `10px solid ${cluster.color}` 
                      }} 
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
        
        {/* Domain selector - Desktop */}
        <div className="hidden md:grid grid-cols-8 gap-2 mb-6">
          {domains.map((d, idx) => {
            const isActive = idx === activeDomain;
            const cluster = clusters[d.cluster];
            return (
              <button
                key={d.code}
                onClick={() => setActiveDomain(idx)}
                className="p-4 rounded-xl transition-all duration-300 text-left relative overflow-hidden group"
                style={{ 
                  background: isActive ? cluster.color : BRAND.cloud,
                  border: `1px solid ${isActive ? cluster.color : BRAND.dove}`,
                  transform: isActive ? 'scale(1.02)' : 'scale(1)',
                  boxShadow: isActive ? `0 8px 25px ${cluster.color}30` : 'none'
                }}
              >
                <div 
                  className="text-xs font-bold mb-1"
                  style={{ color: isActive ? BRAND.white : cluster.color }}
                >
                  {d.code}
                </div>
                <div 
                  className="text-xs font-medium leading-tight"
                  style={{ color: isActive ? BRAND.white : BRAND.slate }}
                >
                  {d.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Domain selector - Mobile */}
        <div className="md:hidden mb-6">
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-5 px-5">
            {domains.map((d, idx) => {
              const isActive = idx === activeDomain;
              const cluster = clusters[d.cluster];
              return (
                <button
                  key={d.code}
                  onClick={() => setActiveDomain(idx)}
                  className="flex-shrink-0 px-4 py-3 rounded-xl transition-all duration-300"
                  style={{ 
                    background: isActive ? cluster.color : BRAND.cloud,
                    border: `1px solid ${isActive ? cluster.color : BRAND.dove}`,
                  }}
                >
                  <div 
                    className="text-xs font-bold"
                    style={{ color: isActive ? BRAND.white : cluster.color }}
                  >
                    {d.code}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
        
        {/* Domain detail panel */}
        <div 
          className="rounded-2xl overflow-hidden transition-all duration-300"
          style={{ background: BRAND.cloud, border: `1px solid ${BRAND.dove}`, boxShadow: `0 15px 40px ${BRAND.indigo}05` }}
        >
          {/* Header bar */}
          <div 
            className="px-6 py-4 flex items-center gap-4"
            style={{ background: `${clusterInfo.color}12`, borderBottom: `1px solid ${BRAND.dove}` }}
          >
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold"
              style={{ background: clusterInfo.color, color: BRAND.white }}
            >
              {domain.code}
            </div>
            <div>
              <h3 className="font-semibold text-lg" style={{ color: BRAND.slate }}>{domain.fullName}</h3>
              <p className="text-sm" style={{ color: clusterInfo.color }}>{clusterInfo.name}</p>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6 md:p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left: Domain description */}
              <div>
                <p className="text-base md:text-lg leading-relaxed mb-5" style={{ color: BRAND.steel }}>
                  {domain.desc}
                </p>
                
                <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: BRAND.steel }}>
                  Key Constructs
                </div>
                <div className="flex flex-wrap gap-2">
                  {domain.keyConstructs.map((construct) => (
                    <span 
                      key={construct}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium"
                      style={{ background: BRAND.white, color: BRAND.slate, border: `1px solid ${BRAND.dove}` }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: clusterInfo.color }} />
                      {construct}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Right: Research foundation */}
              <div className="p-5 rounded-xl" style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}` }}>
                <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: BRAND.indigo }}>
                  Research Foundation
                </div>
                <div className="text-sm font-medium mb-4" style={{ color: clusterInfo.color }}>
                  {domain.researchers}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: BRAND.steel }}>
                  {domain.researchInsight}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom note */}
        <div className="mt-6 text-center">
          <p className="text-sm" style={{ color: BRAND.steel }}>
            Wadmore's framework draws on <strong style={{ color: BRAND.slate }}>peer-reviewed research</strong> across cognitive science, developmental psychology, and learning research.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   DEVELOPMENTAL FRAMEWORK - Extended interactive section
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

const BANDS = [
  { 
    id: 1, 
    name: "Foundational Development", 
    description: "Cognitive capabilities are emerging and require substantial external support. Thinking is concrete, immediate, and context-dependent. Executive functions (impulse control, attention, task-switching) are just developing. Pattern recognition focuses on simple, visible attributes. Learning happens through play, exploration, and consistent routines with patient scaffolding.",
    typical: "Early childhood",
    keyCharacteristics: ["Concrete thinking", "External scaffolding required", "Emerging self-regulation", "Play-based learning"]
  },
  { 
    id: 2, 
    name: "Early Operational Thinking", 
    description: "Developing independence in familiar contexts as concrete operations emerge. Can classify by multiple attributes and recognise patterns across contexts. Impulse control improving, attention extending. Beginning to internalise cognitive strategies that were previously external. Responds well to visual supports, consistent routines, and explicit instruction.",
    typical: "Early primary years",
    keyCharacteristics: ["Concrete operations emerging", "Decreasing scaffolding needs", "Pattern recognition developing", "Strategy internalisation beginning"]
  },
  { 
    id: 3, 
    name: "Consolidating Foundations", 
    description: "Concrete operational thinking well-established with independent performance in familiar domains. Recognises complex patterns and logical relationships. Executive functions consolidating, follows rules consistently, maintains attention appropriately, switches tasks with minimal support. Beginning to transfer learned strategies across contexts.",
    typical: "Primary school",
    keyCharacteristics: ["Concrete operations consolidated", "Strategy transfer emerging", "Good self-regulation in familiar contexts", "Logical reasoning developing"]
  },
  { 
    id: 4, 
    name: "Transitional Complexity", 
    description: "Managing increased cognitive demands as abstract thinking emerges in supported contexts. Can follow multi-step instructions, plan simple projects with guidance, and use organisational systems when established. Strategic thinking developing. Still benefits from explicit scaffolding but requires less direct supervision than earlier bands.",
    typical: "Upper primary",
    keyCharacteristics: ["Abstract thinking emerging", "Multi-step planning with support", "Organisational skills developing", "Increasing independence"]
  },
  { 
    id: 5, 
    name: "Emerging Abstract Thinking", 
    description: "Metacognitive awareness developing, beginning to monitor and regulate own thinking. Formal operational thinking emerging with capacity for hypothetical reasoning in familiar domains. Plans multi-day projects with decreasing support. Self-efficacy beliefs consolidating. Critical period for establishing organisational habits and growth mindset.",
    typical: "Early secondary",
    keyCharacteristics: ["Metacognition emerging", "Formal operations beginning", "Self-monitoring developing", "Motivational beliefs forming"]
  },
  { 
    id: 6, 
    name: "Early Formal Operations", 
    description: "Independent abstract thinking established. Can identify patterns within familiar contexts and apply logical thinking to abstract concepts. Strategic self-regulation developing with increasing ability to plan, monitor, and adjust approaches. Shows cognitive flexibility when scaffolded. Ready for systematic instruction in advanced reasoning strategies.",
    typical: "Secondary school",
    keyCharacteristics: ["Abstract reasoning established", "Strategic self-regulation", "Cognitive flexibility developing", "Complex problem-solving emerging"]
  },
  { 
    id: 7, 
    name: "Advanced Abstract Thinking", 
    description: "Sophisticated cognitive integration with transfer across domains. Meta-strategic thinking established, not just using strategies but selecting and adapting them based on task demands. Strong executive function approaching adult levels. Manages complex, long-term projects independently. Shows resilient self-efficacy and autonomous motivation.",
    typical: "Senior secondary",
    keyCharacteristics: ["Cross-domain transfer", "Meta-strategic thinking", "Strong executive function", "Autonomous motivation"]
  },
  { 
    id: 8, 
    name: "Cognitive Sophistication", 
    description: "Cross-domain integration with optimisation of cognitive processes. Advanced academic reasoning enabling sophisticated conceptual work. Mature executive function supporting complex independent demands. Well-developed metacognitive awareness and self-regulation. Ready for post-secondary challenges requiring sustained independent effort.",
    typical: "Post-secondary",
    keyCharacteristics: ["Optimised cognitive processes", "Advanced reasoning", "Mature self-regulation", "Independent learning capability"]
  },
  { 
    id: 9, 
    name: "Advanced Reasoning", 
    description: "Systematic approaches to novel problems with integration of multiple knowledge domains. Strategic expertise developing through deliberate practice. Sophisticated creative thinking enabling innovation. Manages complex personal, academic, and professional responsibilities with minimal external support. Metacognitive strategies refined and personalised.",
    typical: "Tertiary / early career",
    keyCharacteristics: ["Novel problem-solving", "Strategic expertise emerging", "Sophisticated creativity", "Personalised metacognition"]
  },
  { 
    id: 10, 
    name: "Applied Expertise", 
    description: "Professional-level capability with sophisticated application across contexts. Entry-level domain expertise built through sustained deliberate practice. Mature executive function supporting complex professional demands. Autonomous motivation drives continued development. Self-regulation effective under professional pressure.",
    typical: "Professional entry",
    keyCharacteristics: ["Professional capability", "Domain expertise emerging", "Effective under pressure", "Self-directed development"]
  },
  { 
    id: 11, 
    name: "Mastery", 
    description: "Multi-context sophistication reflecting advanced professional expertise. Leadership-level cognitive capability enabling complex organisational demands. Expert executive function supporting strategic thinking and adaptive planning. Creativity supports professional innovation. Wisdom beginning to inform decision-making.",
    typical: "Experienced professional",
    keyCharacteristics: ["Leadership capability", "Expert executive function", "Professional creativity", "Wisdom emerging"]
  },
  { 
    id: 12, 
    name: "Advanced Expertise", 
    description: "Innovative framework development with cross-disciplinary integration. Expert-level capability in domain of specialisation. Strategic self-regulation refined through years of professional practice. Creativity enables original contribution. Mentorship of others reflects depth of expertise and metacognitive sophistication.",
    typical: "Senior professional",
    keyCharacteristics: ["Cross-disciplinary integration", "Original contribution", "Refined self-regulation", "Mentorship capability"]
  },
  { 
    id: 13, 
    name: "Specialised Excellence", 
    description: "Field-advancing capability with original contribution to domain knowledge. Thought leadership emerging through innovative approaches and paradigm-challenging insights. Deep expertise enables pattern recognition invisible to less experienced practitioners. Cognitive capabilities sustained through continued engagement with challenging material.",
    typical: "Domain specialist",
    keyCharacteristics: ["Field-advancing contribution", "Thought leadership", "Expert pattern recognition", "Paradigm-challenging insight"]
  },
  { 
    id: 14, 
    name: "Paradigm-Advancing", 
    description: "Cross-disciplinary mastery with methodological innovation. Recognition as authority in specialised domains. Cognitive capabilities at the highest professional levels enable groundbreaking work. Wisdom-informed decision-making reflects integration of extensive experience with continued intellectual engagement.",
    typical: "Recognised authority",
    keyCharacteristics: ["Methodological innovation", "Recognised authority", "Wisdom-informed judgment", "Cross-disciplinary mastery"]
  },
  { 
    id: 15, 
    name: "Peak Capability", 
    description: "Highest levels of human cognitive achievement with paradigm-shifting insight. Groundbreaking contribution that advances entire fields. Represents the upper bounds of measured capability, exceptional achievement reflecting both extensive expertise development and continued cognitive engagement at the frontier of human knowledge.",
    typical: "Exceptional achievement",
    keyCharacteristics: ["Paradigm-shifting insight", "Groundbreaking contribution", "Frontier knowledge", "Exceptional achievement"]
  },
];

function DevelopmentalFrameworkSection() {
  const [activeBand, setActiveBand] = useState(7);
  const band = BANDS[activeBand - 1];
  
  const handlePrev = () => setActiveBand((prev) => Math.max(1, prev - 1));
  const handleNext = () => setActiveBand((prev) => Math.min(15, prev + 1));
  
  // Calculate example scale score (midpoint of band)
  const exampleScore = Math.round((band.id - 0.5) * (1000 / 15));

  return (
    <section className="py-12 md:py-20 lg:py-28" style={{ background: BRAND.white }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10 md:mb-14">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: BRAND.indigo }}>Developmental Framework</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-4" style={{ color: BRAND.slate }}>
            15 bands across the developmental continuum
          </h2>
          <p className="text-base md:text-lg" style={{ color: BRAND.steel }}>
            Wadmore places cognitive development on a criterion-referenced continuum. Bands describe 
            <strong style={{ color: BRAND.slate }}> capability</strong>, what someone can do, not how they compare to peers. 
            Click any band to explore.
          </p>
        </div>
        
        {/* Interactive Band Selector */}
        <div className="rounded-2xl overflow-hidden mb-6" style={{ background: BRAND.cloud, boxShadow: `0 15px 40px ${BRAND.indigo}05` }}>
          
          {/* DESKTOP: 15-bar selector */}
          <div className="hidden md:flex overflow-hidden">
            {BANDS.map((b) => {
              const isActive = b.id === activeBand;
              const bandColor = BAND_COLORS[b.id - 1];
              const textColor = BAND_TEXT[b.id - 1];
              return (
                <button 
                  key={b.id} 
                  onClick={() => setActiveBand(b.id)} 
                  className="flex-1 min-w-0 h-16 lg:h-20 transition-all duration-300 relative group" 
                  style={{ 
                    background: bandColor, 
                    transform: isActive ? "scaleY(1.15)" : "scaleY(1)", 
                    transformOrigin: "bottom", 
                    zIndex: isActive ? 10 : 1 
                  }}
                >
                  <span 
                    className={`absolute inset-0 flex items-center justify-center text-sm lg:text-base font-bold transition-opacity duration-200 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'}`} 
                    style={{ color: textColor }}
                  >
                    {b.id}
                  </span>
                  {isActive && (
                    <span 
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2" 
                      style={{ width: 0, height: 0, borderLeft: "8px solid transparent", borderRight: "8px solid transparent", borderTop: `8px solid ${bandColor}` }} 
                    />
                  )}
                </button>
              );
            })}
          </div>
          
          {/* MOBILE: Stepper navigation */}
          <div className="md:hidden">
            <div className="flex h-3">
              {BANDS.map((b) => (
                <div 
                  key={b.id} 
                  className="flex-1 transition-opacity duration-300"
                  style={{ background: BAND_COLORS[b.id - 1], opacity: b.id <= activeBand ? 1 : 0.3 }} 
                />
              ))}
            </div>
            
            <div className="flex items-center justify-between px-4 py-3" style={{ background: BRAND.white, borderBottom: `1px solid ${BRAND.dove}` }}>
              <button 
                onClick={handlePrev}
                disabled={activeBand === 1}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                style={{ background: activeBand === 1 ? BRAND.dove : BRAND.cloud, color: activeBand === 1 ? BRAND.steel : BRAND.slate, opacity: activeBand === 1 ? 0.5 : 1 }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              
              <div className="flex items-center gap-2">
                <span className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: BAND_COLORS[activeBand - 1], color: BAND_TEXT[activeBand - 1] }}>
                  {activeBand}
                </span>
                <span className="text-sm font-medium" style={{ color: BRAND.steel }}>of 15</span>
              </div>
              
              <button 
                onClick={handleNext}
                disabled={activeBand === 15}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                style={{ background: activeBand === 15 ? BRAND.dove : BRAND.cloud, color: activeBand === 15 ? BRAND.steel : BRAND.slate, opacity: activeBand === 15 ? 0.5 : 1 }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Band Detail Panel */}
          <div className="p-5 md:p-8" style={{ background: BRAND.white }}>
            <div className="grid lg:grid-cols-[1fr_auto] gap-6 lg:gap-10">
              {/* Left: Band description */}
              <div>
                <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4">
                  <span className="text-2xl md:text-3xl font-bold" style={{ color: BRAND.slate }}>Band {band.id}</span>
                  <span className="px-3 py-1.5 rounded-full text-sm font-semibold" style={{ background: BAND_COLORS[band.id - 1], color: BAND_TEXT[band.id - 1] }}>
                    {band.name}
                  </span>
                </div>
                <p className="text-base md:text-lg leading-relaxed mb-5" style={{ color: BRAND.steel }}>
                  {band.description}
                </p>
                
                {/* Key characteristics */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {band.keyCharacteristics.map((char) => (
                    <span 
                      key={char}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium"
                      style={{ background: BRAND.cloud, color: BRAND.slate, border: `1px solid ${BRAND.dove}` }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: BAND_COLORS[band.id - 1] }} />
                      {char}
                    </span>
                  ))}
                </div>
                
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium" style={{ background: BRAND.cloud, color: BRAND.steel }}>
                  <span style={{ color: BRAND.indigo }}>●</span> Typical context: {band.typical}
                </div>
              </div>
              
              {/* Right: Scale score indicator */}
              <div className="lg:w-72 p-5 rounded-xl" style={{ background: BRAND.cloud, border: `1px solid ${BRAND.dove}` }}>
                <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: BRAND.steel }}>Scale Position</div>
                
                {/* Visual scale indicator */}
                <div className="relative h-3 rounded-full mb-3 overflow-hidden" style={{ background: BRAND.dove }}>
                  <div 
                    className="absolute top-0 left-0 h-full rounded-full transition-all duration-500"
                    style={{ 
                      width: `${(exampleScore / 1000) * 100}%`,
                      background: `linear-gradient(90deg, ${BAND_COLORS[0]} 0%, ${BAND_COLORS[7]} 50%, ${BAND_COLORS[14]} 100%)`
                    }}
                  />
                  <div 
                    className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-white transition-all duration-500"
                    style={{ 
                      left: `calc(${(exampleScore / 1000) * 100}% - 8px)`,
                      background: BAND_COLORS[band.id - 1],
                      boxShadow: `0 2px 6px ${BRAND.slate}30`
                    }}
                  />
                </div>
                
                <div className="flex justify-between text-[10px] mb-4" style={{ color: BRAND.steel }}>
                  <span>0</span>
                  <span>500</span>
                  <span>1000</span>
                </div>
                
                <div className="text-center p-4 rounded-xl" style={{ background: BRAND.white }}>
                  <div className="text-4xl font-bold mb-1" style={{ color: BRAND.indigo }}>{exampleScore}</div>
                  <div className="text-xs font-medium mb-1" style={{ color: BRAND.slate }}>Example Scale Score</div>
                  <div className="text-[10px]" style={{ color: BRAND.steel }}>Band {band.id} · {band.name}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Rasch Scale Explanation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {[
            { title: "Criterion-referenced", desc: "Scores describe capability against defined criteria, not peer ranking", color: BRAND.teal },
            { title: "Equal-interval scaling", desc: "A 50-point gain means the same growth anywhere on the scale", color: BRAND.cerulean },
            { title: "Item-person alignment", desc: "Person ability and item difficulty on the same metric", color: BRAND.indigo },
            { title: "Growth-trackable", desc: "Scores are comparable across time, enabling progress monitoring", color: BRAND.violet },
          ].map((item) => (
            <div key={item.title} className="p-4 rounded-xl" style={{ background: BRAND.cloud, border: `1px solid ${BRAND.dove}` }}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style={{ background: `${item.color}15` }}>
                <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
              </div>
              <h3 className="font-semibold text-sm mb-1" style={{ color: BRAND.slate }}>{item.title}</h3>
              <p className="text-xs" style={{ color: BRAND.steel }}>{item.desc}</p>
            </div>
          ))}
        </div>
        
        {/* Developmental stages grouping */}
        <div className="p-6 md:p-8 rounded-2xl" style={{ background: BRAND.cloud, border: `1px solid ${BRAND.dove}` }}>
          <h3 className="font-semibold text-lg mb-5" style={{ color: BRAND.slate }}>Developmental Stages</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { range: "1–3", name: "Foundation", desc: "Concrete thinking, external support", colors: [0, 1, 2], theory: "Pre-operational → Early concrete" },
              { range: "4–6", name: "Functional", desc: "Emerging abstraction, strategic thinking", colors: [3, 4, 5], theory: "Concrete operational" },
              { range: "7–9", name: "Advanced", desc: "Formal operations, cross-domain transfer", colors: [6, 7, 8], theory: "Formal operational" },
              { range: "10–12", name: "Professional", desc: "Applied expertise, leadership capability", colors: [9, 10, 11], theory: "Post-formal / expertise" },
              { range: "13–15", name: "Expert", desc: "Domain mastery, paradigm contribution", colors: [12, 13, 14], theory: "Expert performance" },
            ].map((stage) => (
              <div key={stage.range} className="p-4 rounded-xl" style={{ background: BRAND.white }}>
                <div className="flex gap-1 mb-3">
                  {stage.colors.map((idx) => (
                    <div key={idx} className="flex-1 h-2 rounded-full" style={{ background: BAND_COLORS[idx] }} />
                  ))}
                </div>
                <div className="text-xs font-bold mb-1" style={{ color: BRAND.indigo }}>Bands {stage.range}</div>
                <div className="font-semibold text-sm mb-1" style={{ color: BRAND.slate }}>{stage.name}</div>
                <div className="text-xs mb-2" style={{ color: BRAND.steel }}>{stage.desc}</div>
                <div className="text-[10px] italic" style={{ color: BRAND.steel }}>{stage.theory}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   PSYCHOMETRIC APPROACH - Separate focused section
   ══════════════════════════════════════════════════════════════ */

function PsychometricSection() {
  // Premium SVG icons for psychometric concepts
  const CalibrationIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
      <path d="M16.24 7.76l1.42-1.42" />
      <path d="M18 12h2" />
      <path d="M12 18v2" />
      <path d="M4 12h2" />
    </svg>
  );

  const RubricIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M3 15h18" />
      <path d="M9 3v18" />
      <path d="M15 3v18" />
    </svg>
  );

  const BalanceIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18" />
      <path d="M5 7l7-4 7 4" />
      <path d="M5 7v2a2 2 0 002 2h0a2 2 0 002-2V7" />
      <path d="M15 7v2a2 2 0 002 2h0a2 2 0 002-2V7" />
      <rect x="8" y="18" width="8" height="3" rx="1" />
    </svg>
  );

  const GlobeIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );

  const PrecisionIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <circle cx="12" cy="12" r="7" />
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
    </svg>
  );

  const methods = [
    { 
      title: "Rasch model calibration", 
      desc: "Items calibrated to difficulty parameters, enabling precise placement on the developmental continuum. Fit statistics ensure items perform as expected.",
      Icon: CalibrationIcon,
      color: BRAND.teal
    },
    { 
      title: "Partial credit scoring", 
      desc: "Multi-level rubrics (2–4 levels per item) capture nuanced responses. More information per item means fewer items needed for reliable measurement.",
      Icon: RubricIcon,
      color: BRAND.cerulean
    },
    { 
      title: "DIF and bias testing", 
      desc: "Differential Item Functioning analysis identifies items that behave differently across groups. Bias review panels ensure cultural and linguistic fairness.",
      Icon: BalanceIcon,
      color: BRAND.indigo
    },
    { 
      title: "EALD-friendly design", 
      desc: "Accessible to English as an Additional Language/Dialect learners. Reduced linguistic complexity without reducing cognitive demand.",
      Icon: GlobeIcon,
      color: BRAND.violet
    },
    { 
      title: "Standard error reporting", 
      desc: "Every score includes measurement precision. Users know how confident to be in each result, transparency built in.",
      Icon: PrecisionIcon,
      color: BRAND.slate
    },
  ];

  return (
    <section className="py-12 md:py-20 lg:py-24" style={{ background: BRAND.cloud }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10 md:mb-12">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: BRAND.indigo }}>Measurement Quality</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-4" style={{ color: BRAND.slate }}>
            Psychometric rigour
          </h2>
          <p className="text-base md:text-lg" style={{ color: BRAND.steel }}>
            Wadmore applies modern psychometric methods to ensure measurement precision, fairness, and interpretability.
          </p>
        </div>
        
        {/* Two column layout */}
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-10">
          
          {/* Left: IRT explanation + specs */}
          <div>
            <div className="p-5 md:p-6 rounded-2xl mb-5" style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}` }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${BRAND.indigo}10`, color: BRAND.indigo }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <div className="text-base font-semibold" style={{ color: BRAND.slate }}>Why IRT/Rasch?</div>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: BRAND.steel }}>
                Item Response Theory places persons and items on a common scale. Unlike classical test theory, 
                IRT enables adaptive testing, precise standard errors, and defensible score comparisons across 
                different item sets, essential for developmental assessment.
              </p>
            </div>
            
            {/* Specifications grid */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Reliability target", value: "α ≥ 0.85", sub: "per domain" },
                { label: "Items per cell", value: "4–6", sub: "domain × band" },
                { label: "Scale range", value: "0–1000", sub: "Rasch logits" },
                { label: "Band width", value: "~67", sub: "scale points" },
              ].map((item) => (
                <div key={item.label} className="p-4 rounded-xl text-center" style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}` }}>
                  <div className="text-2xl font-bold mb-1" style={{ color: BRAND.indigo }}>{item.value}</div>
                  <div className="text-xs font-medium mb-0.5" style={{ color: BRAND.slate }}>{item.label}</div>
                  <div className="text-[10px]" style={{ color: BRAND.steel }}>{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right: Method cards */}
          <div className="space-y-3">
            {methods.map((item) => (
              <div 
                key={item.title} 
                className="group flex gap-4 p-4 md:p-5 rounded-xl transition-all duration-300 hover:shadow-md" 
                style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}` }}
              >
                <div 
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${item.color}10`, color: item.color }}
                >
                  <item.Icon />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-sm mb-1" style={{ color: BRAND.slate }}>{item.title}</div>
                  <div className="text-xs leading-relaxed" style={{ color: BRAND.steel }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   DIFFERENTIATION - What Wadmore is NOT
   ══════════════════════════════════════════════════════════════ */

function DifferentiationSection() {
  return (
    <section className="py-12 md:py-20" style={{ background: BRAND.cloud }}>
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <div className="p-6 md:p-10 rounded-2xl" style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}`, boxShadow: `0 15px 40px ${BRAND.indigo}05` }}>
          
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3" style={{ color: BRAND.slate }}>
              This is not about "learning styles"
            </h2>
            <p className="text-base" style={{ color: BRAND.steel }}>
              Learning styles (VAK) have been{" "}
              <strong style={{ color: BRAND.slate }}>thoroughly debunked by research</strong>{" "}
              (Pashler et al., 2008). Wadmore measures actual cognitive processes using validated methods, not self-reported preferences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-5 mb-8">
            <div className="p-5 rounded-xl" style={{ background: `${BRAND.steel}06` }}>
              <div className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: BRAND.steel }}>
                Wadmore is NOT
              </div>
              <ul className="space-y-2.5">
                {[
                  "Learning styles (VAK)",
                  "'Thinking styles' or preferences",
                  "Left-brain / right-brain myths",
                  "Multiple intelligences typing",
                  "Personality categorisation",
                  "IQ ranking against peers",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm" style={{ color: BRAND.steel }}>
                    <span className="text-red-400">✗</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-5 rounded-xl" style={{ background: `${BRAND.sage}15` }}>
              <div className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: BRAND.teal }}>
                Wadmore IS
              </div>
              <ul className="space-y-2.5">
                {[
                  "Measured cognitive processes",
                  "Developmental progression",
                  "Research-grounded domains",
                  "IRT/Rasch psychometrics",
                  "Strength-based profiling",
                  "Actionable guidance",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm" style={{ color: BRAND.slate }}>
                    <span style={{ color: BRAND.teal }}>✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Beyond Traditional Testing - Research insight */}
          <div className="p-5 md:p-6 rounded-xl" style={{ background: `${BRAND.indigo}06`, border: `1px solid ${BRAND.indigo}15` }}>
            <h4 className="font-semibold text-base md:text-lg mb-3" style={{ color: BRAND.slate }}>
              Beyond Traditional Testing
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: BRAND.steel }}>
              Recent cognitive science research shows that sound thinking often emerges through 
              rapid associative processes rather than extended deliberation. Wadmore measures both{" "}
              <strong style={{ color: BRAND.slate }}>intuitive efficiency</strong> (semantic memory structure, 
              associative retrieval) and <strong style={{ color: BRAND.slate }}>deliberate reasoning</strong> (executive function, 
              metacognition), providing a complete picture that traditional reasoning-only tests miss.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   EVIDENCE-LINKED - Actionability with claim discipline
   ══════════════════════════════════════════════════════════════ */

function EvidenceLinkedSection() {
  return (
    <section className="py-12 md:py-20 lg:py-24" style={{ background: BRAND.white }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <p className="text-xs md:text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: BRAND.indigo }}>From Profile to Practice</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-4" style={{ color: BRAND.slate }}>
              Every recommendation links to research
            </h2>
            <p className="text-base md:text-lg mb-5" style={{ color: BRAND.steel }}>
              Most assessments tell you <em>where</em> someone is. Wadmore profiles include{" "}
              <strong style={{ color: BRAND.slate }}>research-grounded guidance</strong>, 
              strategies matched to developmental position and linked to their evidence base.
            </p>
            <p className="text-sm mb-6" style={{ color: BRAND.steel }}>
              This isn't generic advice. Each of our 360 constructs (8 domains × 15 bands × 3 per cell) 
              connects to specific strategies validated for that developmental stage.
            </p>
            
            <div className="p-4 rounded-xl" style={{ background: BRAND.cloud, border: `1px solid ${BRAND.dove}` }}>
              <div className="text-sm font-semibold mb-2" style={{ color: BRAND.slate }}>Our commitment:</div>
              <ul className="space-y-1.5">
                {[
                  "Association language for correlational evidence",
                  "Causal claims only where intervention research supports them",
                  "Effect sizes contextualised, not cherry-picked",
                  "Mechanisms explained, not just outcomes cited",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm" style={{ color: BRAND.steel }}>
                    <span style={{ color: BRAND.teal }} className="mt-0.5">•</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Example card */}
          <div className="rounded-2xl overflow-hidden" style={{ background: BRAND.cloud, border: `1px solid ${BRAND.dove}`, boxShadow: `0 15px 40px ${BRAND.indigo}06` }}>
            <div className="px-5 py-4 flex items-center gap-3" style={{ background: `${BRAND.indigo}08`, borderBottom: `1px solid ${BRAND.dove}` }}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: BRAND.indigo }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: BRAND.indigo }}>Sample Profile Guidance</p>
                <p className="text-xs" style={{ color: BRAND.steel }}>Executive Functioning · Band 5</p>
              </div>
            </div>
            
            <div className="p-5 space-y-4">
              <div className="p-4 rounded-xl" style={{ background: BRAND.white }}>
                <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: BRAND.teal }}>Current Capabilities</p>
                <p className="text-sm" style={{ color: BRAND.slate }}>Plans multi-step projects with emerging independence; benefits from milestone scaffolding</p>
              </div>
              
              <div>
                <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: BRAND.cerulean }}>Recommended Strategies</p>
                <p className="text-sm" style={{ color: BRAND.steel }}>Provide project templates with pre-set milestones. Model planning through think-alouds. Gradually fade scaffolds as independence develops.</p>
              </div>
              
              <div>
                <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: BRAND.violet }}>Research Base</p>
                <p className="text-sm" style={{ color: BRAND.steel }}>External planning structures support internalisation through guided practice (Diamond, 2013). Visible structure reduces extraneous cognitive load during complex tasks (Sweller, 2019).</p>
              </div>
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
    <section className="py-16 md:py-24 lg:py-28 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${BRAND.indigo} 0%, ${BRAND.indigoDark} 100%)` }}>
      <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: `radial-gradient(circle at center, white 1.5px, transparent 1.5px)`, backgroundSize: "40px 40px" }} />
      
      <div className="max-w-4xl mx-auto px-5 md:px-8 text-center relative z-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 leading-tight" style={{ color: BRAND.white }}>
          Science that serves people
        </h2>
        <p className="text-base md:text-lg mb-8 opacity-85 max-w-2xl mx-auto" style={{ color: BRAND.white }}>
          Rigorous methodology. Meaningful insights. Research-grounded guidance.
        </p>
        
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4">
          <Link to="/schools" className="group inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3.5 md:py-4 rounded-full text-sm md:text-base font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl" style={{ background: BRAND.cerulean, color: BRAND.white, boxShadow: `0 6px 25px ${BRAND.cerulean}40` }}>
            For Schools <ArrowIcon />
          </Link>
          <Link to="/families" className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3.5 md:py-4 rounded-full text-sm md:text-base font-semibold transition-all duration-300 hover:scale-[1.02]" style={{ background: BRAND.teal, color: BRAND.white, boxShadow: `0 6px 25px ${BRAND.teal}40` }}>
            For Families <ArrowIcon />
          </Link>
          <Link to="/professional" className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3.5 md:py-4 rounded-full text-sm md:text-base font-semibold transition-all duration-300 hover:scale-[1.02]" style={{ background: BRAND.violet, color: BRAND.white, boxShadow: `0 6px 25px ${BRAND.violet}40` }}>
            For Professional <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8.707 3.293a1 1 0 00-1.414 1.414L9.586 7H3a1 1 0 100 2h6.586l-2.293 2.293a1 1 0 101.414 1.414l4-4a1 1 0 000-1.414l-4-4z" /></svg>;
}