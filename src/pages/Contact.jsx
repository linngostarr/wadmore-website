// src/pages/Contact.jsx
// Contact page with audience selection for Wadmore
// Uses Layout component, consistent BRAND colors, no external animation dependencies

import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import SEO, { PAGE_SEO } from '../components/SEO';
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
    id: "schools",
    label: "Wadmore Schools",
    description: "Classroom assessment and teacher insights",
    icon: SchoolIcon,
    color: BRAND.cerulean,
  },
  {
    id: "families",
    label: "Wadmore Families",
    description: "Cognitive profiles for individuals and families",
    icon: FamilyIcon,
    color: BRAND.teal,
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
    color: BRAND.steel,
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
    marketingOptIn: true,
  });
  const [focusedField, setFocusedField] = useState(null);
  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          audience: selectedAudience, 
          ...formData 
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", organisation: "", message: "", marketingOptIn: false });
        setSelectedAudience(null);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submit error:", error);
      setStatus("error");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status === "error") setStatus("idle");
  };

  const selectedColor = selectedAudience 
    ? AUDIENCES.find(a => a.id === selectedAudience)?.color 
    : BRAND.indigo;

  // Scroll to top when success
  useEffect(() => {
    if (status === "success") {
      window.scrollTo(0, 0);
    }
  }, [status]);

  // Success state
  if (status === "success") {
    return (
      <Layout>
              <SEO {...PAGE_SEO.contact} />
        <div className="w-full max-w-full overflow-x-hidden">
          <section className="min-h-[60vh] flex items-center justify-center" style={{ background: BRAND.cloud }}>
            <div className="max-w-md mx-auto px-5 text-center py-20">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: `${BRAND.teal}15` }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={BRAND.teal} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h1 
                className="text-2xl md:text-3xl font-semibold mb-3"
                style={{ color: BRAND.slate }}
              >
                Message sent
              </h1>
              <p className="mb-8" style={{ color: BRAND.steel }}>
                Thanks for reaching out. We'll get back to you within 1-2 business days.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-[1.02]"
                style={{ background: BRAND.indigo, color: BRAND.white }}
              >
                Send another message
              </button>
            </div>
          </section>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="w-full max-w-full overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative overflow-hidden" style={{ background: BRAND.cloud }}>
          <div 
            className="absolute top-0 right-[20%] w-[30vw] max-w-[400px] aspect-square pointer-events-none opacity-20"
            style={{ background: `radial-gradient(circle at center, ${BRAND.indigo}15, transparent 60%)` }}
          />
          
          <div className="max-w-4xl mx-auto px-5 md:px-8 py-12 md:py-16 text-center relative z-10">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}`, color: BRAND.slate }}
            >
              <span className="w-2 h-2 rounded-full" style={{ background: BRAND.indigo }} />
              Get in touch
            </div>
            
            <h1 
              className="font-semibold tracking-tight mb-4"
              style={{ 
                color: BRAND.slate,
                fontSize: "clamp(2rem, 4vw + 1rem, 3rem)"
              }}
            >
              How can we{" "}
              <span className="relative inline-block pb-4">
                <span style={{ color: BRAND.indigo }}>help?</span>
                <svg className="absolute left-0 bottom-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                  <path d="M0 6 Q25 1, 50 4 T100 3" fill="none" stroke={BRAND.indigo} strokeWidth="2.5" strokeLinecap="round" opacity="0.3" />
                </svg>
              </span>
            </h1>
            <p 
              className="max-w-2xl mx-auto"
              style={{ 
                color: BRAND.steel,
                fontSize: "clamp(1.05rem, 1vw + 0.5rem, 1.25rem)"
              }}
            >
              Tell us what you're exploring and we'll point you in the right direction.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-10 md:py-16" style={{ background: BRAND.white }}>
          <div className="max-w-3xl mx-auto px-5 md:px-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Audience Selection */}
              <div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {AUDIENCES.map((audience) => {
                    const isSelected = selectedAudience === audience.id;
                    const Icon = audience.icon;
                    return (
                      <button
                        key={audience.id}
                        type="button"
                        onClick={() => setSelectedAudience(audience.id)}
                        className="relative flex flex-col items-center gap-3 p-4 md:p-5 rounded-xl text-center transition-all duration-300"
                        style={{
                          background: isSelected ? `${audience.color}08` : BRAND.cloud,
                          border: `2px solid ${isSelected ? audience.color : BRAND.dove}`,
                          boxShadow: isSelected ? `0 4px 15px ${audience.color}15` : "none",
                          transform: isSelected ? "translateY(-2px)" : "translateY(0)",
                        }}
                      >
                        <div
                          className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-all duration-300"
                          style={{
                            background: isSelected ? audience.color : BRAND.white,
                            color: isSelected ? BRAND.white : audience.color,
                          }}
                        >
                          <Icon />
                        </div>
                        <div className="min-w-0">
                          <div 
                            className="font-semibold text-sm md:text-base"
                            style={{ color: BRAND.slate }}
                          >
                            {audience.label.replace("Wadmore ", "")}
                          </div>
                          <div 
                            className="text-xs mt-1 hidden md:block"
                            style={{ color: BRAND.steel }}
                          >
                            {audience.description}
                          </div>
                        </div>
                        {isSelected && (
                          <div 
                            className="absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center"
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
                        border: `2px solid ${focusedField === "name" ? selectedColor : BRAND.cloud}`,
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
                        border: `2px solid ${focusedField === "email" ? selectedColor : BRAND.cloud}`,
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
                      border: `2px solid ${focusedField === "organisation" ? selectedColor : BRAND.cloud}`,
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
                      border: `2px solid ${focusedField === "message" ? selectedColor : BRAND.cloud}`,
                      color: BRAND.slate,
                    }}
                  />
                </div>

                {/* Marketing opt-in */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="marketingOptIn"
                    name="marketingOptIn"
                    checked={formData.marketingOptIn}
                    onChange={(e) => setFormData(prev => ({ ...prev, marketingOptIn: e.target.checked }))}
                    className="mt-1 w-5 h-5 rounded cursor-pointer"
                    style={{ accentColor: selectedColor }}
                  />
                  <label 
                    htmlFor="marketingOptIn"
                    className="text-sm cursor-pointer leading-relaxed"
                    style={{ color: BRAND.steel }}
                  >
                    Keep me updated on Wadmore news, product launches, and cognitive science insights.
                  </label>
                </div>
              </div>

              {/* Error Message */}
              {status === "error" && (
                <div 
                  className="p-4 rounded-xl flex items-center gap-3"
                  style={{ background: "#FEE2E2", border: "1px solid #FECACA" }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  <span style={{ color: "#DC2626" }}>
                    Something went wrong. Please try again or email us directly.
                  </span>
                </div>
              )}

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                  style={{
                    background: `linear-gradient(135deg, ${selectedColor} 0%, ${selectedColor}dd 100%)`,
                    color: BRAND.white,
                    boxShadow: `0 6px 20px ${selectedColor}30`,
                  }}
                >
                  {status === "sending" ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                        <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send message"
                  )}
                </button>
              </div>
            </form>

            {/* Alternative Contact */}
            <div 
              className="mt-12 pt-10"
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
                    href="mailto:hello@wadmore.com.au"
                    className="text-base font-medium hover:underline transition-colors"
                    style={{ color: BRAND.indigo }}
                  >
                    hello@wadmore.com.au
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
                    href="mailto:schools@wadmore.com.au"
                    className="text-base font-medium hover:underline transition-colors"
                    style={{ color: BRAND.indigo }}
                  >
                    schools@wadmore.com.au
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
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
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  );
}

function SchoolIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
    </svg>
  );
}

function ProfessionalIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
    </svg>
  );
}