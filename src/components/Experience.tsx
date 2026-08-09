"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experiences } from "@/lib/data";
import { SectionWrapper, SectionHeader } from "./SectionWrapper";
import { FiExternalLink, FiCheckCircle } from "react-icons/fi";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper id="experience">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          title="Work Experience"
          subtitle="My professional journey and the impact I've made"
          highlight="Experience"
        />

        <div ref={ref} className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-accent-500/50 to-transparent" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`relative flex flex-col md:flex-row items-start gap-8 mb-16 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-dark-950 border-2 border-primary-500 shadow-[0_0_15px_rgba(99,102,241,0.5)] z-10" />

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                <div className="glass-card p-6 md:p-8 hover:bg-white/[0.07] transition-all duration-500 group">
                  <div className={`flex flex-wrap items-center gap-3 mb-4 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                    <span className="px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 text-xs font-mono border border-primary-500/20">
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary-300 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-400 font-medium hover:text-accent-300 transition-colors flex items-center gap-1"
                    >
                      {exp.company}
                      {exp.companyUrl !== "#" && <FiExternalLink className="w-3 h-3" />}
                    </a>
                    <span className="text-dark-500">·</span>
                    <span className="text-dark-400 text-sm">{exp.location}</span>
                  </div>

                  <p className="text-dark-300 text-sm leading-relaxed mb-5">{exp.description}</p>

                  <div className={`space-y-2 mb-5 ${i % 2 === 0 ? "md:text-left" : ""}`}>
                    {exp.achievements.map((ach) => (
                      <div key={ach} className="flex items-start gap-2 text-sm text-dark-300">
                        <FiCheckCircle className="w-4 h-4 text-primary-400 mt-0.5 shrink-0" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>

                  <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-white/5 text-dark-400 text-xs border border-white/5 hover:border-primary-500/30 hover:text-primary-300 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
