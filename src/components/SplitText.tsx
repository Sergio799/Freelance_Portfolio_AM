"use client";

import { useMemo, useRef, useCallback, useLayoutEffect } from "react";
import { gsap } from "gsap";

interface SplitTextProps {
  text?: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: "chars" | "words" | "lines";
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  textAlign?: "left" | "right" | "center" | "justify" | "start" | "end";
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text = "",
  className = "",
  delay = 100,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "start",
  onLetterAnimationComplete,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const elementsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const animatedRef = useRef<boolean>(false);

  const splitContent = useMemo(() => {
    if (splitType === "chars") {
      return text.split("").map((char, index) => (
        <span
          key={index}
          ref={(el) => {
            elementsRef.current[index] = el;
          }}
          style={{ display: "inline-block", opacity: 0 }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ));
    } else if (splitType === "words") {
      return text.split(" ").map((word, index, array) => (
        <span
          key={index}
          ref={(el) => {
            elementsRef.current[index] = el;
          }}
          style={{ display: "inline-block", opacity: 0 }}
        >
          {word}
          {index < array.length - 1 && "\u00A0"}
        </span>
      ));
    } else if (splitType === "lines") {
      return text.split("\n").map((line, index) => (
        <span
          key={index}
          ref={(el) => {
            elementsRef.current[index] = el;
          }}
          style={{ display: "block", opacity: 0 }}
        >
          {line}
        </span>
      ));
    }
    return null;
  }, [text, splitType]);

  const animate = useCallback(() => {
    const elements = elementsRef.current.filter((el) => el !== null);
    if (elements.length === 0) return;

    gsap.fromTo(
      elements,
      from,
      {
        ...to,
        duration,
        ease,
        stagger: delay / 1000,
        onComplete: onLetterAnimationComplete,
      }
    );
  }, [from, to, duration, ease, delay, onLetterAnimationComplete]);

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animate();
          animatedRef.current = true;
        }
      },
      { threshold, rootMargin }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [animate, threshold, rootMargin]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ textAlign, overflow: "hidden" }}
    >
      {splitContent}
    </div>
  );
};

export default SplitText;
