import { Icon } from "@/components/Icon";
import { PackageRow } from "@/components/PackageRow";
import { StudioHeader } from "@/components/StudioHeader";
import { Link } from "react-router";
import React from "react";

const SellerPackagesPage = () => {
  return (
    <div>
      <StudioHeader title="Packages" badgeNumber={10} />
      <main className="border-t border-border py-10 p-studio">
        <div className="flex items-center justify-between mb-5 pb-4 gap-[100px] border-b border-border">
          <div className="flex items-center gap-5 flex-1 relative -left-12">
            <Icon id="search" className="text-icon" />
            <input
              type="search"
              placeholder="Search for a Specific Order"
              className="table-search"
            />
          </div>
          <div>
            <Link to="/studio/packages/new" className="button solid">
              + Package
            </Link>
          </div>
        </div>

        {/* TODO: Link inside the PackageRow component goes to the wrong place */}
        <ul className="[&>li]:border-b [&>li]:border-border [&>li]:pb-6 [&>li]:mb-6 [&>li]:last:border-b-0">
          <li>
            <PackageRow link="/studio/packages/starter-combo" />
          </li>
          <li>
            <PackageRow link="/studio/packages/starter-combo" />
          </li>
          <li>
            <PackageRow link="/studio/packages/starter-combo" />
          </li>
        </ul>
      </main>
    </div>
  );
};

export { SellerPackagesPage };
