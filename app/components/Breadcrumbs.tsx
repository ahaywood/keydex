import React from "react";

const Breadcrumbs = ({
  nav,
}: {
  nav: {
    label: string;
    href: string;
  }[];
}) => {
  return (
    <ul className="text-icon font-bold text-xs flex items-center gap-3">
      <li>/</li>
      {nav.map((item, index) => (
        <React.Fragment key={index}>
          <li>
            <a
              href={item.href}
              className={`hover:text-white hover:underline underline-offset-3
                ${index === nav.length - 1 ? "text-white" : ""}
                `}
            >
              {item.label}
            </a>
          </li>
          <li key={index + "_slash"}>/</li>
        </React.Fragment>
      ))}
    </ul>
  );
};

export { Breadcrumbs };
