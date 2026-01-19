"use client";

import { motion } from "framer-motion";
import { Terminal, Database, Cpu, Activity } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const [text, setText] = useState("");
  const [mounted, setMounted] = useState(false);
  const fullText = "SELECT * FROM career_journey WHERE impact = 'MAXIMUM';";
  
  useEffect(() => {
    setMounted(true);
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Background Data Flow Particles */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        {mounted && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-primary"
            initial={{ width: 0, x: -100, y: Math.random() * 100 + "%" }}
            animate={{ 
              width: [0, 100, 0], 
              x: ["0%", "100%"],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            style={{ left: 0 }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center max-w-4xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono mb-6">
          <Activity size={14} className="animate-pulse" />
          SYSTEM_STATUS: OPERATIONAL
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
          Bhaskar <span className="text-primary data-glow">Bavineni</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12 font-mono max-w-2xl mx-auto">
          {"> "} Data Engineer & Analyst specializing in scalable cloud ecosystems.
        </p>

        <div className="bg-card/50 border border-border rounded-lg p-6 font-mono text-left mb-12 shadow-2xl backdrop-blur-sm relative overflow-hidden group">
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <p className="text-primary mb-2">$ query --experience</p>
          <p className="text-foreground">{text}<span className="animate-pulse">_</span></p>
          
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Terminal size={80} />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {[
            { label: "Pipelines", value: "50+", icon: Activity },
            { label: "Records", value: "2B+", icon: Database },
            { label: "Impact", value: "$5M+", icon: Cpu },
            { label: "Uptime", value: "99.9%", icon: Activity },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="p-4 rounded-xl border border-border bg-secondary/30 text-center"
            >
              <stat.icon className="mx-auto mb-2 text-primary" size={20} />
              <div className="text-xl font-bold">{stat.value}</div>
              <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground opacity-50"
      >
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent mx-auto" />
      </motion.div>
    </section>
  );
}
