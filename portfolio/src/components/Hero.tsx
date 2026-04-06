import { motion } from "framer-motion";
import { ChevronDown, Terminal as TerminalIcon } from "lucide-react";
import { Button } from "./ui/button";
import Terminal from "./Terminal";

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };
  
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-[calc(100vh-4rem)] flex items-center justify-center relative overflow-hidden px-4 md:px-6 py-12 md:py-0">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary w-fit font-mono text-sm mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            SYSTEM STATUS: ONLINE
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
            Chaithanyasankar S
          </h1>
          
          <div className="flex items-center gap-3 text-xl md:text-2xl text-muted-foreground font-mono">
            <TerminalIcon className="w-6 h-6 text-primary" />
            <span className="text-primary neon-text">&gt;</span>
            <span>Cybersecurity Analyst <span className="text-white/20">|</span> SOC Enthusiast</span>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            Aspiring Cybersecurity Analyst focused on threat detection and incident response. Building resilient systems and identifying vulnerabilities before they are exploited.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mt-4 font-mono">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 border border-transparent hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all rounded-sm"
              onClick={scrollToProjects}
            >
              VIEW_PROJECTS
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/30 text-primary hover:bg-primary/10 rounded-sm"
              onClick={scrollToContact}
            >
              CONTACT_ME
            </Button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center lg:justify-end"
        >
          <Terminal />
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground font-mono text-sm animate-bounce"
      >
        <span>SCROLL</span>
        <ChevronDown className="w-5 h-5 text-primary" />
      </motion.div>
    </section>
  );
}
