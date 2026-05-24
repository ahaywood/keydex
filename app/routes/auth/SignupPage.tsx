import { Icon } from "@/components/Icon";
import { InputPassword } from "@/components/InputPassword";
import { Link } from "react-router";

const SignupPage = () => {
  return (
    <div className="py-10 px-page">
      <h1 className="text-5xl font-thin tracking-tight text-center mb-3">
        Register for an Account
      </h1>
      <p className="text-center mb-9">
        Already have an account?{" "}
        <Link
          to="/login"
          className="underline underline-offset-3 hover:no-underline"
        >
          Login
        </Link>
      </p>

      <div className="w-[445px] mx-auto">
        <form>
          <div className="field">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              autoComplete="firstName"
              autoFocus
              tabIndex={1}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              autoComplete="lastName"
              autoFocus
              tabIndex={2}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="with-icon"
              autoComplete="email"
              autoFocus
              tabIndex={3}
              required
            />
            <Icon id="email" />
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <InputPassword
              name="password"
              autoComplete="current-password"
              tabIndex={4}
              required
              placeholder="Enter your password"
            />
          </div>
          <div className="field">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <InputPassword
              name="confirmPassword"
              tabIndex={5}
              required
              placeholder="Confirm your password"
            />
          </div>
          <button type="submit" className="button large w-full">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
