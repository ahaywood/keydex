import { Link } from "react-router";
import clsx from "clsx";

const PackageNav = ({ currentPath }: { currentPath: string }) => {
  return (
    <ul
      className="flex justify-between items-end border-b border-border p-studio pt-6
        [&_li]:pb-3 [&_li]:flex-1 [&_li]:text-center [&_li]:border-b-3 [&_li]:border-transparent
      [&_li.active]:border-white [&_li.active>a]:text-white [&_li.active]:font-bold
      [&_a]:text-submarine [&_a]:hover:text-white
    "
    >
      <li className={clsx(currentPath === "sales" && "active")}>
        <Link to="/studio/packages/react-router">Sales</Link>
      </li>
      <li className={clsx(currentPath === "telemetry" && "active")}>
        <Link to="/studio/packages/react-router">Telemetry</Link>
      </li>
      <li className={clsx(currentPath === "releases" && "active")}>
        <Link to="/studio/packages/react-router/releases">Releases</Link>
      </li>
      <li className={clsx(currentPath === "reviews" && "active")}>
        <Link to="/studio/packages/react-router/reviews">Reviews</Link>
      </li>
      <li className={clsx(currentPath === "issues" && "active")}>
        <Link to="/studio/packages/react-router/issues">Issues</Link>
      </li>
      <li className={clsx(currentPath === "discussions" && "active")}>
        <Link to="/studio/packages/react-router/discussion">Discussion</Link>
      </li>
      <li className={clsx(currentPath === "settings" && "active")}>
        <Link to="/studio/packages/react-router/settings">Settings</Link>
      </li>
    </ul>
  );
};

export { PackageNav };
