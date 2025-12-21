// src/components/PersonaGallery.jsx
// Cycling persona display for Wadmore homepage hero
// Shows diverse individuals representing different user types

import { useState, useEffect, useRef } from "react";

// Import persona images
import childStudent from "../assets/personas/child-student.png";
import teenStudent from "../assets/personas/teen-student.png";
import youngAdult from "../assets/personas/young-adult.png";
import parent from "../assets/personas/parent.png";
import teacher from "../assets/personas/teacher.png";
import professional from "../assets/personas/professional.png";
import seniorLeader from "../assets/personas/senior-leader.png";

/* ══════════════════════════════════════════════════════════════
   PERSONA DATA
   ══════════════════════════════════════════════════════════════ */

const PERSONAS = [
  { id: "child", image: childStudent, alt: "Young student" },
  { id: "teen", image: teenStudent, alt: "Teenage student" },
  { id: "young-adult", image: youngAdult, alt: "University student" },
  { id: "parent", image: parent, alt: "Parent" },
  { id: "teacher", image: teacher, alt: "Teacher" },
  { id: "professional", image: professional, alt: "Team leader" },
  { id: "executive", image: seniorLeader, alt: "Executive" },
];

/* ══════════════════════════════════════════════════════════════
   BRAND COLORS
   ══════════════════════════════════════════════════════════════ */

const BRAND = {
  cloud: "#F7F8FA",
};

/* ══════════════════════════════════════════════════════════════
   PERSONA GALLERY COMPONENT
   Full fade out, then fade in sequence
   ══════════════════════════════════════════════════════════════ */

export default function PersonaGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      // Fade out
      setVisible(false);
      
      // After fade out completes, change image and fade in
      setTimeout(() => {
        setActiveIndex((prev) => {
          const next = prev + 1;
          return next >= PERSONAS.length ? 0 : next;
        });
        setVisible(true);
      }, 1000); // Wait for fade out to complete
      
    }, 4000); // Total cycle time

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const activePersona = PERSONAS[activeIndex];

  return (
    <div 
      className="relative w-full"
      style={{ 
        maxWidth: "clamp(200px, 20vw + 100px, 320px)"
      }}
    >
      {/* Main image container - scales with viewport */}
      <div 
        className="relative"
        style={{ 
          aspectRatio: "4/5",
        }}
      >
        {/* Persona image with fade */}
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ 
            opacity: visible ? 1 : 0,
            transition: "opacity 1000ms ease-in-out",
          }}
        >
          <img
            src={activePersona.image}
            alt={activePersona.alt}
            className="w-full h-auto object-contain drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}