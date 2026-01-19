"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, MapPin, Calendar, ExternalLink, Download, ChevronDown } from "lucide-react";
import SplitText from "@/components/SplitText";
import BlurText from "@/components/BlurText";
import GradientText from "@/components/GradientText";
import Magnet from "@/components/Magnet";
import AnimatedBackground from "@/components/AnimatedBackground";

const experiences = [
  {
    company: "HCL",
    role: "Data Engineer",
    location: "Charlotte, NC",
    period: "Oct 2025 – Present",
    highlights: [
      "Engineered real-time and batch data pipelines across AWS, Azure, and GCP, processing over 2 billion records daily, enabling faster analytics and ML model training.",
      "Built scalable ETL frameworks with Airflow, Spark, AWS Glue, and Azure Data Factory, integrating structured and semi-structured data into BigQuery, Redshift, and Synapse, reducing data ingestion time by 30%.",
      "Developed data-quality validation frameworks using Great Expectations and PySpark, cutting ingestion errors by 40% and improving downstream reporting accuracy.",
      "Delivered interactive dashboards in Power BI, Tableau, and QuickSight, providing insights that informed $5M+ in strategic business decisions.",
      "Collaborated with Data Science teams to produce feature-engineered datasets for fraud detection and recommendation systems, increasing model prediction accuracy by 15%.",
      "Designed secure, compliant architectures adhering to HIPAA, GDPR, SOX, and PCI DSS, ensuring zero compliance violations during audits.",
      "Optimized Spark jobs and SQL queries, boosting ETL performance by 35% and reducing reporting latency by 50%.",
      "Automated infrastructure provisioning and CI/CD workflows with Terraform and AWS CodePipeline, accelerating deployment frequency by 3x.",
    ],
  },
  {
    company: "Ocean Spray Inc",
    role: "Data Engineer",
    location: "Charlotte, NC",
    period: "Nov 2024 – Sep 2025",
    highlights: [
      "Led a data modernization initiative on GCP, migrating Hadoop datasets and 200+ Hive tables to BigQuery via Infoworks and Tidal with zero data loss, enabling faster analytics and reporting.",
      "Designed and orchestrated ETL/ELT pipelines using Airflow and Cloud Composer, integrating SQL Server, Oracle, and on-premises data, reducing data processing time by 30%.",
      "Automated workflow scheduling and validation with Tidal and Excel, ensuring 100% reconciliation accuracy and reducing manual effort by 25 hours/week.",
      "Developed custom Airflow operators and Python/Django tools to streamline ingestion and reporting, cutting pipeline maintenance time by 40%.",
      "Enhanced BI pipelines in Tableau and Teradata, increasing report accuracy by 20% and accelerating delivery across departments by 50%.",
      "Utilized Spark, Hive, and Pandas for data wrangling and model support, optimizing processing performance and reducing ETL job runtimes by 35%.",
    ],
  },
  {
    company: "Saint Louis University",
    role: "Data Analyst",
    location: "St Louis, MO",
    period: "Jan 2024 – Oct 2024",
    highlights: [
      "Delivered end-to-end data pipelines using Azure HDInsight, Data Factory, and Synapse, processing millions of academic and research records and accelerating analytics by 40%.",
      "Produced ETL workflows and dashboards supporting the enterprise data warehouse, increasing data availability and reporting timeliness by 35%.",
      "Administered PostgreSQL environments across Dev, QA, and Production, maintaining 99.9% uptime and reducing incidents by 25%.",
      "Enforced data governance and access-control standards using Azure Key Vault and encryption policies, ensuring FERPA compliance.",
      "Collaborated with analytics teams to enable predictive and operational reporting in Power BI and Databricks, improving decision speed across departments.",
    ],
  },
  {
    company: "HCL",
    role: "Data Analyst",
    location: "Hyderabad, India",
    period: "Aug 2020 – Jul 2022",
    highlights: [
      "Delivered ETL packages, optimized SQL queries, and executive dashboards, reducing report preparation time by 40%.",
      "Implemented SSIS transformations integrating multiple data sources, improving pipeline efficiency and data accuracy by 25%.",
      "Created interactive Power BI dashboards and Power Apps integrated with Dataflows and Power Automate, enabling near real-time insights.",
      "Optimized data cleansing workflows using SQL and Python, accelerating report turnaround by 30%.",
      "Unified Azure SQL Data Warehouse and Snowflake environments, improving query performance and data reliability by 50%.",
      "Automated forecasting and workforce analytics, supporting strategic resource planning and executive decision-making.",
    ],
  },
];

