import { Icon } from "@/components/Icon";
import { useEscapeKey, useOutsideClick } from "captain-react-hooks";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";

const HelpDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  useOutsideClick(() => setIsOpen(false), dropdownRef);

  useEscapeKey(() => setIsOpen(false));

  return (
    <div className="relative" ref={dropdownRef}>
      <button onClick={() => setIsOpen((prev) => !prev)}>
        <Icon id="help" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute right-0 top-full dropdown min-w-[300px] min-h-[500px]"
          >
            <p>Help Stuff</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { HelpDropdown };
