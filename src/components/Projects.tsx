"use client";

import { motion } from "framer-motion";
import { ExternalLink, Database, GitBranch, BookOpen } from "lucide-react";

const publications = [
  {
    title: "iLock: State-of-the-art Sophisticated Door Lock for Wireless Devices",
    type: "Research Publication",
    conference: "IEEE International Conference on Innovative Mechanisms for Industry Applications (ICIMIA 2020)",
    description: "This research presents a comprehensive smart door lock solution designed for modern wireless environments. The system integrates multiple authentication methods including fingerprint biometrics, Bluetooth proximity detection, and Wi-Fi connectivity for remote access control. Built on Arduino Uno microcontroller, the iLock features a unique guest mode that allows temporary access codes to be generated and shared with visitors, eliminating the need for physical keys. The architecture prioritizes both security through multi-factor authentication and cost-effectiveness, making smart home technology accessible to a broader audience. The paper demonstrates real-world implementation with latency optimization techniques and discusses future enhancements for integration with voice assistants and home automation systems.",
    tags: ["IoT", "Arduino", "Security", "Wireless", "Biometrics", "Smart Home"],
    metrics: { sensors: "4+", latency: "Low", status: "Published" },
    image: "https://images.unsplash.com/photo-1558002038-103792e1773a?auto=format&fit=crop&q=80&w=800"
  }
];

export function Projects() {
  return (
    <section id="publications" className="py-12 md:py-24 px-4 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
          <div className="mb-8 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-mono tracking-tighter text-primary">
              RESEARCH_RESOURCES
            </h2>
            <p className="text-muted-foreground font-mono max-w-xl text-sm md:text-base">
              Academic contributions and technical publications in the field of IoT and smart systems.
            </p>
          </div>

        <div className="grid grid-cols-1 gap-8">
          {publications.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 max-w-4xl mx-auto"
            >
              <div className="p-4 md:p-8">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 rounded bg-secondary border border-border text-primary text-[10px] font-mono font-bold uppercase">
                          {project.type}
                        </span>
                      </div>
                    <div className="flex items-center gap-2 mb-4 text-[10px] md:text-xs font-mono text-primary">
                      <BookOpen size={14} className="flex-shrink-0" />
                      <span className="break-words">{project.conference}</span>
                    </div>
                    
                    <h3 className="text-lg md:text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-6 font-mono">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-3 gap-2 md:gap-4 p-3 md:p-4 rounded-xl bg-secondary/30 mb-6 border border-border/50">
                      {Object.entries(project.metrics).map(([key, value], mi) => (
                        <div key={mi} className="text-center">
                          <div className="text-[8px] md:text-[10px] text-muted-foreground font-mono uppercase mb-1">{key}</div>
                          <div className="text-xs md:text-sm font-bold text-primary">{value}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, ti) => (
                          <span key={ti} className="text-[9px] md:text-[10px] font-mono opacity-50 flex items-center gap-1">
                            <GitBranch size={10} /> {tag}
                          </span>
                        ))}
                      </div>
                      <a
                          href="https://ieeexplore.ieee.org/document/9074972"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-background/80 border border-border hover:text-primary transition-colors self-end sm:self-auto"
                        >
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>
                </motion.div>
          ))}
        </div>

        <div className="mt-8 md:mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-card border border-border rounded-full text-[10px] font-mono text-muted-foreground">
            <Database size={12} className="text-primary" />
            END_OF_COLLECTION
          </div>
        </div>
      </div>
    </section>
  );
}
