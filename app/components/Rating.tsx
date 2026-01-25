import { cn } from "../lib/utils";
import Icon from "./Icon";

const Rating = ({
  size = 16,
  rating,
  className,
}: {
  size?: number;
  rating: number;
  className?: string;
}) => {
  const filledStars = Math.floor(rating);
  const emptyStars = 5 - filledStars;

  return (
    <div className={cn("flex items-center gap-[2px]", className)}>
      {Array.from({ length: filledStars }).map((_, index) => (
        <Icon id="star-filled" key={index} size={size} />
      ))}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <Icon id="star-outline" key={index} size={size} />
      ))}
      <strong className="text-xs text-white leading-none ml-[2px] relative top-[1px]">
        {rating}
      </strong>
    </div>
  );
};

export { Rating };
