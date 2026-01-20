"use client";

import { motion } from "framer-motion";
import { Code2, Database, Cloud, TrendingUp, Users, Zap, Github, Linkedin, Phone, Mail } from "lucide-react";
import Image from "next/image";

const highlights = [
  {
    icon: Database,
    title: "Data Architecture",
    description: "Designing and implementing scalable data pipelines processing 2B+ records daily across multi-cloud environments."
  },
  {
    icon: Cloud,
    title: "Cloud Expertise",
    description: "Deep experience with AWS, Azure, and GCP ecosystems, specializing in serverless and managed data services."
  },
  {
    icon: TrendingUp,
    title: "Business Impact",
    description: "Delivered $5M+ in cost savings through optimization, automation, and strategic data modernization initiatives."
  },
  {
    icon: Code2,
    title: "Engineering Excellence",
    description: "Building production-grade solutions with Python, SQL, and modern orchestration frameworks like Airflow and Terraform."
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Reduced query latency by 35% and improved pipeline efficiency through strategic indexing and caching strategies."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Partnering with cross-functional teams to translate business requirements into robust technical solutions."
  }
];

export function About() {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary/30 text-muted-foreground text-xs font-mono mb-6">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          PROFILE_INITIALIZED
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-12 font-mono tracking-tighter">
          ABOUT_<span className="text-primary">ME</span>
        </h2>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="relative group">
              <div className="relative w-full aspect-[3/4] max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden border-2 border-border bg-card">
                <Image
                  src="/b.png"
                  alt="Bhaskar Bavineni"
                  width={400}
                  height={533}
                  className="object-cover w-full h-full"
                  priority
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary rounded-tl-2xl -translate-x-2 -translate-y-2" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary rounded-br-2xl translate-x-2 translate-y-2" />
            </div>
          </motion.div>

          {/* Text Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                I'm a Data Engineer with 4+ years of experience building enterprise-scale data ecosystems. 
                My journey spans from optimizing SQL queries at HCLTech to leading cloud migrations at Ocean Spray, 
                where I modernized legacy systems and automated workflows that save 25+ hours weekly.
              </p>
              
              <p>
                Currently at HCLTech, I architect real-time and batch data pipelines across AWS, Azure, and GCP, 
                ensuring data quality, governance, and compliance with standards like HIPAA and GDPR. I thrive on 
                solving complex data challenges and transforming raw data into actionable insights.
              </p>
              
              <p>
                With a Master's in Information Systems from the University of North Texas and hands-on expertise 
                in tools like Spark, Airflow, Snowflake, and BigQuery, I bring both technical depth and strategic 
                thinking to every project. I'm passionate about automation, performance optimization, and building 
                systems that scale.
              </p>
            </div>

            <div className="p-4 border border-border rounded-xl bg-card/30 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-1 h-8 bg-primary rounded-full" />
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary">My_Philosophy</span>
              </div>
              <p className="text-sm text-muted-foreground font-mono italic">
                "Data is only as valuable as the infrastructure that delivers it. Build systems that are reliable, 
                scalable, and maintainable—then optimize relentlessly."
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              {[
                { icon: Github, href: "https://github.com/BhaskarBavineni9" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/bhaskarbavineni9/" },
                { icon: Phone, href: "tel:+17042810931" },
                { icon: Mail, href: "mailto:bavinenibhaskar@gmail.com" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-border hover:border-primary hover:text-primary transition-all bg-secondary/20"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Highlights Grid - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
        >
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              viewport={{ once: true }}
              className="p-5 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all group"
            >
              <div className="mb-3 text-primary group-hover:scale-110 transition-transform">
                <item.icon size={24} />
              </div>
              <h3 className="font-bold text-sm mb-2 font-mono">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats bar - Removed */}
      </div>
    </section>
  );
}
