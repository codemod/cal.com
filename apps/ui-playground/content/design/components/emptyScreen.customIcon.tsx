"use client";
import { useTranslations } from "next-intl";


import { RenderComponentWithSnippet } from "@/app/components/render";

import { EmptyScreen } from "@calcom/ui/components/empty-screen";

export const CustomIconExample: React.FC = () =>  {
const t = useTranslations("empty-screen-custom-icon-demo");

return (
  <RenderComponentWithSnippet>
    <EmptyScreen
      Icon="user"
      iconClassName="text-emphasis h-12 w-12"
      headline="No team members"
      description={t('messages.add-team-members-description')}
      buttonText={t('buttons.add-members')}
      buttonOnClick={() => alert("Add Members clicked")}
    />
  </RenderComponentWithSnippet>
)
};
