import { Link, Outlet } from "react-router";

const DocsLayout = () => {
  return (
    <div className="page page-grid">
      <div className="relative">
        <div className="fixed h-full overflow-y-auto w-full">
          {/* logo */}
          <Link to="/" className="relative mt-6">
            <img src="/images/logo.svg" alt="Keydex" className="w-[145px]" />
          </Link>

          <button className="mt-6 mb-8 ml-4 text-java font-bold border-2 rounded-full border-submarine px-4 py-1 hover:bg-java hover:text-black hover:border-java">
            ⌘K
          </button>

          <ul
            className="ml-4
          [&>li]:mb-8
        [&_ul]:text-submarine [&_ul]:font-normal [&_ul]:my-4 [&_ul]:flex [&_ul]:flex-col
          [&_ul_li]:m-0 [&_ul_li]:p-0 [&_ul_li]:leading-none
          [&_ul_a]:border-l [&_ul_a]:border-submarine [&_ul_a]:pl-5 [&_ul_a]:hover:border-white [&_ul_a]:py-3 [&_ul_a]:block [&_ul_a]:hover:text-white
        "
          >
            <li>
              <a href="#" className="font-bold text-java mb-3">
                Get Started
              </a>
              <ul>
                <li>
                  <a href="#">Introduction</a>
                </li>
                <li>
                  <a href="#">Quick Start</a>
                </li>
                <li>
                  <a href="#">Guided Tour</a>
                </li>
                <li>
                  <a href="#">Ship in 5 Minutes</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Tutorials + Guides</a>
              <ul>
                <li>
                  <a href="#">Activity Feed</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-l border-border min-h-screen col-span-2 grid grid-cols-subgrid">
        <Outlet />
      </div>
    </div>
  );
};

export default DocsLayout;
