"use client";
import { useTranslations } from "next-intl";


import { RenderComponentWithSnippet } from "@/app/components/render";

import { Avatar } from "@calcom/ui/components/avatar";

const sampleImage = "https://cal.com/stakeholder/peer.jpg";

export const TooltipExample: React.FC = () =>  {
const t = useTranslations("avatar-tooltip-demo");

return (
  <RenderComponentWithSnippet>
    <div className="flex items-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <Avatar size="md" alt={t('avatar.alt-text')} imageSrc={sampleImage} title={t('tooltip.hover-message')} />
        <span className="text-subtle text-xs">{t('instructions.hover-tooltip')}</span>
      </div>
    </div>
  </RenderComponentWithSnippet>
)
};
