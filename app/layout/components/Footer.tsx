import { Icon } from "@/components/Icon";
import { CONSTANTS } from "@/lib/constants";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center px-page">
      {/* copyright */}
      <div className="text-submarine text-sm leading-relaxed">
        <p>
          Copyright &copy; {new Date().getFullYear()}.{" "}
          <a href={CONSTANTS.AHHA} target="_blank" rel="noopener noreferrer">
            Ah Ha Creative, LLC.
          </a>{" "}
          All rights reserved.
        </p>
        <p>
          <Link to="/legal/terms">Terms and Conditions</Link>
          &nbsp;&nbsp;&bull;&nbsp;&nbsp;
          <Link to="/legal/privacy">Privacy Policy</Link>
          &nbsp;&nbsp;&bull;&nbsp;&nbsp;
          <Link to="/legal/disclaimers">Disclaimers</Link>
        </p>
      </div>

      {/* social media */}
      <ul className="flex items-center gap-4 text-violet">
        <li>
          <a
            href={CONSTANTS.DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon id="discord" />
          </a>
        </li>

        <li>
          <a
            href={CONSTANTS.TWITTER_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon id="x" />
          </a>
        </li>

        <li>
          <a
            href={CONSTANTS.GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon id="github" />
          </a>
        </li>

        <li>
          <a
            href={CONSTANTS.YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon id="youtube" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export { Footer };
