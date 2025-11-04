"use client";
import { useTranslations } from "next-intl";


import { RenderComponentWithSnippet } from "@/app/components/render";

import { Avatar } from "@calcom/ui/components/avatar";

const sampleImage = "https://cal.com/stakeholder/peer.jpg";

export const LinkExample: React.FC = () =>  {
const t = useTranslations("ui-playground-avatar-link");

return (
  <RenderComponentWithSnippet>
    <div className="flex items-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <Avatar size="md" alt={t('examples.with-link-alt-text')} imageSrc={sampleImage} href="https://cal.com" />
        <span className="text-subtle text-xs">{t('labels.clickable-indicator')}</span>
      </div>
    </div>
  </RenderComponentWithSnippet>
)
};
