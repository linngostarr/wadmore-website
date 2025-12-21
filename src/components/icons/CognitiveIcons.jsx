// src/components/icons/CognitiveIcons.jsx

// All icons share a consistent style: outline, clinical, minimal.

const baseProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.6",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function IconShift({ className }) {
  // Cognitive Flexibility – shift & reframe
  return (
    <svg className={className} {...baseProps}>
      <path d="M4 12h16" />
      <path d="M12 4l4 4-4 4" />
      <path d="M12 20l-4-4 4-4" />
    </svg>
  );
}

export function IconPlan({ className }) {
  // Executive Functioning – plan & organise
  return (
    <svg className={className} {...baseProps}>
      <rect x="3" y="3" width="6" height="6" rx="1.5" />
      <rect x="15" y="3" width="6" height="6" rx="1.5" />
      <rect x="3" y="15" width="6" height="6" rx="1.5" />
      <path d="M15 15h6v6h-6z" />
    </svg>
  );
}

export function IconPattern({ className }) {
  // Abstract Reasoning – see the pattern
  return (
    <svg className={className} {...baseProps}>
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
      <path d="M8 6h8M6 8v8M18 8v8M8 18h8" />
    </svg>
  );
}

export function IconSteps({ className }) {
  // Analytical Sequencing – work it through
  return (
    <svg className={className} {...baseProps}>
      <path d="M4 4h6v6H4zM14 10h6v6h-6zM4 14h6v6H4z" />
      <path d="M10 7h4M10 17h4" />
    </svg>
  );
}

export function IconDiverge({ className }) {
  // Creativity & Divergent Thinking – generate options
  return (
    <svg className={className} {...baseProps}>
      <path d="M12 20V4" />
      <path d="M12 12l6-6" />
      <path d="M12 12L6 6" />
      <path d="M12 12l6 6" />
      <path d="M12 12L6 18" />
    </svg>
  );
}

export function IconReflect({ className }) {
  // Metacognition – think about thinking
  return (
    <svg className={className} {...baseProps}>
      <path d="M12 3a9 9 0 0 1 9 9" />
      <path d="M12 21a9 9 0 0 1-9-9" />
      <circle cx="12" cy="12" r="2.3" />
    </svg>
  );
}

export function IconApproach({ className }) {
  // Confidence & Disposition – approach challenges
  return (
    <svg className={className} {...baseProps}>
      <circle cx="8" cy="12" r="3" />
      <path d="M11 12h10" />
      <path d="M18 9l3 3-3 3" />
    </svg>
  );
}

export function IconTransfer({ className }) {
  // Adaptive Thinking – apply & transfer
  return (
    <svg className={className} {...baseProps}>
      <path d="M4 12h16" />
      <path d="M12 4l4 4-4 4" />
      <path d="M12 20l-4-4 4-4" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
