import React from "react";
import { motion } from "motion/react";
import { Sparkles, Gamepad2, LineChart, HeartHandshake } from "lucide-react";

export function TeacherRole() {
  const roles = [
    {
      icon: <Sparkles className="w-6 h-6 text-blue-600" />,
      title: "Motivate students to speak daily",
    },
    {
      icon: <Gamepad2 className="w-6 h-6 text-emerald-600" />,
      title: "Make learning fun & interactive",
    },
    {
      icon: <LineChart className="w-6 h-6 text-purple-600" />,
      title: "Track individual progress",
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-rose-600" />,
      title: "Build a positive, confident environment",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Background blur effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 rounded-full blur-[100px] -z-10"></div>

            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
              <img
                src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=1080&fit=crop"
                alt="Teacher smiling in classroom"
                className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl">
                <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-1">
                  Our Trainers
                </p>
                <h4 className="text-2xl font-extrabold text-slate-900">
                  Guides, not just teachers.
                </h4>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              The Role of a{" "}
              <span className="text-blue-600 border-b-4 border-emerald-400">
                Learn Quickly Trainer
              </span>
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              At Learn Quickly Academy, our trainers are more than educators.
              They are mentors who inspire confidence and help you break the
              barrier of hesitation.
            </p>

            <div className="space-y-6">
              {roles.map((role, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  className="flex items-center gap-5 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-50 group-hover:bg-blue-50 transition-colors duration-300">
                    {role.icon}
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                    {role.title}
                  </h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
