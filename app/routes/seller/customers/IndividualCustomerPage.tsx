import React from "react";
import { StudioHeader } from "@/components/StudioHeader";
import { License } from "../components/License";
import { BadgeNumber } from "@/components/BadgeNumber";
import { Icon } from "@/components/Icon";
import { SalesRow } from "./components/SalesRow";
import { IssueRow } from "./components/IssueRow";
import { DiscussionRow } from "./components/DiscussionRow";

const IndividualCustomerPage = () => {
  return (
    <div>
      <div className="border-b border-border pb-8">
        <StudioHeader title="Amy Dutton">
          <div className="font-bold text-java py-3">amy@ahhacreative.com</div>
        </StudioHeader>
      </div>

      {/* sales summary */}
      <div className="p-studio py-10 border-b border-border">
        <h3 className="font-light text-2xl mb-3">Sales</h3>
        <div className="grid grid-cols-[75px_200px_1fr_75px_32px] table-spacing">
          <div className="table-header col-span-5">
            <div>Order</div>
            <div>Purchase Date</div>
            <div>Price</div>
            <div>&nbsp;</div>
          </div>

          <SalesRow />
          <SalesRow />
          <SalesRow />
        </div>
      </div>

      <div className="grid grid-cols-[1fr_430px]">
        <div className="pl-studio pr-10 border-r border-border pt-10">
          {/* licenses */}
          <h3 className="font-light text-2xl mb-4">Licenses</h3>
          <ul className="[&>li]:border-b [&>li]:border-border [&>li]:pb-6 [&>li]:mb-6 [&>li]:last:border-b-0">
            <li>
              <License />
            </li>
            <li>
              <License />
            </li>
          </ul>
        </div>

        <aside className="pl-10 pr-studio pt-10">
          {/* issues */}
          {/* TODO: Need to design a blank state */}
          <div className="mb-12">
            <h3 className="font-light text-2xl mb-3 flex items-center gap-2">
              <span>Issues</span>
              <BadgeNumber number={0} variant="secondary" />
            </h3>
            <div className="mb-3">
              <IssueRow />
              <IssueRow />
              <IssueRow />
            </div>
            <a className="button outline w-auto text-xs px-3" href="#">
              View All
            </a>
          </div>

          {/* discussions */}
          {/* TODO: Need to design a blank state */}
          <div className="mb-12">
            <h3 className="font-light text-2xl mb-3 flex items-center gap-2">
              <span>Discussions</span>
              <BadgeNumber number={0} variant="secondary" />
            </h3>
            <div className="mb-3">
              <DiscussionRow />
              <DiscussionRow />
              <DiscussionRow />
            </div>
            <a className="button outline w-auto text-xs px-3" href="#">
              View All
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
};

export { IndividualCustomerPage };
