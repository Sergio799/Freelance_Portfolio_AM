"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Database, GitBranch, Share2, BookOpen } from "lucide-react";

const publications = [
  {
    title: "iLock: State-of-the-art Sophisticated Door Lock for Wireless Devices",
    type: "Research Publication",
    conference: "IEEE International Conference on Innovative Mechanisms for Industry Applications (ICIMIA 2020)",
    description: "Designed a smart lock system with guest mode features using Arduino Uno, Wi-Fi, Bluetooth, and Fingerprint sensors. Focused on security and cost-effectiveness for smart homes.",
    tags: ["IoT", "Arduino", "Security", "Wireless"],
    metrics: { sensors: "4+", latency: "Low", status: "Published" },
    image: "https://images.unsplash.com/photo-1558002038-103792e1773a?auto=format&fit=crop&q=80&w=800"
  }
];

export function Projects() {
  return (
    <section id="publications" className="py-24 px-4 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4 font-mono tracking-tighter text-primary data-glow">
            RESEARCH_RESOURCES
          </h2>
          <p className="text-muted-foreground font-mono max-w-xl">
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
              <div className="grid md:grid-cols-5 h-full">
                <div className="md:col-span-2 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-card/0 via-transparent to-card hidden md:block" />
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-0.5 rounded bg-primary/20 text-primary text-[10px] font-mono font-bold uppercase backdrop-blur-sm">
                      {project.type}
                    </span>
                  </div>
                </div>

                <div className="md:col-span-3 p-8">
                  <div className="flex items-center gap-2 mb-4 text-xs font-mono text-primary">
                    <BookOpen size={14} />
                    {project.conference}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-mono">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-secondary/30 mb-6 border border-border/50">
                    {Object.entries(project.metrics).map(([key, value], mi) => (
                      <div key={mi} className="text-center">
                        <div className="text-[10px] text-muted-foreground font-mono uppercase mb-1">{key}</div>
                        <div className="text-sm font-bold text-primary">{value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, ti) => (
                        <span key={ti} className="text-[10px] font-mono opacity-50 flex items-center gap-1">
                          <GitBranch size={10} /> {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href="#"
                      className="p-2 rounded-full bg-background/80 border border-border hover:text-primary transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-full text-[10px] font-mono text-muted-foreground">
            <Database size={12} className="text-primary" />
            END_OF_COLLECTION
          </div>
        </div>
      </div>
    </section>
  );
}
