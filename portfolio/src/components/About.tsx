import { motion } from "framer-motion";
import { Activity, Crosshair, ShieldAlert, GraduationCap, MapPin, User } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import profileImg from "../assets/profile.jpg";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 md:px-6 border-t border-white/5 relative bg-card/20">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono flex items-center gap-3">
            <span className="text-primary text-xl">01.</span> About Me
          </h2>
          <div className="h-px w-full max-w-xs bg-gradient-to-r from-primary/50 to-transparent mt-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Left: Bio text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3 space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              Entry-level <strong className="text-foreground font-semibold">Cybersecurity Enthusiast</strong> with a solid foundation in network security, threat analysis, and vulnerability assessment. Experienced with security tools and basic incident response through hands-on labs and projects.
            </p>
            <p>
              My journey into security started with a deep curiosity about how systems work — and more importantly, how they break. I specialize in threat detection, SIEM monitoring, and web application security testing.
            </p>
            <p>
              Eager to learn, adapt to emerging threats, and contribute to protecting organizational systems. I thrive in high-pressure environments where critical thinking and rapid problem-solving are essential.
            </p>

            <div className="flex flex-col gap-3 pt-2 border-t border-white/10">
              <div className="flex items-center gap-3 text-sm">
                <GraduationCap className="w-4 h-4 text-primary flex-shrink-0" />
                <span>
                  <strong className="text-foreground">BE Computer Science &amp; Engineering</strong> — A.J. Institute of Engineering &amp; Technology, VTU &nbsp;·&nbsp; 2025
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Kottayam, Kerala, India</span>
              </div>
            </div>

            {/* Skill mini-cards */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <Card className="glass-card bg-transparent">
                <CardContent className="p-3 flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/10 text-primary flex-shrink-0">
                    <Activity className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs font-bold">Threat Monitoring</span>
                </CardContent>
              </Card>
              <Card className="glass-card bg-transparent">
                <CardContent className="p-3 flex items-center gap-3">
                  <div className="p-2 rounded-full bg-secondary/10 text-secondary flex-shrink-0">
                    <Crosshair className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs font-bold">Vulnerability Assessment</span>
                </CardContent>
              </Card>
              <Card className="glass-card bg-transparent">
                <CardContent className="p-3 flex items-center gap-3">
                  <div className="p-2 rounded-full bg-purple-500/10 text-purple-400 flex-shrink-0">
                    <ShieldAlert className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs font-bold">Incident Response</span>
                </CardContent>
              </Card>
              <Card className="glass-card bg-transparent">
                <CardContent className="p-3 flex items-center gap-3">
                  <div className="p-2 rounded-full bg-yellow-500/10 text-yellow-400 flex-shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs font-bold">Social Engineering</span>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Right: Profile photo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-2 flex justify-center"
          >
            <div className="relative group">
              {/* Outer glow ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary via-primary/30 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

              {/* Corner brackets — SOC aesthetic */}
              <div className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-primary z-10 rounded-tl-sm"></div>
              <div className="absolute -top-2 -right-2 w-5 h-5 border-t-2 border-r-2 border-primary z-10 rounded-tr-sm"></div>
              <div className="absolute -bottom-2 -left-2 w-5 h-5 border-b-2 border-l-2 border-primary z-10 rounded-bl-sm"></div>
              <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-primary z-10 rounded-br-sm"></div>

              {/* Photo */}
              <div className="relative overflow-hidden rounded-2xl border border-primary/30 shadow-[0_0_30px_rgba(0,212,255,0.15)]">
                <img
                  src={profileImg}
                  alt="Chaithanyasankar S"
                  className="w-full max-w-[280px] object-cover aspect-[3/4] group-hover:scale-105 transition-transform duration-500"
                  style={{ objectPosition: "50% 18%" }}
                />
                {/* Subtle scan line overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none"></div>

                {/* Name badge at bottom */}
                <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-background/80 backdrop-blur-sm border-t border-primary/20">
                  <p className="font-mono text-xs text-primary font-bold tracking-widest">CHAITHANYASANKAR S</p>
                  <p className="font-mono text-[10px] text-muted-foreground">Cybersecurity Analyst</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
