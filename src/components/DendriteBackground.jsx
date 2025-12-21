import { motion } from "framer-motion";

export default function DendriteBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Slowly shifting gradient wash */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white/60 to-teal-50 opacity-60"
        animate={{ opacity: [0.55, 0.65, 0.55] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animated dendritic lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-25"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="dendriteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3CB7AC" />
            <stop offset="100%" stopColor="#384275" />
          </linearGradient>

          <filter id="softGlow">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Main dendritic arcs */}
        <path
          d="M200 400 C260 380, 320 430, 380 400 S500 370, 600 400 S720 440, 820 400 S950 360, 1080 400"
          stroke="url(#dendriteGradient)"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
          filter="url(#softGlow)"
        >
          <animate
            attributeName="stroke-dasharray"
            values="0,3000;3000,0"
            dur="40s"
            repeatCount="indefinite"
          />
        </path>

        {/* Sub-branch network */}
        <path
          d="M600 400 Q650 330 700 400 T800 420 Q850 470 900 400"
          stroke="url(#dendriteGradient)"
          strokeWidth="0.8"
          fill="none"
          opacity="0.6"
        >
          <animate
            attributeName="stroke-dasharray"
            values="0,2000;2000,0"
            dur="55s"
            repeatCount="indefinite"
          />
        </path>

        <path
          d="M400 420 Q350 480 300 420 T200 380 Q150 340 100 400"
          stroke="url(#dendriteGradient)"
          strokeWidth="0.8"
          fill="none"
          opacity="0.5"
        >
          <animate
            attributeName="stroke-dasharray"
            values="0,2000;2000,0"
            dur="65s"
            repeatCount="indefinite"
          />
        </path>

        {/* Gentle pulsating nodes */}
        {[220, 360, 480, 600, 720, 860, 1000].map((x, i) => (
          <circle
            key={i}
            cx={x}
            cy={400 + (i % 2 === 0 ? -20 : 20)}
            r="2"
            fill="url(#dendriteGradient)"
          >
            <animate
              attributeName="r"
              values="2;3;2"
              dur="6s"
              begin={`${i * 1.5}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </svg>

      {/* Soft fading radial halo */}
      <div className="absolute inset-0 flex justify-center">
        <div className="h-[700px] w-[700px] bg-teal-200/15 rounded-full blur-3xl" />
      </div>
    </div>
  );
}
