"use client";

import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion.create(Link);

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  style?: React.CSSProperties;
  href?: string;
}

export function MagneticButton({
  children,
  className = "",
  strength = 0.3,
  onClick,
  type = "button",
  disabled = false,
  style,
  href,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!ref.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const x = (clientX - centerX) * strength;
    const y = (clientY - centerY) * strength;

    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const handleClick = () => {
    if (onClick) onClick();
  };

  if (href) {
    const isExternal =
      href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
    const isHash = href.startsWith("#");

    if (isExternal || isHash) {
      return (
        <motion.a
          ref={ref as React.RefObject<HTMLAnchorElement>}
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className={className}
          style={style}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          animate={{ x: position.x, y: position.y }}
          transition={{ type: "spring", stiffness: 350, damping: 15, mass: 0.5 }}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <MotionLink
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        prefetch={false}
        className={className}
        style={style}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 350, damping: 15, mass: 0.5 }}
      >
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      disabled={disabled}
      className={className}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 350, damping: 15, mass: 0.5 }}
    >
      {children}
    </motion.button>
  );
}
