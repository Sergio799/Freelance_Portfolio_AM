"use client";

import { motion } from "framer-motion";
import { ArrowRight, Database, Code, Cloud, MapPin, Calendar } from "lucide-react";

const milestones = [
  {
    phase: "Ingest: HCLTech",
    title: "Data Analyst",
    company: "HCLTech",
    location: "Hyderabad, India",
    period: "Aug 2020 – Jul 2022",
    description: "Optimized SQL queries and SSIS transformations. Unified Azure SQL and Snowflake for 50% better performance.",
    icon: Database,
    tools: ["SQL", "SSIS", "Snowflake", "Power BI"]
  },
  {
    phase: "Transform: SLU",
    title: "Data Analyst",
    company: "Saint Louis University",
    location: "St Louis, MO",
    period: "Jan 2024 – Oct 2024",
    description: "Delivered Azure-based pipelines for academic records. Administered PostgreSQL and enforced FERPA governance.",
    icon: Code,
    tools: ["Azure Synapse", "HDInsight", "PostgreSQL", "Power BI"]
  },
  {
    phase: "Process: Ocean Spray",
    title: "Data Engineer",
    company: "Ocean Spray Inc",
    location: "Charlotte, NC",
    period: "Nov 2024 – Sep 2025",
    description: "Led GCP modernization, migrating 200+ Hive tables to BigQuery. Automated workflows saving 25 hrs/week.",
    icon: Database,
    tools: ["Airflow", "BigQuery", "Python", "Tidal"]
  },
  {
    phase: "Delivery: HCLTech",
    title: "Data Engineer",
    company: "HCLTech",
    location: "Charlotte, NC",
    period: "Oct 2025 – Present",
    description: "Engineering real-time and batch data pipelines across AWS, Azure, and GCP, processing 2B+ records daily.",
    icon: Cloud,
    tools: ["AWS Glue", "Azure Data Factory", "BigQuery", "Terraform"]
  }
];

export function Pipeline() {
  return (
    <section id="experience" className="py-24 px-4 bg-secondary/10 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4 font-mono tracking-tighter text-primary">
            THE CAREER_PIPELINE
          </h2>
          <p className="text-muted-foreground font-mono max-w-xl">
            A chronological visualization of data engineering and analytical impact.
          </p>
        </div>

        <div className="relative">
          {/* Main Pipeline Path */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-border -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {milestones.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className="relative bg-card border border-border p-6 rounded-2xl group hover:border-primary/50 transition-all"
                >
                {/* Node on the pipeline */}
                <div className="absolute -top-3 left-6 px-3 py-1 bg-secondary border border-border text-foreground text-[10px] font-bold font-mono uppercase tracking-widest rounded-full">
                  {item.phase}
                </div>

                <div className="mb-6 mt-2">
                  <div className="flex items-center justify-between mb-4">
                    <item.icon className="text-primary" size={24} />
                    <span className="text-[10px] font-mono text-muted-foreground flex items-center gap-1">
                      <Calendar size={10} />
                      {item.period}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono mb-4">
                    <MapPin size={10} />
                    {item.location}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {item.tools.map((tool, ti) => (
                    <span key={ti} className="px-2 py-0.5 bg-secondary text-[9px] font-mono rounded border border-border text-foreground/80">
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Arrow for the next step */}
                {i < milestones.length - 1 && (
                  <div className="absolute top-1/2 -right-6 -translate-y-1/2 hidden lg:block text-primary/30 group-hover:text-primary transition-colors">
                    <ArrowRight size={20} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Real-time stats simulation */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-border bg-secondary/30 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <h4 className="font-mono text-xs font-bold uppercase tracking-widest">Processing_Efficiency</h4>
                </div>
                <div className="h-1.5 bg-border rounded-full overflow-hidden">
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "94%" }}
                        transition={{ duration: 1.5 }}
                        className="h-full bg-primary" 
                    />
                </div>
                <div className="flex justify-between mt-2 text-[9px] font-mono text-muted-foreground">
                    <span>LATENCY_REDUCTION</span>
                    <span>35%</span>
                </div>
            </div>
            <div className="p-6 border border-accent/20 bg-accent/5 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <h4 className="font-mono text-xs font-bold uppercase tracking-widest">Data_Migration</h4>
                </div>
                <div className="h-1.5 bg-border rounded-full overflow-hidden">
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1.5, delay: 0.2 }}
                        className="h-full bg-accent" 
                    />
                </div>
                <div className="flex justify-between mt-2 text-[9px] font-mono text-muted-foreground">
                    <span>MIGRATION_SUCCESS</span>
                    <span>100%</span>
                </div>
            </div>
            <div className="p-6 border border-white/20 bg-white/5 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    <h4 className="font-mono text-xs font-bold uppercase tracking-widest">Governance_Score</h4>
                </div>
                <div className="h-1.5 bg-border rounded-full overflow-hidden">
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1.5, delay: 0.4 }}
                        className="h-full bg-white" 
                    />
                </div>
                <div className="flex justify-between mt-2 text-[9px] font-mono text-muted-foreground">
                    <span>COMPLIANCE_LEVEL</span>
                    <span>HIPAA/GDPR</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
