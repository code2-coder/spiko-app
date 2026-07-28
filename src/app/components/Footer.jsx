import React, { useCallback } from "react";
import { Mail, ArrowUp, MapPin, ExternalLink, ChevronRight } from "lucide-react";

export function Footer() {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <footer className="relative bg-slate-950 text-slate-300 pt-20 pb-10 border-t border-slate-800/60 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full" />
                <img src="/logo.png" alt="Spiko Logo" className="relative h-12 w-12 object-contain drop-shadow-xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Learn Quickly
                </h3>
                <p className="text-blue-400 font-medium tracking-wide text-sm uppercase mt-0.5">Academy <span className="text-slate-600 mx-2">|</span> Spiko</p>
              </div>
            </div>

            <p className="text-slate-400 max-w-md leading-relaxed text-sm md:text-base">
              India's #1 Practical Learning Platform. We are dedicated to transforming students and
              job seekers into confident English speakers.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 text-sm">
              <span className="text-slate-400">Presented By:</span> 
              <span className="font-semibold text-white tracking-wide">prime circle</span>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {[
                { name: "About Us", link: "#about" },
                { name: "Our Courses", link: "#courses" },
                { name: "Success Stories", link: "#testimonials" },
                { name: "Contact Us", link: "#contact" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    className="group flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm font-medium"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-blue-500" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-lg font-semibold text-white mb-6">
              Contact Info
            </h4>

            <ul className="space-y-5 text-sm">

              {/* Email */}
              <li>
                <a
                  href="mailto:learnquickly2600@gmail.com"
                  className="group flex items-start gap-4 p-3 rounded-2xl hover:bg-slate-900/50 transition-colors -ml-3"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-slate-300 font-medium mb-1 group-hover:text-white transition-colors">Email Us</p>
                    <p className="text-slate-500 group-hover:text-blue-400 transition-colors break-all">learnquickly2600@gmail.com</p>
                  </div>
                </a>
              </li>

              {/* Address */}
              <li>
                <a
                  href="https://www.google.com/maps/place/Siddhi+Vinayak+Commercial+Complex,+Bhiwandi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-3 rounded-2xl hover:bg-slate-900/50 transition-colors -ml-3"
                >
                   <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-slate-300 font-medium mb-1 group-hover:text-white transition-colors flex items-center gap-2">
                      Visit Us <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </p>
                    <p className="text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors">
                      2nd Floor, Siddhi Vinayak Commercial Complex,<br />
                      Temghar Pipeline Naka, Near Aishwarya Hotel,<br />
                      Bhiwandi - 421302
                    </p>
                  </div>
                </a>
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 text-sm text-slate-500">
            <p className="text-center md:text-left">
              © {new Date().getFullYear()} Learn Quickly Academy. All rights reserved.
            </p>
            <div className="hidden md:block w-1 h-1 rounded-full bg-slate-700" />
            <p className="flex items-center gap-1.5 text-center md:text-left font-medium">
              Designed & Developed with <span className="text-red-500 animate-pulse drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]">❤️</span> by{" "}
              <a 
                href="https://www.codefusionprojects.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-all duration-300 hover:-translate-y-0.5 relative group inline-block"
              >
                Code Fusion Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="group relative p-3 bg-slate-900 border border-slate-800 hover:border-blue-500/50 rounded-full text-slate-400 hover:text-white transition-all duration-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:-translate-y-1"
            aria-label="Scroll to top"
          >
            <div className="absolute inset-0 rounded-full bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <ArrowUp className="w-5 h-5 relative z-10 group-hover:animate-bounce" />
          </button>

        </div>
      </div>
    </footer>
  );
}