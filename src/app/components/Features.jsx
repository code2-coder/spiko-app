import React from "react";
import { motion } from "motion/react";
import { Check, Star, Mic, Laugh, TrendingUp, Languages } from "lucide-react";

export function Features() {
  const highlights = [
    {
      icon: <Star className="w-8 h-8 text-blue-600" />,
      title: "80% Practice, 20% Theory",
      desc: "Action over reading",
    },
    {
      icon: <Mic className="w-8 h-8 text-blue-600" />,
      title: "Real-life Conversation",
      desc: "Learn by doing",
    },
    {
      icon: <Languages className="w-8 h-8 text-blue-600" />,
      title: "English + Hindi Mix",
      desc: "Easy transition method",
    },
    {
      icon: <Check className="w-8 h-8 text-blue-600" />,
      title: "Daily Speaking Challenges",
      desc: "Build habits",
    },
    {
      icon: <Laugh className="w-8 h-8 text-blue-600" />,
      title: "Fun & Supportive",
      desc: "No judgment zone",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "Confidence Growth",
      desc: "Personality development",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">
            Why Choose Us
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Why Learn Quickly Academy is{" "}
            <span className="text-blue-600 relative inline-block">
              Different
              <svg
                className="absolute w-full h-3 -bottom-2 left-0 text-emerald-400 opacity-60"
                viewBox="0 0 200 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.00036 6.5C38.3337 3.33333 118.6 -2.1 198.5 7.5"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </h3>
          <p className="mt-4 text-lg text-slate-600">
            We don't just teach grammar. We build speakers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              className="bg-slate-50 border border-slate-100 p-8 rounded-[2rem] hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Decorative blob */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-bl-[5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></div>

              <div className="bg-white w-16 h-16 rounded-2xl shadow-sm flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
                {highlight.icon}
              </div>

              <h4 className="text-xl font-bold text-slate-900 mb-2 relative z-10">
                {highlight.title}
              </h4>
              <p className="text-slate-600 relative z-10">{highlight.desc}</p>

              {/* Checkmark indicator */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                <div className="bg-emerald-500 rounded-full p-1 shadow-md">
                  <Check className="w-4 h-4 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
