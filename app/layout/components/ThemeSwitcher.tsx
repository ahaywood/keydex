"use client";

import { Icon } from "@/components/Icon";
import { useEscapeKey, useOutsideClick } from "captain-react-hooks";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";

const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  useOutsideClick(() => setIsOpen(false), dropdownRef);

  useEscapeKey(() => setIsOpen(false));

  return (
    <div className="relative" ref={dropdownRef}>
      <button onClick={() => setIsOpen((prev) => !prev)}>
        <Icon id="moon" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute right-0 top-full dropdown min-w-[125px]"
          >
            <ul>
              <li>
                <button>
                  <Icon id="sun" />
                  Light
                </button>
              </li>
              <li>
                <button>
                  <Icon id="moon" />
                  Dark
                </button>
              </li>
              <li>
                <button>
                  <Icon id="desktop" />
                  System
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { ThemeSwitcher };
