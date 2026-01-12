// src/components/Navigation.jsx
// Wadmore Navigation - Brand Aligned (Coral-Free)
//
// Brand Palette:
// - Deep Indigo (#384275) - Primary anchor
// - Graphite Slate (#2C2D33) - Text
// - Cloud Mist (#F7F8FA) - Backgrounds
// - Dove Grey (#E4E7EB) - Borders, dividers
// - Steel Blue (#6C7A96) - Neutral accent (muted text, hover states)
// - Product accents: Teal, Cerulean, Violet

import { NavLink, Link, useLocation } from "react-router-dom";
import { useState } from "react";

/* ══════════════════════════════════════════════════════════════
   BRAND COLOURS
   ══════════════════════════════════════════════════════════════ */

const BRAND = {
  indigo: "#384275",
  slate: "#2C2D33",
  cloud: "#F7F8FA",
  dove: "#E4E7EB",
  steel: "#6C7A96",
  white: "#ffffff",
};

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHomepage = location.pathname === "/";

  // Use logo without tagline on homepage, with tagline on other pages
  const logoSrc = isHomepage ? "/assets/logo.png" : "/assets/logo-tagline.png";

  return (
    <div className="w-full max-w-full overflow-x-hidden">
      {/* Launch Announcement Banner */}
      <div 
        className="w-full py-2.5 px-4 text-center text-sm font-medium"
        style={{ 
          background: BRAND.indigo, 
          color: BRAND.white 
        }}
      >
        <span className="opacity-90">Wadmore launches</span>{" "}
        <strong>March 2026</strong>
        <span className="opacity-90"> · </span>
        <Link 
          to="/contact" 
          className="underline underline-offset-2 hover:opacity-80 transition-opacity"
          style={{ color: BRAND.white }}
        >
          Register for early access
        </Link>
      </div>
      
      <nav 
        className="sticky top-0 z-50 backdrop-blur-md"
        style={{ 
          background: "rgba(255, 255, 255, 0.92)",
          borderBottom: `1px solid ${BRAND.dove}`
        }}
      >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        
        {/* ═══════════════════════════════════════════════════════
            BRAND / LOGO
            ═══════════════════════════════════════════════════════ */}
        <Link to="/" className="flex items-center group">
          {/* Logo - icon + wordmark (with/without tagline based on page) */}
          <img 
            src={logoSrc} 
            alt="Wadmore - Thinking, Understood"
            className="h-20 w-auto transition-transform group-hover:scale-[1.02]"
          />
        </Link>

        {/* ═══════════════════════════════════════════════════════
            DESKTOP NAV
            ═══════════════════════════════════════════════════════ */}
        <div className="hidden items-center gap-1 md:flex">
          <NavItem to="/families">Families</NavItem>
          <NavItem to="/schools">Schools</NavItem>
          <NavItem to="/professional">Professional</NavItem>
          <NavItem to="/consulting">Consulting</NavItem>
          <NavItem to="/science">Science</NavItem>
          <NavItem to="/about">About</NavItem>
        </div>

        {/* ═══════════════════════════════════════════════════════
            DESKTOP CTA
            ═══════════════════════════════════════════════════════ */}
        <div className="hidden items-center gap-3 md:flex">
          <Link 
            to="/contact" 
            className="px-5 py-2.5 text-sm font-semibold rounded-full transition-all hover:scale-[1.02]"
            style={{ 
              background: BRAND.indigo, 
              color: BRAND.white,
              boxShadow: `0 2px 8px ${BRAND.indigo}30`
            }}
          >
            Register Interest
          </Link>
        </div>

        {/* ═══════════════════════════════════════════════════════
            MOBILE MENU TOGGLE
            ═══════════════════════════════════════════════════════ */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors"
          style={{ color: BRAND.slate }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* ═══════════════════════════════════════════════════════
          MOBILE MENU
          ═══════════════════════════════════════════════════════ */}
      {menuOpen && (
        <div 
          className="md:hidden"
          style={{ 
            background: BRAND.white,
            borderTop: `1px solid ${BRAND.dove}`,
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
          }}
        >
          <div className="flex flex-col px-4 py-4">
            <MobileNavItem to="/families" onClick={() => setMenuOpen(false)}>
              Families
            </MobileNavItem>
            <MobileNavItem to="/schools" onClick={() => setMenuOpen(false)}>
              Schools
            </MobileNavItem>
            <MobileNavItem to="/professional" onClick={() => setMenuOpen(false)}>
              Professional
            </MobileNavItem>
            <MobileNavItem to="/consulting" onClick={() => setMenuOpen(false)}>
              Consulting
            </MobileNavItem>
            <MobileNavItem to="/science" onClick={() => setMenuOpen(false)}>
              Science
            </MobileNavItem>
            <MobileNavItem to="/about" onClick={() => setMenuOpen(false)}>
              About
            </MobileNavItem>

            {/* Mobile CTAs */}
            <div 
              className="mt-4 pt-4 flex flex-col gap-3"
              style={{ borderTop: `1px solid ${BRAND.dove}` }}
            >
              <Link
                to="/contact"
                className="w-full py-3 text-sm font-semibold rounded-xl text-center transition-all"
                style={{ 
                  background: BRAND.indigo, 
                  color: BRAND.white 
                }}
                onClick={() => setMenuOpen(false)}
              >
                Register Interest
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   NAV ITEM COMPONENTS
   ══════════════════════════════════════════════════════════════ */

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `
        relative px-4 py-2 text-sm font-medium rounded-lg transition-colors
        ${isActive ? "font-semibold" : ""}
      `}
      style={({ isActive }) => ({
        color: isActive ? BRAND.indigo : BRAND.steel,
        background: isActive ? `${BRAND.indigo}08` : "transparent",
      })}
    >
      {({ isActive }) => (
        <>
          {children}
          {isActive && (
            <span 
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
              style={{ background: BRAND.indigo }}
            />
          )}
        </>
      )}
    </NavLink>
  );
}

function MobileNavItem({ to, onClick, children }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className="py-3 text-base font-medium transition-colors"
      style={({ isActive }) => ({
        color: isActive ? BRAND.indigo : BRAND.slate,
        borderLeft: isActive ? `3px solid ${BRAND.indigo}` : "3px solid transparent",
        paddingLeft: "12px",
      })}
    >
      {children}
    </NavLink>
  );
}