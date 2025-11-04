"use client";
import { useTranslations } from "next-intl";


import { RenderComponentWithSnippet } from "@/app/components/render";

import { Badge } from "@calcom/ui/components/badge";

const variants = [
  "default",
  "warning",
  "orange",
  "success",
  "green",
  "gray",
  "blue",
  "red",
  "error",
  "grayWithoutHover",
] as const;

export const DotsExample: React.FC = () => (
  <RenderComponentWithSnippet>
    <div className="flex flex-wrap items-center gap-4">
      {variants.map((variant) =>  {
const t = useTranslations("badge-dots-demo");

return (
        <div key={variant} className="flex flex-col items-center gap-2">
          <Badge variant={variant} withDot>
            {variant}
          </Badge>
          <span className="text-subtle text-xs">{t('labels.dot-indicator')}</span>
        </div>
      )
})}
    </div>
  </RenderComponentWithSnippet>
);
