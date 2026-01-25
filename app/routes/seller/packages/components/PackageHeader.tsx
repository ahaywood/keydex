import { Rating } from "@/components/Rating";
import { Link } from "react-router";
import { Icon } from "@/components/Icon";
import { Avatar } from "@/components/Avatar";

const PackageHeader = ({ currentPath }: { currentPath: string }) => {
  return (
    <div>
      <div className="p-studio py-10 flex gap-7">
        <Avatar alt="Amy" size={120} shape="square" />

        <div className="w-full">
          <div className="flex justify-between items-center">
            <h1 className="text-5xl font-thin mb-4 flex-1">
              @starter-combo/rwsdk
            </h1>
            <div className="flex gap-4 items-center">
              <a href="#" className="flex items-center gap-1">
                <Icon id="github" size={20} />
                Repository
              </a>
              <a href="#">Visit</a>
            </div>
          </div>
          <p className="tracking-wide mb-2">
            Tools for making it easy to Open Source a package.
          </p>
          <div className="flex gap-2 items-center text-xs text-submarine">
            <Link
              to="/packages/react-router/releases"
              className="hover:text-white hover:underline underline-offset-3"
            >
              v4.1.2
            </Link>
            <span>&bull;</span>
            <Link
              to="/packages/react-router/releases"
              className="hover:text-white hover:underline underline-offset-3"
            >
              Updated 2 days ago
            </Link>
            <span>&bull;</span>
            <Link
              to="/packages/react-router/releases"
              className="flex items-center gap-1 hover:underline underline-offset-3 group"
            >
              <Icon
                id="download"
                size={16}
                className="text-icon group-hover:text-white"
              />
              <strong className="text-white">3</strong>
            </Link>
            <span>&bull;</span>
            <Link
              to="/packages/react-router/reviews"
              className="hover:underline underline-offset-3 hover:text-white"
            >
              <Rating rating={4.9} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PackageHeader };
