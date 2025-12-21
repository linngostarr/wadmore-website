import { motion } from "framer-motion";

export default function CTA() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 1 }}
      className="bg-gradient-to-r from-indigo-700 to-teal-500 py-24 text-white"
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-3xl font-bold sm:text-4xl"
        >
          Ready to Understand How Your Family Thinks?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 text-lg text-white/90"
        >
          Join thousands of families discovering their cognitive strengths.
        </motion.p>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8 inline-block rounded-xl bg-white/10 px-8 py-6"
        >
          <div className="text-sm text-white/80">Launch Special – Save $50</div>
          <div className="flex items-baseline justify-center gap-3">
            <span className="text-4xl font-bold">$149</span>
            <span className="text-xl line-through opacity-70">$199</span>
          </div>
          <div className="text-sm text-white/80">
            Complete Family Assessment Package
          </div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="rounded-md bg-white px-6 py-3 text-base font-semibold text-indigo-700 hover:bg-indigo-50">
            Start Assessment Now
          </button>
          <button className="rounded-md border-2 border-white px-6 py-3 text-base font-semibold text-white hover:bg-white/10">
            View Sample Report
          </button>
        </div>
      </div>
    </motion.section>
  );
}
