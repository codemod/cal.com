"use client";
import { useTranslations } from "next-intl";


import { RenderComponentWithSnippet } from "@/app/components/render";

import { Avatar } from "@calcom/ui/components/avatar";
import {
  Dropdown,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@calcom/ui/components/dropdown";

export const AvatarTriggerExample: React.FC = () =>  {
const t = useTranslations("dropdown-avatar-trigger");

return (
  <RenderComponentWithSnippet>
    <div className="flex flex-wrap items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <Dropdown>
          <DropdownMenuTrigger asChild>
            <button className="cursor-pointer">
              <Avatar size="sm" imageSrc="https://cal.com/stakeholder/peer.jpg" alt={t('avatar.alt-text')} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>{t('menu.profile-label')}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownItem>{t('menu.view-profile')}</DropdownItem>
            <DropdownItem>{t('menu.settings')}</DropdownItem>
            <DropdownMenuSeparator />
            <DropdownItem className="text-error">{t('menu.sign-out')}</DropdownItem>
          </DropdownMenuContent>
        </Dropdown>
        <span className="text-subtle text-xs">{t('demo.caption')}</span>
      </div>
    </div>
  </RenderComponentWithSnippet>
)
};
