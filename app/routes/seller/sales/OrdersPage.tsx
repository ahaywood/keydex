import { Badge } from "@/components/Badge";
import { DateRangePicker } from "@/components/DateRangePicker";
import { Icon } from "@/components/Icon";
import { StudioHeader } from "@/components/StudioHeader";
import { Link } from "react-router";

const OrdersPage = () => {
  return (
    <div>
      <StudioHeader title="Orders" />

      <hr className="mb-10" />

      <div className="p-studio">
        {/* header */}
        <div className="flex items-center justify-between mb-10 gap-[100px]">
          {/* left side - search bar */}
          <div className="flex items-center gap-5 flex-1 relative -left-12">
            <Icon id="search" className="text-icon" />
            <input
              type="search"
              placeholder="Search for a Specific Order"
              className="table-search"
            />
          </div>

          {/* right side - buttons */}
          <div className="flex items-center gap-6">
            <button className="center gap-[6px] text-sm">
              <Icon id="export" className="text-icon" /> Export
            </button>
            <DateRangePicker />
          </div>
        </div>

        {/* table header */}
        <div className="grid grid-cols-[75px_225px_auto_auto_100px_32px] gap-6">
          <div className="table-header grid grid-cols-subgrid col-span-6">
            <div>Order</div>
            <div>Purchase Date</div>
            <div>Customer</div>
            <div>Package</div>
            <div>Price</div>
            <div></div>
          </div>

          <div className="text-sm grid col-span-6 grid-cols-subgrid">
            <div className="font-mono">19281</div>
            <div className="font-mono">Aug 20, 2025, 1:26 AM</div>
            <div className="font-bold">
              <Link
                to="/studio/customers/1"
                className="hover:underline underline-offset-3"
              >
                Amy Dutton
              </Link>
            </div>
            <div className="relative [&:after]:content-[''] [&:after]:absolute [&:after]:inset-0 [&:after]:pointer-events-none">
              <div className="flex items-center gap-2 w-full overflow-x-scroll">
                <Link to="/studio/packages/advent-of-css-2025">
                  <Badge>advent-of-css-2025</Badge>
                </Link>
              </div>
            </div>
            <div className="flex justify-between font-mono">
              <span>$</span>
              <span>49.00</span>
            </div>
            <div>
              <Link
                to="/studio/orders/1"
                className="text-icon hover:text-white"
              >
                <Icon id="visible" />
              </Link>
            </div>
          </div>

          <div className="text-sm grid col-span-6 grid-cols-subgrid">
            <div className="font-mono">19281</div>
            <div className="font-mono">Aug 20, 2025, 1:26 AM</div>
            <div className="font-bold">
              <Link
                to="/studio/customers/1"
                className="hover:underline underline-offset-3"
              >
                Amy Dutton
              </Link>
            </div>
            <div className="relative [&:after]:content-[''] [&:after]:absolute [&:after]:inset-0 [&:after]:pointer-events-none">
              <div className="flex items-center gap-2 w-full overflow-x-scroll">
                <Link to="/studio/packages/advent-of-css-2025">
                  <Badge>advent-of-css-2025</Badge>
                </Link>
              </div>
            </div>
            <div className="flex justify-between font-mono">
              <span>$</span>
              <span>49.00</span>
            </div>
            <div>
              <Link
                to="/studio/orders/1"
                className="text-icon hover:text-white"
              >
                <Icon id="visible" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
