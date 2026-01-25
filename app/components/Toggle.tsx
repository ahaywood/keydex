"use client";

import React, { createContext, useContext } from "react";
import Icon from "./Icon";

const ToggleContext = createContext<{
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}>({
  isOpen: false,
  setIsOpen: () => {},
});

const Toggle = ({
  children,
  defaultOpen = false,
}: {
  children: React.ReactNode;
  defaultOpen?: boolean;
}) => {
  return (
    <ToggleContext.Provider
      value={{ isOpen: defaultOpen, setIsOpen: () => {} }}
    >
      {children}
    </ToggleContext.Provider>
  );
};

const ToggleHeader = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, setIsOpen } = useContext(ToggleContext);
  return (
    <button onClick={() => setIsOpen(!isOpen)}>
      <Icon id="chevron-down" size={16} />
      {children}
    </button>
  );
};

const ToggleContent = ({ children }: { children: React.ReactNode }) => {
  const { isOpen } = useContext(ToggleContext);
  if (!isOpen) return null;
  return <div>{children}</div>;
};

export { Toggle, ToggleHeader, ToggleContent };
