import React from "react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { Icon } from "../components/Icon";
// import { PackageHeader } from "../pages/seller/packages/components/PackageHeader";
// import { PackageNav } from "../pages/seller/packages/components/PackageNav";

const StudioPackagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <a href="#" className="text-white">
        <Icon id="arrow-left" size={20} />
      </a>

      <Breadcrumbs
        nav={[
          { label: "Packages", href: "/packages" },
          { label: "rwsdk", href: "/packages/rwsdk" },
          { label: "Sales", href: "/packages/rwsdk/sales" },
        ]}
      />

      {/* heading section */}
      {/* <PackageHeader currentPath="sales" /> */}

      {/* Packages Navigation */}
      {/* <PackageNav currentPath="sales" /> */}

      {children}
    </div>
  );
};

export { StudioPackagesLayout };
