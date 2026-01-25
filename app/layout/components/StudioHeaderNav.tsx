import { Icon } from "@/components/Icon";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { HelpDropdown } from "./HelpDropdown";
import { NotificationsDropdown } from "./NotificationsDropdown";

const StudioHeaderNav = () => {
  return (
    <nav className="relative z-[var(--z-index-nav)]">
      <ul className="flex items-center gap-7 text-icon">
        <li>
          <ThemeSwitcher />
        </li>
        <li>
          <HelpDropdown />
        </li>
        <li>
          <NotificationsDropdown />
        </li>
      </ul>
    </nav>
  );
};

export { StudioHeaderNav };
