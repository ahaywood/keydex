import React from "react";

const FeaturedOn = () => {
  return (
    <div className="flex items-center gap-12 justify-center">
      <div className="uppercase font-light text-sm tracking-[4px]">
        Featured On
      </div>
      <div className="border-r border-white-50 w-1 h-10" />
      <ul className="flex items-center gap-12">
        <li>
          <img src="/images/logo__hacker-news.svg" alt="Hacker News" />
        </li>
        <li>
          <img src="/images/logo__product-hunt.svg" alt="Product Hunt" />
        </li>
        <li>
          <img src="/images/logo__reddit.svg" alt="Reddit" />
        </li>
      </ul>
    </div>
  );
};

export { FeaturedOn };
