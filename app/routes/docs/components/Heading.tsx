import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import React from "react";

const headingVariants = cva("relative", {
  variants: {
    tag: {
      h1: "font-thin text-5xl mb-8",
      h2: "font-extralight text-xl mb-2",
      h3: "text-3xl",
      h4: "text-2xl",
    },
  },
});

const Heading = ({
  tag,
  children,
  className = "",
  id = "",
}: {
  tag: "h1" | "h2" | "h3" | "h4";
  children: React.ReactNode;
  className?: string;
  id?: string;
}) => {
  const Tag = tag;

  return (
    <Tag id={id} className={cn(headingVariants({ tag }), className)}>
      {id && (
        <a className="absolute top-0 -left-5 cursor-pointer text-xl text-java font-bold hover:text-white">
          #
        </a>
      )}
      {children}
    </Tag>
  );
};

export { Heading };
