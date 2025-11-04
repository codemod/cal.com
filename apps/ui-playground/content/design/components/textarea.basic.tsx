"use client";
import { useTranslations } from "next-intl";


import { RenderComponentWithSnippet } from "@/app/components/render";

import { TextAreaField } from "@calcom/ui/components/form";

export const BasicExample: React.FC = () =>  {
const t = useTranslations("textarea-examples");

return (
  <RenderComponentWithSnippet>
    <div className="space-y-4 md:w-80">
      <TextAreaField name="message" placeholder={t('placeholders.message-input')} defaultValue="" />
      <TextAreaField
        name="description"
        placeholder={t('placeholders.default-value-demo')}
        defaultValue="This is a default value for the textarea component."
      />
    </div>
  </RenderComponentWithSnippet>
)
};
