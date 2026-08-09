"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo } from "@/lib/data";
import { SectionWrapper, SectionHeader } from "./SectionWrapper";
import { FiAward, FiTrendingUp, FiTarget, FiZap } from "react-icons/fi";

const highlights = [
  { icon: <FiAward className="w-6 h-6" />, title: "Web Developer", desc: "React, Next.js & Tailwind CSS" },
  { icon: <FiTrendingUp className="w-6 h-6" />, title: "Growth Driver", desc: "50+ clients managed across Gujarat" },
  { icon: <FiTarget className="w-6 h-6" />, title: "Results-Oriented", desc: "Data-driven marketing strategies" },
  { icon: <FiZap className="w-6 h-6" />, title: "Self-Motivated", desc: "Hardworking & always learning" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper id="about">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader title="About Me" subtitle="Get to know who I am and what drives me" highlight="About" />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — About Card */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="glass-card p-8 md:p-10"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 text-7xl font-black text-primary-500/10 select-none">&ldquo;</div>
              <p className="text-lg leading-relaxed text-dark-200 mb-6 relative z-10">{personalInfo.about}</p>
              <p className="text-base leading-relaxed text-dark-300 mb-8">{personalInfo.aboutExtended}</p>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-primary-500/5 border border-primary-500/10">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold shrink-0">
                KT
              </div>
              <div>
                <p className="font-semibold text-white">{personalInfo.name}</p>
                <p className="text-sm text-dark-400">{personalInfo.location}</p>
              </div>
            </div>
          </motion.div>

          {/* Right — Highlights + Stats */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="glass-card-hover p-6 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400 mb-4 group-hover:bg-primary-500/20 transition-colors">
                    {h.icon}
                  </div>
                  <h4 className="font-semibold text-white mb-1">{h.title}</h4>
                  <p className="text-sm text-dark-400">{h.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Languages Quick View */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card p-6"
            >
              <h4 className="font-semibold text-white mb-3 text-sm">Languages I Speak</h4>
              <div className="flex flex-wrap gap-2">
                {["English", "Hindi", "Gujarati"].map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-dark-300 text-sm"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
