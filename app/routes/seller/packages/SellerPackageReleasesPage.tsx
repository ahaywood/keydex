import React from "react";
import { Release } from "./components/Release";
import { Footer } from "@/layout/components/Footer";

const SellerPackageReleasesPage = () => {
  return (
    <>
      <div className="flex flex-col gap-12 p-studio pt-12 mb-12">
        <Release />
        <Release />
      </div>
      {/* TODO: Add Footer */}
    </>
  );
};

export { SellerPackageReleasesPage };
