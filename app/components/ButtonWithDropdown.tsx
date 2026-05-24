import { useState, useRef } from "react";
import { Icon } from "./Icon";
import { AnimatePresence, motion } from "motion/react";
import { useEscapeKey, useOutsideClick } from "captain-react-hooks";

const ButtonWithDropdown = ({
  defaultLabel,
  options,
}: {
  defaultLabel: string;
  options: { label: string; onClick: () => void }[];
}) => {
  const [selectedOption, setSelectedOption] = useState(defaultLabel);
  const [isDropdownShowing, setIsDropdownShowing] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  useOutsideClick(() => setIsDropdownShowing(false), dropdownRef);

  useEscapeKey(() => setIsDropdownShowing(false));

  return (
    <div
      className="border border-montana rounded-md h-9 flex items-center relative group"
      ref={dropdownRef}
    >
      <button className="px-3 h-full group-hover:bg-violet-darker">
        {selectedOption}
      </button>
      <div className="w-[1px] h-full border-r border-montana"></div>
      <button
        onClick={() => setIsDropdownShowing((prev) => !prev)}
        className="px-3 h-full group-hover:bg-violet-darker"
      >
        <Icon id="chevron-down" size={16} />
      </button>
      <AnimatePresence>
        {isDropdownShowing && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[38px] left-0 w-full bg-black rounded-md border-2 border-violet z-[var(--z-index-button-dropdown)]"
          >
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedOption(option.label);
                  setIsDropdownShowing(false);
                }}
                className="p-2 pb-1 [&:last-child]:pb-2"
              >
                {option.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { ButtonWithDropdown };
