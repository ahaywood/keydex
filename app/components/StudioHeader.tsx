import { BadgeNumber } from "./BadgeNumber";
import { Breadcrumbs } from "./Breadcrumbs";

const StudioHeader = ({
  children = null,
  title,
  badgeNumber = null,
}: {
  title: string;
  children?: React.ReactNode | null;
  badgeNumber?: number | null;
}) => {
  return (
    <div className="h-[125px] p-studio pt-12 relative">
      <div className="absolute top-4">
        <Breadcrumbs
          nav={[
            { label: "Dashboard", href: "/dashboard" },
            { label: "Sellers", href: "/dashboard/sellers" },
          ]}
        />
      </div>
      <h1 className="text-5xl font-thin tracking-tight flex items-center gap-2">
        {title}
        {badgeNumber && <BadgeNumber number={badgeNumber} />}
      </h1>
      {children && children}
    </div>
  );
};

export { StudioHeader };
