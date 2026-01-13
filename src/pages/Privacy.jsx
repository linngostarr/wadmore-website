// src/pages/Privacy.jsx
// Wadmore Privacy Policy

import Layout from "../components/Layout";

const BRAND = {
  indigo: "#384275",
  slate: "#2C2D33",
  cloud: "#F7F8FA",
  dove: "#E4E7EB",
  steel: "#6C7A96",
  white: "#ffffff",
};

export default function Privacy() {
  return (
    <Layout>
      <div className="min-h-screen" style={{ background: BRAND.cloud }}>
        <div className="max-w-4xl mx-auto px-6 md:px-8 py-16 md:py-24">
          {/* Header */}
          <div className="mb-12">
            <h1 
              className="text-4xl md:text-5xl font-semibold mb-4"
              style={{ color: BRAND.slate }}
            >
              Privacy Policy
            </h1>
            <p style={{ color: BRAND.steel }}>
              Last updated: January 2026
            </p>
          </div>

          {/* Content */}
          <div 
            className="rounded-2xl p-8 md:p-12"
            style={{ background: BRAND.white, border: `1px solid ${BRAND.dove}` }}
          >
            <div className="prose prose-slate max-w-none" style={{ color: BRAND.slate }}>
              
              <Section title="1. Introduction">
                <p>
                  Wadmore Pty Ltd ("Wadmore", "we", "us", or "our") is committed to protecting 
                  the privacy of all individuals who use our cognitive profiling platform. This 
                  Privacy Policy explains how we collect, use, store, and protect your personal 
                  information in accordance with the Australian Privacy Principles (APPs) under 
                  the Privacy Act 1988 (Cth).
                </p>
                <p>
                  Our platform provides cognitive development assessments for schools, families, 
                  and professional organisations. We understand the sensitive nature of cognitive 
                  assessment data and take our privacy obligations seriously.
                </p>
              </Section>

              <Section title="2. Information We Collect">
                <h4 style={{ color: BRAND.indigo }}>Account Information</h4>
                <ul>
                  <li>Name and contact details (email address, phone number)</li>
                  <li>Organisation details (for schools and professional users)</li>
                  <li>Billing information (processed securely via third-party payment providers)</li>
                  <li>Account credentials</li>
                </ul>

                <h4 style={{ color: BRAND.indigo }}>Assessment Data</h4>
                <ul>
                  <li>Responses to cognitive assessment items</li>
                  <li>Assessment completion times and patterns</li>
                  <li>Cognitive profile results across our eight domains</li>
                  <li>Developmental band placements</li>
                </ul>

                <h4 style={{ color: BRAND.indigo }}>Child and Student Information</h4>
                <p>
                  For users under 18 years of age, assessments are facilitated by parents/guardians 
                  or authorised school administrators.
                </p>
                <p><strong>Family accounts</strong> — we collect:</p>
                <ul>
                  <li>First name and surname</li>
                  <li>Date of birth</li>
                  <li>Age or year level</li>
                  <li>Assessment responses and results</li>
                </ul>
                <p><strong>School accounts</strong> — we may collect:</p>
                <ul>
                  <li>First name and surname</li>
                  <li>Date of birth</li>
                  <li>Age and year level</li>
                  <li>Student ID (as provided by the school)</li>
                  <li>Class or group information</li>
                  <li>Assessment responses and results</li>
                </ul>

                <h4 style={{ color: BRAND.indigo }}>Technical Information</h4>
                <ul>
                  <li>Device type and browser information</li>
                  <li>IP address and general location</li>
                  <li>Usage patterns and platform interactions</li>
                </ul>
              </Section>

              <Section title="3. How We Use Your Information">
                <p>We use collected information to:</p>
                <ul>
                  <li>Deliver cognitive assessments and generate developmental profiles</li>
                  <li>Provide personalised recommendations and growth strategies</li>
                  <li>Enable schools to support student learning and development</li>
                  <li>Improve our assessment validity and platform functionality</li>
                  <li>Communicate with you about your account and our services</li>
                  <li>Comply with legal obligations</li>
                </ul>
                <p>
                  We do not sell personal information to third parties. We do not use cognitive 
                  assessment data for advertising purposes.
                </p>
              </Section>

              <Section title="4. Data Storage and Security">
                <p>
                  All data is stored on secure servers located in <strong>Melbourne, Australia</strong>. 
                  We implement industry-standard security measures including:
                </p>
                <ul>
                  <li>Encryption of data in transit (TLS 1.3) and at rest (AES-256)</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Access controls and authentication requirements</li>
                  <li>Regular backups with secure off-site storage</li>
                  <li>Staff training on data protection practices</li>
                </ul>
              </Section>

              <Section title="5. Children's Privacy">
                <p>
                  Wadmore assessments are available for individuals aged 6 years and older. 
                  For all users under 18 years of age:
                </p>
                <ul>
                  <li>Parental or guardian consent is required for family accounts</li>
                  <li>School assessments are conducted under the authority of educational institutions</li>
                  <li>We collect only information necessary for assessment purposes</li>
                  <li>Children cannot create accounts independently</li>
                  <li>Parents/guardians can request access to or deletion of their child's data</li>
                </ul>
                <p>
                  We are committed to compliance with the Children's Online Privacy Protection 
                  principles and relevant Australian guidelines for handling children's information.
                </p>
              </Section>

              <Section title="6. Sharing of Information">
                <p>We may share information with:</p>
                <ul>
                  <li>
                    <strong>Schools and organisations:</strong> Assessment results for students/employees 
                    assessed under institutional accounts
                  </li>
                  <li>
                    <strong>Service providers:</strong> Trusted partners who assist with platform 
                    operations (hosting, payment processing, analytics) under strict confidentiality agreements
                  </li>
                  <li>
                    <strong>Legal requirements:</strong> When required by law, court order, or to 
                    protect rights and safety
                  </li>
                </ul>
                <p>
                  We may use de-identified, aggregated data for research and platform improvement. 
                  This data cannot be used to identify individuals.
                </p>
              </Section>

              <Section title="7. Your Rights">
                <p>Under Australian privacy law, you have the right to:</p>
                <ul>
                  <li>Access your personal information held by us</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your data (subject to legal retention requirements)</li>
                  <li>Withdraw consent for optional data processing</li>
                  <li>Lodge a complaint about our handling of your information</li>
                </ul>
                <p>
                  To exercise these rights, contact us at{" "}
                  <a href="mailto:privacy@wadmore.com.au" style={{ color: BRAND.indigo }}>
                    privacy@wadmore.com.au
                  </a>
                </p>
              </Section>

              <Section title="8. Data Retention">
                <p>We retain personal information for as long as necessary to:</p>
                <ul>
                  <li>Provide our services and maintain your account</li>
                  <li>Enable longitudinal tracking of cognitive development (where requested)</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Resolve disputes and enforce agreements</li>
                </ul>
                <p>
                  Assessment data for closed accounts is retained in de-identified form for 
                  research purposes, or deleted upon request.
                </p>
              </Section>

              <Section title="9. Cookies and Analytics">
                <p>
                  We use essential cookies to ensure platform functionality and analytics 
                  tools to understand usage patterns. We use:
                </p>
                <ul>
                  <li>Session cookies (essential for platform operation)</li>
                  <li>Vercel Analytics (privacy-focused, no personal data tracking)</li>
                </ul>
                <p>
                  We do not use advertising cookies or share browsing data with advertisers.
                </p>
              </Section>

              <Section title="10. Changes to This Policy">
                <p>
                  We may update this Privacy Policy from time to time. We will notify users 
                  of significant changes via email or platform notification. Continued use 
                  of Wadmore after changes constitutes acceptance of the updated policy.
                </p>
              </Section>

              <Section title="11. Contact Us">
                <p>
                  For privacy-related inquiries, concerns, or complaints:
                </p>
                <p>
                  <strong>Privacy Officer</strong><br />
                  Wadmore Pty Ltd<br />
                  Email:{" "}
                  <a href="mailto:privacy@wadmore.com.au" style={{ color: BRAND.indigo }}>
                    privacy@wadmore.com.au
                  </a>
                </p>
                <p>
                  If you are not satisfied with our response, you may lodge a complaint with 
                  the{" "}
                  <a 
                    href="https://www.oaic.gov.au" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: BRAND.indigo }}
                  >
                    Office of the Australian Information Commissioner (OAIC)
                  </a>.
                </p>
              </Section>

            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-8">
      <h3 
        className="text-xl font-semibold mb-4"
        style={{ color: "#384275" }}
      >
        {title}
      </h3>
      <div className="space-y-3 text-base leading-relaxed" style={{ color: "#2C2D33" }}>
        {children}
      </div>
    </div>
  );
}