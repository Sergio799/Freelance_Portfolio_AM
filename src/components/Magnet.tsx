"use client";

import React, { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  disabled?: boolean;
  magnetStrength?: number;
  activeTransition?: { type: string; stiffness: number; damping: number; mass: number };
  inactiveTransition?: { duration: number };
  wrapperClassName?: string;
  innerClassName?: string;
}

const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 100,
  disabled = false,
  magnetStrength = 1,
  activeTransition = { type: "spring", stiffness: 180, damping: 15, mass: 0.1 },
  inactiveTransition = { duration: 0.5 },
  wrapperClassName = "",
  innerClassName = "",
}) => {
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const magnetRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (disabled || !magnetRef.current) return;

    const rect = magnetRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distX = (e.clientX - centerX) * magnetStrength;
    const distY = (e.clientY - centerY) * magnetStrength;

    setPosition({ x: distX * 0.3, y: distY * 0.3 });
  };

  const handleMouseEnter = () => {
    if (!disabled) setIsActive(true);
  };

  const handleMouseLeave = () => {
    setIsActive(false);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={magnetRef}
      className={wrapperClassName}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ padding, margin: -padding }}
    >
      <motion.div
        className={innerClassName}
        animate={position}
        transition={isActive ? activeTransition : inactiveTransition}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Magnet;
