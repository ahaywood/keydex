import { Avatar } from "@/components/Avatar";
import { Icon } from "@/components/Icon";
import { MetaData } from "@/components/MetaData";
import { Link } from "react-router";
import { PackageHeader } from "./components/PackageHeader";
import { Purchase } from "./components/Purchase";
import { getUrlSegments } from "@/lib/urlHelper";
import { Tooltip } from "@/components/Tooltip";

const PackagePage = () => {
  return (
    <div>
      <PackageHeader currentPath="about" />

      <div className="grid grid-cols-[1fr_240px] pb-14 pr-[60px] pl-page pt-9">
        <div className="mb-6">
          <p>Package Content</p>
        </div>

        <aside className="mb-6">
          {/* purchase */}
          <Purchase />

          {/* meta data */}
          <MetaData label="Homepage">
            <div className="flex items-center gap-1">
              <Icon id="link" size={16} className="text-icon" />
              <a
                href="https://reactrouter.com"
                className="underline underline-offset-3"
              >
                reactrouter.com
              </a>
            </div>
          </MetaData>

          {/* Publisher */}
          <MetaData label="Publisher">
            <Link
              to="/profile/amy"
              className="flex items-center gap-1 hover:underline underline-offset-3"
            >
              <Avatar alt="Amy Dutton" size={24} />
              <span>Amy Dutton</span>
            </Link>
          </MetaData>

          {/* Installs */}
          <div className="flex items-center gap-8">
            <MetaData label="Installs">
              <div className="flex items-center gap-1">
                <Icon id="download" size={16} className="text-icon" />
                <span>100</span>
              </div>
            </MetaData>
            <div className="flex-1">graph</div>
          </div>

          <div className="grid grid-cols-2">
            {/* Version */}
            <MetaData label="Version">4.1.2</MetaData>

            {/* License */}
            <MetaData label="License">MIT</MetaData>

            {/* Unpacked Size */}
            <MetaData label="Unpacked Size">1.41 MB</MetaData>

            {/* Total Files */}
            <MetaData label="Total Files">100</MetaData>
          </div>

          {/* Last Published */}
          <MetaData label="Last Published">2 weeks ago</MetaData>

          {/* Collaborators */}
          <MetaData label="Collaborators">
            {/* TODO: Add Tooltip for each collaborator */}
            <div className="flex flex-wrap gap-2 relative">
              <Link to="/profile/amy">
                <Avatar alt="Amy Dutton" size={42} />
              </Link>
              <Link to="/profile/amy">
                <Avatar alt="Amy Dutton" size={42} />
              </Link>
              <Link to="/profile/amy">
                <Avatar alt="Amy Dutton" size={42} />
              </Link>
            </div>
          </MetaData>
        </aside>
      </div>
    </div>
  );
};

export { PackagePage };
