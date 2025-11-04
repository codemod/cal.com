"use client";
import { useTranslations } from "next-intl";


import { RenderComponentWithSnippet } from "@/app/components/render";
import { useForm, FormProvider } from "react-hook-form";

import { MultiOptionInput } from "@calcom/ui/components/form";

type FormValues = {
  customPlaceholders: Array<{ label: string; id: string }>;
  noMoveButtons: Array<{ label: string; id: string }>;
  customLabel: Array<{ label: string; id: string }>;
  keyValuePairs: Array<{ label: string; value: string; id: string }>;
};

export const CustomizationExample: React.FC = () => {
const t = useTranslations("multi-input-field-examples");

  const methods = useForm<FormValues>();

  return (
    <RenderComponentWithSnippet>
      <FormProvider {...methods}>
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex flex-col space-y-2">
              <h3 className="text-emphasis text-sm">{t('sections.key-value-pairs.title')}</h3>
              <p className="text-subtle text-xs">{t('sections.key-value-pairs.description')}</p>
              <MultiOptionInput<FormValues>
                fieldArrayName="keyValuePairs"
                keyValueMode
                keyLabel={t('labels.environment-variable')}
                valueLabel={t('labels.value')}
                optionPlaceholders={["NODE_ENV", "PORT", "DATABASE_URL"]}
                valuePlaceholders={["production", "3000", "postgres://..."]}
                defaultNumberOfOptions={3}
                keyValueDelimiters={[":", "="]}
              />
            </div>

            <div className="flex flex-col space-y-2">
              <h3 className="text-emphasis text-sm">{t('sections.custom-placeholders.title')}</h3>
              <MultiOptionInput<FormValues>
                fieldArrayName="customPlaceholders"
                optionPlaceholders={["Enter your name", "Enter your email", "Enter your phone"]}
                defaultNumberOfOptions={3}
              />
            </div>

            <div className="flex flex-col space-y-2">
              <h3 className="text-emphasis text-sm">{t('sections.without-move-buttons.title')}</h3>
              <MultiOptionInput<FormValues>
                fieldArrayName="noMoveButtons"
                optionPlaceholders={["Static option 1", "Static option 2"]}
                defaultNumberOfOptions={2}
                showMoveButtons={false}
              />
            </div>

            <div className="flex flex-col space-y-2">
              <h3 className="text-emphasis text-sm">{t('sections.custom-add-button.title')}</h3>
              <MultiOptionInput<FormValues>
                fieldArrayName="customLabel"
                optionPlaceholders={["Social media link"]}
                defaultNumberOfOptions={1}
                addOptionLabel={t('buttons.add-social-media-link')}
              />
            </div>
          </div>
        </div>
      </FormProvider>
    </RenderComponentWithSnippet>
  );
};
