import { Icon } from "@/components/Icon";
import { InputPassword } from "@/components/InputPassword";
import { Link } from "react-router";
import React from "react";

const LoginPage = () => {
  return (
    <div className="py-10 px-page">
      <h1 className="text-5xl font-thin tracking-tight text-center mb-3">
        Login to Your Account
      </h1>
      <p className="text-center mb-9">
        Don't have an account?{" "}
        <Link
          to="/signup"
          className="underline underline-offset-3 hover:no-underline"
        >
          Sign up
        </Link>
      </p>

      <div className="w-[445px] mx-auto">
        <form>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="with-icon"
              autoComplete="email"
              autoFocus
              tabIndex={1}
              required
            />
            <Icon id="email" />
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <InputPassword
              name="password"
              autoComplete="current-password"
              tabIndex={2}
              required
              placeholder="Enter your password"
            />
          </div>
          <div className="field flex justify-between items-center">
            <label htmlFor="remember" className="mb-0">
              <input type="checkbox" id="remember" name="remember" />
              Remember me
            </label>

            <Link
              to="/forgot"
              className="text-opal underline underline-offset-3 hover:no-underline hover:text-white"
            >
              Forgot?
            </Link>
          </div>
          <button type="submit" className="button large w-full">
            Login
          </button>
        </form>

        <div className="flex items-center gap-4 my-4">
          <div className="divider flex-1" />
          <span className="text-white">or</span>
          <div className="divider flex-1" />
        </div>

        <a
          href="#"
          className="bg-black rounded-md center text-white font-medium h-12 gap-3 border border-[#2d2d2d]/60 mb-4"
        >
          <Icon id="github" />
          Sign in with GitHub
        </a>
        <a
          href="#"
          className="bg-white text-black center rounded-md gap-3 border border-[#d1d5db] mb-4 h-12"
        >
          <img src="/images/icon__google.svg" alt="Google" className="w-6" />
          Sign in with Google
        </a>
      </div>
    </div>
  );
};

export default LoginPage;
