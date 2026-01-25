import React from "react";
import { Link } from "react-router";
import { MainNav } from "./components/MainNav";
import { Footer } from "./components/Footer";
import { Section } from "./components/Section";

const InteriorLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="page page-grid">
      <div className="relative">
        <Link to="/" className="relative mt-6">
          <img
            src="/images/logo.svg"
            alt="Keydex"
            className="w-[145px] fixed"
          />
        </Link>
      </div>
      <div className="border-x border-border min-h-screen">
        <div className="h-[90px] border-b border-border">
          <MainNav />
        </div>
        <div>{children}</div>
        <div className="border-t border-border py-10">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export { InteriorLayout };
