"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, MouseEvent, ReactNode, useState } from "react";

type Variant = "primary" | "outline" | "ghost";
type Size = "md" | "lg" | "sm";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

type ConflictingHandlers =
  | "className"
  | "children"
  | "onDrag"
  | "onDragStart"
  | "onDragEnd"
  | "onAnimationStart"
  | "onAnimationEnd"
  | "onAnimationIteration";

interface ButtonAsButton
  extends BaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, ConflictingHandlers> {
  href?: undefined;
}

interface ButtonAsLink extends BaseProps {
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const VARIANT_STYLES: Record<Variant, string> = {
  primary:
    "bg-primary text-white shadow-soft hover:bg-primary-dark hover:shadow-gold",
  outline:
    "border border-primary text-primary bg-transparent hover:bg-primary hover:text-white",
  ghost: "bg-transparent text-ink hover:text-primary",
};

const SIZE_STYLES: Record<Size, string> = {
  sm: "px-5 py-2 text-xs",
  md: "px-7 py-3 text-sm",
  lg: "px-9 py-4 text-sm md:text-base",
};

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
}

/** Luxury CTA button with a gold-accented hover state and a click ripple. */
export default function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    children,
    className,
    icon,
  } = props;
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const createRipple = (e: MouseEvent<HTMLElement>) => {
    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const id = Date.now();
    setRipples((prev) => [
      ...prev,
      { id, x: e.clientX - rect.left - size / 2, y: e.clientY - rect.top - size / 2, size },
    ]);
    window.setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 650);
  };

  const classes = cn(
    "relative isolate overflow-hidden inline-flex items-center justify-center gap-2 rounded-full font-body font-medium tracking-wide transition-all duration-300 ease-out",
    VARIANT_STYLES[variant],
    SIZE_STYLES[size],
    className
  );

  const rippleLayer = ripples.map((r) => (
    <span
      key={r.id}
      aria-hidden
      className="pointer-events-none absolute rounded-full bg-white/40 animate-[ping_0.65s_ease-out]"
      style={{ left: r.x, top: r.y, width: r.size, height: r.size }}
    />
  ));

  const content = (
    <>
      {rippleLayer}
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
        {icon}
      </span>
    </>
  );

  if ("href" in props && props.href) {
    return (
      <motion.span
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="inline-block"
      >
        <Link
          href={props.href}
          onClick={createRipple}
          className={classes}
        >
          {content}
        </Link>
      </motion.span>
    );
  }

  const { href: _href, ...buttonProps } = props as ButtonAsButton;

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={classes}
      onClick={(e) => {
        createRipple(e);
        buttonProps.onClick?.(e);
      }}
      {...buttonProps}
    >
      {content}
    </motion.button>
  );
}