const skills = {
  "Languages": ["Python", "SQL", "JavaScript"],
  "Libraries & Frameworks": ["Pandas", "NumPy", "PySpark", "Django"],
  "Data Engineering": ["ETL/ELT", "Airflow", "Databricks", "Spark", "Data Quality", "Data Catalogs", "Terraform", "CI/CD", "SDLC"],
  "Data Analytics & BI": ["Power BI", "Tableau", "QuickSight", "Excel", "Alteryx", "Data Modeling", "Visualization", "Reporting"],
  "Cloud Platforms": ["AWS (Glue, Redshift, S3, Lambda)", "Azure (Data Factory, Synapse, HDInsight)", "GCP (BigQuery, Dataflow, Composer)"],
  "Databases": ["PostgreSQL", "Snowflake", "MySQL", "SQL Server", "Hive"],
  "Systems & Tools": ["Linux/Unix", "Great Expectations", "GitHub", "JIRA", "ADO", "Confluence"],
};

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <AnimatedBackground />
      
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <GradientText className="text-xl font-bold tracking-tight" colors={["#00d4ff", "#7c3aed", "#00d4ff"]}>
            BB
          </GradientText>
          <div className="flex items-center gap-8">
            <a href="#about" className="text-sm text-zinc-400 hover:text-white transition-colors">About</a>
            <a href="#experience" className="text-sm text-zinc-400 hover:text-white transition-colors">Experience</a>
            <a href="#skills" className="text-sm text-zinc-400 hover:text-white transition-colors">Skills</a>
            <a href="#publications" className="text-sm text-zinc-400 hover:text-white transition-colors">Publications</a>
            <a href="#contact" className="text-sm text-zinc-400 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 via-transparent to-transparent" />
        <div className="max-w-6xl mx-auto px-6 py-20 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium mb-8">
                Data Engineer & Analyst
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
              <SplitText
                text="Bhaskar Bavineni"
                className="inline-block"
                delay={50}
                duration={0.8}
                splitType="chars"
              />
            </h1>
            <BlurText
              text="Architecting scalable data ecosystems across cloud platforms"
              className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-12 justify-center"
              delay={80}
              animateBy="words"
              direction="bottom"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <Magnet padding={60} magnetStrength={0.5}>
              <a
                href="mailto:bavinenibhaskar@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-violet-500/25 transition-all"
              >
                <Mail size={18} />
                Get in Touch
              </a>
            </Magnet>
            <Magnet padding={60} magnetStrength={0.5}>
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full text-white font-medium hover:bg-white/5 transition-all"
              >
                View Experience
                <ChevronDown size={18} />
              </a>
            </Magnet>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="flex justify-center gap-6"
          >
            <a href="https://linkedin.com/in/bhaskar" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-violet-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/bhaskar" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-violet-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="mailto:bavinenibhaskar@gmail.com" className="text-zinc-500 hover:text-violet-400 transition-colors">
              <Mail size={24} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown size={32} className="text-zinc-600" />
          </motion.div>
        </motion.div>
      </section>

      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInUp} className="mb-16">
              <span className="text-cyan-400 font-mono text-sm mb-4 block">01 / About</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                <GradientText colors={["#00d4ff", "#7c3aed", "#00d4ff"]}>
                  Building Data Solutions
                </GradientText>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div variants={fadeInUp} className="space-y-6">
                <p className="text-lg text-zinc-300 leading-relaxed">
                  Data Engineer and Analyst with <span className="text-cyan-400 font-semibold">4+ years of experience</span> designing and maintaining scalable data ecosystems across AWS, Azure, and GCP using Airflow, Spark, and Databricks.
                </p>
                <p className="text-lg text-zinc-300 leading-relaxed">
                  Skilled in developing automated ETL/ELT workflows and validation frameworks with Python, SQL, and Terraform, ensuring efficient data integration and governance.
                </p>
                <p className="text-lg text-zinc-300 leading-relaxed">
                  Experienced in modeling, transforming, and visualizing data with Pandas, Power BI, Tableau, and QuickSight to support analytical reporting and predictive insights.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-6">
                <p className="text-lg text-zinc-300 leading-relaxed">
                  Proficient in implementing secure architectures and CI/CD pipelines, leveraging Linux-based environments, SDLC practices, and compliance frameworks including <span className="text-violet-400 font-semibold">HIPAA and GDPR</span>.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">4+</div>
                    <div className="text-zinc-400">Years Experience</div>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <div className="text-4xl font-bold text-violet-400 mb-2">2B+</div>
                    <div className="text-zinc-400">Records Daily</div>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">$5M+</div>
                    <div className="text-zinc-400">Business Impact</div>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <div className="text-4xl font-bold text-violet-400 mb-2">200+</div>
                    <div className="text-zinc-400">Tables Migrated</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="experience" className="py-32 relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInUp} className="mb-16">
              <span className="text-violet-400 font-mono text-sm mb-4 block">02 / Experience</span>
              <h2 className="text-4xl md:text-5xl font-bold">
                <GradientText colors={["#7c3aed", "#00d4ff", "#7c3aed"]}>
                  Professional Journey
                </GradientText>
              </h2>
            </motion.div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group relative"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-cyan-500 to-transparent opacity-20 group-hover:opacity-100 transition-opacity" />
                  <div className="pl-8 relative">
                    <div className="absolute left-0 top-8 w-2 h-2 rounded-full bg-violet-500 -translate-x-[3px]" />
                    <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-violet-500/30 transition-all hover:bg-white/[0.07]">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                          <div className="flex items-center gap-3 text-zinc-400">
                            <span className="text-cyan-400 font-semibold">{exp.company}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <MapPin size={14} />
                              {exp.location}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 text-violet-300 text-sm">
                          <Calendar size={14} />
                          {exp.period}
                        </div>
                      </div>
                      <ul className="space-y-3">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-zinc-300 flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInUp} className="mb-16">
              <span className="text-cyan-400 font-mono text-sm mb-4 block">03 / Skills</span>
              <h2 className="text-4xl md:text-5xl font-bold">
                <GradientText colors={["#00d4ff", "#7c3aed", "#00d4ff"]}>
                  Technical Expertise
                </GradientText>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, items], index) => (
                <motion.div
                  key={category}
                  variants={fadeInUp}
                  className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all group"
                >
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500" />
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-lg bg-white/5 text-zinc-300 text-sm border border-white/10 hover:border-cyan-500/50 hover:text-cyan-300 transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="education" className="py-32 relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInUp} className="mb-16">
              <span className="text-violet-400 font-mono text-sm mb-4 block">04 / Education</span>
              <h2 className="text-4xl md:text-5xl font-bold">
                <GradientText colors={["#7c3aed", "#00d4ff", "#7c3aed"]}>
                  Academic Background
                </GradientText>
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-violet-500/30 transition-all max-w-2xl">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center shrink-0">
                    <span className="text-2xl font-bold">UNT</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">University of North Texas</h3>
                    <p className="text-lg text-cyan-400 mb-2">Master&apos;s in Information Systems & Technology</p>
                    <div className="flex items-center gap-2 text-zinc-400">
                      <Calendar size={16} />
                      <span>Aug 2022 – Dec 2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="publications" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInUp} className="mb-16">
              <span className="text-cyan-400 font-mono text-sm mb-4 block">05 / Publications</span>
              <h2 className="text-4xl md:text-5xl font-bold">
                <GradientText colors={["#00d4ff", "#7c3aed", "#00d4ff"]}>
                  Research & Publications
                </GradientText>
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-cyan-500/30 transition-all">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      iLock: State-of-the-art Sophisticated Door Lock for Wireless Devices
                    </h3>
                    <p className="text-cyan-400 font-medium mb-2">
                      IEEE International Conference on Innovative Mechanisms for Industry Applications (ICIMIA 2020)
                    </p>
                  </div>
                  <a
                    href="#"
                    className="shrink-0 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 transition-all"
                  >
                    <ExternalLink size={20} className="text-cyan-400" />
                  </a>
                </div>
                <p className="text-zinc-300 leading-relaxed">
                  (Internet of Things) Home-automation is one of the most desired features in a smart home. Despite so many features in a smart home, there is dearth for a cutting-edge smart lock which is sophisticated, secure and economical. In this paper, we have come up with the idea of designing a smart lock which is &quot;smart&quot; and &quot;secure&quot;. What puts this smart lock a cut above the rest is its guest mode feature. This feature enables this important guest of the important guests of the administrator to access the smart lock even when they aren&apos;t able to contact the administrator. This lock can be built by using simple components like Arduino Uno, Wi-Fi module, Bluetooth module, Fingerprint sensor.
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {["IoT", "Arduino", "Smart Home", "Security", "Bluetooth", "Wi-Fi"].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-violet-500/10 text-violet-300 text-sm border border-violet-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="py-32 relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <span className="text-violet-400 font-mono text-sm mb-4 block">06 / Contact</span>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <GradientText colors={["#7c3aed", "#00d4ff", "#7c3aed"]}>
                  Let&apos;s Connect
                </GradientText>
              </h2>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                Open for opportunities in Data Engineering, Analytics, and Cloud Architecture roles.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-6 mb-12">
              <Magnet padding={50} magnetStrength={0.4}>
                <a
                  href="mailto:bavinenibhaskar@gmail.com"
                  className="flex items-center gap-3 px-6 py-4 bg-white/5 rounded-2xl border border-white/10 hover:border-violet-500/50 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-violet-500/10 group-hover:bg-violet-500/20 transition-colors">
                    <Mail size={24} className="text-violet-400" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="text-white font-medium">bavinenibhaskar@gmail.com</div>
                  </div>
                </a>
              </Magnet>

              <Magnet padding={50} magnetStrength={0.4}>
                <a
                  href="tel:7042810931"
                  className="flex items-center gap-3 px-6 py-4 bg-white/5 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors">
                    <Phone size={24} className="text-cyan-400" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-zinc-500">Phone</div>
                    <div className="text-white font-medium">704-281-0931</div>
                  </div>
                </a>
              </Magnet>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex justify-center gap-4">
              <Magnet padding={40} magnetStrength={0.5}>
                <a
                  href="https://linkedin.com/in/bhaskar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all"
                >
                  <Linkedin size={28} className="text-blue-400" />
                </a>
              </Magnet>
              <Magnet padding={40} magnetStrength={0.5}>
                <a
                  href="https://github.com/bhaskar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-zinc-500/50 hover:bg-white/10 transition-all"
                >
                  <Github size={28} className="text-zinc-300" />
                </a>
              </Magnet>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <footer className="py-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-zinc-500 text-sm">
            © 2026 Bhaskar Bavineni. Built with Next.js, Tailwind CSS & React Bits.
          </p>
        </div>
      </footer>
    </div>
  );
}
