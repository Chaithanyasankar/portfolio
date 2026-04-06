import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

const CERTS = [
  {
    title: "Advent of Cyber 2025",
    issuer: "TryHackMe",
    date: "2025",
    link: "https://tryhackme.com"
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "2026",
    link: "https://www.netacad.com"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-4 md:px-6 border-t border-white/5 relative bg-card/20">
      <div className="container mx-auto max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono flex items-center gap-3">
            <span className="text-primary text-xl">05.</span> Certifications
          </h2>
          <div className="h-px w-full max-w-xs bg-gradient-to-r from-primary/50 to-transparent mt-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {CERTS.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="glass-card bg-transparent h-full hover:border-primary/50 transition-colors group">
                <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                  <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    <Award className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg font-bold">{cert.title}</CardTitle>
                    <p className="text-sm text-muted-foreground font-mono mt-1">{cert.issuer}</p>
                  </div>
                </CardHeader>
                <CardContent className="flex justify-between items-center text-sm text-muted-foreground font-mono border-t border-white/5 pt-4">
                  <span>{cert.date}</span>
                  <a href={cert.link} className="flex items-center gap-1 hover:text-primary transition-colors">
                    Verify <ExternalLink className="w-3 h-3" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
