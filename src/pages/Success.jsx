// src/pages/Success.jsx
// Wadmore post-purchase confirmation page
// Simple, warm, directs to email for next steps

import { useEffect } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const BRAND = {
  indigo: "#384275",
  slate: "#2C2D33",
  cloud: "#F7F8FA",
  dove: "#E4E7EB",
  steel: "#6C7A96",
  teal: "#3CB7AC",
  white: "#ffffff",
  sage: "#A4D4AE",
};

export default function Success() {
  useEffect(() => {
    document.title = "You're in | Wadmore";
  }, []);

  return (
    <Layout>
      <section 
        className="min-h-[70vh] flex items-center justify-center py-28 md:py-36"
        style={{ background: BRAND.cloud }}
      >
        <div className="max-w-xl mx-auto px-6 md:px-8 text-center">
          {/* Success icon */}
          <div 
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8"
            style={{ background: `${BRAND.teal}15` }}
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={BRAND.teal} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <h1 
            className="text-4xl md:text-5xl font-semibold mb-4"
            style={{ color: BRAND.slate }}
          >
            You're in.
          </h1>

          <p 
            className="text-lg mb-8 leading-relaxed"
            style={{ color: BRAND.steel }}
          >
            We've sent everything you need to get started to your email. 
            Check your inbox for your Wadmore welcome email with a link to 
            create your account and begin your child's assessment.
          </p>

          <div 
            className="p-5 rounded-2xl mb-10"
            style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}` }}
          >
            <p className="text-sm" style={{ color: BRAND.steel }}>
              Didn't receive it? Check your spam folder, or contact{" "}
              <a 
                href="mailto:hello@wadmore.com.au" 
                className="underline"
                style={{ color: BRAND.teal }}
              >
                hello@wadmore.com.au
              </a>
            </p>
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
            style={{ color: BRAND.teal }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to Wadmore
          </Link>
        </div>
      </section>
    </Layout>
  );
}
