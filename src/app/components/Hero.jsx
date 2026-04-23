import React from "react";
import { motion } from "motion/react";
import { CheckCircle2, Users, Target, BookOpen, Star } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const trustBadges = [
    {
      icon: <Users className="w-5 h-5 text-emerald-500" />,
      text: "1000+ Students Trained",
    },
    {
      icon: <Target className="w-5 h-5 text-emerald-500" />,
      text: "80% Practical Learning",
    },
    {
      icon: <BookOpen className="w-5 h-5 text-emerald-500" />,
      text: "Daily Speaking Practice",
    },
  ];

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex flex-col justify-center bg-slate-50">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] aspect-square rounded-full bg-blue-100/50 blur-3xl opacity-50"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[30%] aspect-square rounded-full bg-emerald-100/40 blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-8"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100/80 text-blue-800 font-medium text-sm w-fit shadow-sm border border-blue-200">
              <Star className="w-4 h-4 mr-2 fill-yellow-400 text-yellow-500" />
              India’s Practical English Learning Academy
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Speak English{" "}
              <span className="text-blue-600 relative inline-block">
                Confidently
                <svg
                  className="absolute w-full h-3 -bottom-1 left-0 text-emerald-400 opacity-60"
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
              </span>{" "}
              <br className="hidden sm:block" />& Crack Any Interview
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl">
              Join{" "}
              <strong className="text-blue-700">Learn Quickly Academy</strong> —
              transforming your confidence, communication, and career. Step into
              a world of limitless opportunities with our Spiko program.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#contact" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto text-lg group">
                  Join Now
                  <motion.span
                    className="inline-block ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                </Button>
              </a>
              <a href="#contact" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-lg"
                >
                  Get Free Demo
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200 mt-4">
              {trustBadges.map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="flex-shrink-0">{badge.icon}</div>
                  <span className="text-sm font-semibold text-slate-700">
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* Main Image */}
            <div className="relative w-full max-w-lg aspect-[4/5] lg:aspect-auto lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border-8 border-white">
              <img
                src="/courses/hero-page.jpeg"
                alt="Confident students learning English"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent"></div>
            </div>

            {/* Floating Card 1 */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 sm:left-4 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 z-20 border border-slate-100"
            >
              <div className="bg-emerald-100 p-3 rounded-full">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">Job Ready</p>
                <p className="text-xs font-medium text-slate-500">
                  Interview prep included
                </p>
              </div>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3.5,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -top-6 -right-6 sm:right-0 bg-white p-4 rounded-2xl shadow-xl flex flex-col items-center gap-2 z-20 border border-slate-100"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt={`Student ${i}`}
                  />
                ))}
              </div>
              <div className="text-center">
                <p className="text-sm font-bold text-slate-800">1000+</p>
                <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider">
                  Success Stories
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
