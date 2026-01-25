import { cn } from "../lib/utils";

const Separator = ({
  className,
  direction = "horizontal",
}: {
  direction?: "horizontal" | "vertical";
  className?: string;
}) => {
  return (
    <hr
      className={cn(
        "border-t border-border",
        direction === "horizontal"
          ? "border-t border-border"
          : "border-l border-border",
        className,
      )}
    />
  );
};

export { Separator };
