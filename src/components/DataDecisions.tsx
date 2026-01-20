"use client";

import { motion } from "framer-motion";
import { BarChart3, TrendingUp, PieChart, Activity, Zap, Target } from "lucide-react";

const metrics = [
  { label: "Revenue Growth", value: 42, suffix: "%", icon: TrendingUp },
  { label: "Cost Reduction", value: 28, suffix: "%", icon: Target },
  { label: "Decision Speed", value: 3, suffix: "x", icon: Zap },
];

const dashboardData = [
  { height: 45, delay: 0 },
  { height: 72, delay: 0.1 },
  { height: 58, delay: 0.2 },
  { height: 85, delay: 0.3 },
  { height: 64, delay: 0.4 },
  { height: 90, delay: 0.5 },
  { height: 76, delay: 0.6 },
];

export function DataDecisions() {
  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary/30 text-muted-foreground text-xs font-mono mb-6"
          >
            <Activity size={14} className="text-primary" />
            ACT_3
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 font-mono tracking-tighter text-primary"
          >
            FROM DATA TO DECISIONS
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-card border border-border rounded-2xl p-8 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-6">
                <BarChart3 className="text-primary" size={20} />
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Analytics Dashboard</span>
              </div>
              
              <div className="flex items-end gap-3 h-48 mb-6">
                {dashboardData.map((bar, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${bar.height}%` }}
                    transition={{ duration: 0.8, delay: bar.delay }}
                    viewport={{ once: true }}
                    className="flex-1 bg-primary/20 rounded-t relative group"
                  >
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: "100%" }}
                      transition={{ duration: 0.8, delay: bar.delay + 0.3 }}
                      viewport={{ once: true }}
                      className="absolute bottom-0 left-0 right-0 bg-primary rounded-t"
                    />
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4">
                {metrics.map((metric, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-secondary/50 border border-border rounded-lg p-3 text-center"
                  >
                    <metric.icon className="w-4 h-4 text-primary mx-auto mb-2" />
                    <div className="text-xl font-bold text-foreground">
                      {metric.value}{metric.suffix}
                    </div>
                    <div className="text-[9px] font-mono text-muted-foreground uppercase">
                      {metric.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="absolute top-4 right-4 flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
              </div>
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-primary/30 rounded-full" />
              <blockquote className="pl-6">
                <p className="text-2xl md:text-3xl font-light text-foreground leading-relaxed">
                  "Data is useless until it changes a decision."
                </p>
              </blockquote>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-primary/30 rounded-full" />
              <blockquote className="pl-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  "My work empowers teams to move faster,<br />
                  ask better questions, and act with confidence."
                </p>
              </blockquote>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-card border border-border rounded-xl p-6 group hover:border-primary/50 transition-all">
            <PieChart className="text-primary mb-4" size={24} />
            <h4 className="font-mono text-sm font-bold mb-2">Self-Service Analytics</h4>
            <p className="text-sm text-muted-foreground">
              Enabling business users to explore data independently without engineering support.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 group hover:border-primary/50 transition-all">
            <TrendingUp className="text-primary mb-4" size={24} />
            <h4 className="font-mono text-sm font-bold mb-2">Real-Time Insights</h4>
            <p className="text-sm text-muted-foreground">
              Streaming dashboards that reflect changes as they happen across the organization.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 group hover:border-primary/50 transition-all">
            <Target className="text-primary mb-4" size={24} />
            <h4 className="font-mono text-sm font-bold mb-2">Data-Driven Culture</h4>
            <p className="text-sm text-muted-foreground">
              Building foundations where every decision is backed by clean, accessible data.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
