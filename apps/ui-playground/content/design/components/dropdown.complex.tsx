"use client";
import { useTranslations } from "next-intl";


import { RenderComponentWithSnippet } from "@/app/components/render";

import { Avatar } from "@calcom/ui/components/avatar";
import { Button } from "@calcom/ui/components/button";
import {
  Dropdown,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@calcom/ui/components/dropdown";

export const ComplexExample: React.FC = () =>  {
const t = useTranslations("dropdown-complex-demo");

return (
  <RenderComponentWithSnippet>
    <div className="flex flex-wrap items-center gap-8">
      {/* Example 1: Complex Menu Structure */}
      <div className="flex flex-col items-center gap-2">
        <Dropdown>
          <DropdownMenuTrigger asChild>
            <Button color="secondary">{t('buttons.open')}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>{t('labels.my-account')}</DropdownMenuLabel>
            <DropdownItem>{t('menu-items.profile')}</DropdownItem>
            <DropdownItem>{t('menu-items.billing')}</DropdownItem>
            <DropdownItem>{t('menu-items.settings')}</DropdownItem>
            <DropdownItem>{t('menu-items.keyboard-shortcuts')}</DropdownItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>{t('labels.team')}</DropdownMenuLabel>
            <DropdownItem>{t('menu-items.invite-users')}</DropdownItem>
            <DropdownItem>{t('menu-items.new-team')}</DropdownItem>
            <DropdownMenuSeparator />
            <DropdownItem>{t('menu-items.github')}</DropdownItem>
            <DropdownItem>{t('menu-items.support')}</DropdownItem>
            <DropdownItem>{t('menu-items.api')}</DropdownItem>
          </DropdownMenuContent>
        </Dropdown>
        <span className="text-subtle text-xs">{t('captions.complex-menu')}</span>
      </div>

      {/* Example 2: Avatar with Icons */}
      <div className="flex flex-col items-center gap-2">
        <Dropdown>
          <DropdownMenuTrigger asChild>
            <button className="cursor-pointer">
              <Avatar size="md" imageSrc="https://cal.com/stakeholder/peer.jpg" alt={t('alt-text.avatar')} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>{t('labels.user-email')}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownItem StartIcon="user">{t('menu-items.my-account')}</DropdownItem>
            <DropdownItem StartIcon="map">{t('menu-items.plan')}</DropdownItem>
            <DropdownItem StartIcon="credit-card">{t('menu-items.billing-with-icon')}</DropdownItem>
            <DropdownItem StartIcon="link">{t('menu-items.integrations')}</DropdownItem>
            <DropdownItem StartIcon="upload">{t('menu-items.module')}</DropdownItem>
            <DropdownMenuSeparator />
            <DropdownItem className="text-error" StartIcon="log-out">{t('menu-items.log-out')}</DropdownItem>
          </DropdownMenuContent>
        </Dropdown>
        <span className="text-subtle text-xs">{t('captions.with-icons')}</span>
      </div>

      {/* Example 3: Simple Actions */}
      <div className="flex flex-col items-center gap-2">
        <Dropdown>
          <DropdownMenuTrigger asChild>
            <Button variant="icon" color="secondary" StartIcon="calendar" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownItem>{t('actions.rename')}</DropdownItem>
            <DropdownItem>{t('actions.duplicate')}</DropdownItem>
            <DropdownItem>{t('actions.move')}</DropdownItem>
            <DropdownItem color="destructive">{t('actions.delete')}</DropdownItem>
          </DropdownMenuContent>
        </Dropdown>
        <span className="text-subtle text-xs">{t('captions.simple-actions')}</span>
      </div>
    </div>
  </RenderComponentWithSnippet>
)
};
