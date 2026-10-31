"use client";

import { Player } from "@remotion/player";
import { useSyncExternalStore } from "react";
import { ProcessMotion, motionDuration, type ProcessMotionProps } from "./ProcessMotion";

const subscribeReducedMotion = (cb: () => void) => {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};
const getReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function ProcessPlayer(props: ProcessMotionProps) {
  const reduced = useSyncExternalStore(subscribeReducedMotion, getReducedMotion, () => false);

  return (
    <Player
      component={ProcessMotion}
      inputProps={props}
      durationInFrames={motionDuration(props.steps.length)}
      compositionWidth={1280}
      compositionHeight={720}
      fps={30}
      controls
      loop
      autoPlay={!reduced}
      acknowledgeRemotionLicense
      style={{ width: "100%" }}
    />
  );
}
