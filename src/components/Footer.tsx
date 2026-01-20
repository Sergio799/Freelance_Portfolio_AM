"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ChevronRight, Phone, GraduationCap, Calendar } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="py-24 px-4 border-t border-border bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
            <h2 className="text-4xl font-bold mb-6 tracking-tighter">
              READY TO <span className="text-primary">INITIATE</span> THE NEXT PIPELINE?
            </h2>
          <p className="text-muted-foreground font-mono mb-8 max-w-md">
            Currently accepting new challenges in Data Engineering, Analytics, and Cloud Architecture roles.
          </p>
          
          <div className="space-y-4 mb-12">
            <div className="p-6 bg-card border border-border rounded-2xl relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
              <div className="flex items-center gap-4 mb-4">
                <GraduationCap className="text-primary" size={24} />
                <h3 className="font-bold font-mono text-sm uppercase tracking-widest">Education_History</h3>
              </div>
              <p className="font-bold text-lg mb-1">University of North Texas</p>
              <p className="text-primary text-sm font-mono mb-2">Master&apos;s in Information Systems & Technology</p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                <Calendar size={12} />
                <span>Aug 2022 – Dec 2023</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            {[
              { icon: Github, href: "https://github.com/bhaskar" },
              { icon: Linkedin, href: "https://linkedin.com/in/bhaskar" },
              { icon: Phone, href: "tel:7042810931" },
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
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 relative">
          <div className="absolute top-4 right-4 text-[10px] font-mono text-primary/40">
            CONNECTION: SECURE_SSL_V3
          </div>
          
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-mono uppercase text-muted-foreground mb-2">Source_Name</label>
                <input 
                  type="text" 
                  placeholder="INPUT.NAME"
                  className="w-full bg-secondary/50 border border-border rounded-lg p-3 font-mono text-sm focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-[10px] font-mono uppercase text-muted-foreground mb-2">Endpoint_Email</label>
                <input 
                  type="email" 
                  placeholder="INPUT.EMAIL"
                  className="w-full bg-secondary/50 border border-border rounded-lg p-3 font-mono text-sm focus:border-primary focus:outline-none transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-mono uppercase text-muted-foreground mb-2">Payload_Message</label>
              <textarea 
                placeholder="INPUT.MESSAGE"
                rows={4}
                className="w-full bg-secondary/50 border border-border rounded-lg p-3 font-mono text-sm focus:border-primary focus:outline-none transition-colors resize-none"
              />
            </div>
            <button className="w-full py-4 bg-secondary border border-border text-foreground rounded-xl font-bold font-mono text-sm hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2 group">
              POST /CONTACT/SEND
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>

      <div className="mt-24 text-center text-[10px] font-mono text-muted-foreground opacity-50">
        <p>© 2026 BHASKAR_BAVINENI_DATA.V2 // ALL_RIGHTS_RESERVED</p>
        <p className="mt-2 flex justify-center items-center gap-4">
          <span>LATENCY: 12ms</span>
          <span>REGION: AWS-US-EAST-1</span>
          <span>BUILD: 2026.01.19</span>
        </p>
      </div>

      {/* Decorative background grid elements */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full" />
    </footer>
  );
}
