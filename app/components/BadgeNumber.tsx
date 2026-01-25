import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "../lib/utils";

const BadgeNumberVariants = cva(
  "text-sm font-black px-2 py-0 rounded-full inline-block text-sm",
  {
    variants: {
      variant: {
        primary: "bg-white text-black",
        secondary: "bg-icon text-black",
      },
    },
  },
);

export type BadgeNumberVariantProps = VariantProps<typeof BadgeNumberVariants>;

const BadgeNumber = ({
  className = "",
  number,
  variant = "primary",
}: {
  className?: string;
  number: number;
  variant?: BadgeNumberVariantProps["variant"];
}) => {
  return (
    <div className={cn(BadgeNumberVariants({ variant }), className)}>
      {number}
    </div>
  );
};

export { BadgeNumber };
