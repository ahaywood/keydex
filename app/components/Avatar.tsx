import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const AvatarVariant = cva("w-full h-full object-cover", {
  variants: {
    shape: {
      circle: "rounded-full",
      square: "rounded-xl",
    },
  },
});

export type AvatarProps = VariantProps<typeof AvatarVariant>;

const Avatar = ({
  className = "",
  src = "",
  alt,
  size = 32,
  shape = "circle",
}: {
  src?: string;
  alt: string;
  size?: number;
  shape?: AvatarProps["shape"];
  className?: string;
}) => {
  return (
    <div
      className={cn("relative", className)}
      style={{ width: size, height: size }}
    >
      <img
        src={
          src ? src : `https://gradient-avatars.ahhacreative.workers.dev/${alt}`
        }
        alt={alt}
        className={cn(AvatarVariant({ shape }))}
      />
    </div>
  );
};

const AvatarWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-wrap gap-2">{children}</div>;
};

export { Avatar, AvatarWrapper };
