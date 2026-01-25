import {
  type RouteConfig,
  index,
  route,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  index("routes/home/HomePage.tsx"),
  layout("layout/InteriorLayout.tsx", [
    // auth
    route("login", "routes/auth/LoginPage.tsx"),
    route("signup", "routes/auth/SignupPage.tsx"),
    route("forgot", "routes/auth/ForgotPage.tsx"),
    route("logout", "routes/auth/LogoutPage.tsx"),
    route("reset/:token", "routes/auth/ResetPage.tsx"),
    route("verify/:token", "routes/auth/VerifyPage.tsx"),
    route("invite/:token", "routes/auth/InvitePage.tsx"),
    // legal
    route("legal/:slug", "routes/legal/LegalPage.tsx"),
    // blog
    route("blog", "routes/blog/BlogPage.tsx"),
    route("blog/:slug", "routes/blog/IndividualBlogPage.tsx"),
    // pricing
    route("pricing", "routes/pricing/PricingPage.tsx"),
    // profile
    route("profile/:username", "routes/profile/ProfilePage.tsx"),
    // packages
    ...prefix("packages", [
      route(":slug", "routes/packages/PackagePage.tsx"),
      route(":slug/docs", "routes/packages/PackageDocsPage.tsx"),
      route(":slug/releases", "routes/packages/PackageReleasesPage.tsx"),
      route(":slug/reviews", "routes/packages/PackageReviewsPage.tsx"),
      route(":slug/issues", "routes/packages/issues/IssuesPage.tsx"),
      // route(
      //   ":slug/discussion",
      //   "routes/packages/discussions/DiscussionPage.tsx",
      // ),
    ]),
  ]),
  // docs
  layout("layout/DocsLayout.tsx", [
    // route("docs", "routes/docs/DocsPage.tsx"),
    route("docs/:slug", "routes/docs/DocsPage.tsx"),
  ]),
  // studio
  layout("layout/StudioLayout.tsx", [
    ...prefix("studio", [
      route("dashboard", "routes/seller/dashboard/Dashboard.tsx"),
      layout("layout/StudioPackagesLayout.tsx", [
        route("packages", "routes/seller/packages/SellerPackagesPage.tsx"),
        route("packages/new", "routes/seller/packages/NewPackagePage.tsx"),
        route(
          "packages/:slug",
          "routes/seller/packages/SellerPackageSalesPage.tsx",
        ),
        route(
          "packages/:slug/issues",
          "routes/seller/packages/SellerPackageIssuesPage.tsx",
        ),
        route(
          "packages/:slug/issues/:issueId",
          "routes/packages/issues/IndividualIssuePage.tsx",
        ),
        route(
          "packages/:slug/discussion",
          "routes/packages/discussions/DiscussionPage.tsx",
        ),
        route(
          "packages/:slug/discussion/:discussionId",
          "routes/packages/discussions/IndividualDiscussionPage.tsx",
        ),
        route(
          "packages/:slug/releases",
          "routes/seller/packages/SellerPackageReleasesPage.tsx",
        ),
      ]),
      route("customers", "routes/seller/customers/CustomersPage.tsx"),
      route(
        "customers/:id",
        "routes/seller/customers/IndividualCustomerPage.tsx",
      ),
      route("orders", "routes/seller/sales/OrdersPage.tsx"),
      route("orders/:id", "routes/seller/sales/OrderPage.tsx"),
      route("subscriptions", "routes/seller/SubscriptionsPage.tsx"),
      route("coupons", "routes/seller/CouponsPage.tsx"),
      route("discussions", "routes/seller/support/DiscussionPage.tsx"),
      route(
        "discussions/:id",
        "routes/seller/support/IndividualDiscussionPage.tsx",
      ),
      route("issues", "routes/seller/support/IssuesPage.tsx"),
      route("issues/:id", "routes/seller/support/IndividualIssuePage.tsx"),
      route("messages", "routes/seller/support/MessagesPage.tsx"),
      route("messages/:id", "routes/seller/support/IndividualMessagePage.tsx"),
      route("account", "routes/seller/AccountPage.tsx"),
      route("settings", "routes/seller/SettingsPage.tsx"),
      route("team", "routes/seller/team/TeamPage.tsx"),
    ]),
    route("account/settings", "routes/seller/AccountSettingsPage.tsx"),
  ]),
] satisfies RouteConfig;
