"use client";
import { useTranslations } from "next-intl";


import { RenderComponentWithSnippet } from "@/app/components/render";

import { Avatar } from "@calcom/ui/components/avatar";

const sampleImage = "https://cal.com/stakeholder/peer.jpg";

export const ImageExample: React.FC = () =>  {
const t = useTranslations("avatar-image-demo");

return (
  <RenderComponentWithSnippet>
    <div className="flex items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <Avatar size="md" alt={t('alt-text.with-image')} imageSrc={sampleImage} />
        <span className="text-subtle text-xs">{t('labels.with-image')}</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar size="md" alt={t('alt-text.without-image')} imageSrc="https://cal.com/avatar.svg" />
        <span className="text-subtle text-xs">{t('labels.without-image')}</span>
      </div>
    </div>
  </RenderComponentWithSnippet>
)
};
