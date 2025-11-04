"use client";
import { useTranslations } from "next-intl";


import { RenderComponentWithSnippet } from "@/app/components/render";

import { TextAreaField } from "@calcom/ui/components/form";

export const SizesExample: React.FC = () =>  {
const t = useTranslations("textarea-sizes-demo");

return (
  <RenderComponentWithSnippet>
    <div className="space-y-4 md:w-80">
      <div className="space-y-2">
        <h3 className="text-emphasis text-sm">{t('sections.default-height')}</h3>
        <TextAreaField name="default" placeholder={t('placeholders.default-height')} />
      </div>

      <div className="space-y-2">
        <h3 className="text-emphasis text-sm">{t('sections.custom-height')}</h3>
        <TextAreaField name="Taller" placeholder={t('placeholders.taller-textarea')} rows={6} />
      </div>

      <div className="space-y-2">
        <h3 className="text-emphasis text-sm">Auto-growing</h3>
        <TextAreaField
          name="grows"
          placeholder={t('placeholders.auto-growing')}
          className="min-h-[100px]"
        />
      </div>
    </div>
  </RenderComponentWithSnippet>
)
};
