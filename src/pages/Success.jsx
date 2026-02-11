// src/pages/Success.jsx
// Post-purchase success page — drives immediate action
// Bridges marketing site → assessment platform onboarding

import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Layout from "../components/Layout";

/* ══════════════════════════════════════════════════════════════
   WADMORE BRAND COLOURS
   ══════════════════════════════════════════════════════════════ */

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

/* ══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════════════════════ */

export default function Success() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [purchaseInfo, setPurchaseInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Welcome to Wadmore";
  }, []);

  // Fetch purchase info to determine individual vs family
  useEffect(() => {
    const fetchPurchaseInfo = async () => {
      if (!sessionId) {
        setLoading(false);
        return;
      }

      try {
        const apiBase = import.meta.env.VITE_API_BASE_URL;
        if (apiBase) {
          const response = await fetch(`${apiBase}/api/stripe/session-info?session_id=${sessionId}`);
          if (response.ok) {
            const data = await response.json();
            setPurchaseInfo(data);
          }
        }
      } catch (error) {
        console.error("Failed to fetch purchase info:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPurchaseInfo();
  }, [sessionId]);

  // Determine content based on purchase type
  const isFamily = purchaseInfo?.product_type === "family";
  const tokenCount = purchaseInfo?.token_count || (isFamily ? 3 : 1);

  // Build onboard URL with session_id
  const assessmentPlatformUrl = import.meta.env.VITE_ASSESSMENT_PLATFORM_URL || "https://app.wadmore.com.au";
  const onboardUrl = sessionId 
    ? `${assessmentPlatformUrl}/onboard?session_id=${sessionId}`
    : assessmentPlatformUrl;

  return (
    <Layout>
      <div 
        className="min-h-[80vh] flex items-center justify-center py-20"
        style={{ background: BRAND.cloud }}
      >
        <div className="max-w-xl mx-auto px-6 text-center">
          
          {/* Success checkmark */}
          <div 
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8"
            style={{ background: `${BRAND.teal}15` }}
          >
            <svg 
              width="40" 
              height="40" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke={BRAND.teal}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          {/* Headline */}
          <h1 
            className="text-4xl md:text-5xl font-semibold mb-4"
            style={{ color: BRAND.slate }}
          >
            Welcome to Wadmore
          </h1>

          {/* Subheadline - varies by purchase type */}
          {loading ? (
            <p 
              className="text-xl mb-8"
              style={{ color: BRAND.steel }}
            >
              Loading your purchase details...
            </p>
          ) : isFamily ? (
            <p 
              className="text-xl mb-8"
              style={{ color: BRAND.steel }}
            >
              You have <strong style={{ color: BRAND.slate }}>{tokenCount} assessments</strong> ready to go.
              <br />
              Set up your family account and create a profile for each child.
            </p>
          ) : (
            <p 
              className="text-xl mb-8"
              style={{ color: BRAND.steel }}
            >
              Your assessment is ready. Let's set up your child's profile so they can get started.
            </p>
          )}

          {/* Primary CTA */}
          <a
            href={onboardUrl}
            className="inline-block px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-[1.02]"
            style={{ 
              background: BRAND.teal, 
              color: BRAND.white,
            }}
          >
            {isFamily ? "Set Up Your Family Account" : "Set Up Your Child's Profile"} →
          </a>

          {/* Divider */}
          <div 
            className="w-16 h-px mx-auto my-10"
            style={{ background: BRAND.dove }}
          />

          {/* Secondary note */}
          <div 
            className="rounded-2xl p-6 text-left"
            style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}` }}
          >
            <p 
              className="text-sm font-medium mb-2"
              style={{ color: BRAND.slate }}
            >
              Not ready right now?
            </p>
            <p 
              className="text-sm"
              style={{ color: BRAND.steel }}
            >
              No problem. We've sent a link to your email — start anytime. 
              Check your spam folder if you don't see it within a few minutes.
            </p>
          </div>

          {/* Help link */}
          <p 
            className="mt-8 text-sm"
            style={{ color: BRAND.steel }}
          >
            Questions?{" "}
            <a 
              href="mailto:hello@wadmore.com.au" 
              className="underline"
              style={{ color: BRAND.teal }}
            >
              hello@wadmore.com.au
            </a>
          </p>

          {/* Home link */}
          <Link
            to="/"
            className="inline-block mt-6 text-sm underline"
            style={{ color: BRAND.steel }}
          >
            Return to homepage
          </Link>

        </div>
      </div>
    </Layout>
  );
}