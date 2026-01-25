import { cn } from "@/lib/utils";
import React from "react";
import type { IconName } from "@/types/icons";
import { cva, type VariantProps } from "class-variance-authority";
import { Icon } from "@/components/Icon";

const linkBlockVariants = cva(
  "hover:border-white mb-10 cursor-pointer flex-1 border border-trout rounded-sm text-xl font-bold py-7 px-8 flex items-center gap-5",
  {
    variants: {
      variant: {
        default: "",
        previous: "",
        next: "text-right flex-row-reverse",
      },
      iconPosition: {
        left: "",
        right: "flex-row-reverse",
      },
    },
    defaultVariants: {
      variant: "default",
      iconPosition: "left",
    },
  },
);

type LinkBlockVariantProps = VariantProps<typeof linkBlockVariants>;

type LinkBlockProps = {
  asChild?: "a" | "button";
  className?: string;
  children: React.ReactNode;
  icon?: string | IconName;
  iconPosition?: LinkBlockVariantProps["iconPosition"];
  label?: string;
  variant?: LinkBlockVariantProps["variant"];
} & (
  | ({ asChild?: "a" } & React.ComponentProps<"a">)
  | ({ asChild: "button" } & React.ComponentProps<"button">)
);

const LinkBlock = ({
  asChild = "a",
  className = "",
  children,
  icon = "",
  iconPosition = "left",
  label = "",
  variant = "default",
  ...rest
}: LinkBlockProps) => {
  const Component = asChild;

  return React.createElement(
    asChild || "a",
    {
      className: cn(linkBlockVariants({ variant, iconPosition }), className),
      ...rest,
    },
    <>
      {icon && <Icon id={icon as IconName} className="text-java" />}
      <div className="flex-1">
        {label && <div className="text-sm mb-2 font-light">{label}</div>}
        {children}
      </div>
    </>,
  );
};

const LinkBlockWrapper = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("flex gap-8", className)}>{children}</div>;
};

export { LinkBlock, LinkBlockWrapper };
