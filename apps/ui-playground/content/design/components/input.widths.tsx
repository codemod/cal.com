"use client";
import { useTranslations } from "next-intl";


import { RenderComponentWithSnippet } from "@/app/components/render";

import { Input } from "@calcom/ui/components/form";

const sizes = ["sm", "md"] as const;

export const WidthsExample: React.FC = () => (
  <RenderComponentWithSnippet>
    <div className="space-y-6">
      <div className="space-y-4">
        {sizes.map((size) =>  {
const t = useTranslations("ui-playground-input-widths");

return (
          <div key={size} className="flex flex-col space-y-2">
            <h3 className="text-emphasis text-sm">{t('size-label', { "size": size })}</h3>
            <div className="space-y-4">
              <div className="flex flex-col space-y-2">
                <h4 className="text-subtle text-xs">{t('full-width-heading')}</h4>
                <Input type="text" placeholder={t('full-width-placeholder')} size={size} isFullWidth />
              </div>
              <div className="flex flex-col space-y-2">
                <h4 className="text-subtle text-xs">{t('auto-width-heading')}</h4>
                <Input type="text" placeholder={t('auto-width-placeholder')} size={size} isFullWidth={false} />
              </div>
            </div>
          </div>
        )
})}
      </div>
    </div>
  </RenderComponentWithSnippet>
);
