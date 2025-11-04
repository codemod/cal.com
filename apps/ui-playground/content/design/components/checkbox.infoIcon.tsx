"use client";
import { useTranslations } from "next-intl";


import { RenderComponentWithSnippet } from "@/app/components/render";

import { CheckboxField } from "@calcom/ui/components/form";

export const InfoIconExample: React.FC = () =>  {
const t = useTranslations("ui-playground-checkbox-info-icon");

return (
  <RenderComponentWithSnippet>
    <CheckboxField
      description={t('checkbox.description')}
      id="info-icon"
      label={t('checkbox.label')}
      informationIconText={t('tooltip.additional-info')}
    />
  </RenderComponentWithSnippet>
)
};
