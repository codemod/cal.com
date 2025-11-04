"use client";
import { useTranslations } from "next-intl";


import { RenderComponentWithSnippet } from "@/app/components/render";

import type { IconName } from "@calcom/ui";
import { Button } from "@calcom/ui/components/button";
import {
  Dropdown,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownItem,
  DropdownMenuLabel,
} from "@calcom/ui/components/dropdown";

const menuItems = [
  { label: "View", icon: "eye", kbd: "V" },
  { label: "Edit", icon: "edit", kbd: "E" },
  { label: "Share", icon: "share", kbd: "⌘S" },
  { label: "Delete", icon: "trash", destructive: true, kbd: "⌘⌫" },
] as {
  label: string;
  icon: IconName;
  destructive?: boolean;
  kbd?: string;
}[];

export const ButtonTriggerExample: React.FC = () =>  {
const t = useTranslations("dropdown-button-trigger-demo");

return (
  <RenderComponentWithSnippet>
    <div className="flex flex-wrap items-center gap-8">
      {/* Default Button */}
      <div className="flex flex-col items-center gap-2">
        <Dropdown>
          <DropdownMenuTrigger asChild>
            <Button>{t('buttons.menu')}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>{t('labels.actions')}</DropdownMenuLabel>
            {menuItems.map((item) => (
              <DropdownItem color={item.destructive ? "destructive" : "secondary"} key={item.label}>
                {item.label}
              </DropdownItem>
            ))}
          </DropdownMenuContent>
        </Dropdown>
        <span className="text-subtle text-xs">{t('variants.default')}</span>
      </div>

      {/* Button with Icon */}
      <div className="flex flex-col items-center gap-2">
        <Dropdown>
          <DropdownMenuTrigger asChild>
            <Button>{t('buttons.more-actions')}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>{t('labels.quick-actions')}</DropdownMenuLabel>
            {menuItems.map((item) => (
              <DropdownItem key={item.label} color={item.destructive ? "destructive" : undefined}>
                {item.label}
              </DropdownItem>
            ))}
          </DropdownMenuContent>
        </Dropdown>
        <span className="text-subtle text-xs">{t('variants.with-icon')}</span>
      </div>

      {/* Icon Button */}
      <div className="flex flex-col items-center gap-2">
        <Dropdown>
          <DropdownMenuTrigger asChild>
            <Button variant="icon" StartIcon="calendar" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {menuItems.map((item) => (
              <DropdownItem key={item.label} color={item.destructive ? "destructive" : undefined}>
                {item.label}
              </DropdownItem>
            ))}
          </DropdownMenuContent>
        </Dropdown>
        <span className="text-subtle text-xs">{t('variants.icon-only')}</span>
      </div>
    </div>
  </RenderComponentWithSnippet>
)
};
