"use client";
import { useTranslations } from "next-intl";


import { RenderComponentWithSnippet } from "@/app/components/render";

import { EmptyScreen } from "@calcom/ui/components/empty-screen";

export const BasicExample: React.FC = () =>  {
const t = useTranslations("empty-screen-basic");

return (
  <RenderComponentWithSnippet>
    <EmptyScreen
      Icon="calendar"
      headline={t('headlines.no-upcoming-meetings')}
      description={t('messages.no-meetings-description')}
      buttonText={t('buttons.create-meeting')}
      buttonOnClick={() => alert("Create Meeting clicked")}
    />
  </RenderComponentWithSnippet>
)
};
