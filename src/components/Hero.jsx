import { motion } from "framer-motion";
import { Brain, ArrowRight } from "lucide-react";
import "../index.css"; // 👈 ensure your shimmer keyframes are added here

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white py-28">
      {/* Decorative gradient orb */}
      <div className="pointer-events-none absolute right-[10%] top-[10%] h-[400px] w-[400px] rounded-full bg-gradient-to-br from-teal-200/30 to-transparent blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Brain Icon */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-inner ring-1 ring-slate-200 relative overflow-hidden"
          style={{ boxShadow: "0 0 20px rgba(60,183,172,0.25)" }}
        >
          <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-50" />
          <Brain size={44} color="#384275" strokeWidth={1.6} />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-6 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl"
        >
          <span className="bg-gradient-to-r from-indigo-700 to-teal-500 bg-clip-text text-transparent">
            Thinking, Understood.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-600"
        >
          Wadmore reveals the invisible architecture of human cognition — translating
          decades of cognitive science into insight you can actually use to support
          growth, equity, and learning.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button className="relative flex items-center gap-2 overflow-hidden rounded-md bg-gradient-to-r from-indigo-700 to-teal-500 px-7 py-3 text-white shadow-sm transition hover:opacity-95">
            <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-60" />
            <span className="relative z-10 flex items-center gap-2">
              Start Family Assessment
              <ArrowRight size={18} />
            </span>
          </button>
          <button className="rounded-md border-2 border-indigo-700 px-7 py-3 font-semibold text-indigo-700 transition hover:bg-indigo-50">
            View Sample Report
          </button>
        </motion.div>

        {/* Trust Metrics */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ delay: 0.6 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-sm text-gray-700"
        >
          <div className="flex flex-col items-center">
            <span className="text-2xl font-semibold text-indigo-700">10,000+</span>
            <span className="text-gray-500">Assessments Completed</span>
          </div>
          <div className="h-10 w-px bg-gray-200" />
          <div className="flex flex-col items-center">
            <span className="text-2xl font-semibold text-teal-600">8</span>
            <span className="text-gray-500">Cognitive Domains</span>
          </div>
          <div className="h-10 w-px bg-gray-200" />
          <div className="flex flex-col items-center">
            <span className="text-2xl font-semibold text-indigo-700">15</span>
            <span className="text-gray-500">Developmental Bands</span>
          </div>
          <div className="h-10 w-px bg-gray-200" />
          <div className="flex flex-col items-center">
            <span className="text-2xl font-semibold text-teal-600">92%</span>
            <span className="text-gray-500">Parent Satisfaction</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
