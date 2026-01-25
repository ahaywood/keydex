import { MainNav } from "../../layout/components/MainNav";
import { Footer } from "../../layout/components/Footer";
import { FeaturedOn } from "./components/FeaturedOn";
import { Cta } from "./components/Cta";
import { HowItWorks } from "./components/HowItWorks";
import { WhyKeydex } from "./components/WhyKeydex";
import { Dust } from "@/layout/components/Dust";
import { Link } from "react-router";
import { Section } from "@/layout/components/Section";

const HomePage = () => {
  return (
    <div className="page">
      <div className="absolute inset-0 size-screen">
        <Dust />
      </div>
      <div className="page-grid">
        <div className="col-start-2 border-x border-border pt-[70px] flex items-center flex-col pb-[100px]">
          <div className="mb-12">
            <MainNav />
          </div>

          <img src="/images/logo.svg" alt="Keydex" />

          <h1 className="text-center text-3xl leading-normal mb-6 font-thin text-opal">
            Sell and License Your Code.
            <br /> Seamlessly.
          </h1>
          <h2 className="text-lg leading-relaxed mb-12 text-center text-opal">
            Keydex is npm for premium packages.
            <br />
            Publish, license, and install with a single command.
          </h2>
          <Link to="/signup" className="button large relative">
            Get Started for Free
          </Link>
        </div>
      </div>

      <Section>
        <FeaturedOn />
      </Section>

      <Section>
        <HowItWorks />
      </Section>

      <Section>
        <WhyKeydex />
      </Section>

      <Section>
        <Cta />
      </Section>

      <Section className="border-t border-border">
        <Footer />
      </Section>
    </div>
  );
};

export default HomePage;
