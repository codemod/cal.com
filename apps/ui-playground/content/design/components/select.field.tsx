"use client";
import { useTranslations } from "next-intl";


import { RenderComponentWithSnippet } from "@/app/components/render";

import { SelectField } from "@calcom/ui/components/form";
import { showToast } from "@calcom/ui/components/toast";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
  { value: "mint", label: "Mint" },
  { value: "coffee", label: "Coffee" },
];

export const FieldExample: React.FC = () => {
const t = useTranslations("select-field-demo");

  const handleValueChange = (newValue: unknown, actionMeta: { action: string }) => {
    showToast(`Selected: ${JSON.stringify(newValue)}, Action: ${actionMeta.action}`, "success");
  };

  return (
    <RenderComponentWithSnippet>
      <div className="space-y-4 md:w-80">
        <SelectField
          label={t('labels.flavor')}
          options={options}
          onChange={handleValueChange}
          placeholder={t('placeholders.choose-flavor')}
        />

        <SelectField
          label={t('labels.required-field')}
          options={options}
          required
          onChange={handleValueChange}
          placeholder={t('placeholders.required-field')}
        />

        <SelectField label={t('labels.with-error')} options={options} />
      </div>
      <div className="mt-4 space-y-4 md:w-80">
        <SelectField
          label={t('labels.flavor-small')}
          options={options}
          onChange={handleValueChange}
          placeholder={t('placeholders.choose-flavor-small')}
          size="sm"
        />

        <SelectField
          label={t('labels.required-field-small')}
          options={options}
          required
          onChange={handleValueChange}
          placeholder={t('placeholders.required-field-small')}
          size="sm"
        />

        <SelectField label={t('labels.with-error-small')} options={options} size="sm" />
      </div>
    </RenderComponentWithSnippet>
  );
};
