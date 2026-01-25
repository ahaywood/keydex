import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DashboardStat } from "@/components/DashboardStat";
import { DateRangePicker } from "@/components/DateRangePicker";
import { NewButton } from "../components/NewButton";
import { Badge } from "@/components/Badge";
import { StudioHeader } from "@/components/StudioHeader";
import { SalesBarChart } from "./components/SalesBarChart";
import { Link } from "react-router";
// import { NewButton } from "./components/NewButton";

const Dashboard = () => {
  return (
    <div>
      <StudioHeader title="Dashboard" />

      {/* numbers */}
      <section className="grid grid-cols-4 border-y border-border py-10 p-studio">
        <DashboardStat label="Revenue Last 30 Days">$2,432.98</DashboardStat>
        <DashboardStat label="Total Revenue">$10,231,23</DashboardStat>
        <DashboardStat label="Total Customers">231</DashboardStat>
        <DashboardStat label="Conversion Rate">43%</DashboardStat>
      </section>

      {/* graph */}
      <section className="p-studio py-10 border-b border-border">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-extralight text-2xl">Sales this Year</h2>
          <DateRangePicker />
        </div>
        <SalesBarChart />
      </section>

      {/* my packages */}
      <section className="p-studio py-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-extralight text-2xl">My Packages</h2>
          <NewButton />
        </div>

        <div>
          <div className="w-full grid grid-cols-[1fr_160px_160px_160px_160px]">
            <div className="table-header grid grid-cols-subgrid col-span-5">
              <div>Package</div>
              <div>Sales</div>
              <div>Revenue</div>
              <div>Price</div>
              <div>Status</div>
            </div>
            <div className="[&>div]:py-3 font-mono text-sm grid grid-cols-subgrid col-span-5">
              <div>
                <Link
                  to="/studio/packages/starter-combo"
                  className="hover:underline underline-offset-3"
                >
                  @starter-combo
                </Link>
              </div>
              <div>230</div>
              <div>$11,270</div>
              <div>$49</div>
              <div>
                <Badge className="text-[#3fd68c]">Published</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export { Dashboard };
