import { Icon } from "@/components/Icon";
import React from "react";

const WhyKeydex = () => {
  return (
    <div>
      <h2 className="heading-with-dividers mt-[20px] mb-[60px]">Why Keydex?</h2>

      <dl className="feature-list w-[460px] mx-auto left-[30px] relative">
        <dt>
          <div className="icon">
            <Icon size={42} id="key" />
          </div>
          Licensing Built-In
        </dt>
        <dd>Every package comes with enforceable licensing by default.</dd>

        <dt>
          <div className="icon">
            <Icon size={42} id="terminal" />
          </div>
          Terminal Native
        </dt>
        <dd>Install with one command. No extra hoops.</dd>

        <dt>
          <div className="icon">
            <Icon size={42} id="marketplace" />
          </div>
          A Marketplace You Can Trust
        </dt>
        <dd>Sell your code. Buy with confidence.</dd>

        <dt>
          <div className="icon">
            <Icon size={42} id="art" />
          </div>
          Fair to Creators
        </dt>
        <dd>Creators keep the majority of the revenue.</dd>
      </dl>
    </div>
  );
};

export { WhyKeydex };
