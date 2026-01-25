import { Icon } from "@/components/Icon";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import type { IconName } from "@/types/icons";

const asideVariants = cva("mb-5 border-l-4 p-7", {
  variants: {
    type: {
      tip: "border-tip-border bg-tip-bg [&_h3]:text-tip-heading",
      note: "border-note-border bg-note-bg [&_h3]:text-note-heading",
      destructive:
        "border-destructive-border bg-destructive-bg [&_h3]:text-destructive-heading",
      caution:
        "border-caution-border bg-caution-bg [&_h3]:text-caution-heading",
    },
  },
  defaultVariants: {
    type: "note",
  },
});

export type AsideVariantProps = VariantProps<typeof asideVariants>;

const Aside = ({
  heading,
  children,
  type = "note",
}: {
  heading: string;
  children: React.ReactNode;
  type: AsideVariantProps["type"];
}) => {
  const getIconId = (type: AsideVariantProps["type"]) => {
    switch (type) {
      case "tip":
        return "rocket";
      case "destructive":
        return "danger";
      case "caution":
        return "warning";
      case "note":
      default:
        return "info";
    }
  };

  return (
    <div className={cn(asideVariants({ type }))}>
      <h3 className="font-extralight text-xl pb-0 flex items-center gap-3 mb-3">
        <Icon id={getIconId(type) as IconName} size={24} />
        {heading}
      </h3>
      <div>{children}</div>
    </div>
  );
};

export { Aside };
