"use client";
import { useTranslations } from "next-intl";


import { RenderComponentWithSnippet } from "@/app/components/render";

import { Button } from "@calcom/ui/components/button";
import { EmptyScreen } from "@calcom/ui/components/empty-screen";

export const RawButtonExample: React.FC = () =>  {
const t = useTranslations("empty-screen-raw-button");

return (
  <RenderComponentWithSnippet>
    <EmptyScreen
      Icon="link"
      headline="No links found"
      description={t('descriptions.create-new-link')}
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
