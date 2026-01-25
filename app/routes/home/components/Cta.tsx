import { Link } from "react-router";
import React from "react";

const Cta = () => {
  return (
    <div className="center flex-col py-5">
      <h3 className="text-3xl text-opal mb-10 font-thin">
        Ready to Publish your First Package?
      </h3>
      <Link to="/signup" className="button large">
        Join Keydex Today
      </Link>
    </div>
  );
};

export { Cta };
