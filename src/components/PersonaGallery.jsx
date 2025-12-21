// src/components/PersonaGallery.jsx
// Cycling persona display for Wadmore homepage hero
// Shows diverse individuals representing different user types
// Full fade out, then fade in (no cross-fade)

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

const FADE_DURATION = 800; // ms for fade in/out
const DISPLAY_DURATION = 3000; // ms to show each image

/* ══════════════════════════════════════════════════════════════
   PERSONA GALLERY COMPONENT
   Sequence: fade out → change image → fade in
   All images preloaded and kept in DOM to prevent loading flicker
   ══════════════════════════════════════════════════════════════ */

export default function PersonaGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const loadedCount = useRef(0);
  const timeoutRef = useRef(null);

  // Preload all images on mount
  useEffect(() => {
    PERSONAS.forEach((persona) => {
      const img = new Image();
      img.onload = () => {
        loadedCount.current += 1;
        if (loadedCount.current === PERSONAS.length) {
          setImagesLoaded(true);
        }
      };
      img.src = persona.image;
    });
  }, []);

  // Animation cycle
  useEffect(() => {
    if (!imagesLoaded) return;

    const runCycle = () => {
      // Step 1: Fade out
      setIsVisible(false);

      // Step 2: After fade out complete, change image
      timeoutRef.current = setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % PERSONAS.length);

        // Step 3: Fade in
        // Small delay to ensure DOM has updated before fading in
        requestAnimationFrame(() => {
          setIsVisible(true);
        });
      }, FADE_DURATION);
    };

    // Start the cycle after display duration
    const intervalId = setInterval(runCycle, DISPLAY_DURATION + FADE_DURATION * 2);

    return () => {
      clearInterval(intervalId);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [imagesLoaded]);

  return (
    <div 
      className="relative w-full"
      style={{ 
        maxWidth: "clamp(200px, 20vw + 100px, 320px)",
        opacity: imagesLoaded ? 1 : 0,
        transition: "opacity 500ms ease-in-out",
      }}
    >
      {/* Container with fixed aspect ratio */}
      <div 
        className="relative"
        style={{ aspectRatio: "4/5" }}
      >
        {/* All persona images stacked - prevents loading flicker */}
        {PERSONAS.map((persona, index) => (
          <div
            key={persona.id}
            className="absolute inset-0 flex items-center justify-center"
            style={{
              // Only the active image can be visible, controlled by isVisible
              opacity: index === activeIndex && isVisible ? 1 : 0,
              transition: `opacity ${FADE_DURATION}ms ease-in-out`,
              pointerEvents: index === activeIndex ? "auto" : "none",
            }}
          >
            <img
              src={persona.image}
              alt={persona.alt}
              className="w-full h-auto object-contain drop-shadow-lg"
              loading="eager"
              fetchpriority={index === 0 ? "high" : "low"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}