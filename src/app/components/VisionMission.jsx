import React from "react";
import { motion } from "motion/react";
import {
  Target,
  Zap,
  BookOpen,
  MessageSquare,
  Users,
  Briefcase,
} from "lucide-react";

export function VisionMission() {
  const missions = [
    {
      text: "Make English learning simple & practical",
      icon: <Zap className="w-5 h-5 text-emerald-500" />,
    },
    {
      text: "Give every student daily speaking opportunity",
      icon: <MessageSquare className="w-5 h-5 text-emerald-500" />,
    },
    {
      text: "Focus on real-life communication",
      icon: <Users className="w-5 h-5 text-emerald-500" />,
    },
    {
      text: "Empower youth with affordable education",
      icon: <BookOpen className="w-5 h-5 text-emerald-500" />,
    },
    {
      text: "Build career opportunities for teachers",
      icon: <Briefcase className="w-5 h-5 text-emerald-500" />,
    },
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100/30 rounded-bl-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-emerald-100/30 rounded-tr-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-blue-600 rounded-[2.5rem] p-10 md:p-16 text-white shadow-2xl shadow-blue-900/20 flex flex-col justify-center relative overflow-hidden"
          >
            <Target className="absolute -top-10 -right-10 w-48 h-48 text-blue-500/30 opacity-20" />
            <h2 className="text-sm font-bold uppercase tracking-widest text-blue-200 mb-4">
              Our Vision
            </h2>

            <blockquote className="text-2xl md:text-4xl font-extrabold leading-tight tracking-tight relative z-10">
              <span className="text-blue-300 text-6xl leading-none font-serif absolute -top-8 -left-4">
                "
              </span>
              To make Learn Quickly Academy the{" "}
              <span className="text-emerald-400">
                #1 practical learning platform
              </span>{" "}
              in India where every student can transform their life and career.
              <span className="text-blue-300 text-6xl leading-none font-serif absolute -bottom-10 right-0">
                "
              </span>
            </blockquote>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 border-b-4 border-blue-600 pb-2 inline-block w-fit">
              Our Mission
            </h2>

            <div className="flex flex-col gap-5">
              {missions.map((mission, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 group hover:shadow-md hover:border-blue-100 transition-all duration-300"
                >
                  <div className="bg-emerald-50 p-2 rounded-xl group-hover:bg-emerald-100 transition-colors duration-300 flex-shrink-0">
                    {mission.icon}
                  </div>
                  <p className="text-slate-700 font-semibold">{mission.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
