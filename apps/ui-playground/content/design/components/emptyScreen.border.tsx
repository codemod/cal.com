"use client";
import { useTranslations } from "next-intl";


import { RenderComponentWithSnippet } from "@/app/components/render";

import { EmptyScreen } from "@calcom/ui/components/empty-screen";

export const BorderExample: React.FC = () =>  {
const t = useTranslations("empty-screen-border-demo");

return (
  <RenderComponentWithSnippet>
    <div className="space-y-8">
      {/* Without Border */}
      <div>
        <h4 className="text-emphasis mb-4 text-sm font-medium">{t('sections.without-border')}</h4>
        <EmptyScreen
          Icon="grid-3x3"
          headline="No apps installed"
          description={t('empty-states.no-apps.description')}
          buttonText={t('buttons.browse-apps')}
          buttonOnClick={() => alert("Browse Apps clicked")}
          border={false}
        />
      </div>

      {/* With Solid Border */}
      <div>
        <h4 className="text-emphasis mb-4 text-sm font-medium">{t('sections.with-solid-border')}</h4>
        <EmptyScreen
          Icon="mail"
          headline="No messages"
          description={t('empty-states.no-messages.description')}
          buttonText={t('buttons.compose')}
          buttonOnClick={() => alert("Compose clicked")}
          dashedBorder={false}
        />
      </div>
    </div>
  </RenderComponentWithSnippet>
)
};
