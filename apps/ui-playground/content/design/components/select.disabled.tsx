"use client";
import { useTranslations } from "next-intl";


import { RenderComponentWithSnippet } from "@/app/components/render";

import { Select, SelectField } from "@calcom/ui/components/form";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
  { value: "mint", label: "Mint" },
  { value: "coffee", label: "Coffee" },
];

export const DisabledExample: React.FC = () =>  {
const t = useTranslations("select-disabled-examples");

return (
  <RenderComponentWithSnippet>
    <div className="space-y-4 md:w-80">
      <Select options={options} isDisabled placeholder={t('placeholders.disabled-select')} />
      <SelectField
        label={t('labels.disabled-field')}
        options={options}
        isDisabled
        placeholder={t('placeholders.disabled-field')}
      />
    </div>
  </RenderComponentWithSnippet>
)
};
