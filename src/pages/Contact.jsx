// src/pages/Contact.jsx
// Contact page with audience selection for Wadmore

import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

/* ══════════════════════════════════════════════════════════════
   BRAND COLORS
   ══════════════════════════════════════════════════════════════ */

const BRAND = {
  slate: "#1e293b",
  steel: "#475569",
  dove: "#64748b",
  silver: "#94a3b8",
  cloud: "#F7F8FA",
  white: "#FFFFFF",
  indigo: "#4338CA",
  indigoLight: "#E0E7FF",
  teal: "#0D9488",
  tealLight: "#CCFBF1",
  violet: "#7C3AED",
  violetLight: "#EDE9FE",
  amber: "#F59E0B",
  amberLight: "#FEF3C7",
};

/* ══════════════════════════════════════════════════════════════
   AUDIENCE OPTIONS
   ══════════════════════════════════════════════════════════════ */

const AUDIENCES = [
  {
    id: "families",
    label: "Wadmore Families",
    description: "Cognitive profiles for individuals and families",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    color: BRAND.teal,
    bgColor: BRAND.tealLight,
  },
  {
    id: "schools",
    label: "Wadmore Schools",
    description: "Classroom assessment and teacher insights",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
      </svg>
    ),
    color: BRAND.indigo,
    bgColor: BRAND.indigoLight,
  },
  {
    id: "professional",
    label: "Wadmore Professional",
    description: "Team dynamics and leadership development",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    color: BRAND.violet,
    bgColor: BRAND.violetLight,
  },
  {
    id: "other",
    label: "Something else",
    description: "Partnerships, research, or general enquiries",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    color: BRAND.amber,
    bgColor: BRAND.amberLight,
  },
];

/* ══════════════════════════════════════════════════════════════
   ANIMATION VARIANTS
   ══════════════════════════════════════════════════════════════ */

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ audience: selectedAudience, ...formData });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ background: BRAND.white }}>
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="pt-8 pb-8 md:pt-12 md:pb-12"
        style={{ background: BRAND.cloud }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-4xl md:text-5xl font-semibold tracking-tight mb-4"
            style={{ color: BRAND.slate }}
          >
            How can we help?
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: 0.1, duration: 0.5 } } }}
            className="text-xl md:text-2xl max-w-2xl mx-auto"
            style={{ color: BRAND.steel }}
          >
            Tell us what you're exploring and we'll point you in the right direction.
          </motion.p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-4 md:py-8">
        <div className="max-w-3xl mx-auto px-6">
          <form onSubmit={handleSubmit} className="space-y-10">
            
            {/* Audience Selection */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <label 
                className="block text-xl md:text-2xl font-normal mb-6"
                style={{ color: BRAND.slate }}
              >
                I'm reaching out as a...
              </label>
              <div className="grid sm:grid-cols-2 gap-3">
                {AUDIENCES.map((audience) => {
                  const isSelected = selectedAudience === audience.id;
                  return (
                    <motion.button
                      key={audience.id}
                      type="button"
                      variants={fadeUp}
                      onClick={() => setSelectedAudience(audience.id)}
                      className="relative flex items-start gap-4 p-4 rounded-xl text-left transition-all"
                      style={{
                        background: isSelected ? audience.bgColor : BRAND.white,
                        border: `2px solid ${isSelected ? audience.color : BRAND.cloud}`,
                        boxShadow: isSelected ? `0 0 0 1px ${audience.color}20` : "none",
                      }}
                    >
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{
                          background: isSelected ? audience.color : BRAND.cloud,
                          color: isSelected ? BRAND.white : audience.color,
                        }}
                      >
                        {audience.icon}
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
                          style={{ color: BRAND.dove }}
                        >
                          {audience.description}
                        </div>
                      </div>
                      {isSelected && (
                        <div 
                          className="absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center"
                          style={{ background: audience.color }}
                        >
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </div>
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>

            {/* Contact Details */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: 0.3 } } }}
              className="space-y-5"
            >
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
                    placeholder="Your name"
                    className="w-full rounded-xl px-4 py-3.5 text-base transition-all focus:outline-none focus:ring-2"
                    style={{
                      background: BRAND.cloud,
                      border: `1px solid ${BRAND.cloud}`,
                      color: BRAND.slate,
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = BRAND.indigo;
                      e.target.style.background = BRAND.white;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = BRAND.cloud;
                      e.target.style.background = BRAND.cloud;
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
                    placeholder="you@example.com"
                    className="w-full rounded-xl px-4 py-3.5 text-base transition-all focus:outline-none focus:ring-2"
                    style={{
                      background: BRAND.cloud,
                      border: `1px solid ${BRAND.cloud}`,
                      color: BRAND.slate,
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = BRAND.indigo;
                      e.target.style.background = BRAND.white;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = BRAND.cloud;
                      e.target.style.background = BRAND.cloud;
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
                  Organisation <span style={{ color: BRAND.silver }}>(optional)</span>
                </label>
                <input
                  type="text"
                  id="organisation"
                  name="organisation"
                  value={formData.organisation}
                  onChange={handleChange}
                  placeholder="School, company, or institution"
                  className="w-full rounded-xl px-4 py-3.5 text-base transition-all focus:outline-none focus:ring-2"
                  style={{
                    background: BRAND.cloud,
                    border: `1px solid ${BRAND.cloud}`,
                    color: BRAND.slate,
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = BRAND.indigo;
                    e.target.style.background = BRAND.white;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = BRAND.cloud;
                    e.target.style.background = BRAND.cloud;
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
                  rows={5}
                  placeholder="Tell us what you're looking for..."
                  className="w-full rounded-xl px-4 py-3.5 text-base transition-all focus:outline-none focus:ring-2 resize-none"
                  style={{
                    background: BRAND.cloud,
                    border: `1px solid ${BRAND.cloud}`,
                    color: BRAND.slate,
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = BRAND.indigo;
                    e.target.style.background = BRAND.white;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = BRAND.cloud;
                    e.target.style.background = BRAND.cloud;
                  }}
                />
              </div>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: 0.4 } } }}
            >
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: BRAND.indigo,
                  color: BRAND.white,
                }}
              >
                Send message
              </button>
            </motion.div>
          </form>

          {/* Alternative Contact */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: 0.5 } } }}
            className="mt-16 pt-10"
            style={{ borderTop: `1px solid ${BRAND.cloud}` }}
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
                  className="text-base hover:underline"
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
                  className="text-base hover:underline"
                  style={{ color: BRAND.indigo }}
                >
                  schools@wadmore.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
