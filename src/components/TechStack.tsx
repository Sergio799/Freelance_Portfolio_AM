"use client";

import { motion } from "framer-motion";
import { Server, Database, Code2, LineChart, Terminal, Cpu } from "lucide-react";

const skillCategories = [
  { 
    category: "Languages", 
    items: ["Python", "SQL", "JavaScript"], 
    icon: Code2, 
    color: "text-primary", 
    border: "border-primary/20" 
  },
  { 
    category: "Cloud Platforms", 
    items: ["AWS", "Azure", "GCP"], 
    icon: Server, 
    color: "text-accent", 
    border: "border-accent/20" 
  },
  { 
    category: "Data Engineering", 
    items: ["Spark", "Airflow", "Databricks", "Terraform", "CI/CD"], 
    icon: Cpu, 
    color: "text-yellow-500", 
    border: "border-yellow-500/20" 
  },
  { 
    category: "Databases", 
    items: ["Snowflake", "PostgreSQL", "MySQL", "SQL Server", "Hive"], 
    icon: Database, 
    color: "text-red-500", 
    border: "border-red-500/20" 
  },
  { 
    category: "Systems & Tools", 
    items: ["Linux", "GitHub", "JIRA", "Docker"], 
    icon: Terminal, 
    color: "text-purple-500", 
    border: "border-purple-500/20" 
  },
  { 
    category: "Analytics & BI", 
    items: ["Power BI", "Tableau", "QuickSight", "Excel", "Alteryx"], 
    icon: LineChart, 
    color: "text-orange-500", 
    border: "border-orange-500/20" 
  },
];

export function TechStack() {
  return (
    <section id="skills" className="py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-3xl font-bold mb-4 font-mono tracking-tighter text-primary">
              TECH_ECOSYSTEM
            </h2>
            <p className="text-muted-foreground font-mono max-w-xl">
              A comprehensive view of the tooling and environments I operate within.
            </p>
          </div>
          <div className="text-[10px] font-mono text-muted-foreground animate-pulse">
            SCANNING_DEPENDENCIES... [COMPLETED]
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`p-6 rounded-2xl border ${skill.border} bg-card/50 backdrop-blur-sm relative group hover:border-primary/30 transition-all`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-lg bg-secondary/50 ${skill.color}`}>
                  <skill.icon size={20} />
                </div>
                <h3 className="font-bold font-mono tracking-tight">{skill.category}</h3>
              </div>

              <div className="space-y-4">
                {skill.items.map((item, ii) => (
                  <div key={ii} className="group/item">
                    <div className="flex justify-between text-xs font-mono mb-1.5 opacity-70 group-hover/item:opacity-100 transition-opacity">
                      <span>{item}</span>
                      <span>{90 - (ii * 5)}%</span>
                    </div>
                    <div className="h-1 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${90 - (ii * 5)}%` }}
                        transition={{ duration: 1, delay: 0.5 + (i * 0.1) + (ii * 0.05) }}
                        className={`h-full ${skill.color.replace('text', 'bg')}`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative data scan line */}
              <motion.div
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-px bg-primary/10 pointer-events-none"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
