"use client";

import { AnimatePresence, motion } from "motion/react";
import { Icon } from "@/components/Icon";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import { OrganizationNav } from "./OrganizationNav";

const StudioSellerNav = ({ currentPath }: { currentPath: string }) => {
  const salesNavPaths = ["orders", "subscriptions", "coupons"];
  const supportNavPaths = ["issues", "discussions", "messages"];

  const [isSalesNavOpen, setIsSalesNavOpen] = useState(
    salesNavPaths.includes(currentPath),
  );
  const [isSupportNavOpen, setIsSupportNavOpen] = useState(
    supportNavPaths.includes(currentPath),
  );

  // Track if this is the initial render to avoid animation flash
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  return (
    <>
      {/* organization dropdown */}
      <OrganizationNav />

      {/* navigation */}
      <nav className="admin-nav">
        <ul>
          <li>
            <Link to="/studio/dashboard">
              <Icon id="dashboard" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/studio/packages">
              <Icon id="package" />
              Packages
            </Link>
          </li>
          <li>
            <Link to="/studio/customers">
              <Icon id="customer" />
              Customers
            </Link>
          </li>
          <li>
            <button onClick={() => setIsSalesNavOpen((prev) => !prev)}>
              <Icon id="sales" />
              <div className="flex-1">Sales</div>
              <motion.div
                animate={{ rotate: isSalesNavOpen ? 0 : -90 }}
                initial={{
                  rotate: hasHydrated ? -90 : isSalesNavOpen ? 0 : -90,
                }}
                transition={{ duration: 0.2 }}
              >
                <Icon id="chevron-down" size={16} />
              </motion.div>
            </button>
            <AnimatePresence>
              {isSalesNavOpen && (
                <motion.ul
                  initial={hasHydrated ? { opacity: 0, height: 0 } : false}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <li>
                    <Link to="/studio/orders">Orders</Link>
                  </li>
                  <li>
                    <Link to="/studio/subscriptions">Subscriptions</Link>
                  </li>
                  <li>
                    <Link to="/studio/coupons">Coupons</Link>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
          <li>
            <button onClick={() => setIsSupportNavOpen((prev) => !prev)}>
              <Icon id="support" />
              <div className="flex-1">Support</div>
              <motion.div
                animate={{ rotate: isSupportNavOpen ? 0 : -90 }}
                initial={{
                  rotate: hasHydrated ? -90 : isSupportNavOpen ? 0 : -90,
                }}
                transition={{ duration: 0.2 }}
              >
                <Icon id="chevron-down" size={16} />
              </motion.div>
            </button>
            {isSupportNavOpen && (
              <motion.ul
                initial={hasHydrated ? { opacity: 0, height: 0 } : false}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <li>
                  <Link to="/studio/issues">Issues</Link>
                </li>
                <li>
                  <Link to="/studio/discussions">Discussions</Link>
                </li>
                <li>
                  <Link to="/studio/messages">Messages</Link>
                </li>
              </motion.ul>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export { StudioSellerNav };
