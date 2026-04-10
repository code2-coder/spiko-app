import React from "react";
import { Toaster } from "sonner";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { VisionMission } from "./components/VisionMission";
import { Features } from "./components/Features";
import { Courses } from "./components/Courses";
import { TeacherRole } from "./components/TeacherRole";
import { Hiring } from "./components/Hiring";
import { Testimonials } from "./components/Testimonials";
import { LeadForm } from "./components/LeadForm";
import { Footer } from "./components/Footer";
import { FloatingContact } from "./components/FloatingContact";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <About />
        <VisionMission />
        <Features />
        <Courses />
        <TeacherRole />
        <Testimonials />
        {/* <Hiring /> */}
        <LeadForm />
      </main>

      <Footer />
      <FloatingContact />
      <Toaster position="top-center" richColors />
    </div>
  );
}
