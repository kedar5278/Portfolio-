"use client";

import { ReactNode } from "react";

interface StarBorderProps {
  children: ReactNode;
  as?: "button" | "a" | "div" | "span";
  className?: string;
  color?: string;
  speed?: string;
  thickness?: number;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const StarBorder = ({
  children,
  as: Component = "button",
  className = "",
  color = "#6366f1",
  speed = "4s",
  thickness = 1,
  ...rest
}: StarBorderProps) => {
  return (
    // @ts-expect-error - dynamic component prop spreading
    <Component
      className={`star-border-container ${className}`}
      style={{ padding: `${thickness}px 0` }}
      {...rest}
    >
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div className="inner-content">{children}</div>
    </Component>
  );
};

export default StarBorder;
