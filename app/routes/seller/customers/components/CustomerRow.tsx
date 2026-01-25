import { BadgeNumber } from "@/components/BadgeNumber";
import { Icon } from "@/components/Icon";
import { Link } from "react-router";

const CustomerRow = () => {
  return (
    <div className="col-span-5 grid grid-cols-subgrid items-center">
      <div>
        <Link
          to="/studio/customers/1"
          className="hover:underline underline-offset-3"
        >
          Amy Dutton
        </Link>
      </div>
      <div className="font-mono text-sm">
        <a
          href="mailto:amy@redwoodjs.com"
          className="hover:underline underline-offset-3"
        >
          amy@redwoodjs.com
        </a>
      </div>
      <div className="text-center">
        <Link to="/studio/customers/1">
          <BadgeNumber
            number={1}
            variant="secondary"
            className="hover:bg-white"
          />
        </Link>
      </div>
      <div className="text-center">
        <Link to="/studio/customers/1">
          <BadgeNumber
            number={2}
            variant="secondary"
            className="hover:bg-white"
          />
        </Link>
      </div>
      <div>
        <Link to="/studio/customers/1" className="text-icon hover:text-white">
          <Icon id="visible" size={20} />
        </Link>
      </div>
    </div>
  );
};

export { CustomerRow };
