"use client";

import { Icon } from "@/components/Icon";

const SearchButton = () => {
  return (
    <button onClick={() => alert("Search")}>
      <Icon id="search" size={16} />
    </button>
  );
};

export { SearchButton };
