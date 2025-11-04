"use client";
import { useTranslations } from "next-intl";


import { RenderComponentWithSnippet } from "@/app/components/render";

import { EmptyScreen } from "@calcom/ui/components/empty-screen";

export const BasicExample: React.FC = () =>  {
const t = useTranslations("empty-screen-basic-example");

return (
  <RenderComponentWithSnippet>
    <EmptyScreen
      Icon="calendar"
      headline="No upcoming meetings"
      description={t('messages.create-meeting-prompt')}
      buttonText={t('buttons.create-meeting')}
      buttonOnClick={() => alert("Create Meeting clicked")}
    />
  </RenderComponentWithSnippet>
)
};
