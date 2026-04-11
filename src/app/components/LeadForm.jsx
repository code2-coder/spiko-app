import React from "react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Send, Phone, User, MapPin, Loader2 } from "lucide-react";
import { Button } from "./ui/Button";

export function LeadForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast.success("Thank you for enrolling!", {
      description: "We will contact you shortly to schedule your free demo.",
      duration: 5000,
    });
    reset();
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6 lg:max-w-lg"
          >
            <div className="bg-blue-50 text-blue-700 w-fit px-4 py-2 rounded-full font-bold text-sm tracking-wide shadow-sm border border-blue-100">
              Start Your Journey
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Ready to{" "}
              <span className="text-emerald-500 underline decoration-wavy decoration-emerald-200">
                crack
              </span>{" "}
              your next interview?
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-blue-500 pl-4">
              Join thousands of students who have transformed their lives with
              Learn Quickly Academy. Fill out the form and our team will get
              back to you with a free demo session.
            </p>

            <ul className="space-y-4 pt-4">
              {[
                {
                  text: "Free 1-on-1 counseling",
                  icon: <Phone className="w-5 h-5 text-emerald-500" />,
                },
                {
                  text: "Tailored course recommendations",
                  icon: <User className="w-5 h-5 text-emerald-500" />,
                },
                {
                  text: "Special discounts for freshers",
                  icon: <MapPin className="w-5 h-5 text-emerald-500" />,
                },
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-slate-700 font-medium bg-slate-50 p-3 rounded-xl border border-slate-100 hover:bg-emerald-50 transition-colors duration-300"
                >
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    {item.icon}
                  </div>
                  {item.text}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Form background decorative blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 rounded-3xl blur-2xl -z-10"></div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-100 relative overflow-hidden">
              {/* Form subtle background pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-100/50 to-transparent -z-10 rounded-bl-full"></div>

              <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Book Your Free Demo
                </h3>
                <p className="text-sm text-slate-500">
                  Takes less than a minute
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Full Name
                  </label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors duration-300" />
                    <input
                      id="fullName"
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full pl-12 pr-4 py-4 bg-slate-50 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300 hover:bg-white ${errors.fullName ? "border-red-500" : "border-slate-200 hover:border-blue-300"}`}
                      {...register("fullName", {
                        required: "Full name is required",
                      })}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-red-500 text-xs mt-2 font-medium">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="mobile"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Mobile Number
                  </label>
                  <div className="relative group">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors duration-300" />
                    <span className="absolute left-11 top-1/2 -translate-y-1/2 text-slate-500 font-medium">
                      +91
                    </span>
                    <input
                      id="mobile"
                      type="tel"
                      placeholder="98765 43210"
                      className={`w-full pl-20 pr-4 py-4 bg-slate-50 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300 hover:bg-white ${errors.mobile ? "border-red-500" : "border-slate-200 hover:border-blue-300"}`}
                      {...register("mobile", {
                        required: "Mobile number is required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Please enter a valid 10-digit number",
                        },
                      })}
                    />
                  </div>
                  {errors.mobile && (
                    <p className="text-red-500 text-xs mt-2 font-medium">
                      {errors.mobile.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    City
                  </label>
                  <div className="relative group">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors duration-300" />
                    <input
                      id="city"
                      type="text"
                      placeholder="e.g. Pune, Mumbai"
                      className={`w-full pl-12 pr-4 py-4 bg-slate-50 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300 hover:bg-white ${errors.city ? "border-red-500" : "border-slate-200 hover:border-blue-300"}`}
                      {...register("city", { required: "City is required" })}
                    />
                  </div>
                  {errors.city && (
                    <p className="text-red-500 text-xs mt-2 font-medium">
                      {errors.city.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 text-lg bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-500/20 group rounded-xl mt-4"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-5 h-5 animate-spin" /> Enrolling...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Enroll Now{" "}
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                </Button>

                <p className="text-center text-sm text-slate-500 mt-6 font-medium">
                  We will contact you shortly to confirm your slot.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
