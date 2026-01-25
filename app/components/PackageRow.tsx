import { Link } from "react-router";
import { Avatar } from "./Avatar";
import Icon from "./Icon";
import { Rating } from "./Rating";

const PackageRow = ({
  className = "",
  link = "",
  purchased = false,
}: {
  className?: string;
  link?: string;
  purchased?: boolean;
}) => {
  return (
    <div className={className}>
      <div className="flex gap-5">
        <Link to={link}>
          <Avatar alt="Amy" size={80} shape="square" />
        </Link>

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-light text-2xl tracking-wide">
              <Link to={link} className="hover:underline underline-offset-3">
                oss-this
              </Link>
            </h3>
            {purchased ? (
              <div className="text-xs tracking-wide text-icon py-2 px-3">
                Purchased
              </div>
            ) : (
              <Link
                to={link}
                className="inline-block text-xs tracking-wide border-montana border rounded-md py-2 px-3 hover:bg-violet-darker hover:border-violet-darker"
              >
                Details
              </Link>
            )}
          </div>
          <p className="mb-1">
            Tools for making it easy to Open Source a package.
          </p>
          <div className="flex items-center gap-2">
            <Link
              to="/packages/oss-this/releases"
              className="text-icon text-xs tracking-wider hover:text-white hover:underline underline-offset-3"
            >
              Updated 2 days ago
            </Link>
            <div className="text-icon">&bull;</div>
            <Link
              to="/packages/oss-this/releases"
              className="flex items-center gap-1 text-xs hover:underline underline-offset-3"
            >
              <Icon id="download" size={16} className="text-icon" />{" "}
              <strong>3</strong>
            </Link>
            <div className="text-icon">&bull;</div>
            <Link to={link} className="hover:underline underline-offset-3">
              <Rating rating={4.5} className="text-icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PackageRow };
