import { Icon } from "./Icon";

const DateRangePicker = () => {
  return (
    <div className="flex items-center gap-2 border border-[#2d2954] rounded-md py-1 px-2">
      <Icon id="calendar" className="text-icon" />
      <span className="text-sm">This Year: Jan 1 to Dec 31, 2025</span>
    </div>
  );
};

export { DateRangePicker };
