"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import ShinyText from "./ShinyText";
import Magnet from "./Magnet";

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number; color: string }[] = [];
    const colors = ["#6366f1", "#06b6d4", "#8b5cf6", "#0ea5e9"];
    const count = Math.min(80, Math.floor(window.innerWidth / 15));

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animId: number;
    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();

        particles.slice(i + 1).forEach((p2) => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = (1 - dist / 120) * 0.15;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  useEffect(() => {
    const cleanup = animate();
    const handleResize = () => animate();
    window.addEventListener("resize", handleResize);
    return () => {
      cleanup?.();
      window.removeEventListener("resize", handleResize);
    };
  }, [animate]);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleField />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-500/10 rounded-full blur-[100px] animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6, type: "spring", bounce: 0.4 }}
          className="mb-8"
        >
          <div className="relative w-32 h-32 mx-auto">
            {/* Gradient ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 via-accent-500 to-primary-600 p-[3px] shadow-[0_0_30px_rgba(99,102,241,0.4)]">
              <div className="w-full h-full rounded-full overflow-hidden bg-dark-950">
                <img
                  src="/profile.png"
                  alt="Kedar Thakar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6"
        >
          <span className="text-white">Hi, I'm</span>
          <br />
          <span className="inline-flex items-center gap-3">
            <ShinyText
              text={personalInfo.name}
              speed={3}
              color="#818cf8"
              shineColor="#ffffff"
              className="gradient-text"
            />
            <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse inline-block shrink-0" />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-xl sm:text-2xl md:text-3xl font-light text-dark-300 mb-4"
        >
          {personalInfo.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-base sm:text-lg text-dark-400 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          {personalInfo.subtitle}
        </motion.p>

        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 sm:mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
          <span className="text-xs sm:text-sm text-dark-300">Ready for new opportunities</span>
        </motion.div>

        {/* Quick Info Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {[
            { icon: <FiMail className="w-4 h-4" />, text: personalInfo.email },
            { icon: <FiPhone className="w-4 h-4" />, text: personalInfo.phone },
            { icon: <FiMapPin className="w-4 h-4" />, text: personalInfo.location },
          ].map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-dark-300 backdrop-blur-sm"
            >
              {item.icon}
              <span className="hidden sm:inline">{item.text}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <Magnet magnetStrength={3} padding={60}>
            <a href="#projects">
              <button className="btn-primary text-base px-10 py-4">
                <span className="flex items-center gap-2">View My Work</span>
              </button>
            </a>
          </Magnet>
          <Magnet magnetStrength={3} padding={60}>
            <a href="#contact">
              <button className="btn-outline text-base px-10 py-4">Get In Touch</button>
            </a>
          </Magnet>
        </motion.div>
      </div>

    </section>
  );
}
