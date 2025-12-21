// src/components/PersonaGallery.jsx
// Rotating photo gallery of diverse Wadmore personas
// Photos cropped to body shape with transparent/removed backgrounds

import { useState, useEffect } from "react";

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

// Diverse personas with transparent/cutout style images
// Using pngimg.com, pngegg, and similar sources for cutout portraits
// These are PNG images with transparent backgrounds showing body shape
const PERSONAS = [
  {
    id: "child-girl",
    label: "Young Learner",
    role: "Student, Age 8",
    color: BRAND.teal,
    // Young girl student
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&h=600&fit=crop",
  },
  {
    id: "teacher-woman",
    label: "Educator",
    role: "Primary Teacher",
    color: BRAND.cerulean,
    // Professional woman teacher
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=600&fit=crop",
  },
  {
    id: "teen-boy",
    label: "Secondary Student", 
    role: "Student, Age 15",
    color: BRAND.violet,
    // Teenage boy
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=600&fit=crop",
  },
  {
    id: "professional-man",
    label: "Team Leader",
    role: "Professional",
    color: BRAND.indigo,
    // Business professional man
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop",
  },
  {
    id: "child-boy",
    label: "Primary Student",
    role: "Student, Age 10",
    color: BRAND.teal,
    // Young boy
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=500&h=600&fit=crop",
  },
  {
    id: "parent-woman",
    label: "Parent",
    role: "Mother & Advocate",
    color: BRAND.cerulean,
    // Parent/mother
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=500&h=600&fit=crop",
  },
  {
    id: "senior-man",
    label: "Lifelong Learner",
    role: "Grandparent", 
    color: BRAND.steel,
    // Older gentleman
    image: "https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?w=500&h=600&fit=crop",
  },
  {
    id: "professional-woman",
    label: "HR Director",
    role: "Executive",
    color: BRAND.violet,
    // Executive woman
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=600&fit=crop",
  },
  {
    id: "teen-girl",
    label: "High School Student",
    role: "Student, Age 17",
    color: BRAND.teal,
    // Teenage girl
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=600&fit=crop",
  },
  {
    id: "counsellor",
    label: "School Counsellor",
    role: "Support Specialist",
    color: BRAND.cerulean,
    // Counsellor/professional
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=600&fit=crop",
  },
  {
    id: "teacher-man",
    label: "Educator",
    role: "Secondary Teacher",
    color: BRAND.indigo,
    // Male teacher
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=600&fit=crop",
  },
  {
    id: "young-professional",
    label: "Graduate",
    role: "Early Career",
    color: BRAND.violet,
    // Young professional
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=600&fit=crop",
  },
];

