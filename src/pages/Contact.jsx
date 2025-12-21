// src/pages/Contact.jsx
// Contact page with audience selection for Wadmore
// Uses Layout component, consistent BRAND colors, no external animation dependencies

import { useState } from "react";
import Layout from "../components/Layout";

/* ══════════════════════════════════════════════════════════════
   BRAND COLORS - Consistent with rest of site
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
  golden: "#F5C542",
};

/* ══════════════════════════════════════════════════════════════
   AUDIENCE OPTIONS
   ══════════════════════════════════════════════════════════════ */

const AUDIENCES = [
  {
    id: "families",
    label: "Wadmore Families",
    description: "Cognitive profiles for individuals and families",
    icon: FamilyIcon,
    color: BRAND.teal,
  },
  {
    id: "schools",
    label: "Wadmore Schools",
    description: "Classroom assessment and teacher insights",
    icon: SchoolIcon,
    color: BRAND.cerulean,
  },
  {
    id: "professional",
    label: "Wadmore Professional",
    description: "Team dynamics and leadership development",
    icon: ProfessionalIcon,
    color: BRAND.violet,
  },
  {
    id: "other",
    label: "Something else",
    description: "Partnerships, research, or general enquiries",
    icon: MessageIcon,
    color: BRAND.golden,
  },
];

/* ══════════════════════════════════════════════════════════════
   CONTACT PAGE COMPONENT
   ══════════════════════════════════════════════════════════════ */

