"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";



export function useCounter(
  end: number,
  duration: number = 2,
  suffix: string = ""
) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const obj = useRef({ value: 0 });

  useEffect(() => {
    if (!ref.current || hasAnimated) return;

    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: "top 80%",
      onEnter: () => {
        if (hasAnimated) return;
        setHasAnimated(true);

        gsap.to(obj.current, {
          value: end,
          duration: duration,
          ease: "power2.out",
          onUpdate: () => {
            setCount(Math.round(obj.current.value));
          },
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [end, duration, hasAnimated]);

  return { ref, count: count + suffix };
}
