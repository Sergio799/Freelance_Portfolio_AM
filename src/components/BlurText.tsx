"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

interface BlurTextProps {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  threshold?: number;
  rootMargin?: string;
  animationFrom?: Record<string, string | number>;
  animationTo?: Record<string, string | number>[];
  easing?: string;
  onAnimationComplete?: () => void;
}

const BlurText: React.FC<BlurTextProps> = ({
  text = "",
  delay = 200,
  className = "",
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  rootMargin = "-100px",
  animationFrom,
  animationTo,
  onAnimationComplete,
}) => {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: rootMargin,
    amount: threshold,
  });

  const defaultFrom =
    direction === "top"
      ? { filter: "blur(10px)", opacity: 0, y: -30 }
      : { filter: "blur(10px)", opacity: 0, y: 30 };

  const defaultTo = [
    { filter: "blur(5px)", opacity: 0.5, y: direction === "top" ? -15 : 15 },
    { filter: "blur(0px)", opacity: 1, y: 0 },
  ];

  const from = animationFrom ?? defaultFrom;
  const to = animationTo ?? defaultTo;

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <p ref={ref} className={`flex flex-wrap ${className}`}>
      {elements.map((segment, index) => (
        <motion.span
          key={index}
          initial={from}
          animate={hasAnimated ? to : from}
          transition={{
            duration: 0.5,
            delay: (index * delay) / 1000,
            ease: [0.215, 0.61, 0.355, 1],
          }}
          onAnimationComplete={
            index === elements.length - 1 ? onAnimationComplete : undefined
          }
          style={{ display: "inline-block", willChange: "transform, filter, opacity" }}
        >
          {segment}
          {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </p>
  );
};

export default BlurText;
