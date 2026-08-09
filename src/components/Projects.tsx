"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/lib/data";
import { SectionWrapper, SectionHeader } from "./SectionWrapper";
import { FiExternalLink, FiGlobe } from "react-icons/fi";
import GlareCard from "./GlareCard";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";

const tagIcons: Record<string, React.ReactNode> = {
  "Next.js": <SiNextdotjs className="w-3.5 h-3.5" />,
  React: <SiReact className="w-3.5 h-3.5" />,
  "Tailwind CSS": <SiTailwindcss className="w-3.5 h-3.5" />,
  TypeScript: <SiTypescript className="w-3.5 h-3.5" />,
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper id="projects">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeader
          title="Featured Projects"
          subtitle="Things I've built and shipped"
          highlight="Projects"
        />

        {/* Profile-style header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-primary-500/20">
              KT
            </div>
            <div className="text-left">
              <p className="font-semibold text-white text-sm">Kedar Thakar</p>
              <p className="text-xs text-dark-400">@kedarthakar</p>
            </div>
          </div>
        </motion.div>

        {/* Linktree-style project cards */}
        <div ref={ref} className="space-y-4">
          {projects.map((project, i) => (
            <motion.a
              key={project.id}
              href={project.url}
              target={project.url !== "#" ? "_blank" : undefined}
              rel={project.url !== "#" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group block"
            >
              <GlareCard className="glass-card p-6 hover:bg-white/[0.08] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(99,102,241,0.12)]">
                {/* Hover gradient line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400 shrink-0 group-hover:bg-primary-500/20 group-hover:scale-110 transition-all duration-500">
                    <FiGlobe className="w-5 h-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Title row */}
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-white group-hover:text-primary-300 transition-colors truncate">
                        {project.title}
                      </h3>
                      <FiExternalLink className="w-4 h-4 text-dark-500 group-hover:text-primary-400 transition-colors shrink-0 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                    </div>

                    {/* URL */}
                    {project.url !== "#" && (
                      <p className="text-xs text-dark-500 mb-2 truncate font-mono">
                        {project.url.replace("https://", "")}
                      </p>
                    )}

                    {/* Description */}
                    <p className="text-sm text-dark-300 leading-relaxed mb-3 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 text-dark-400 text-xs border border-white/5 hover:border-primary-500/30 hover:text-primary-300 transition-colors"
                        >
                          {tagIcons[tag] || <div className="w-3.5 h-3.5 rounded bg-current/20" />}
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </GlareCard>
            </motion.a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
