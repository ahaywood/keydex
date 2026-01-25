import { OnThisPage } from "./components/OnThisPage";
import { PackageHeader } from "./components/PackageHeader";
import { Purchase } from "./components/Purchase";

const PackageDocsPage = () => {
  return (
    <div>
      <PackageHeader currentPath="docs" />

      <div className="grid grid-cols-[1fr_240px] pb-14 pr-[60px] pl-[80px] pt-9">
        <div className="mb-6">
          <p>Package Content</p>
        </div>
        <aside>
          <Purchase />
          <OnThisPage />
        </aside>
      </div>
    </div>
  );
};

export { PackageDocsPage };
