import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Portfolio() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 w-full pt-16">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-background/80 backdrop-blur-sm py-8 text-center text-muted-foreground font-mono text-sm">
        <p>&copy; {new Date().getFullYear()} Chaithanyasankar S. All rights reserved.</p>
        <p className="mt-2 text-xs opacity-50">SYSTEM STATUS: <span className="text-secondary">SECURE</span> | UPTIME: 99.99%</p>
      </footer>
    </div>
  );
}
