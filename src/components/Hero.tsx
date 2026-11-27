"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import ShinyText from "./ShinyText";

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const colors = ["#6366f1", "#06b6d4", "#8b5cf6", "#0ea5e9"];
    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number; color: string }[] = [];
    let animationId = 0;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * ratio);
      canvas.height = Math.floor(window.innerHeight * ratio);
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    resize();
    const count = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? 0
      : Math.min(55, Math.floor(window.innerWidth / 22));

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 1.7 + 0.5,
        opacity: Math.random() * 0.45 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x < 0 || particle.x > window.innerWidth) particle.vx *= -1;
        if (particle.y < 0 || particle.y > window.innerHeight) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();

        for (let next = index + 1; next < particles.length; next++) {
          const other = particles[next];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.hypot(dx, dy);
          if (distance < 105) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = particle.color;
            ctx.globalAlpha = (1 - distance / 105) * 0.12;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });
      ctx.globalAlpha = 1;
      animationId = window.requestAnimationFrame(draw);
    };

    const handleResize = () => {
      resize();
      particles.forEach((particle) => {
        particle.x = Math.min(particle.x, window.innerWidth);
        particle.y = Math.min(particle.y, window.innerHeight);
      });
    };

    draw();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none absolute inset-0 z-0" />;
}

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[min(900px,100svh)] items-center justify-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pt-32">
      <ParticleField />

      <div className="pointer-events-none absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-primary-500/10 blur-[100px] sm:h-96 sm:w-96 sm:blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-accent-500/10 blur-[90px] sm:h-80 sm:w-80 sm:blur-[100px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-600/5 blur-[120px] sm:h-[600px] sm:w-[600px] sm:blur-[150px]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.75 }}
          className="mb-5 text-[clamp(2.7rem,8vw,6rem)] font-black leading-[1.04] tracking-tight sm:mb-6"
        >
          <span className="text-white">Hi, I'm</span>
          <br />
          <span className="inline-flex max-w-full items-center justify-center gap-2 sm:gap-3">
            <ShinyText
              text={personalInfo.name}
              speed={3}
              color="#818cf8"
              shineColor="#ffffff"
              className="gradient-text"
            />
            <span className="inline-block h-2.5 w-2.5 shrink-0 animate-pulse rounded-full bg-green-400 sm:h-3 sm:w-3" />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mb-3 text-lg font-light text-dark-300 sm:text-2xl md:text-3xl"
        >
          {personalInfo.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-dark-400 sm:mb-10 sm:text-base md:text-lg"
        >
          {personalInfo.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.55 }}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-sm sm:mb-9 sm:px-4"
        >
          <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-green-400" />
          <span className="text-xs text-dark-300 sm:text-sm">Ready for new opportunities</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.55 }}
          className="mb-9 flex flex-wrap justify-center gap-2 sm:mb-11 sm:gap-3"
        >
          <a href={`mailto:${personalInfo.email}`} className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-dark-300 backdrop-blur-sm transition-colors hover:border-primary-500/40 hover:text-white sm:px-4 sm:text-sm">
            <FiMail className="h-4 w-4 shrink-0" /><span className="break-all">{personalInfo.email}</span>
          </a>
          <a href={`tel:${personalInfo.phone.replace(/[^+\d]/g, "")}`} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-dark-300 backdrop-blur-sm transition-colors hover:border-primary-500/40 hover:text-white sm:px-4 sm:text-sm">
            <FiPhone className="h-4 w-4 shrink-0" /><span>{personalInfo.phone}</span>
          </a>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-dark-300 backdrop-blur-sm sm:px-4 sm:text-sm">
            <FiMapPin className="h-4 w-4 shrink-0" /><span>{personalInfo.location}</span>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.55 }}
          className="mb-12 flex w-full flex-col items-center justify-center gap-3 sm:mb-16 sm:w-auto sm:flex-row sm:gap-4"
        >
          <a
            href="#projects"
            className="hero-cta hero-cta-primary w-full sm:w-auto"
          >
            <span>View My Work</span>
            <span aria-hidden="true" className="hero-cta-arrow">↗</span>
          </a>
          <a
            href="#contact"
            className="hero-cta hero-cta-outline w-full sm:w-auto"
          >
            <span>Get In Touch</span>
            <span aria-hidden="true" className="hero-cta-arrow">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
