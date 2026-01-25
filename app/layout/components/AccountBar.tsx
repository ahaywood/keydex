"use client";

import { Avatar } from "@/components/Avatar";
import { Icon } from "@/components/Icon";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import { useEscapeKey, useOutsideClick } from "captain-react-hooks";
import { Link } from "react-router";

const AccountBar = () => {
  const [isDropdownShowing, setIsDropdownShowing] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  useOutsideClick(() => setIsDropdownShowing(false), dropdownRef);
  useEscapeKey(() => setIsDropdownShowing(false));

  return (
    <div className="flex items-center gap-4 mb-7 relative" ref={dropdownRef}>
      <Avatar
        alt="Amy"
        size={32}
        className="border border-white rounded-full"
      />
      <div className="flex-1 font-bold">Amy Dutton</div>
      <button onClick={() => setIsDropdownShowing(!isDropdownShowing)}>
        <Icon id="ellipsis-horizontal" />
      </button>
      <AnimatePresence>
        {isDropdownShowing && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute min-w-[150px] right-0 bottom-10 dropdown"
          >
            <ul>
              <li>
                <Link to="/account/settings" className="text-left">
                  Settings
                </Link>
              </li>
              <li>
                <Link to="/logout" className="text-left">
                  Logout
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { AccountBar };
