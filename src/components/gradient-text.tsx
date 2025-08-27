
"use client";

import type { ElementType, ReactNode } from "react";
import React from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  as?: ElementType;
}

export default function GradientText({
  children,
  className = "",
  colors = ["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"],
  animationSpeed = 8,
  as: Component = 'span',
}: GradientTextProps) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <Component className={`animated-gradient-text ${className}`}>
      <span className="text-content" style={gradientStyle}>
        {children}
      </span>
    </Component>
  );
}
