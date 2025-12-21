import { motion } from "framer-motion";
import { Users, School, Briefcase, CheckCircle, ChevronRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ProductSuite() {
  const products = [
    {
      id: "families",
      title: "Wadmore Families",
      accent: "#3CB7AC",
      icon: <Users size={42} strokeWidth={1.6} color="#3CB7AC" />,
      label: "AVAILABLE NOW",
      statusColor: "bg-teal-500",
      desc: "Complete cognitive profiles for your children. Understand strengths, support growth areas, and get actionable 90-day plans.",
      features: [
        "All children assessed together",
        "Family insights dashboard",
        "Teacher communication kit",
      ],
      buttonText: "Start Assessment",
      active: true,
    },
    {
      id: "schools",
      title: "Wadmore Schools",
      accent: "#5B8BF7",
      icon: <School size={42} strokeWidth={1.6} color="#5B8BF7" />,
      label: "COMING APRIL 2025",
      statusColor: "bg-indigo-500",
      desc: "Whole-class cognitive profiling for differentiation, learning support, and evidence-based educational planning.",
      features: [
        "Class-wide insights",
        "Differentiation tools",
        "NCCD evidence support",
      ],
      buttonText: "Join Waitlist",
      active: false,
    },
    {
      id: "professional",
      title: "Wadmore Professional",
      accent: "#786CFF",
      icon: <Briefcase size={42} strokeWidth={1.6} color="#786CFF" />,
      label: "COMING SOON",
      statusColor: "bg-purple-500",
      desc: "Team cognitive diversity analysis for collaboration, leadership development, and organisational effectiveness.",
      features: ["Team dynamics", "Leadership insights", "Hiring optimisation"],
      buttonText: "Coming Soon",
      active: false,
    },
  ];

  return (
    <section id="products" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Cognitive Assessment Solutions
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Tailored insights for every context and need
          </p>
        </motion.div>

        {/* Product Cards */}
        <div className="grid gap-10 md:grid-cols-3">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Label */}
              <div
                className={`absolute -top-3 left-6 rounded-full px-3 py-1 text-xs font-semibold text-white shadow-sm ${p.statusColor}`}
              >
                {p.label}
              </div>

              {/* Icon */}
              <div className="mb-5 flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
                  {p.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="mb-3 text-center text-xl font-semibold text-gray-900">
                {p.title}
              </h3>

              {/* Description */}
              <p className="mb-6 text-center text-sm leading-relaxed text-gray-600">
                {p.desc}
              </p>

              {/* Features */}
              <ul className="mb-8 space-y-2 text-sm">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-gray-700 leading-tight"
                  >
                    <CheckCircle size={16} color={p.active ? p.accent : "#A1A1AA"} />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                disabled={!p.active}
                className={`flex w-full items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                  p.active
                    ? "bg-teal-500 text-white hover:bg-teal-600"
                    : "cursor-not-allowed border border-gray-200 bg-gray-50 text-gray-400"
                }`}
              >
                {p.buttonText}
                {p.active && <ChevronRight size={16} />}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
