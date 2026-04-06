import { useState, useEffect } from "react";

export function useTypewriter(text: string, speed = 50) {
  const [displayedText, setDisplayedText] = useState("");
  
  useEffect(() => {
    let i = 0;
    setDisplayedText("");
    
    const intervalId = setInterval(() => {
      setDisplayedText(text.substring(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(intervalId);
      }
    }, speed);
    
    return () => clearInterval(intervalId);
  }, [text, speed]);
  
  return displayedText;
}

export default function Terminal() {
  const [step, setStep] = useState(0);
  
  const text1 = useTypewriter("nmap -sV -p- target.system", 50);
  const text2 = useTypewriter(step >= 1 ? "Starting Nmap 7.93 ( https://nmap.org ) at 2025-01-01 00:00 UTC" : "", 20);
  const text3 = useTypewriter(step >= 2 ? "Nmap scan report for target.system (192.168.1.100)" : "", 20);
  const text4 = useTypewriter(step >= 3 ? "Host is up (0.00032s latency)." : "", 20);
  const text5 = useTypewriter(step >= 4 ? "PORT     STATE SERVICE VERSION" : "", 20);
  const text6 = useTypewriter(step >= 5 ? "22/tcp   open  ssh     OpenSSH 8.9p1" : "", 20);
  const text7 = useTypewriter(step >= 6 ? "80/tcp   open  http    nginx 1.18.0" : "", 20);
  const text8 = useTypewriter(step >= 7 ? "443/tcp  open  ssl/http nginx 1.18.0" : "", 20);
  const text9 = useTypewriter(step >= 8 ? "Scan complete: 1 IP address (1 host up) scanned in 2.45 seconds" : "", 20);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 1500);
    const timer2 = setTimeout(() => setStep(2), 2500);
    const timer3 = setTimeout(() => setStep(3), 3000);
    const timer4 = setTimeout(() => setStep(4), 3500);
    const timer5 = setTimeout(() => setStep(5), 4000);
    const timer6 = setTimeout(() => setStep(6), 4500);
    const timer7 = setTimeout(() => setStep(7), 5000);
    const timer8 = setTimeout(() => setStep(8), 5500);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
      clearTimeout(timer7);
      clearTimeout(timer8);
    };
  }, []);

  return (
    <div className="w-full max-w-lg rounded-md overflow-hidden border border-white/10 bg-black/50 backdrop-blur-md shadow-[0_0_30px_rgba(0,212,255,0.15)] font-mono text-xs sm:text-sm">
      <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        <span className="ml-2 text-muted-foreground opacity-60">root@soc-terminal:~</span>
      </div>
      <div className="p-4 text-left text-green-400/90 min-h-[250px]">
        <div className="flex">
          <span className="text-primary mr-2">$</span>
          <span>{text1}</span>
        </div>
        {step >= 1 && <div className="mt-2 text-muted-foreground">{text2}</div>}
        {step >= 2 && <div>{text3}</div>}
        {step >= 3 && <div>{text4}</div>}
        {step >= 4 && <div className="mt-2 text-primary/80">{text5}</div>}
        {step >= 5 && <div>{text6}</div>}
        {step >= 6 && <div>{text7}</div>}
        {step >= 7 && <div>{text8}</div>}
        {step >= 8 && <div className="mt-2 text-yellow-400/80">{text9}</div>}
        {step >= 8 && (
          <div className="flex mt-2">
            <span className="text-primary mr-2">$</span>
            <span className="w-2 h-4 bg-primary inline-block animate-pulse"></span>
          </div>
        )}
      </div>
    </div>
  );
}
