import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/Tabs";
import { Aside } from "./components/Aside";
import { Badge, BadgeWrapper } from "@/components/Badge";
import { LinkBlock, LinkBlockWrapper } from "./components/LinkBlock";
import { Heading } from "./components/Heading";
import { FileTree } from "./components/FileTree";
import { Footer } from "@/layout/components/Footer";
import { Icon } from "@/components/Icon";

const DocsPage = () => {
  return (
    <>
      {/* main column */}
      <div className="px-page pt-5">
        <div className="mb-8">
          <Breadcrumbs
            nav={[
              { label: "Get Started", href: "/docs" },
              { label: "Primary Colors", href: "/docs/primary-colors" },
            ]}
          />
        </div>

        <Heading tag="h1">Primary Colors</Heading>

        <p className="mb-20">
          Our design system leverages a purposeful set of color styles as the
          perfect starting point for any brand or project. When it comes to
          color, contrast is critical for ensuring text is legible. We've added
          WCAG 2.1 contrast ratios to our color system so you can make sure
          you're designing with accessibility in mind.
        </p>

        <Heading tag="h2" id="primary-colors" className="text-java">
          Primary Colors
        </Heading>

        <p className="mb-20 text-submarine">
          These are the main colors that make up the majority of the colors used
          in the design system.
        </p>

        <Tabs defaultValue="base" className="mb-20">
          <TabsList>
            <TabsTrigger value="base">Base</TabsTrigger>
            <TabsTrigger value="accent">Accent</TabsTrigger>
            <TabsTrigger value="background">Background</TabsTrigger>
            <TabsTrigger value="text">Text</TabsTrigger>
          </TabsList>
          <TabsContent value="base">Base Content</TabsContent>
          <TabsContent value="accent">Accent Content</TabsContent>
          <TabsContent value="background">Background Content</TabsContent>
          <TabsContent value="text">Text Content</TabsContent>
        </Tabs>

        <Aside heading="Tip" type="tip">
          <p>Base Content</p>
        </Aside>

        <Aside heading="Note" type="note">
          <p>Accent Content</p>
        </Aside>

        <Aside heading="Destructive" type="destructive">
          <p>Background Content</p>
        </Aside>

        <Aside heading="Caution" type="caution">
          <p>Text Content</p>
        </Aside>

        <BadgeWrapper className="mb-10">
          <Badge>Badge</Badge>
          <Badge color="pink">Badge</Badge>
          <Badge color="yellow">Badge</Badge>
          <Badge color="green">Badge</Badge>
          <Badge color="blue">Badge</Badge>

          <Badge variant="solid">Badge</Badge>
          <Badge color="pink" variant="solid">
            Badge
          </Badge>
          <Badge color="yellow" variant="solid">
            Badge
          </Badge>
          <Badge color="green" variant="solid">
            Badge
          </Badge>
          <Badge color="blue" variant="solid">
            Badge
          </Badge>
        </BadgeWrapper>

        <LinkBlockWrapper>
          <LinkBlock href="https://google.com" label="Previous" icon="info">
            Link Block
          </LinkBlock>
          <LinkBlock
            href="https://google.com"
            label="Next"
            icon="info"
            variant="next"
          >
            Link Block
          </LinkBlock>
        </LinkBlockWrapper>

        {/* prettier-ignore */}
        <FileTree>
        - astro.config.mjs
        - package.json
        - README.md
        - src
            - components
                - **Header.astro**
                - ...
            - pages/
        </FileTree>

        <div className="border-t border-border py-10">
          <Footer />
        </div>
      </div>
      {/* right column */}
      <div className="pt-[130px]">
        <div className="font-sans text-sm font-bold text-submarine uppercase mb-8">
          On This Page
        </div>
        <ul
          className="text-sm font-bold font-sans
          [&_ul]:text-submarine [&_ul]:font-normal [&_ul]:m-4 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-4
            [&_a]:hover:underline [&_a]:hover:underline-offset-3 [&_a]:hover:text-white [&_a]:flex [&_a]:items-center [&_a]:gap-1
          "
        >
          <li>
            <a href="#about">Primary Colors</a>
            <ul>
              <li>
                <a href="#">
                  <Icon id="chevron-down" size={16} className="-rotate-90" />
                  Base
                </a>
              </li>
              <li>
                <a href="#">
                  <Icon id="chevron-down" size={16} className="-rotate-90" />
                  Gray
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DocsPage;
