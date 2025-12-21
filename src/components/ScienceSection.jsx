import { motion } from "framer-motion";
import { Microscope, BarChart3, Shield } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Science() {
  const features = [
    {
      icon: <Microscope size={24} color="white" />,
      title: "Evidence-Based Domains",
      desc: "8 validated cognitive domains measuring authentic capabilities such as working memory, executive function, and processing speed.",
    },
    {
      icon: <BarChart3 size={24} color="white" />,
      title: "Rasch-Aligned Scaling",
      desc: "15-band developmental framework built on Item Response Theory for precise measurement across the full range of human cognition.",
    },
    {
      icon: <Shield size={24} color="white" />,
      title: "Bias-Free Assessment",
      desc: "Culturally fair, language-appropriate design with differential-item-functioning analysis to ensure equity across all populations.",
    },
  ];

  return (
    <section id="science" className="bg-slate-50 py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
            Grounded in Cognitive Science
          </h2>
          <p className="mb-8 text-gray-600 leading-relaxed">
            Wadmore assessments are built on decades of research using
            psychometrically validated instruments to measure genuine thinking—
            not learning-style myths or personality labels.
          </p>

          <div className="space-y-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                transition={{ delay: 0.1 * i }}
                className="flex items-start gap-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-700 to-teal-500">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{f.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <div className="rounded-2xl bg-white p-8 shadow-md">
            <h3 className="mb-4 text-lg font-semibold text-gray-900">
              The 8 Cognitive Domains
            </h3>
            <div className="space-y-3">
              {[
                ["Abstract Reasoning", "Pattern recognition & relationships"],
                ["Creative Thinking", "Divergent thinking & innovation"],
                ["Logical Sequencing", "Step-by-step problem solving"],
                ["Executive Functioning", "Planning & task management"],
                ["Processing Speed", "Efficiency of thinking"],
                ["Memory & Attention", "Information retention & focus"],
                ["Metacognition", "Self-awareness of thinking"],
                ["Cognitive Confidence", "Learning mindset & persistence"],
              ].map(([name, desc], i) => (
                <motion.div
                  key={name}
                  variants={fadeUp}
                  transition={{ delay: 0.05 * i }}
                  className="rounded-lg border-l-4 border-teal-500 bg-slate-50 px-4 py-2"
                >
                  <div className="text-sm font-semibold text-gray-900">
                    {name}
                  </div>
                  <div className="text-xs text-gray-600">{desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
