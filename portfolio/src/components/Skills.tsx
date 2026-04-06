import { motion } from "framer-motion";
import { Server, Globe, PenTool, Database, TerminalSquare, ShieldCheck } from "lucide-react";
import { SiSplunk, SiLinux, SiKalilinux, SiMetasploit, SiWireshark } from "react-icons/si";

const SKILLS_DATA = [
  {
    category: "Network Security",
    icon: <Server className="w-5 h-5" />,
    color: "text-blue-400",
    skills: ["TCP/IP", "DNS", "Packet Analysis", "Nmap", "DNS Spoofing"]
  },
  {
    category: "Web Application Security",
    icon: <Globe className="w-5 h-5" />,
    color: "text-green-400",
    skills: ["SQL Injection", "XSS", "Authentication Flaws", "OWASP Top 10"]
  },
  {
    category: "Penetration Testing",
    icon: <PenTool className="w-5 h-5" />,
    color: "text-purple-400",
    skills: ["Nmap", "Metasploit", "Nessus", "OpenVAS", "OSINT", "Social Engineering"]
  },
  {
    category: "SIEM & SOC",
    icon: <Database className="w-5 h-5" />,
    color: "text-yellow-400",
    skills: ["Splunk", "IBM QRadar", "Wazuh", "Log Analysis", "Event Correlation"]
  },
  {
    category: "Operating Systems",
    icon: <TerminalSquare className="w-5 h-5" />,
    color: "text-orange-400",
    skills: ["Linux", "Windows", "CLI", "System Administration", "Kali Linux"]
  },
  {
    category: "Security Concepts",
    icon: <ShieldCheck className="w-5 h-5" />,
    color: "text-red-400",
    skills: ["Vulnerability Assessment", "Password Cracking", "CIA Triad", "Active Directory", "Android Security"]
  }
];

type PlatformEntry = {
  name: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
};

const PLATFORMS: PlatformEntry[] = [
  { name: "Splunk", icon: SiSplunk, color: "#65A637" },
  { name: "Metasploit", icon: SiMetasploit, color: "#2596CD" },
  { name: "Wireshark", icon: SiWireshark, color: "#1679A7" },
  { name: "Linux", icon: SiLinux, color: "#FCC624" },
  { name: "Kali Linux", icon: SiKalilinux, color: "#557C94" },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } }
  };

  return (
    <section id="skills" className="py-24 px-4 md:px-6 border-t border-white/5 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono flex items-center gap-3">
            <span className="text-primary text-xl">02.</span> Technical Skills
          </h2>
          <div className="h-px w-full max-w-xs bg-gradient-to-r from-primary/50 to-transparent mt-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS_DATA.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-lg p-6 group"
            >
              <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-4">
                <div className={`p-2 rounded-md bg-white/5 ${category.color} group-hover:scale-110 transition-transform`}>
                  {category.icon}
                </div>
                <h3 className="font-bold font-mono">{category.category}</h3>
              </div>
              
              <ul className="space-y-3">
                {category.skills.map((skill, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <span className="text-primary text-xs">▹</span> {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center gap-6 md:gap-12 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
        >
          {PLATFORMS.map((platform, i) => {
            const Icon = platform.icon;
            return (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="flex flex-col items-center gap-2"
              >
                <Icon className="w-10 h-10 md:w-12 md:h-12" style={{ color: platform.color !== '#000000' ? platform.color : 'white' }} />
                <span className="text-xs font-mono text-muted-foreground">{platform.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
