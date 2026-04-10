import React from "react";
import { motion } from "motion/react";
import { MessagesSquare, Briefcase, BrainCircuit } from "lucide-react";
import { Button } from "./ui/Button";

export function Courses() {
  const courses = [
    {
      id: "english",
      icon: <MessagesSquare className="w-12 h-12 text-blue-600" />,
      title: "English Speaking Course",
      description:
        "From basics to fluent conversations. Learn to speak confidently in everyday situations without hesitation.",
      features: [
        "Daily speaking practice",
        "Grammar for speaking",
        "Vocabulary building",
      ],
      color:
        "bg-blue-50 hover:bg-blue-600 group-hover:text-white transition-colors duration-500",
      accent: "text-blue-600",
      bgImg:
        "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFybmluZyUyMGVuZ2xpc2h8ZW58MXx8fHwxNzc1ODEwNjk2fDA&ixlib=rb-4.1.0&q=80&w=600",
    },
    {
      id: "interview",
      icon: <Briefcase className="w-12 h-12 text-emerald-600" />,
      title: "Job Interview Prep",
      description:
        "Crack HR rounds, introduce yourself perfectly, and answer tricky questions with ease.",
      features: ["Mock interviews", "Resume building", "Body language tips"],
      color:
        "bg-emerald-50 hover:bg-emerald-600 group-hover:text-white transition-colors duration-500",
      accent: "text-emerald-600",
      bgImg:
        "https://images.unsplash.com/photo-1573497701240-345a300b8d36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb2IlMjBpbnRlcnZpZXclMjBkaXZlcnNlfGVufDF8fHx8MTc3NTgxMDY5Nnww&ixlib=rb-4.1.0&q=80&w=600",
    },
    {
      id: "logic",
      icon: <BrainCircuit className="w-12 h-12 text-purple-600" />,
      title: "Logical Reasoning",
      description:
        "Sharpen your mind for competitive exams and aptitude tests required for top MNC jobs.",
      features: ["Pattern recognition", "Time management", "Aptitude training"],
      color:
        "bg-purple-50 hover:bg-purple-600 group-hover:text-white transition-colors duration-500",
      accent: "text-purple-600",
      bgImg:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFzb25pbmclMjBwdXp6bGV8ZW58MXx8fHwxNzc1ODEwNjk2fDA&ixlib=rb-4.1.0&q=80&w=600",
    },
  ];

  return (
    <section
      id="courses"
      className="py-24 bg-slate-900 text-white relative overflow-hidden"
    >
      {/* Dynamic background effect */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-700 via-slate-900 to-slate-900"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-emerald-400 font-bold tracking-wider uppercase text-sm mb-3">
            Our Programs
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Courses designed for{" "}
            <span className="text-blue-400">your success</span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 * idx }}
              className="group flex flex-col h-full bg-slate-800 rounded-[2.5rem] p-1 shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-500 border border-slate-700 hover:border-blue-500"
            >
              <div className="h-48 relative overflow-hidden rounded-t-[2.4rem] m-1">
                <img
                  src={course.bgImg}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/40 transition-colors duration-300"></div>
                <div
                  className={`absolute -bottom-6 left-6 w-16 h-16 rounded-2xl flex items-center justify-center ${course.color} z-10 shadow-lg`}
                >
                  {React.cloneElement(course.icon, {
                    className:
                      "w-8 h-8 group-hover:text-white transition-colors duration-300",
                  })}
                </div>
              </div>

              <div className="p-8 pt-10 flex flex-col flex-grow">
                <h4 className="text-2xl font-bold text-white mb-4">
                  {course.title}
                </h4>
                <p className="text-slate-400 mb-6 flex-grow leading-relaxed">
                  {course.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {course.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-sm text-slate-300"
                    >
                      <svg
                        className={`w-5 h-5 mr-3 ${course.accent}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a href="#contact" className="mt-auto">
                  <Button
                    variant="outline"
                    className={`w-full border-slate-600 text-slate-300 hover:border-${course.accent.split("-")[1]}-500 hover:bg-${course.accent.split("-")[1]}-500 hover:text-white`}
                  >
                    Enroll Now
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
