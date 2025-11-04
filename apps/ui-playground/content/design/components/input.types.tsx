"use client";
import { useTranslations } from "next-intl";


import { RenderComponentWithSnippet } from "@/app/components/render";

import { Input } from "@calcom/ui/components/form";

const types = ["text", "email", "password", "number", "tel", "url", "search"] as const;
const sizes = ["sm", "md"] as const;

export const TypesExample: React.FC = () => (
  <RenderComponentWithSnippet>
    <div className="space-y-6">
      <div className="space-y-4">
        {types.map((type) => (
          <div key={type} className="flex flex-col space-y-2">
            <h3 className="text-emphasis text-sm capitalize">{type}</h3>
            <div className="flex flex-wrap items-center gap-4">
              {sizes.map((size) =>  {
const t = useTranslations("input-types-demo");

return (
                <div key={size} className="flex flex-col items-center gap-2">
                  <Input
                    type={type}
                    placeholder={t('placeholders.enter-type', { "type": type })}
                    defaultValue={
                      type === "email"
                        ? "example@cal.com"
                        : type === "url"
                        ? "https://cal.com"
                        : type === "number"
                        ? "42"
                        : type === "tel"
                        ? "+1234567890"
                        : ""
                    }
                    size={size}
                    isFullWidth={false}
                  />
                  <span className="text-subtle text-xs">{size}</span>
                </div>
              )
})}
            </div>
          </div>
        ))}
      </div>
    </div>
  </RenderComponentWithSnippet>
);
