import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Send, AlertCircle, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      // Reset after 3 seconds
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-6 border-t border-white/5 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary mb-4 text-sm">06. What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Initiate Contact</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            I am currently looking for new opportunities in the cybersecurity field. 
            Whether you have a question, an open position, or just want to connect, 
            my inbox is always open.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-card p-6 rounded-lg border border-white/10 flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-full text-primary mt-1">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-mono font-bold text-lg mb-1">Email</h3>
                <a href="mailto:chaithanyasankar22@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  chaithanyasankar22@gmail.com
                </a>
              </div>
            </div>

            <div className="glass-card p-6 rounded-lg border border-white/10 flex items-start gap-4">
              <div className="p-3 bg-secondary/10 rounded-full text-secondary mt-1">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-mono font-bold text-lg mb-1">Phone</h3>
                <a href="tel:+919188044615" className="text-muted-foreground hover:text-secondary transition-colors">
                  +91 91880 44615
                </a>
              </div>
            </div>

            <div className="glass-card p-6 rounded-lg border border-white/10 flex items-start gap-4">
              <div className="p-3 bg-[#0077b5]/20 rounded-full text-[#0077b5] mt-1">
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-mono font-bold text-lg mb-1">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/chaithanyasankar-s/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#0077b5] transition-colors">
                  linkedin.com/in/chaithanyasankar-s
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-lg space-y-6">
              <div className="space-y-2 text-center mb-6">
                <h3 className="font-mono font-bold text-xl">Secure Transmission</h3>
                <div className="h-px w-full bg-white/5"></div>
              </div>

              <div className="space-y-2">
                <label htmlFor="name" className="font-mono text-sm text-muted-foreground">IDENTIFIER (Name)</label>
                <Input id="name" required className="bg-background/50 border-white/10 focus-visible:border-primary font-mono" placeholder="John Doe" />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="font-mono text-sm text-muted-foreground">RETURN_ADDRESS (Email)</label>
                <Input id="email" type="email" required className="bg-background/50 border-white/10 focus-visible:border-primary font-mono" placeholder="john@company.com" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="font-mono text-sm text-muted-foreground">PAYLOAD (Message)</label>
                <Textarea id="message" required className="bg-background/50 border-white/10 focus-visible:border-primary min-h-[120px] font-mono" placeholder="Enter message here..." />
              </div>

              <Button 
                type="submit" 
                className="w-full font-mono font-bold tracking-widest bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={formStatus !== "idle"}
              >
                {formStatus === "idle" && (
                  <span className="flex items-center gap-2"><Send className="w-4 h-4" /> TRANSMIT_DATA</span>
                )}
                {formStatus === "submitting" && "ENCRYPTING & SENDING..."}
                {formStatus === "success" && (
                  <span className="flex items-center gap-2 text-green-950"><CheckCircle2 className="w-4 h-4" /> TRANSMISSION_SUCCESSFUL</span>
                )}
                {formStatus === "error" && (
                  <span className="flex items-center gap-2 text-destructive"><AlertCircle className="w-4 h-4" /> TRANSMISSION_FAILED</span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
