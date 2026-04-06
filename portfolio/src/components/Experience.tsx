import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 md:px-6 border-t border-white/5 relative bg-card/20">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono flex items-center gap-3">
            <span className="text-primary text-xl">03.</span> Experience
          </h2>
          <div className="h-px w-full max-w-xs bg-gradient-to-r from-primary/50 to-transparent mt-4"></div>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative pl-8 md:pl-10"
          >
            {/* Timeline node */}
            <div className="absolute -left-[5px] top-1 w-[10px] h-[10px] rounded-full bg-primary shadow-[0_0_10px_rgba(0,212,255,0.8)]"></div>
            <div className="absolute -left-[1px] top-1 w-[2px] h-full bg-gradient-to-b from-primary to-transparent -z-10"></div>

            <div className="glass-card rounded-lg p-6 md:p-8 hover:-translate-y-1 transition-transform duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground font-mono">Cyber Security Intern</h3>
                  <div className="flex items-center gap-2 text-primary mt-1">
                    <Briefcase className="w-4 h-4" />
                    <span className="font-medium">OneTeam Edtech Pvt. Ltd.</span>
                  </div>
                </div>
                
                <div className="flex flex-col items-start md:items-end gap-2 text-sm text-muted-foreground font-mono">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Aug 2025 – Mar 2026</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Kottayam, Kerala</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-4 text-muted-foreground text-sm md:text-base">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▹</span>
                  <span>Conducted <strong>vulnerability assessments</strong> and network enumeration using <strong>Nessus, OpenVAS, and Nmap</strong> to identify and document security weaknesses.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▹</span>
                  <span>Performed <strong>web application security testing</strong> aligned with OWASP standards, targeting SQL injection, XSS, and authentication flaws.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▹</span>
                  <span>Assisted in <strong>log analysis, incident investigations</strong>, and escalation — monitoring events across Linux and Windows environments.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▹</span>
                  <span>Supported <strong>security reviews</strong> across Linux and Windows systems, identifying misconfigurations and enforcing hardening best practices.</span>
                </li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
