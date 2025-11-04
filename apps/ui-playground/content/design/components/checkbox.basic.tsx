"use client";
import { useTranslations } from "next-intl";


import { RenderComponentWithSnippet } from "@/app/components/render";

import { Checkbox } from "@calcom/ui/components/form";

export const BasicExample: React.FC = () =>  {
const t = useTranslations("checkbox-basic-demo");

return (
  <RenderComponentWithSnippet>
    <div className="flex flex-wrap gap-4">
      <div className="flex flex-col items-center justify-center gap-2">
        <Checkbox id="basic-unchecked" />
        <span className="text-subtle text-xs">{t('states.unchecked')}</span>
      </div>

      <div className="flex flex-col items-center justify-center gap-2">
        <Checkbox id="basic-checked" defaultChecked />
        <span className="text-subtle text-xs">{t('states.checked')}</span>
      </div>

      <div className="flex flex-col items-center justify-center gap-2">
        <Checkbox id="basic-disabled" disabled />
        <span className="text-subtle text-xs">{t('states.disabled')}</span>
      </div>

      <div className="flex flex-col items-center justify-center gap-2">
        <Checkbox id="basic-disabled-checked" disabled defaultChecked />
        <span className="text-subtle text-xs">{t('states.disabled-checked')}</span>
      </div>
    </div>
  </RenderComponentWithSnippet>
)
};
