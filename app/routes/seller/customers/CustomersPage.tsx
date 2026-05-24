import { DateRangePicker } from "@/components/DateRangePicker";
import { Icon } from "@/components/Icon";
import { StudioHeader } from "@/components/StudioHeader";
import { CustomerRow } from "./components/CustomerRow";

const CustomersPage = () => {
  return (
    <div>
      <StudioHeader title="Customers" />

      <main className="border-t border-border py-10 p-studio">
        <div className="flex items-center justify-between mb-5 pb-4 gap-[100px]">
          <div className="flex items-center gap-5 flex-1 relative -left-12">
            <Icon id="search" className="text-icon" />
            <input
              type="search"
              placeholder="Search for a Specific Order"
              className="table-search"
            />
          </div>

          <div className="flex items-center gap-6">
            <button className="center gap-[6px] text-sm">
              <Icon id="export" className="text-icon" /> Export
            </button>
            <DateRangePicker />
          </div>
        </div>

        <div className="grid grid-cols-[1fr_1fr_100px_100px_42px] table-spacing">
          <div className="table-header col-span-5">
            <div>Name</div>
            <div>Email</div>
            <div className="text-center">Issues</div>
            <div className="text-center">Discussion</div>
            <div></div>
          </div>

          <CustomerRow />
          <CustomerRow />
          <CustomerRow />
          <CustomerRow />
        </div>
      </main>
    </div>
  );
};

export default CustomersPage;
