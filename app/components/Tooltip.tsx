"use client";

import React from "react";
import { cn } from "../lib/utils";
import { cva } from "class-variance-authority";

const toolTipVariants = cva(
  "relative bg-black rounded-md p-4 border border-white after:content-[''] after:absolute",
  {
    variants: {
      direction: {
        top: "after:left-1/2 after:-translate-x-1/2",
        bottom: "after:left-1/2 after:-translate-x-1/2",
        left: "left",
        right: "right",
      },
    },
  },
);

const Tooltip = ({
  children,
  direction = "top",
}: {
  children: React.ReactNode;
  direction?: "top" | "bottom" | "left" | "right";
}) => {
  return <div className="relative">{children}</div>;
};

const TooltipContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-black rounded-md p-4 border border-white">
      {children}
    </div>
  );
};

const TooltipTrigger = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export { Tooltip };
