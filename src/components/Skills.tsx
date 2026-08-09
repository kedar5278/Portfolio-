"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/lib/data";
import { SectionWrapper, SectionHeader } from "./SectionWrapper";
import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiFigma,
  SiVercel,
  SiNpm,
} from "react-icons/si";

// Custom CSS3 icon as SVG (SiCss3 has barrel issues in some versions)
const Css3Icon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.955-.81-.188-2.11h-2.61l.29 3.855L12 19.002l5.355-1.12.733-8.146-.003-.001h-.003z" />
  </svg>
);

// Custom VS Code icon as SVG
const VsCodeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.583 2.427L11.64 8.37l-3.94-3.94L6.34 5.997 1.583 10.754V13.25l4.757 4.757 1.36-1.36 3.94-3.94 5.943 5.943L22.417 13.25V10.75l-4.834-4.323zm-5.94 11.17l-1.36 1.36-4.757-4.757 4.757-4.757 1.36 1.36-3.397 3.397 3.397 3.407z" />
  </svg>
);

const iconMap: Record<string, React.ReactNode> = {
  html5: <SiHtml5 className="w-8 h-8" />,
  css3: <Css3Icon className="w-8 h-8" />,
  javascript: <SiJavascript className="w-8 h-8" />,
  typescript: <SiTypescript className="w-8 h-8" />,
  python: <SiPython className="w-8 h-8" />,
  react: <SiReact className="w-8 h-8" />,
  nextjs: <SiNextdotjs className="w-8 h-8" />,
  tailwindcss: <SiTailwindcss className="w-8 h-8" />,
  nodejs: <SiNodedotjs className="w-8 h-8" />,
  git: <SiGit className="w-8 h-8" />,
  vscode: <VsCodeIcon className="w-8 h-8" />,
  figma: <SiFigma className="w-8 h-8" />,
  vercel: <SiVercel className="w-8 h-8" />,
  npm: <SiNpm className="w-8 h-8" />,
};

const iconColors: Record<string, string> = {
  html5: "#E44D26",
  css3: "#1572B6",
  javascript: "#F7DF1E",
  typescript: "#3178C6",
  python: "#3776AB",
  react: "#61DAFB",
  nextjs: "#FFFFFF",
  tailwindcss: "#06B6D4",
  nodejs: "#339933",
  git: "#F05032",
  vscode: "#007ACC",
  figma: "#F24E1E",
  vercel: "#FFFFFF",
  npm: "#CB3837",
};

const categoryColors: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  Languages: { bg: "from-violet-500/20 to-violet-600/20", border: "border-violet-500/30", text: "text-violet-400", glow: "shadow-violet-500/10" },
  Frameworks: { bg: "from-primary-500/20 to-primary-600/20", border: "border-primary-500/30", text: "text-primary-400", glow: "shadow-primary-500/10" },
  Tools: { bg: "from-accent-500/20 to-accent-600/20", border: "border-accent-500/30", text: "text-accent-400", glow: "shadow-accent-500/10" },
};

function SkillCard({ skill, index, isInView }: { skill: typeof skills[0]; index: number; isInView: boolean }) {
  const color = iconColors[skill.icon || ""] || "#6366f1";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative"
    >
      <div className="glass-card p-5 hover:bg-white/[0.08] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] cursor-default">
        <div className="flex items-center gap-4">
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500 group-hover:scale-110"
            style={{ backgroundColor: `${color}15`, color }}
          >
            {iconMap[skill.icon || ""] || <span className="text-2xl font-bold">{skill.name[0]}</span>}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-white text-sm group-hover:text-primary-300 transition-colors truncate">
              {skill.name}
            </h4>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <SectionWrapper id="skills">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title="Skills & Technologies"
          subtitle="The tools and technologies I use to bring ideas to life"
          highlight="Skills"
        />

        <div ref={ref} className="space-y-10">
          {categories.map((category, catIdx) => {
            const catSkills = skills.filter((s) => s.category === category);
            const colors = categoryColors[category] || categoryColors.Languages;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: catIdx * 0.15 }}
              >
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${colors.bg} border ${colors.border} ${colors.text} text-sm font-semibold mb-5`}>
                  <div className="w-2 h-2 rounded-full bg-current" />
                  {category}
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                  {catSkills.map((skill, i) => (
                    <SkillCard key={skill.name} skill={skill} index={catIdx * 5 + i} isInView={isInView} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
