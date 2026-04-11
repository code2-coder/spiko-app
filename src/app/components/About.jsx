import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Lightbulb, UserCheck, BookOpen } from 'lucide-react';

export function About() {
  const methods = [
    { icon: <MessageCircle className="w-6 h-6 text-blue-600" />, title: "Real-life Conversations", desc: "Speak with peers daily" },
    { icon: <Lightbulb className="w-6 h-6 text-blue-600" />, title: "Fun Activities & Games", desc: "Interactive learning" },
    { icon: <UserCheck className="w-6 h-6 text-blue-600" />, title: "Roleplays", desc: "Simulate real scenarios" },
    { icon: <BookOpen className="w-6 h-6 text-blue-600" />, title: "Daily Practice", desc: "Consistent improvement" },
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-100 rounded-[3rem] transform -rotate-6 scale-105 z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1080&fit=crop" 
              alt="About Learn Quickly Academy" 
              className="relative z-10 w-full aspect-[4/3] object-cover rounded-[2.5rem] shadow-2xl"
            />
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block border-l-4 border-blue-600">
              <p className="text-4xl font-extrabold text-slate-800 mb-1">80%</p>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Practical Focus</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-8"
          >
            <div>
              <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3 border-b-2 border-blue-100 pb-1 inline-block">About Learn Quickly Academy</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                English is not just a subject — <br />
                <span className="text-emerald-500">It's a life-changing skill.</span>
              </h3>
            </div>
            
            <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-emerald-100 pl-4">
              Learn Quickly Academy is a modern English speaking institution helping students, job seekers, and youth speak English with confidence. Our Spiko program focuses on transforming your communication skills so you can crack interviews and excel in your career.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 pt-6">
              {methods.map((method, idx) => (
                <div key={idx} className="flex gap-4 items-start group">
                  <div className="bg-blue-50 p-3 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm flex-shrink-0">
                    {React.cloneElement(method.icon, { className: 'w-6 h-6 transition-colors duration-300 group-hover:text-white' })}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">{method.title}</h4>
                    <p className="text-sm text-slate-500">{method.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
