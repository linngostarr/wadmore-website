// src/components/Footer.jsx
// Wadmore Footer - Brand Aligned (Coral-Free)
//
// Brand Palette:
// - Deep Indigo (#384275) - Primary background
// - Graphite Slate (#2C2D33) - Dark variant
// - Cloud Mist (#F7F8FA) - Light text
// - Steel Blue (#6C7A96) - Muted elements
// - Product accents: Teal (#3CB7AC), Cerulean (#5B8BF7), Violet (#786CFF)

import { Link } from "react-router-dom";

/* ══════════════════════════════════════════════════════════════
   BRAND COLOURS
   ══════════════════════════════════════════════════════════════ */

const BRAND = {
  indigo: "#384275",
  indigoDark: "#2a3259",
  slate: "#2C2D33",
  cloud: "#F7F8FA",
  dove: "#E4E7EB",
  steel: "#6C7A96",
  white: "#ffffff",
  
  // Product accents
  teal: "#3CB7AC",
  cerulean: "#5B8BF7",
  violet: "#786CFF",
};

export default function Footer() {
  return (
    <footer style={{ background: BRAND.indigo }}>
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          
          {/* ═══════════════════════════════════════════════════════
              BRAND COLUMN
              ═══════════════════════════════════════════════════════ */}
          <div className="md:col-span-5 space-y-6">
            {/* Logo */}
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div 
                className="h-10 w-10 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.15)" }}
              >
                <svg 
                  viewBox="0 0 32 32" 
                  className="w-6 h-6"
                  fill="none"
                  stroke={BRAND.white}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="16" cy="8" r="4" fill={BRAND.white} opacity="0.9" />
                  <circle cx="9" cy="20" r="3" fill={BRAND.white} opacity="0.7" />
                  <circle cx="23" cy="20" r="3" fill={BRAND.white} opacity="0.7" />
                  <circle cx="16" cy="26" r="2.5" fill={BRAND.white} opacity="0.5" />
                  <line x1="16" y1="12" x2="10" y2="17" opacity="0.6" />
                  <line x1="16" y1="12" x2="22" y2="17" opacity="0.6" />
                  <line x1="9" y1="23" x2="14" y2="25" opacity="0.4" />
                  <line x1="23" y1="23" x2="18" y2="25" opacity="0.4" />
                </svg>
              </div>
              <div>
                <div className="text-xl font-semibold text-white">
                  Wadmore
                </div>
                <div 
                  className="text-[10px] font-medium tracking-[0.12em] uppercase"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  Thinking, Understood
                </div>
              </div>
            </Link>
            
            <p 
              className="text-base leading-relaxed max-w-sm"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              Cognitive profiling designed to bring clarity, fairness, and insight
              to the way we understand human thinking.
            </p>
            
            {/* Social links placeholder */}
            <div className="flex gap-3 pt-2">
              <SocialLink href="https://linkedin.com" label="LinkedIn">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </SocialLink>
              <SocialLink href="https://twitter.com" label="Twitter">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </SocialLink>
            </div>
          </div>
          
          {/* ═══════════════════════════════════════════════════════
              PLATFORMS
              ═══════════════════════════════════════════════════════ */}
          <div className="md:col-span-2">
            <h4 
              className="text-xs font-semibold uppercase tracking-wider mb-5"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Platforms
            </h4>
            <ul className="space-y-3">
              <FooterLink to="/schools" color={BRAND.cerulean}>
                Schools
              </FooterLink>
              <FooterLink to="/families" color={BRAND.teal}>
                Families
              </FooterLink>
              <FooterLink to="/professional" color={BRAND.violet}>
                Professional
              </FooterLink>
            </ul>
          </div>
          
          {/* ═══════════════════════════════════════════════════════
              LEARN MORE
              ═══════════════════════════════════════════════════════ */}
          <div className="md:col-span-2">
            <h4 
              className="text-xs font-semibold uppercase tracking-wider mb-5"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Learn More
            </h4>
            <ul className="space-y-3">
              <FooterLink to="/science">Science</FooterLink>
              <FooterLink to="/about">About</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
              <FooterLink to="/faq">FAQ</FooterLink>
            </ul>
          </div>
          
          {/* ═══════════════════════════════════════════════════════
              CONTACT
              ═══════════════════════════════════════════════════════ */}
          <div className="md:col-span-3">
            <h4 
              className="text-xs font-semibold uppercase tracking-wider mb-5"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li 
                className="text-sm"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                Adelaide, South Australia
              </li>
              <li>
                <a 
                  href="mailto:hello@wadmore.com" 
                  className="text-sm transition-colors"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                  onMouseEnter={(e) => e.target.style.color = BRAND.white}
                  onMouseLeave={(e) => e.target.style.color = "rgba(255,255,255,0.7)"}
                >
                  hello@wadmore.com
                </a>
              </li>
            </ul>
            
            {/* Newsletter signup teaser */}
            <div 
              className="mt-6 p-4 rounded-xl"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              <p 
                className="text-sm font-medium mb-3"
                style={{ color: "rgba(255,255,255,0.9)" }}
              >
                Stay updated
              </p>
              <p 
                className="text-xs mb-4"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                News about cognitive science and Wadmore developments.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                style={{ color: BRAND.teal }}
              >
                Subscribe
                <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8.707 3.293a1 1 0 00-1.414 1.414L9.586 7H3a1 1 0 100 2h6.586l-2.293 2.293a1 1 0 101.414 1.414l4-4a1 1 0 000-1.414l-4-4z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          BOTTOM BAR
          ═══════════════════════════════════════════════════════ */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span 
            className="text-sm"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            © {new Date().getFullYear()} Wadmore. All rights reserved.
          </span>
          
          <div className="flex items-center gap-6">
            <Link 
              to="/privacy"
              className="text-sm transition-colors"
              style={{ color: "rgba(255,255,255,0.5)" }}
              onMouseEnter={(e) => e.target.style.color = "rgba(255,255,255,0.8)"}
              onMouseLeave={(e) => e.target.style.color = "rgba(255,255,255,0.5)"}
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms"
              className="text-sm transition-colors"
              style={{ color: "rgba(255,255,255,0.5)" }}
              onMouseEnter={(e) => e.target.style.color = "rgba(255,255,255,0.8)"}
              onMouseLeave={(e) => e.target.style.color = "rgba(255,255,255,0.5)"}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ══════════════════════════════════════════════════════════════
   HELPER COMPONENTS
   ══════════════════════════════════════════════════════════════ */

function FooterLink({ to, color, children }) {
  const defaultColor = "rgba(255,255,255,0.7)";
  const hoverColor = color || "#ffffff";
  
  return (
    <li>
      <Link 
        to={to}
        className="text-sm transition-colors inline-flex items-center gap-2"
        style={{ color: defaultColor }}
        onMouseEnter={(e) => e.target.style.color = hoverColor}
        onMouseLeave={(e) => e.target.style.color = defaultColor}
      >
        {color && (
          <span 
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: color }}
          />
        )}
        {children}
      </Link>
    </li>
  );
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-xl flex items-center justify-center transition-all"
      style={{ 
        background: "rgba(255,255,255,0.1)",
        color: "rgba(255,255,255,0.7)"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.2)";
        e.currentTarget.style.color = "#ffffff";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.1)";
        e.currentTarget.style.color = "rgba(255,255,255,0.7)";
      }}
    >
      {children}
    </a>
  );
}