export default function Contact() {
  const [selectedAudience, setSelectedAudience] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organisation: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ audience: selectedAudience, ...formData });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ background: BRAND.cloud }}>
        <div 
          className="absolute top-0 right-[20%] w-[30vw] max-w-[400px] aspect-square pointer-events-none opacity-20"
          style={{ background: `radial-gradient(circle at center, ${BRAND.indigo}15, transparent 60%)` }}
        />
        
        <div className="max-w-4xl mx-auto px-6 md:px-8 py-[clamp(2.5rem,6vh,4rem)] text-center relative z-10">
          <h1 
            className="font-semibold tracking-tight mb-4"
            style={{ 
              color: BRAND.slate,
              fontSize: "clamp(2rem, 4vw + 1rem, 3rem)"
            }}
          >
            How can we help?
          </h1>
          <p 
            className="max-w-2xl mx-auto"
            style={{ 
              color: BRAND.steel,
              fontSize: "clamp(1.1rem, 1vw + 0.5rem, 1.35rem)"
            }}
          >
            Tell us what you're exploring and we'll point you in the right direction.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-8 md:py-12" style={{ background: BRAND.white }}>
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <form onSubmit={handleSubmit} className="space-y-10">
            
            {/* Audience Selection */}
            <div>
              <label 
                className="block text-xl md:text-2xl font-normal mb-6"
                style={{ color: BRAND.slate }}
              >
                I'm reaching out as a...
              </label>
              <div className="grid sm:grid-cols-2 gap-3">
                {AUDIENCES.map((audience) => {
                  const isSelected = selectedAudience === audience.id;
                  const Icon = audience.icon;
                  return (
                    <button
                      key={audience.id}
                      type="button"
                      onClick={() => setSelectedAudience(audience.id)}
                      className="relative flex items-start gap-4 p-4 rounded-xl text-left transition-all duration-300"
                      style={{
                        background: isSelected ? `${audience.color}08` : BRAND.white,
                        border: `2px solid ${isSelected ? audience.color : BRAND.dove}`,
                        boxShadow: isSelected ? `0 4px 15px ${audience.color}15` : "none",
                        transform: isSelected ? "translateY(-2px)" : "translateY(0)",
                      }}
                    >
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300"
                        style={{
                          background: isSelected ? audience.color : BRAND.cloud,
                          color: isSelected ? BRAND.white : audience.color,
                        }}
                      >
                        <Icon />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div 
                          className="font-medium"
                          style={{ color: BRAND.slate }}
                        >
                          {audience.label}
                        </div>
                        <div 
                          className="text-sm mt-0.5"
                          style={{ color: BRAND.steel }}
                        >
                          {audience.description}
                        </div>
                      </div>
                      {isSelected && (
                        <div 
                          className="absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center"
                          style={{ background: audience.color }}
                        >
                          <CheckIcon color={BRAND.white} size={12} />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label 
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                    style={{ color: BRAND.slate }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Your name"
                    className="w-full rounded-xl px-4 py-3.5 text-base transition-all duration-200 focus:outline-none"
                    style={{
                      background: focusedField === "name" ? BRAND.white : BRAND.cloud,
                      border: `2px solid ${focusedField === "name" ? BRAND.indigo : BRAND.cloud}`,
                      color: BRAND.slate,
                    }}
                  />
                </div>
                <div>
                  <label 
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                    style={{ color: BRAND.slate }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="you@example.com"
                    className="w-full rounded-xl px-4 py-3.5 text-base transition-all duration-200 focus:outline-none"
                    style={{
                      background: focusedField === "email" ? BRAND.white : BRAND.cloud,
                      border: `2px solid ${focusedField === "email" ? BRAND.indigo : BRAND.cloud}`,
                      color: BRAND.slate,
                    }}
                  />
                </div>
              </div>

              <div>
                <label 
                  htmlFor="organisation"
                  className="block text-sm font-medium mb-2"
                  style={{ color: BRAND.slate }}
                >
                  Organisation <span style={{ color: BRAND.steel }}>(optional)</span>
                </label>
                <input
                  type="text"
                  id="organisation"
                  name="organisation"
                  value={formData.organisation}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("organisation")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="School, company, or institution"
                  className="w-full rounded-xl px-4 py-3.5 text-base transition-all duration-200 focus:outline-none"
                  style={{
                    background: focusedField === "organisation" ? BRAND.white : BRAND.cloud,
                    border: `2px solid ${focusedField === "organisation" ? BRAND.indigo : BRAND.cloud}`,
                    color: BRAND.slate,
                  }}
                />
              </div>

              <div>
                <label 
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                  style={{ color: BRAND.slate }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  rows={5}
                  placeholder="Tell us what you're looking for..."
                  className="w-full rounded-xl px-4 py-3.5 text-base transition-all duration-200 focus:outline-none resize-none"
                  style={{
                    background: focusedField === "message" ? BRAND.white : BRAND.cloud,
                    border: `2px solid ${focusedField === "message" ? BRAND.indigo : BRAND.cloud}`,
                    color: BRAND.slate,
                  }}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${BRAND.indigo} 0%, ${BRAND.indigoDark} 100%)`,
                  color: BRAND.white,
                  boxShadow: `0 6px 20px ${BRAND.indigo}30`,
                }}
              >
                Send message
              </button>
            </div>
          </form>

          {/* Alternative Contact */}
          <div 
            className="mt-14 pt-10"
            style={{ borderTop: `1px solid ${BRAND.dove}` }}
          >
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h3 
                  className="font-semibold mb-2"
                  style={{ color: BRAND.slate }}
                >
                  General enquiries
                </h3>
                <a 
                  href="mailto:hello@wadmore.com"
                  className="text-base font-medium hover:underline transition-colors"
                  style={{ color: BRAND.indigo }}
                >
                  hello@wadmore.com
                </a>
              </div>
              <div>
                <h3 
                  className="font-semibold mb-2"
                  style={{ color: BRAND.slate }}
                >
                  School partnerships
                </h3>
                <a 
                  href="mailto:schools@wadmore.com"
                  className="text-base font-medium hover:underline transition-colors"
                  style={{ color: BRAND.indigo }}
                >
                  schools@wadmore.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

/* ══════════════════════════════════════════════════════════════
   ICONS
   ══════════════════════════════════════════════════════════════ */

function CheckIcon({ color, size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill={color}>
      <path fillRule="evenodd" d="M13.707 4.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L7 9.586l5.293-5.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

function FamilyIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  );
}

function SchoolIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
    </svg>
  );
}

function ProfessionalIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
    </svg>
  );
}