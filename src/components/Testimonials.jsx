import { useState, useEffect } from "react";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Finally understand why my daughter excels at creative projects but struggles with structured homework. The actionable strategies have transformed our evenings.",
      author: "Sarah Chen – Melbourne, VIC",
    },
    {
      quote:
        "Seeing how my children's cognitive profiles complement each other completely changed how we handle sibling conflict.",
      author: "Michael Thompson – Sydney, NSW",
    },
    {
      quote:
        "The teacher templates gave me the perfect language to advocate for my son. His teacher was amazed by the specificity.",
      author: "Jennifer Williams – Brisbane, QLD",
    },
  ];

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="mb-12 text-3xl font-bold text-gray-900 sm:text-4xl">
          Trusted by Thousands of Families
        </h2>

        <div className="relative rounded-2xl border border-gray-200 bg-gradient-to-br from-slate-50 to-white p-10 shadow-sm transition">
          <div className="mb-4 flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="#fbbf24" color="#fbbf24" />
            ))}
          </div>

          <p className="mb-6 text-lg italic text-gray-700">
            “{testimonials[index].quote}”
          </p>
          <p className="text-sm font-medium text-gray-500">{testimonials[index].author}</p>

          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full ${
                  i === index ? "bg-indigo-700" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