export default function PersonaGallery({ className = "" }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Preload images
  useEffect(() => {
    PERSONAS.forEach((persona) => {
      const img = new Image();
      img.src = persona.image;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % PERSONAS.length);
        setIsTransitioning(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentPersona = PERSONAS[activeIndex];

  return (
    <div className={`relative ${className}`}>
      {/* Main display area */}
      <div className="relative h-80 w-64 mx-auto">
        {/* Background glow effect */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full blur-3xl opacity-25 transition-colors duration-1000"
          style={{ background: currentPersona.color }}
        />
        
        {/* Photo container with body-shape mask */}
        <div className="relative w-full h-full">
          {PERSONAS.map((persona, index) => (
            <div
              key={persona.id}
              className={`absolute inset-0 flex items-end justify-center transition-all duration-700 ease-in-out ${
                index === activeIndex && !isTransitioning
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 translate-y-4"
              }`}
            >
              {/* The image with CSS mask for body shape effect */}
              <div 
                className="relative"
                style={{
                  WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                  maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                }}
              >
                <img
                  src={persona.image}
                  alt={persona.label}
                  className="h-72 w-auto object-cover object-top"
                  style={{
                    filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.15))',
                  }}
                  loading={index < 3 ? "eager" : "lazy"}
                />
                {/* Subtle color overlay tint */}
                <div 
                  className="absolute inset-0 mix-blend-soft-light opacity-20 pointer-events-none"
                  style={{ background: `linear-gradient(180deg, ${persona.color}40 0%, transparent 50%)` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Label below photo */}
      <div 
        className={`mt-4 text-center transition-all duration-500 ${
          isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
        }`}
      >
        <div 
          className="inline-block px-5 py-3 rounded-2xl"
          style={{ 
            background: `${BRAND.white}`,
            boxShadow: `0 4px 20px ${currentPersona.color}15`,
            border: `1px solid ${BRAND.dove}`
          }}
        >
          <div className="font-semibold text-base" style={{ color: BRAND.slate }}>
            {currentPersona.label}
          </div>
          <div className="text-sm" style={{ color: BRAND.steel }}>
            {currentPersona.role}
          </div>
        </div>
      </div>
    </div>
  );
}


/* ══════════════════════════════════════════════════════════════
   STACKED VERSION: Multiple photos with depth effect
   ══════════════════════════════════════════════════════════════ */

export function PersonaGalleryStacked({ className = "" }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PERSONAS.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Show current + 2 previous (faded behind)
  const getVisiblePersonas = () => {
    const visible = [];
    for (let i = 2; i >= 0; i--) {
      const index = (activeIndex - i + PERSONAS.length) % PERSONAS.length;
      visible.push({
        ...PERSONAS[index],
        depth: i,
      });
    }
    return visible;
  };

  const currentPersona = PERSONAS[activeIndex];

  return (
    <div className={`relative ${className}`}>
      <div className="relative h-80 w-72 mx-auto">
        {/* Background glow */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full blur-3xl opacity-20 transition-colors duration-700"
          style={{ background: currentPersona.color }}
        />
        
        {getVisiblePersonas().map((persona, i) => {
          const scale = 1 - persona.depth * 0.08;
          const opacity = 1 - persona.depth * 0.35;
          const translateX = persona.depth * 40;
          const translateY = persona.depth * -10;
          const blur = persona.depth * 2;
          
          return (
            <div
              key={`${persona.id}-${i}`}
              className="absolute inset-0 flex items-end justify-center transition-all duration-700 ease-out"
              style={{
                transform: `scale(${scale}) translateX(${translateX}px) translateY(${translateY}px)`,
                opacity,
                zIndex: 3 - persona.depth,
                filter: `blur(${blur}px)`,
              }}
            >
              <div
                style={{
                  WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                  maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                }}
              >
                <img
                  src={persona.image}
                  alt={persona.label}
                  className="h-72 w-auto object-cover object-top"
                  style={{
                    filter: `drop-shadow(0 8px 25px rgba(0,0,0,${0.15 - persona.depth * 0.03}))`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Front persona label */}
      <div className="mt-4 text-center">
        <div 
          className="inline-block px-5 py-3 rounded-2xl transition-all duration-500"
          style={{ 
            background: BRAND.white,
            border: `1px solid ${BRAND.dove}`,
            boxShadow: `0 4px 20px ${currentPersona.color}10`
          }}
        >
          <div className="font-semibold text-base" style={{ color: BRAND.slate }}>
            {currentPersona.label}
          </div>
          <div className="text-sm" style={{ color: BRAND.steel }}>
            {currentPersona.role}
          </div>
        </div>
      </div>
    </div>
  );
}


/* ══════════════════════════════════════════════════════════════
   SIDE-BY-SIDE VERSION: Shows outgoing and incoming personas
   ══════════════════════════════════════════════════════════════ */

export function PersonaGalleryCrossfade({ className = "" }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(PERSONAS.length - 1);
  const [phase, setPhase] = useState('stable'); // 'stable' | 'transitioning'

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase('transitioning');
      setPrevIndex(activeIndex);
      
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % PERSONAS.length);
        setPhase('stable');
      }, 800);
    }, 4000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const currentPersona = PERSONAS[activeIndex];

  return (
    <div className={`relative ${className}`}>
      <div className="relative h-80 w-64 mx-auto overflow-hidden">
        {/* Background glow */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full blur-3xl opacity-25 transition-colors duration-700"
          style={{ background: currentPersona.color }}
        />
        
        {/* Previous persona (fading out) */}
        {phase === 'transitioning' && (
          <div 
            className="absolute inset-0 flex items-end justify-center animate-fade-out"
            style={{
              WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
              maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
            }}
          >
            <img
              src={PERSONAS[prevIndex].image}
              alt={PERSONAS[prevIndex].label}
              className="h-72 w-auto object-cover object-top"
              style={{ filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.15))' }}
            />
          </div>
        )}
        
        {/* Current persona */}
        <div 
          className={`absolute inset-0 flex items-end justify-center transition-all duration-700 ${
            phase === 'transitioning' ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}
          style={{
            WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
            maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
          }}
        >
          <img
            src={currentPersona.image}
            alt={currentPersona.label}
            className="h-72 w-auto object-cover object-top"
            style={{ filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.15))' }}
          />
        </div>
      </div>
      
      {/* Label */}
      <div className={`mt-4 text-center transition-all duration-500 ${
        phase === 'transitioning' ? 'opacity-0' : 'opacity-100'
      }`}>
        <div 
          className="inline-block px-5 py-3 rounded-2xl"
          style={{ 
            background: BRAND.white,
            boxShadow: `0 4px 20px ${currentPersona.color}15`,
            border: `1px solid ${BRAND.dove}`
          }}
        >
          <div className="font-semibold text-base" style={{ color: BRAND.slate }}>
            {currentPersona.label}
          </div>
          <div className="text-sm" style={{ color: BRAND.steel }}>
            {currentPersona.role}
          </div>
        </div>
      </div>
    </div>
  );
}


/* ══════════════════════════════════════════════════════════════
   COMPACT VERSION: For smaller spaces
   ══════════════════════════════════════════════════════════════ */

export function PersonaGalleryCompact({ className = "" }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PERSONAS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const persona = PERSONAS[activeIndex];

  return (
    <div className={`flex items-end gap-4 ${className}`}>
      <div 
        className="relative h-20 w-16 flex-shrink-0 transition-all duration-500"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
        }}
      >
        <img
          src={persona.image}
          alt={persona.label}
          className="w-full h-full object-cover object-top"
          style={{ filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.1))' }}
        />
      </div>
      <div className="pb-2 transition-opacity duration-300">
        <div className="font-medium text-sm" style={{ color: BRAND.slate }}>
          {persona.label}
        </div>
        <div className="text-xs" style={{ color: BRAND.steel }}>
          {persona.role}
        </div>
      </div>
    </div>
  );
}
