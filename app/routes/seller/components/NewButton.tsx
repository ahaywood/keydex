import { ButtonWithDropdown } from "@/components/ButtonWithDropdown";
import React from "react";

const NewButton = () => {
  return (
    <div>
      <ButtonWithDropdown
        defaultLabel="+ Package"
        options={[
          { label: "+ Package", onClick: () => {} },
          { label: "+ Bundle", onClick: () => {} },
        ]}
      />
    </div>
  );
};

export { NewButton };
