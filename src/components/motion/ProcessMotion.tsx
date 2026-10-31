import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export type ProcessMotionProps = {
  title: string;
  steps: string[];
  rtl?: boolean;
  brand?: string;
};

const INTRO = 60;
const PER_STEP = 75;
const OUTRO = 60;

export const motionDuration = (stepCount: number) => INTRO + stepCount * PER_STEP + OUTRO;

const RED = "#DC2626";
const NAVY = "#0F172A";
const font = 'var(--font-inter), "Segoe UI", Tahoma, Arial, sans-serif';

export const ProcessMotion: React.FC<ProcessMotionProps> = ({
  title,
  steps,
  rtl = false,
  brand = "Expert Power",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const total = motionDuration(steps.length);

  const titleIn = spring({ frame, fps, config: { damping: 200 } });
  const active = Math.floor((frame - INTRO) / PER_STEP);
  const progress = interpolate(frame, [INTRO, total - OUTRO], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const outro = interpolate(frame, [total - OUTRO + 10, total - 10], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const glow = 0.5 + 0.5 * Math.sin(frame / 14);
  const slide = rtl ? -1 : 1;

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(circle at ${20 + progress * 0.5}% 20%, #1E293B 0%, ${NAVY} 60%)`,
        fontFamily: font,
        direction: rtl ? "rtl" : "ltr",
        color: "white",
      }}
    >
      <AbsoluteFill style={{ opacity: 0.12 }}>
        <svg width="100%" height="100%" viewBox="0 0 1280 720">
          {Array.from({ length: 9 }).map((_, i) => (
            <line
              key={i}
              x1={0}
              x2={1280}
              y1={80 * i + ((frame * 0.4) % 80)}
              y2={80 * i + ((frame * 0.4) % 80)}
              stroke="#94A3B8"
              strokeWidth={1}
            />
          ))}
        </svg>
      </AbsoluteFill>

      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          width: "42%",
          [rtl ? "right" : "left"]: 0,
          padding: "64px 56px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          opacity: titleIn,
          transform: `translateX(${(1 - titleIn) * -60 * slide}px)`,
        }}
      >
        <div style={{ color: RED, fontSize: 26, fontWeight: 700, letterSpacing: 2 }}>{brand}</div>
        <div style={{ marginTop: 20, fontSize: 52, fontWeight: 800, lineHeight: 1.15 }}>{title}</div>
        <div
          style={{
            marginTop: 28,
            height: 6,
            width: `${40 + glow * 20}%`,
            background: RED,
            borderRadius: 3,
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          width: "58%",
          [rtl ? "left" : "right"]: 0,
          padding: "48px 56px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 18,
        }}
      >
        {steps.map((step, i) => {
          const start = INTRO + i * PER_STEP;
          const enter = spring({ frame: frame - start, fps, config: { damping: 18, stiffness: 120 } });
          const isActive = active === i;
          const isDone = active > i;
          return (
            <div
              key={step}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 22,
                padding: "16px 24px",
                borderRadius: 18,
                background: isActive ? "rgba(220,38,38,0.22)" : "rgba(255,255,255,0.06)",
                border: `2px solid ${isActive ? RED : "rgba(255,255,255,0.12)"}`,
                opacity: frame >= start ? enter : 0,
                transform: `translateX(${(1 - enter) * 120 * slide}px) scale(${isActive ? 1.03 : 1})`,
                boxShadow: isActive ? `0 0 ${20 + glow * 20}px rgba(220,38,38,0.45)` : "none",
              }}
            >
              <div
                style={{
                  flex: "0 0 56px",
                  height: 56,
                  borderRadius: 28,
                  background: isDone || isActive ? RED : "rgba(255,255,255,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 28,
                  fontWeight: 800,
                }}
              >
                {isDone ? "✓" : i + 1}
              </div>
              <div style={{ flex: 1, minWidth: 0, fontSize: 27, fontWeight: 600, lineHeight: 1.25 }}>{step}</div>
            </div>
          );
        })}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 10,
          background: "rgba(255,255,255,0.1)",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            background: RED,
            [rtl ? "marginLeft" : "marginRight"]: "auto",
            [rtl ? "marginRight" : "marginLeft"]: 0,
          }}
        />
      </div>

      <AbsoluteFill
        style={{
          background: NAVY,
          opacity: outro,
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: 80,
        }}
      >
        <div style={{ color: RED, fontSize: 30, fontWeight: 700, letterSpacing: 2 }}>{brand}</div>
        <div style={{ marginTop: 18, fontSize: 56, fontWeight: 800, lineHeight: 1.2 }}>{title}</div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
