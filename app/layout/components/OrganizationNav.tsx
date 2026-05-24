import { Avatar } from "@/components/Avatar";
import { Icon } from "@/components/Icon";
import { useEscapeKey, useOutsideClick } from "captain-react-hooks";
import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";

const OrganizationNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  useOutsideClick(() => {
    setIsOpen(false);
  }, dropdownRef);
  useEscapeKey(() => setIsOpen(false));

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className={clsx(
          "text-left border border-border py-2 px-3 relative -mx-[13px] w-[calc(100%+26px)] mb-6 flex gap-4 items-center",
          isOpen && "bg-white/10",
        )}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <div>
          <Avatar size={24} alt="RedwoodSDK" />
        </div>
        <div className="flex-1">RedwoodSDK</div>
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? -180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Icon id="chevron-down" size={16} className="text-icon" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute left-[-12px] top-[44px] w-[calc(100%+24px)] dropdown"
          >
            <ul>
              <li>
                <a href="#">
                  <Avatar size={24} alt="RedwoodSDK" />
                  RedwoodSDK
                </a>
              </li>
              <li>
                <a href="#">
                  <Avatar size={24} alt="SelfTeach.me" />
                  SelfTeach.me
                </a>
              </li>
              <li>
                <a href="#">
                  <Avatar size={24} alt="Keydex" />
                  Keydex
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { OrganizationNav };
