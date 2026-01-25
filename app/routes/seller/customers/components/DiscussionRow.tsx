import { Icon } from "@/components/Icon";
import { Link } from "react-router";

const DiscussionRow = () => {
  return (
    <div className="flex gap-3 mb-5">
      <div>
        <Icon id="item-closed" className="fill-violet" />
      </div>
      <div className="flex-1">
        <div className="text-sm mb-1">
          <Link
            to="/studio/packages/1/discussion/1"
            className="hover:underline"
          >
            Missing publish date for chats
          </Link>
        </div>
        <div className="text-xs flex items-center gap-1">
          <div className="text-pumice">#540</div>
          <div className="text-pumice">&bull;</div>
          <div>Updated on July 21</div>
        </div>
      </div>
      <div>
        <Link
          to="/studio/packages/1/issues/1"
          className="text-icon hover:text-white flex items-center gap-1 text-sm"
        >
          <Icon id="comment" size={20} />
          <strong className="text-white">2</strong>
        </Link>
      </div>
    </div>
  );
};

export { DiscussionRow };
