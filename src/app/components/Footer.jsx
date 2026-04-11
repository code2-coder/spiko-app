import React, { useCallback } from "react";
import { Mail, Globe, ArrowUp, MapPin } from "lucide-react";

export function Footer() {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Spiko Logo" className="h-10 w-10 object-contain" />
              <h3 className="text-2xl font-bold text-white">
                Learn Quickly Academy <span className="text-blue-500">|</span> Spiko
              </h3>
            </div>

            <p className="text-slate-400 max-w-sm leading-relaxed">
              India's #1 Practical Learning Platform. Transforming students and
              job seekers into confident English speakers.
            </p>

            <p className="font-medium text-slate-300">
              Founder: <span className="text-white">Hitendra Choudhari</span>
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>

            <ul className="space-y-2 text-sm">
              {[
                { name: "About Us", link: "#about" },
                { name: "Our Courses", link: "#courses" },
                { name: "Success Stories", link: "#testimonials" },
                { name: "Contact Us", link: "#contact" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Info
            </h4>

            <ul className="space-y-4 text-sm">

              {/* Email */}
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <a
                  href="mailto:learnquickly2600@gmail.com"
                  className="hover:text-white transition-colors break-all"
                >
                  learnquickly2600@gmail.com
                </a>
              </li>

              {/* Address */}
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <a
                  href="https://www.google.com/maps/place/Siddhi+Vinayak+Commercial+Complex,+Bhiwandi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors leading-relaxed"
                >
                  2nd Floor, Siddhi Vinayak Commercial Complex,
                  Temghar Pipeline Naka, Near Aishwarya Hotel,
                  Bhiwandi - 421302
                </a>
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()} Learn Quickly Academy. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="p-2 bg-slate-800 hover:bg-blue-600 rounded-full text-slate-400 hover:text-white transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>

        </div>
      </div>
    </footer>
  );
}