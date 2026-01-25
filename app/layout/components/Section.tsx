import { cn } from "@/lib/utils";
import type { PropsWithChildren } from "react";

const Section = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <section className={cn("page-grid border-y border-border", className)}>
      <div className="col-start-2 py-10 border-x border-border">{children}</div>
    </section>
  );
};

export { Section };
