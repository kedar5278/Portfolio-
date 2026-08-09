"use client";

import { personalInfo } from "@/lib/data";
import { FiHeart, FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-primary-500/20">
              KT
            </div>
            <div>
              <p className="font-semibold text-white text-sm">{personalInfo.name}</p>
              <p className="text-xs text-dark-500">{personalInfo.title}</p>
            </div>
          </div>

          <p className="text-dark-500 text-sm flex items-center gap-1.5">
            Built with <FiHeart className="w-3.5 h-3.5 text-red-400" fill="currentColor" /> by {personalInfo.name}
          </p>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-dark-400 hover:text-primary-400 hover:border-primary-500/50 hover:bg-primary-500/10 transition-all duration-300"
          >
            <FiArrowUp className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-dark-600">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
