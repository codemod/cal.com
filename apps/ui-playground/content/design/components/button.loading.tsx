"use client";
import { useTranslations } from "next-intl";


import { RenderComponentWithSnippet } from "@/app/components/render";
import { Row } from "@/app/components/row";

import { Button } from "@calcom/ui/components/button";

const colors = ["primary", "secondary", "minimal", "destructive"] as const;

export const LoadingExample: React.FC = () => {
const t = useTranslations("ui-playground-button-loading");

  return (
    <RenderComponentWithSnippet>
      <div className="space-y-8">
        <div>
          <h3 className="text-default mb-4 text-sm">{t('sections.loading-state')}</h3>
          <Row>
            {colors.map((color) =>  {
const t = useTranslations("ui-playground-button-loading");

return (
              <div key={color} className="flex flex-col items-center gap-2">
                <Button color={color} loading>
                  {color}
                </Button>
                <span className="text-subtle text-xs">{t('labels.loading')}</span>
              </div>
            )
})}
          </Row>
        </div>

        <div>
          <h3 className="text-default mb-4 text-sm">{t('sections.loading-with-icons')}</h3>
          <Row>
            {colors.map((color) =>  {
const t = useTranslations("ui-playground-button-loading");

return (
              <div key={color} className="flex flex-col items-center gap-2">
                <Button color={color} loading StartIcon="calendar">
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
  );
};
