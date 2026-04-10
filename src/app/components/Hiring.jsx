import React from "react";
import { motion } from "motion/react";
import { Rocket, PhoneCall } from "lucide-react";
import { Button } from "./ui/Button";

export function Hiring() {
  return (
    <section className="py-24 bg-blue-600 relative overflow-hidden text-white">
      {/* Background vectors */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-80 h-80 bg-emerald-400 rounded-full blur-[120px] opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-[3rem] p-10 md:p-16 text-center max-w-4xl mx-auto shadow-2xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <div className="bg-emerald-500 p-4 rounded-full shadow-lg shadow-emerald-900/20">
              <Rocket className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight"
          >
            We’re Hiring! <span className="text-emerald-300">🚀</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Join <strong className="text-white">Learn Quickly Academy</strong>{" "}
            as a trainer and build your rewarding career in education. Help
            students crack their dream interviews.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a href="tel:+917841892600">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white shadow-emerald-500/30 text-lg py-4 px-8 group"
              >
                Apply Now
                <Rocket className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </Button>
            </a>

            <div className="flex items-center gap-3 text-white bg-blue-700/50 py-3 px-6 rounded-full border border-blue-500/50 hover:bg-blue-700 transition-colors duration-300">
              <PhoneCall className="w-5 h-5 text-emerald-300" />
              <a
                href="tel:+917841892600"
                className="text-xl font-bold tracking-wider hover:text-emerald-300 transition-colors"
              >
                +91 78418 92600
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
