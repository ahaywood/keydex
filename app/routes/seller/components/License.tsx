"use client";

import React, { useState } from "react";
import { Avatar } from "@/components/Avatar";
import { Icon } from "@/components/Icon";
import { AnimatePresence, motion } from "motion/react";
import { useCopyToClipboard } from "captain-react-hooks";
import { Link } from "react-router";

const License = () => {
  const licenseKey = "#A%AbS8w2cKRJX@#aRFXTbZP6JjScmnD";

  const [isExpanded, setIsExpanded] = useState(false);
  const [showLicenseKey, setShowLicenseKey] = useState(false);
  const { copy, error } = useCopyToClipboard();

  const obstructedLicenseKey =
    licenseKey.slice(0, 10) + "•••••••••••••••••••••••••••••";

  return (
    <div className="flex gap-5">
      <Avatar alt="Amy" size={80} shape="square" />

      <div className="flex flex-col justify-between flex-1">
        <div className="flex justify-between">
          <Link
            to="/studio/packages/oss-this"
            className="hover:underline underline-offset-3"
          >
            <h3 className="font-light text-2xl mb-0 pb-0">oss-this</h3>
          </Link>
          <div>
            <button className="button outline text-xs px-3">Revoke</button>
          </div>
        </div>

        <button
          onClick={() => setIsExpanded((prev) => !prev)}
          className="flex items-center gap-1 text-pumice [&_strong]:text-white text-xs mb-2"
        >
          <motion.div
            className="-rotate-90"
            animate={{ rotate: isExpanded ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <Icon id="chevron-down" className="text-icon" size={16} />
          </motion.div>
          <strong>9</strong> of <strong>10</strong> Activations &bull;{" "}
          <strong>August 26, 2026</strong> support expires
        </button>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <ol className="text-pumice text-xs small-numbers">
                <li>Weeks Matter</li>
                <li>Advent of CSS</li>
                <li>Advent of JavaScript</li>
                <li>AmyDutton.me</li>
                <li>Keydex</li>
                <li>Starter Combo</li>
                <li>Short Earl</li>
              </ol>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center gap-2 flex-1">
          <Icon id="key" className="text-violet" />

          <div className="font-mono flex-1">
            {showLicenseKey ? licenseKey : obstructedLicenseKey}
          </div>

          <button
            onClick={() => setShowLicenseKey((prev) => !prev)}
            className="text-icon"
          >
            <Icon id={showLicenseKey ? "hidden" : "visible"} size={16} />
          </button>
          {/* TODO: Add Tooltip to button */}
          <button className="text-icon" onClick={() => copy(licenseKey)}>
            <Icon id="copy" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export { License };
