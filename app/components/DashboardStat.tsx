import React from "react";
import Icon from "./Icon";

const DashboardStat = ({
  label,
  children,
  tooltip,
}: {
  label: string;
  children: React.ReactNode;
  tooltip?: string;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-logan text-sm">
        {label}
        {/* TODO: Add Tooltip */}
        {tooltip && <Icon id="info" size={16} />}
      </div>
      <div className="text-2xl font-extralight">{children}</div>
    </div>
  );
};

export { DashboardStat };
