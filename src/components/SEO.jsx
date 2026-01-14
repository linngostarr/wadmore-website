// src/components/SEO.jsx
// SEO component for React 19 - no external dependencies
// Uses useEffect to manage document head

import { useEffect } from 'react';

// Site-wide defaults
const SITE_NAME = 'Wadmore';
const SITE_URL = 'https://wadmore.com.au';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;
const TWITTER_HANDLE = '@wadmore';

/**
 * SEO Component - React 19 compatible
 * @param {string} title - Page title (will be appended with site name)
 * @param {string} description - Meta description (150-160 chars ideal)
 * @param {string} path - Page path for canonical URL (e.g., '/schools')
 * @param {string} image - OG image URL (defaults to site image)
 * @param {string} type - OG type ('website' or 'article')
 * @param {object} schema - JSON-LD structured data
 */
export default function SEO({
  title,
  description,
  path = '',
  image = DEFAULT_IMAGE,
  type = 'website',
  schema = null,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Thinking, Understood`;
  const canonicalUrl = `${SITE_URL}${path}`;

  useEffect(() => {
    // Set document title
    document.title = fullTitle;

    // Helper to set/update meta tags
    const setMetaTag = (attribute, attributeValue, content) => {
      let element = document.querySelector(`meta[${attribute}="${attributeValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper to set/update link tags
    const setLinkTag = (rel, href) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // Primary Meta Tags
    setMetaTag('name', 'description', description);
    setLinkTag('canonical', canonicalUrl);

    // Open Graph / Facebook
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:image', image);
    setMetaTag('property', 'og:site_name', SITE_NAME);
    setMetaTag('property', 'og:locale', 'en_AU');

    // Twitter
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:url', canonicalUrl);
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', image);
    if (TWITTER_HANDLE) {
      setMetaTag('name', 'twitter:site', TWITTER_HANDLE);
    }

    // JSON-LD Structured Data
    const existingSchema = document.querySelector('script[data-seo-schema]');
    if (existingSchema) {
      existingSchema.remove();
    }
    if (schema) {
      const schemaScript = document.createElement('script');
      schemaScript.type = 'application/ld+json';
      schemaScript.setAttribute('data-seo-schema', 'true');
      schemaScript.textContent = JSON.stringify(schema);
      document.head.appendChild(schemaScript);
    }

    // Cleanup function
    return () => {
      // Schema will be replaced by next page, no need to remove
    };
  }, [fullTitle, description, canonicalUrl, image, type, schema]);

  // This component doesn't render anything
  return null;
}

// ============================================================
// PAGE-SPECIFIC SEO CONFIGURATIONS
// ============================================================

export const PAGE_SEO = {
  home: {
    title: null,
    description: 'Wadmore profiles how people think across eight cognitive domains. Strength-based assessment for schools, families, and organisations. Australian-built cognitive profiling platform.',
    path: '/',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Wadmore',
      description: 'Cognitive profiling platform for schools, families, and organisations',
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: 'hello@wadmore.com.au',
        areaServed: 'AU',
        availableLanguage: 'English',
      },
    },
  },

  schools: {
    title: 'Schools',
    description: 'Cognitive profiling for educators. Understand how students think across eight domains. Evidence for differentiation, NCCD documentation, and pathway planning.',
    path: '/schools',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Wadmore for Schools',
      description: 'Cognitive profiling platform for educational settings',
      provider: {
        '@type': 'Organization',
        name: 'Wadmore',
      },
      areaServed: {
        '@type': 'Country',
        name: 'Australia',
      },
    },
  },

  families: {
    title: 'Families',
    description: "Understand your child's thinking patterns. Strength-based profiles across eight cognitive domains with practical guidance for home support. Current patterns, not fixed labels.",
    path: '/families',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Wadmore for Families',
      description: 'Cognitive profiling for parents and children',
      provider: {
        '@type': 'Organization',
        name: 'Wadmore',
      },
    },
  },

  professional: {
    title: 'Professional',
    description: 'Cognitive profiling for teams and organisations. Understand how your people think under cognitive demand. Evidence for team composition and leadership development.',
    path: '/professional',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Wadmore Professional',
      description: 'Cognitive profiling for workplace teams and leadership',
      provider: {
        '@type': 'Organization',
        name: 'Wadmore',
      },
    },
  },

  science: {
    title: 'The Science',
    description: 'Research foundation behind Wadmore. Eight cognitive domains, fifteen developmental bands, IRT/Rasch psychometrics. Grounded in 50+ peer-reviewed sources.',
    path: '/science',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Wadmore Science and Methodology',
      description: 'Research foundation and psychometric methodology',
    },
  },

  about: {
    title: 'About',
    description: 'Wadmore was founded to make thinking visible. Australian-built cognitive profiling platform. Evidence that informs decisions, not predictions.',
    path: '/about',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About Wadmore',
      description: 'Our mission, story, and values',
    },
  },

  consulting: {
    title: 'Professional Learning',
    description: 'Build capability in cognitive assessment. Professional development for educators, leaders, and support staff. Research-grounded, practically focused.',
    path: '/consulting',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Wadmore Professional Learning',
      description: 'Professional development and training services',
      provider: {
        '@type': 'Organization',
        name: 'Wadmore',
      },
    },
  },

  faq: {
    title: 'FAQ',
    description: 'Frequently asked questions about Wadmore cognitive profiling. Learn about assessments, domains, developmental bands, and how Wadmore works.',
    path: '/faq',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is Wadmore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Wadmore is a cognitive profiling platform that reveals how thinking appears when people engage with structured cognitive tasks.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is Wadmore different from IQ tests?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Traditional assessments produce a single score. Wadmore describes patterns of thinking across multiple cognitive domains with research-grounded guidance.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are the eight cognitive domains?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Abstract Reasoning, Logical Sequencing, Processing Speed, Memory & Attention, Executive Functioning, Metacognition, Cognitive Confidence, and Creativity.',
          },
        },
      ],
    },
  },

  contact: {
    title: 'Contact',
    description: 'Get in touch with Wadmore. Register for early access, enquire about school pilots, or ask questions about cognitive profiling.',
    path: '/contact',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact Wadmore',
    },
  },
};
