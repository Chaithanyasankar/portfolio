import { motion } from "framer-motion";
import { FolderGit2, ShieldCheck, Server, Terminal } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";

type Project = {
  title: string;
  label: string;
  description: string;
  details: string[];
  tech: string[];
  accentColor: string;
  icon: React.ReactNode;
};

const PROJECTS: Project[] = [
  {
    title: "SOC Implementation",
    label: "SIEM / Threat Detection",
    description: "Simulated real-world attack scenarios by exposing insecure services and performing privilege escalation to demonstrate live threat detection capabilities.",
    details: [
      "Simulated real-world attack scenarios by exposing insecure services and executing privilege escalation techniques in a controlled lab environment.",
      "Implemented Splunk Enterprise with Universal Forwarder to centralize logs and monitor system activity across endpoints.",
      "Configured dashboards, alert rules, and correlation searches in Splunk for automated threat detection.",
      "Documented attack vectors, detection timelines, and incident response actions for each simulated scenario."
    ],
    tech: ["Splunk", "Universal Forwarder", "Linux", "Privilege Escalation", "Log Analysis", "SIEM"],
    accentColor: "border-l-yellow-400",
    icon: <ShieldCheck className="w-10 h-10 text-yellow-400" />
  },
  {
    title: "Splunk SIEM Configuration",
    label: "Log Ingestion / Monitoring",
    description: "Deployed and configured Splunk Universal Forwarder on a Linux machine to ingest system logs and forward them to a central Splunk Enterprise instance for real-time analysis.",
    details: [
      "Downloaded and installed Splunk Universal Forwarder (v10.0.2) on Linux, extracted to /opt and started with license acceptance.",
      "Configured auto-start on boot with splunk enable boot-start and created admin credentials for secure access.",
      "Added log monitoring for /var/log/* — ingesting auth.log, syslog, and kern.log with syslog sourcetype.",
      "Forwarded collected logs to Splunk Enterprise server at 192.168.1.10:9998 and verified ingestion using host=\"jarvis\" SPL query.",
      "Explored the Splunk Search & Reporting app — ran queries, analyzed event timelines, and configured alert rules based on log patterns."
    ],
    tech: ["Splunk Enterprise", "Universal Forwarder", "SPL", "Linux", "Log Analysis", "Alerting"],
    accentColor: "border-l-[#65A637]",
    icon: <Terminal className="w-10 h-10 text-[#65A637]" />
  },
  {
    title: "Ubuntu Machine Configuration — FTP & SSH",
    label: "Network Services / Linux Administration",
    description: "Configured a Ubuntu 24.04 LTS virtual machine on VirtualBox with FTP and SSH services, applied firewall rules, and validated network service accessibility using Nmap.",
    details: [
      "Set up Ubuntu 24.04.4 LTS (Desktop) in VirtualBox as a target lab machine for service configuration and network scanning practice.",
      "Configured vsftpd FTP server with anonymous login enabled (anon_root=/srv/ftp, local_enable=YES) — verified port 21/tcp open via Nmap service scan.",
      "Connected to the FTP server anonymously (username: anonymous) and retrieved flag.txt using the get command — confirming successful anonymous access.",
      "Installed and configured OpenSSH server, enabled auto-start on boot, and allowed port 22/tcp through UFW firewall for both IPv4 and IPv6.",
      "Performed SSH remote login as jarvis@192.168.1.60, verifying encrypted shell access and firewall rule enforcement."
    ],
    tech: ["Ubuntu 24.04 LTS", "vsftpd", "OpenSSH", "Nmap", "UFW Firewall", "VirtualBox", "FTP", "SSH"],
    accentColor: "border-l-blue-400",
    icon: <Server className="w-10 h-10 text-blue-400" />
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 md:px-6 border-t border-white/5 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono flex items-center gap-3">
            <span className="text-primary text-xl">04.</span> Featured Projects
          </h2>
          <div className="h-px w-full max-w-xs bg-gradient-to-r from-primary/50 to-transparent mt-4"></div>
        </motion.div>

        <div className="grid gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className={`glass-card bg-transparent overflow-hidden border-l-4 ${project.accentColor} relative group`}>
                <div className="absolute right-4 top-4 opacity-5 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none scale-150">
                  {project.icon}
                </div>

                <CardHeader>
                  <div className="flex items-start gap-3 mb-2">
                    <FolderGit2 className="w-7 h-7 text-primary flex-shrink-0 mt-0.5" />
                    <span className="font-mono text-xs text-muted-foreground border border-white/10 rounded px-2 py-0.5 bg-white/5">
                      {project.label}
                    </span>
                  </div>
                  <CardTitle className="text-xl md:text-2xl font-bold font-mono">{project.title}</CardTitle>
                  <CardDescription className="text-base text-muted-foreground mt-2 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mt-2">
                    {project.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="text-primary mt-1 flex-shrink-0">▹</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pt-4 border-t border-white/5 mt-2">
                  <div className="flex flex-wrap gap-2 font-mono text-xs">
                    {project.tech.map((tech, j) => (
                      <span key={j} className="px-2 py-1 rounded bg-white/5 text-primary/80 border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
