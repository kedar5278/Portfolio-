"use client";

import { ReactNode } from "react";

interface GlareCardProps {
  children: ReactNode;
  className?: string;
  glareColor?: string;
  glareOpacity?: number;
  glareAngle?: number;
  glareSize?: number;
  transitionDuration?: number;
}

const GlareCard = ({
  children,
  className = "",
  glareColor = "#6366f1",
  glareOpacity = 0.4,
  glareAngle = -45,
  glareSize = 250,
  transitionDuration = 650,
}: GlareCardProps) => {
  const hex = glareColor.replace("#", "");
  let rgba = glareColor;
  if (/^[0-9A-Fa-f]{6}$/.test(hex)) {
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`;
  }

  const style = {
    "--gh-angle": `${glareAngle}deg`,
    "--gh-duration": `${transitionDuration}ms`,
    "--gh-size": `${glareSize}%`,
    "--gh-rgba": rgba,
  } as React.CSSProperties;

  return (
    <div className={`glare-card ${className}`} style={style}>
      {children}
    </div>
  );
};

export default GlareCard;
