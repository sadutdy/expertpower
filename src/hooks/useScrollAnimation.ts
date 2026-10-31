"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";



interface ScrollAnimationOptions {
  trigger?: string | Element;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean;
  markers?: boolean;
  onEnter?: () => void;
  onLeave?: () => void;
}

export function useScrollAnimation(
  animation: (tl: gsap.core.Timeline, trigger: Element) => void,
  options: ScrollAnimationOptions = {}
) {
  const triggerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!triggerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: options.trigger || triggerRef.current,
        start: options.start || "top 80%",
        end: options.end || "bottom 20%",
        scrub: options.scrub || false,
        pin: options.pin || false,
        markers: options.markers || false,
        onEnter: options.onEnter,
        onLeave: options.onLeave,
      },
    });

    timelineRef.current = tl;
    animation(tl, triggerRef.current);

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === triggerRef.current) {
          st.kill();
        }
      });
    };
  }, []);

  return triggerRef;
}

export function useParallax(speed: number = 0.5) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    
    gsap.to(element, {
      yPercent: speed * 100,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === element) {
          st.kill();
        }
      });
    };
  }, [speed]);

  return elementRef;
}
