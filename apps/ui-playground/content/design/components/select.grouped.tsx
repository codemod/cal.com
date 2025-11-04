"use client";
import { useTranslations } from "next-intl";


import { RenderComponentWithSnippet } from "@/app/components/render";

import { Select } from "@calcom/ui/components/form";

const groupedOptions = [
  {
    label: "Fruits",
    options: [
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana" },
      { value: "orange", label: "Orange" },
    ],
  },
  {
    label: "Vegetables",
    options: [
      { value: "carrot", label: "Carrot" },
      { value: "broccoli", label: "Broccoli" },
      { value: "spinach", label: "Spinach" },
    ],
  },
];

export const GroupedExample: React.FC = () =>  {
const t = useTranslations("select-grouped-demo");

return (
  <RenderComponentWithSnippet>
    <div className="space-y-4 md:w-80">
      <Select options={groupedOptions} placeholder={t('placeholders.choose-food')} />
    </div>
  </RenderComponentWithSnippet>
)
};
