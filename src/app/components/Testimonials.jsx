import React from "react";
import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Gauri Chavhan",
      role: "Software Engineer",
      image: "/profile_1.jfif",
      quote:
        "The best English speaking offline and online class in bhiwandi. Best class teachers and their environment is also best.",
      rating: 5,
    },
    {
      name: "Shraddha Bhagat",
      role: "College Student",
      image: "/profile_2.jfif",
      quote:
        "I had always struggled with English, but after joining LQ Academy, I feel much more confident. The way they teach is very easy to understand.",
      rating: 5,
    },
    {
      name: "Santosh Mahto",
      role: "Sales Executive",
      image: "/profile_3.jfif",
      quote:
        "Best classes for Englishspeaking in bhiwandi & atmosphere is awesome for beginners in English speaking.",
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 bg-slate-50 relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-60 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-60 transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3 border-b-2 border-blue-200 inline-block pb-1">
            Success Stories
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Hear from our{" "}
            <span className="text-emerald-500">Confident Speakers</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 * idx }}
              className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-blue-100 border border-slate-100 transition-all duration-300 relative group"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-blue-50 group-hover:text-blue-100 transition-colors duration-300" />

              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-slate-50 shadow-sm"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-emerald-500 w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-slate-600 italic relative z-10 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                "{testimonial.quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
