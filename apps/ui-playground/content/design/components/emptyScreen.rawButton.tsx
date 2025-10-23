"use client";
import { useTranslations } from "next-intl";


import { RenderComponentWithSnippet } from "@/app/components/render";

import { Button } from "@calcom/ui/components/button";
import { EmptyScreen } from "@calcom/ui/components/empty-screen";

export const RawButtonExample: React.FC = () =>  {
const t = useTranslations("empty-screen-demo");

return (
  <RenderComponentWithSnippet>
    <EmptyScreen
      Icon="link"
      headline={t('headlines.no-links-found')}
      description={t('messages.no-links-description')}
      buttonRaw={
        <div className="flex space-x-2">
          <Button color="primary" onClick={() => alert("Create Link clicked")}>{t('buttons.create-link')}</Button>
          <Button color="secondary" onClick={() => alert("Import Links clicked")}>{t('buttons.import-links')}</Button>
        </div>
      }
    />
  </RenderComponentWithSnippet>
)
};
