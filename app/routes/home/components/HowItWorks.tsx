import React from "react";

const HowItWorks = () => {
  return (
    <div className="mb-[40px]">
      <h2 className="heading-with-dividers mt-[20px] mb-[60px]">
        How It Works
      </h2>

      <div className="grid grid-cols-2 gap-12 px-page">
        <div>
          <h3 className="font-light text-2xl text-opal leading-none mb-8">
            For Buyers
          </h3>
          <ol className="large-numbers">
            <li>Discover Premium Code Packages</li>
            <li>Pay once. Own the license forever.</li>
            <li>
              Install securely with <code>npx keydex</code>
            </li>
          </ol>
        </div>

        <div>
          <h3 className="font-light text-2xl text-opal leading-none mb-8">
            For Sellers
          </h3>
          <ol className="large-numbers">
            <li>Publish your code in minutes</li>
            <li>Set your own price and license terms</li>
            <li>Manage licenses and updates with ease</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export { HowItWorks };
