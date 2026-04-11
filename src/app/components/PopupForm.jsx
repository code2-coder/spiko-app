import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { User, Phone, MapPin, Send, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { toast } from "sonner";

export function PopupForm() {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("spiko_popup_seen");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setOpen(true);
        sessionStorage.setItem("spiko_popup_seen", "true");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const onSubmit = async (data) => {
    const message = `Hello, I want to inquire.
Name: ${data.fullName}
Mobile: ${data.mobile}
City: ${data.city}`;
    
    const whatsappNumber = "917841892600";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank");

    toast.success("Redirecting to WhatsApp!", {
      duration: 3000,
    });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md border-0 overflow-hidden p-0 rounded-2xl bg-white">
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white text-center">
          <DialogTitle className="text-3xl font-extrabold mb-2 text-white">Let's Connect!</DialogTitle>
          <DialogDescription className="text-blue-100/90 text-sm">
            Leave your details for a free counseling session and crack your next interview.
          </DialogDescription>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)} className="p-8 pt-6 space-y-5">
          <div>
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors" />
              <input
                type="text"
                placeholder="Full Name"
                className={`w-full pl-12 pr-4 py-3.5 bg-slate-50/50 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all hover:bg-white ${errors.fullName ? "border-red-500" : "border-slate-200"}`}
                {...register("fullName", { required: "Name is required" })}
              />
            </div>
            {errors.fullName && <p className="text-red-500 text-xs mt-1 font-medium px-2">{errors.fullName.message}</p>}
          </div>

          <div>
            <div className="relative group">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors" />
              <input
                type="tel"
                placeholder="Mobile Number"
                className={`w-full pl-12 pr-4 py-3.5 bg-slate-50/50 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all hover:bg-white ${errors.mobile ? "border-red-500" : "border-slate-200"}`}
                {...register("mobile", { 
                  required: "Mobile is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Please enter a valid 10-digit number",
                  },
                })}
              />
            </div>
            {errors.mobile && <p className="text-red-500 text-xs mt-1 font-medium px-2">{errors.mobile.message}</p>}
          </div>

          <div>
            <div className="relative group">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors" />
              <input
                type="text"
                placeholder="City"
                className={`w-full pl-12 pr-4 py-3.5 bg-slate-50/50 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all hover:bg-white ${errors.city ? "border-red-500" : "border-slate-200"}`}
                {...register("city", { required: "City is required" })}
              />
            </div>
            {errors.city && <p className="text-red-500 text-xs mt-1 font-medium px-2">{errors.city.message}</p>}
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full py-6 text-lg bg-[#25D366] hover:bg-[#20bd5a] shadow-lg shadow-[#25D366]/20 rounded-xl mt-6 text-white font-bold group">
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin" /> Verifying...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                Connect on WhatsApp <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
