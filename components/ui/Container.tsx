import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

/** Centers content with consistent max-width and responsive gutters. */
export default function Container({
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12", className)}
      {...props}
    >
      {children}
    </div>
  );
}
