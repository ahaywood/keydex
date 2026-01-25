import { Icon } from "@/components/Icon";
import { Link } from "react-router";

const SalesRow = () => {
  return (
    <div className="col-span-5 grid grid-cols-subgrid text-sm">
      <div className="font-mono">19281</div>
      <div className="font-mono">Aug 20, 2025, 1:26 AM</div>
      <div>Package Name</div>
      <div className="flex justify-between font-mono">
        <span>$</span>
        <span>49.00</span>
      </div>
      <div className="text-right">
        <Link to="/studio/orders/1" className="text-icon hover:text-white">
          <Icon id="visible" size={20} />
        </Link>
      </div>
    </div>
  );
};

export { SalesRow };
