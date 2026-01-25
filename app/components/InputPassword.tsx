"use client";

import React, { useState } from "react";
import Icon from "./Icon";

const InputPassword = ({
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative">
      <input
        type={visible ? "text" : "password"}
        {...props}
        className="with-icon"
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          setVisible(!visible);
        }}
        type="button"
      >
        <Icon id={visible ? "hidden" : "visible"} />
      </button>
    </div>
  );
};

export { InputPassword };
