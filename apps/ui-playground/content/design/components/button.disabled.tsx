"use client";
import { useTranslations } from "next-intl";


import { RenderComponentWithSnippet } from "@/app/components/render";
import { Row } from "@/app/components/row";

import { Button } from "@calcom/ui/components/button";

const colors = ["primary", "secondary", "minimal", "destructive"] as const;

export const DisabledExample: React.FC = () =>  {
const t = useTranslations("button-disabled-demo");

return (
  <RenderComponentWithSnippet>
    <div className="space-y-8">
      <div>
        <h3 className="text-default mb-4 text-sm">{t('headings.disabled-state')}</h3>
        <Row>
          {colors.map((color) =>  {
const t = useTranslations("button-disabled-demo");

return (
            <div key={color} className="flex flex-col items-center gap-2">
              <Button color={color} disabled>
                {color}
              </Button>
              <span className="text-subtle text-xs">{t('labels.disabled')}</span>
            </div>
          )
})}
        </Row>
      </div>

      <div>
        <h3 className="text-default mb-4 text-sm">{t('headings.disabled-with-icons')}</h3>
        <Row>
          {colors.map((color) =>  {
const t = useTranslations("button-disabled-demo");

return (
            <div key={color} className="flex flex-col items-center gap-2">
              <Button color={color} disabled StartIcon="calendar">
                {color}
              </Button>
              <span className="text-subtle text-xs">{t('labels.with-icon')}</span>
            </div>
          )
})}
        </Row>
      </div>
    </div>
  </RenderComponentWithSnippet>
)
};
