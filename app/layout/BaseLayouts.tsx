import React from "react";

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="page">{children}</div>;
};

export { BaseLayout };
