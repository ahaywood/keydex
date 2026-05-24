import { Link, Outlet } from "react-router";
import { AccountBar } from "./components/AccountBar";
import { StudioSellerNav } from "./components/StudioSellerNav";
import { StudioHeaderNav } from "./components/StudioHeaderNav";
import { Icon } from "../components/Icon";
import { getUrlSegments } from "../lib/urlHelper";

const StudioLayout = () => {
  return (
    <div className="studio grid grid-cols-[286px_1fr]">
      <aside className="border-r border-border pt-7 px-12 flex flex-col h-screen overflow-y-auto">
        <Link to="/studio/dashboard" className="mb-9 inline-block">
          <img src="/images/logo.svg" alt="Keydex" className="w-[82px]" />
        </Link>

        {/* <StudioSellerNav currentPath={segments[1]} /> */}

        {/* account */}
        <nav className="admin-nav flex-0 mb-9">
          <ul>
            <li>
              <a href="#">
                <Icon id="admin" />
                <span>Library</span>
              </a>
            </li>
            <li>
              <Link to="/studio/customers">
                <Icon id="admin" />
                <span>Team Settings</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="relative -left-2">
          <AccountBar />
        </div>
      </aside>
      <div className="border-x border-border min-h-screen relative h-screen overflow-y-auto">
        <div className="absolute top-4 right-[68px]">
          <StudioHeaderNav />
        </div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default StudioLayout;
