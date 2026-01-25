import type { IconName } from "@/types/icons";

interface Props {
  className?: string;
  size?: number;
  id: IconName;
}

const Icon = ({ className, size = 24, id }: Props) => {
  return (
    <svg width={size} height={size} className={className}>
      <use href={`/images/icons/sprite.svg#${id}`}></use>
    </svg>
  );
};

export default Icon;
