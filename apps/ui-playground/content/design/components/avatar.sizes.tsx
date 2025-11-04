"use client";
import { useTranslations } from "next-intl";


import { RenderComponentWithSnippet } from "@/app/components/render";

import { Avatar } from "@calcom/ui/components/avatar";

const sizes = ["xs", "xsm", "sm", "md", "mdLg", "lg", "xl"] as const;
const sampleImage = "https://cal.com/stakeholder/peer.jpg";

export const SizesExample: React.FC = () => (
  <RenderComponentWithSnippet>
    <div className="flex items-center gap-4">
      {sizes.map((size) =>  {
const t = useTranslations("avatar-sizes-demo");

return (
        <div key={size} className="flex flex-col items-center gap-2">
          <Avatar size={size} alt={t('alt-text.circular-avatar', { "size": size })} imageSrc={sampleImage} />
          <span className="text-subtle text-xs">{size}</span>
        </div>
      )
})}
    </div>
    <div className="mt-2 flex items-center gap-4">
      {sizes.map((size) =>  {
const t = useTranslations("avatar-sizes-demo");

return (
        <div key={size} className="flex flex-col items-center gap-2">
          <Avatar size={size} alt={t('alt-text.square-avatar', { "size": size })} imageSrc={sampleImage} shape="square" />
          <span className="text-subtle text-xs">{size}</span>
        </div>
      )
})}
    </div>
  </RenderComponentWithSnippet>
);
