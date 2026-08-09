"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { education } from "@/lib/data";
import { SectionWrapper, SectionHeader } from "./SectionWrapper";
import { FiBookOpen, FiAward, FiCode } from "react-icons/fi";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const iconMap: Record<string, React.ReactNode> = {
    code: <FiCode className="w-7 h-7" />,
    graduation: <FiAward className="w-7 h-7" />,
    academic: <FiBookOpen className="w-7 h-7" />,
  };

  const gradientMap: Record<string, string> = {
    code: "from-emerald-500 to-accent-500",
    graduation: "from-primary-500 to-accent-500",
    academic: "from-violet-500 to-primary-500",
  };

  const badgeColors: Record<string, string> = {
    code: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    graduation: "bg-primary-500/10 border-primary-500/20 text-primary-400",
    academic: "bg-violet-500/10 border-violet-500/20 text-violet-400",
  };

  return (
    <SectionWrapper id="education">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          title="Education"
          subtitle="The academic foundation behind my skills"
          highlight="Education"
        />

        <div ref={ref} className="flex justify-center">
          <div className="grid md:grid-cols-1 gap-6 w-full max-w-md">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card p-7 relative overflow-hidden group hover:bg-white/[0.07] transition-all duration-500 hover:-translate-y-1"
            >
              {/* Background decoration */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-500/5 rounded-full blur-2xl group-hover:bg-primary-500/10 transition-colors" />

              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradientMap[edu.icon] || "from-primary-500 to-accent-500"} flex items-center justify-center text-white mb-5 shadow-lg`}>
                  {iconMap[edu.icon] || <FiBookOpen className="w-7 h-7" />}
                </div>

                <span className={`inline-block px-3 py-1 rounded-full border text-xs font-mono mb-3 ${badgeColors[edu.icon] || "bg-primary-500/10 border-primary-500/20 text-primary-400"}`}>
                  {edu.period}
                </span>
                {edu.type.includes("Currently") && (
                  <span className="ml-2 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Ongoing
                  </span>
                )}

                <h3 className="text-lg font-bold text-white mb-1 mt-3 group-hover:text-primary-300 transition-colors leading-tight">
                  {edu.degree}
                </h3>
                <p className="text-dark-300 font-medium text-sm mb-4">{edu.institution}</p>
                <p className="text-xs text-dark-500 mb-4">{edu.type}</p>

                <div className="space-y-2">
                  {edu.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-sm text-dark-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-500/50 shrink-0" />
                      <span className="text-xs">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
