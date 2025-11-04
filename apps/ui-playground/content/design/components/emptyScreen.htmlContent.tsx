"use client";
import { useTranslations } from "next-intl";


import { RenderComponentWithSnippet } from "@/app/components/render";

import { EmptyScreen } from "@calcom/ui/components/empty-screen";

export const HtmlContentExample: React.FC = () =>  {
const t = useTranslations("empty-screen-html-content-demo");

return (
  <RenderComponentWithSnippet>
    <EmptyScreen
      Icon="info"
      headline={
        <span className="text-emphasis">{t.rich('headings.custom-with-html', {
      component0: (chunks) => <strong>{chunks}</strong>
    })}
        </span>
      }
      description={
        <div className="text-subtle space-y-2">
          <p>{t('descriptions.first-paragraph')}</p>
          <p>{t.rich('descriptions.second-paragraph', {
      component0: (chunks) => <em>{chunks}</em>
    })}</p>
        </div>
      }
      buttonText={t('buttons.learn-more')}
      buttonOnClick={() => alert("Learn More clicked")}
    />
  </RenderComponentWithSnippet>
)
};
