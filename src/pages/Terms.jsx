// src/pages/Terms.jsx
// Wadmore Terms of Service

import Layout from "../components/Layout";

const BRAND = {
  indigo: "#384275",
  slate: "#2C2D33",
  cloud: "#F7F8FA",
  dove: "#E4E7EB",
  steel: "#6C7A96",
  white: "#ffffff",
};

export default function Terms() {
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
              Terms of Service
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
              
              <Section title="1. Agreement to Terms">
                <p>
                  These Terms of Service ("Terms") govern your access to and use of the Wadmore 
                  cognitive profiling platform ("Platform") operated by Wadmore Pty Ltd (ABN pending) 
                  ("Wadmore", "we", "us", or "our").
                </p>
                <p>
                  By accessing or using the Platform, you agree to be bound by these Terms. If you 
                  are using the Platform on behalf of an organisation (such as a school or employer), 
                  you represent that you have authority to bind that organisation to these Terms.
                </p>
              </Section>

              <Section title="2. Description of Services">
                <p>
                  Wadmore provides cognitive development profiling services across three platforms:
                </p>
                <ul>
                  <li><strong>Wadmore Schools:</strong> Cognitive assessment and reporting for educational institutions</li>
                  <li><strong>Wadmore Families:</strong> Individual and family cognitive profiling</li>
                  <li><strong>Wadmore Professional:</strong> Team and organisational cognitive insights</li>
                </ul>
                <p>
                  Our assessments measure cognitive development across eight domains and fifteen 
                  developmental bands. Results are intended to support growth and development, 
                  not to diagnose conditions or determine eligibility for services.
                </p>
              </Section>

              <Section title="3. Account Registration">
                <p>To use Wadmore, you must:</p>
                <ul>
                  <li>Provide accurate and complete registration information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Be at least 18 years old (or have parental/guardian consent)</li>
                  <li>Notify us immediately of any unauthorised account access</li>
                </ul>
                <p>
                  For school and organisational accounts, the designated administrator is 
                  responsible for managing user access and ensuring appropriate use within 
                  their organisation.
                </p>
              </Section>

              <Section title="4. Assessment of Minors">
                <p>
                  Wadmore assessments are available for individuals aged 6 years and older. 
                  For users under 18 years of age:
                </p>
                <ul>
                  <li>
                    <strong>Family accounts:</strong> A parent or legal guardian must create the 
                    account and provide consent for their child's assessment
                  </li>
                  <li>
                    <strong>School accounts:</strong> Schools are responsible for obtaining 
                    appropriate consent in accordance with their policies and applicable law
                  </li>
                </ul>
                <p>
                  By facilitating a child's assessment, you confirm you have the legal authority 
                  to consent on their behalf.
                </p>
              </Section>

              <Section title="5. Acceptable Use">
                <p>You agree not to:</p>
                <ul>
                  <li>Share account credentials or allow unauthorised access</li>
                  <li>Attempt to manipulate assessment results or game the system</li>
                  <li>Use the Platform for any unlawful purpose</li>
                  <li>Reverse engineer, copy, or create derivative works from our assessments</li>
                  <li>Use assessment items or content outside the Platform</li>
                  <li>Misrepresent Wadmore results or use them for purposes they are not designed for</li>
                  <li>Access the Platform through automated means (bots, scrapers) without permission</li>
                </ul>
              </Section>

              <Section title="6. Intellectual Property">
                <p>
                  All content on the Platform—including assessment items, scoring algorithms, 
                  reports, branding, and documentation—is the intellectual property of Wadmore 
                  Pty Ltd and is protected by copyright, trademark, and other laws.
                </p>
                <p>
                  You may not reproduce, distribute, modify, or create derivative works from 
                  any Wadmore content without our express written permission. Assessment items 
                  are confidential and must not be shared, photographed, or reproduced.
                </p>
                <p>
                  You retain ownership of any personal data you provide. By using the Platform, 
                  you grant us a licence to use this data to provide our services as described 
                  in our Privacy Policy.
                </p>
              </Section>

              <Section title="7. Payment and Subscriptions">
                <p>
                  <strong>Pricing:</strong> Current pricing is displayed on the Platform and may 
                  vary by product (Schools, Families, Professional). All prices are in Australian 
                  Dollars (AUD) unless otherwise stated.
                </p>
                <p>
                  <strong>Payment:</strong> Payments are processed securely through our payment 
                  provider. By making a purchase, you authorise us to charge the payment method provided.
                </p>
                <p>
                  <strong>Refunds:</strong> Due to the nature of digital assessment services:
                </p>
                <ul>
                  <li>Unused assessments may be refunded within 30 days of purchase</li>
                  <li>Completed assessments are non-refundable</li>
                  <li>Subscription cancellations take effect at the end of the current billing period</li>
                </ul>
                <p>
                  For refund requests or billing inquiries, contact{" "}
                  <a href="mailto:hello@wadmore.com.au" style={{ color: BRAND.indigo }}>
                    hello@wadmore.com.au
                  </a>
                </p>
              </Section>

              <Section title="8. Limitation of Services">
                <p>
                  <strong>Wadmore assessments are developmental profiling tools, not diagnostic instruments.</strong>
                </p>
                <p>Our assessments:</p>
                <ul>
                  <li>Describe cognitive development across defined domains and bands</li>
                  <li>Provide strength-based profiles to support growth</li>
                  <li>Offer recommendations tailored to developmental levels</li>
                </ul>
                <p>Our assessments do NOT:</p>
                <ul>
                  <li>Diagnose learning disabilities, giftedness, or clinical conditions</li>
                  <li>Replace professional psychological or educational assessment</li>
                  <li>Determine eligibility for special education services or accommodations</li>
                  <li>Provide medical, therapeutic, or clinical advice</li>
                </ul>
                <p>
                  If you have concerns about learning, development, or mental health, please 
                  consult a qualified professional.
                </p>
              </Section>

              <Section title="9. Disclaimer of Warranties">
                <p>
                  The Platform is provided "as is" and "as available" without warranties of any 
                  kind, either express or implied, including but not limited to implied warranties 
                  of merchantability, fitness for a particular purpose, or non-infringement.
                </p>
                <p>
                  While we strive for accuracy and reliability, we do not warrant that:
                </p>
                <ul>
                  <li>The Platform will be uninterrupted, timely, secure, or error-free</li>
                  <li>Results will meet your specific expectations or requirements</li>
                  <li>Any errors in the Platform will be corrected</li>
                </ul>
              </Section>

              <Section title="10. Limitation of Liability">
                <p>
                  To the maximum extent permitted by Australian law, Wadmore Pty Ltd shall not 
                  be liable for any indirect, incidental, special, consequential, or punitive 
                  damages, including but not limited to loss of profits, data, or goodwill, 
                  arising from your use of the Platform.
                </p>
                <p>
                  Our total liability for any claim arising from these Terms or your use of the 
                  Platform shall not exceed the amount you paid to Wadmore in the twelve (12) 
                  months preceding the claim.
                </p>
                <p>
                  Nothing in these Terms excludes or limits liability that cannot be excluded 
                  under Australian Consumer Law.
                </p>
              </Section>

              <Section title="11. Indemnification">
                <p>
                  You agree to indemnify and hold harmless Wadmore Pty Ltd, its directors, 
                  employees, and agents from any claims, damages, losses, or expenses (including 
                  legal fees) arising from:
                </p>
                <ul>
                  <li>Your use of the Platform</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any rights of another party</li>
                  <li>Any content you submit to the Platform</li>
                </ul>
              </Section>

              <Section title="12. Termination">
                <p>
                  We may suspend or terminate your access to the Platform at any time, with or 
                  without cause, with or without notice. Reasons for termination may include:
                </p>
                <ul>
                  <li>Violation of these Terms</li>
                  <li>Conduct harmful to other users or the Platform</li>
                  <li>Request by law enforcement or government agencies</li>
                  <li>Discontinuation of the Platform (with reasonable notice)</li>
                </ul>
                <p>
                  You may terminate your account at any time by contacting us. Upon termination, 
                  your right to use the Platform ceases immediately. Provisions that by their 
                  nature should survive termination will survive.
                </p>
              </Section>

              <Section title="13. Governing Law">
                <p>
                  These Terms are governed by the laws of South Australia and the Commonwealth 
                  of Australia. Any disputes arising from these Terms or your use of the Platform 
                  shall be subject to the exclusive jurisdiction of the courts of South Australia.
                </p>
              </Section>

              <Section title="14. Changes to Terms">
                <p>
                  We may modify these Terms at any time. We will notify users of material changes 
                  via email or Platform notification at least 30 days before they take effect. 
                  Your continued use of the Platform after changes constitutes acceptance of the 
                  modified Terms.
                </p>
              </Section>

              <Section title="15. Contact">
                <p>
                  For questions about these Terms:
                </p>
                <p>
                  <strong>Wadmore Pty Ltd</strong><br />
                  Email:{" "}
                  <a href="mailto:hello@wadmore.com.au" style={{ color: BRAND.indigo }}>
                    hello@wadmore.com.au
                  </a><br />
                  Privacy inquiries:{" "}
                  <a href="mailto:privacy@wadmore.com.au" style={{ color: BRAND.indigo }}>
                    privacy@wadmore.com.au
                  </a>
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
