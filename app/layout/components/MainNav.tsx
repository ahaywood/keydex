import { Link } from "react-router";
import { SearchButton } from "./SearchButton";

const MainNav = () => {
  return (
    <nav className="main-nav bg-white/15 backdrop-blur-md border-blue-bayoux border py-3 px-10 rounded-full fixed top-6 left-1/2 -translate-x-1/2 z-[var(--z-index-nav)]">
      <ul className="flex items-center gap-12 justify-center font-light">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/docs/getting-started">Docs</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/signup">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li className="center">
          <SearchButton />
        </li>
      </ul>
    </nav>
  );
};

export { MainNav };
