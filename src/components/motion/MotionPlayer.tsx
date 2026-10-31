"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import type { ProcessMotionProps } from "./ProcessMotion";

const ProcessPlayer = dynamic(() => import("./ProcessPlayer"), { ssr: false });

export function MotionPlayer(props: ProcessMotionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      dir="ltr"
      className="aspect-video w-full overflow-hidden rounded-2xl border border-gray-200 bg-[#0F172A] dark:border-white/10"
    >
      {visible && <ProcessPlayer {...props} />}
    </div>
  );
}
