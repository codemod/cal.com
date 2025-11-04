"use client";
import { useTranslations } from "next-intl";


import { RenderComponentWithSnippet } from "@/app/components/render";

import { TextAreaField } from "@calcom/ui/components/form";

export const StatesExample: React.FC = () =>  {
const t = useTranslations("ui-playground-textarea-states");

return (
  <RenderComponentWithSnippet>
    <div className="space-y-4 md:w-80">
      <div className="space-y-2">
        <h3 className="text-emphasis text-sm">{t('states.default.label')}</h3>
        <TextAreaField name="default" placeholder={t('states.default.placeholder')} />
      </div>

      <div className="space-y-2">
        <h3 className="text-emphasis text-sm">{t('states.disabled.label')}</h3>
        <TextAreaField name="disabled" placeholder={t('states.disabled.placeholder')} disabled />
      </div>

      <div className="space-y-2">
        <h3 className="text-emphasis text-sm">{t('states.readonly.label')}</h3>
        <TextAreaField
          name="readonly"
          placeholder={t('states.readonly.placeholder')}
          defaultValue="This is a readonly textarea"
          readOnly
        />
      </div>
    </div>
  </RenderComponentWithSnippet>
)
};
