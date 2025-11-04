"use client";
import { useTranslations } from "next-intl";


import { RenderComponentWithSnippet } from "@/app/components/render";
import { Row } from "@/app/components/row";

import { Button } from "@calcom/ui/components/button";

const colors = ["primary", "secondary", "minimal", "destructive"] as const;

export const IconsExample: React.FC = () =>  {
const t = useTranslations("button-icons-demo");

return (
  <RenderComponentWithSnippet>
    <div className="space-y-8">
      <div>
        <h3 className="text-default mb-4 text-sm">{t('sections.start-icon-heading')}</h3>
        <Row>
          {colors.map((color) =>  {
const t = useTranslations("button-icons-demo");

return (
            <div key={color} className="flex flex-col items-center gap-2">
              <Button color={color} StartIcon="calendar">
                {color}
              </Button>
              <span className="text-subtle text-xs">{t('labels.start-icon-caption')}</span>
            </div>
          )
})}
        </Row>
      </div>

      <div>
        <h3 className="text-default mb-4 text-sm">{t('sections.end-icon-heading')}</h3>
        <Row>
          {colors.map((color) =>  {
const t = useTranslations("button-icons-demo");

return (
            <div key={color} className="flex flex-col items-center gap-2">
              <Button color={color} EndIcon="arrow-right">
                {color}
              </Button>
              <span className="text-subtle text-xs">{t('labels.end-icon-caption')}</span>
            </div>
          )
})}
        </Row>
      </div>
    </div>
  </RenderComponentWithSnippet>
)
};
