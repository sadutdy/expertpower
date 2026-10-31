"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

import { cn } from "@/lib/utils";


interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  splitBy?: "words" | "chars" | "lines";
  once?: boolean;
}

export function TextReveal({
  children,
  className = "",
  delay = 0,
  stagger = 0.1,
  as: Component = "h2",
  splitBy = "words",
  once = true,
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const elements = containerRef.current.querySelectorAll(".reveal-item");

    gsap.set(elements, { y: "100%", opacity: 0 });

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 85%",
      onEnter: () => {
        if (once && hasAnimated.current) return;
        hasAnimated.current = true;

        gsap.to(elements, {
          y: "0%",
          opacity: 1,
          duration: 0.8,
          stagger: stagger,
          delay: delay,
          ease: "power3.out",
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [delay, stagger, once]);

  const splitText = () => {
    if (splitBy === "words") {
      return children.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <span className="reveal-item inline-block">{word}</span>
        </span>
      ));
    }
    if (splitBy === "chars") {
      return children.split("").map((char, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <span className="reveal-item inline-block">{char === " " ? "\u00A0" : char}</span>
        </span>
      ));
    }
    return (
      <span className="inline-block overflow-hidden">
        <span className="reveal-item inline-block">{children}</span>
      </span>
    );
  };

  return (
    <Component ref={containerRef as any} className={cn("", className)}>
      {splitText()}
    </Component>
  );
}
