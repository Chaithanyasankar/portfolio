import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Shield, Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const NAV_LINKS = [
  { href: "#about", label: "01. About" },
  { href: "#skills", label: "02. Skills" },
  { href: "#experience", label: "03. Experience" },
  { href: "#projects", label: "04. Projects" },
  { href: "#certifications", label: "05. Certs" },
  { href: "#contact", label: "06. Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-primary/20 shadow-[0_4px_30px_rgba(0,212,255,0.1)]"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 text-primary">
          <Shield className="w-6 h-6" />
          <span className="font-mono font-bold tracking-tight text-lg neon-text">CS.SYS</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 font-mono text-sm">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
          <Button 
            variant="outline" 
            className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground font-mono text-xs rounded-sm ml-4"
            onClick={() => scrollToSection("#contact")}
          >
            INITIATE_CONTACT
          </Button>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-card/95 backdrop-blur-md border-b border-primary/20 p-4 flex flex-col gap-4 shadow-xl">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-left font-mono text-sm text-muted-foreground hover:text-primary p-2"
            >
              {link.label}
            </button>
          ))}
          <Button 
            variant="outline" 
            className="w-full border-primary/50 text-primary mt-2"
            onClick={() => scrollToSection("#contact")}
          >
            INITIATE_CONTACT
          </Button>
        </div>
      )}
    </nav>
  );
}
