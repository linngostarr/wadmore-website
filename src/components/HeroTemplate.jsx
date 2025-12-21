import { motion } from "framer-motion";
import { Brain } from "lucide-react";

export default function HeroTemplate({
  title = "Thinking, Understood.",
  subtitle = "Wadmore reveals the invisible architecture of human cognition — translating decades of cognitive science into insight you can actually use to support growth, equity, and learning.",
  ctaPrimary = "Start Now",
  ctaSecondary = "Learn More",
  onPrimaryClick = () => {},
  onSecondaryClick = () => {},
  image = null,
  background = "default",
  layout = "split", // new prop: "split" or "centered"
}) {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const bgClasses =
    background === "light"
      ? "bg-white"
      : background === "soft"
      ? "bg-gradient-to-b from-slate-50 via-white to-white"
      : "relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white";

  return (
<section className={`${bgClasses} min-h-screen flex items-center py-20`}>
      {/* Radial Glow */}
      {layout === "centered" ? (
        <div className="absolute inset-0 flex justify-center">
          <div className="h-[500px] w-[500px] bg-teal-200/20 rounded-full blur-3xl mt-10" />
        </div>
      ) : (
        background === "default" && (
          <div className="absolute top-1/3 right-1/4 h-[500px] w-[500px] rounded-full bg-teal-200/20 blur-3xl pointer-events-none" />
        )
      )}

      <div
        className={`relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center ${
          layout === "centered"
            ? "text-center"
            : "md:flex-row md:items-center md:text-left gap-16"
        }`}
      >
        {/* Text block */}
        <div
          className={`flex-1 ${
            layout === "centered"
              ? "max-w-3xl text-center mx-auto"
              : "text-center md:text-left"
          }`}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className={`flex items-center gap-3 mb-6 ${
              layout === "centered"
                ? "justify-center"
                : "justify-center md:justify-start"
            }`}
          >
            <Brain className="text-indigo-700" size={36} />
            <span className="uppercase tracking-widest text-sm text-gray-500 font-medium">
              Cognitive Insight Platform
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className={`font-bold text-gray-900 mb-6 ${
              layout === "centered"
                ? "text-5xl md:text-6xl leading-tight"
                : "text-5xl md:text-6xl"
            }`}
          >
            {title}
          </motion.h1>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-lg text-gray-600 leading-relaxed max-w-2xl mb-10 mx-auto md:mx-0"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className={`flex flex-col sm:flex-row gap-4 ${
              layout === "centered"
                ? "justify-center"
                : "justify-center md:justify-start"
            }`}
          >
            <button
              onClick={onPrimaryClick}
              className="px-8 py-4 bg-gradient-to-r from-indigo-700 to-teal-500 text-white rounded-md font-semibold hover:shadow-lg transition"
            >
              {ctaPrimary}
            </button>
            <button
              onClick={onSecondaryClick}
              className="px-8 py-4 bg-white border-2 border-indigo-700 text-indigo-700 rounded-md font-semibold hover:bg-indigo-50 transition"
            >
              {ctaSecondary}
            </button>
          </motion.div>
        </div>

        {/* Optional image column */}
        {image && layout !== "centered" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex justify-center"
          >
            <img
              src={image}
              alt="illustration"
              className="max-w-md w-full rounded-xl shadow-md"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}
