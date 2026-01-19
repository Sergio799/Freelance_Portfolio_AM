"use client";

import { useRef, useEffect } from "react";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}

export default function GradientText({
  children,
  className = "",
  colors = ["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"],
  animationSpeed = 8,
  showBorder = false,
}: GradientTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let position = 0;
    let animationFrameId: number;

    const animate = () => {
      position += 1;
      const gradient = `linear-gradient(${position}deg, ${colors.join(", ")})`;

      container.style.backgroundImage = gradient;
      container.style.backgroundClip = "text";
      container.style.webkitBackgroundClip = "text";
      container.style.color = "transparent";

      if (showBorder) {
        const beforeElement = container.querySelector(
          ".gradient-border"
        ) as HTMLElement;
        if (beforeElement) {
          beforeElement.style.backgroundImage = gradient;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const interval = 1000 / (animationSpeed * 10);
    const intervalId = setInterval(() => {
      cancelAnimationFrame(animationFrameId);
      animate();
    }, interval);

    return () => {
      clearInterval(intervalId);
      cancelAnimationFrame(animationFrameId);
    };
  }, [colors, animationSpeed, showBorder]);

  return (
    <div ref={containerRef} className={`relative inline-block ${className}`}>
      {showBorder && (
        <span className="gradient-border absolute inset-0 rounded-lg p-[2px] -z-10 opacity-40" />
      )}
      {children}
    </div>
  );
}
