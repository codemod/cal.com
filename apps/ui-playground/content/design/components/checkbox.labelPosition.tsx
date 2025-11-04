"use client";
import { useTranslations } from "next-intl";


import { RenderComponentWithSnippet } from "@/app/components/render";

import { CheckboxField } from "@calcom/ui/components/form";

export const LabelPositionExample: React.FC = () =>  {
const t = useTranslations("checkbox-label-position");

return (
  <RenderComponentWithSnippet>
    <div className="space-y-4">
      <CheckboxField
        description={t('descriptions.label-above-mobile-default')}
        id="label-above"
        label={t('labels.above-position')}
      />
      <div className="sm:min-w-[400px]">
        <CheckboxField
          description={t('descriptions.label-side-large-screens')}
          id="label-side"
          label={t('labels.side-position')}
        />
      </div>
    </div>
  </RenderComponentWithSnippet>
)
};
