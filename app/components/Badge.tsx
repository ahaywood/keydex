import React from "react";
import { cn } from "../lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const badgeVariants = cva(
  "font-mono text-sm px-2 py-0 border rounded-sm border-current inline-block whitespace-nowrap",
  {
    variants: {
      variant: {
        outline: "[&_span]:text-white",
        solid: "bg-current [&_span]:text-black",
      },
      color: {
        default: "text-white",
        pink: "text-princess-perfume",
        yellow: "text-aureolin",
        green: "text-shamrock",
        blue: "text-sea-serpent",
      },
    },
    defaultVariants: {
      variant: "outline",
      color: "default",
    },
  },
);

export type BadgeVariantProps = VariantProps<typeof badgeVariants>;

const Badge = ({
  children,
  className,
  color = "default",
  variant = "outline",
}: {
  children: React.ReactNode;
  className?: string;
  color?: BadgeVariantProps["color"];
  variant?: BadgeVariantProps["variant"];
}) => {
  return (
    <div className={cn(badgeVariants({ variant, color }), className)}>
      <span>{children}</span>
    </div>
  );
};

const BadgeWrapper = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>{children}</div>
  );
};

export { Badge, BadgeWrapper };
