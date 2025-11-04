"use client";
import { useTranslations } from "next-intl";


import { RenderComponentWithSnippet } from "@/app/components/render";

import { Badge } from "@calcom/ui/components/badge";
import { NavigationItem } from "@calcom/ui/components/navigation";

export const ItemsExample: React.FC = () =>  {
const t = useTranslations("navigation-items-playground");

return (
  <RenderComponentWithSnippet>
    <div className="space-y-4 md:w-64">
      <div className="space-y-1">
        <h3 className="text-emphasis mb-2 text-sm font-medium">{t('sections.basic-items')}</h3>
        <NavigationItem
          item={{
            name: "Event Types",
            href: "#event-types",
            icon: "link",
          }}
        />
        <NavigationItem
          item={{
            name: "Availability",
            href: "#availability",
            icon: "clock",
          }}
        />
      </div>

      <div className="space-y-1">
        <h3 className="text-emphasis mb-2 text-sm font-medium">{t('sections.with-badge')}</h3>
        <NavigationItem
          item={{
            name: "Bookings",
            href: "#bookings",
            icon: "calendar",
            badge: <Badge variant="blue">3</Badge>,
          }}
        />
        <NavigationItem
          item={{
            name: "Teams",
            href: "#teams",
            icon: "users",
            badge: <Badge variant="gray">{t('badges.new')}</Badge>,
          }}
        />
      </div>

      <div className="space-y-1">
        <h3 className="text-emphasis mb-2 text-sm font-medium">{t('sections.active-state')}</h3>
        <NavigationItem
          item={{
            name: "Event Types",
            href: "#event-types",
            icon: "link",
            isCurrent: true,
          }}
        />
        <NavigationItem
          item={{
            name: "Availability",
            href: "#availability",
            icon: "clock",
            badge: <Badge variant="blue">3</Badge>,
            isCurrent: true,
          }}
        />

        <NavigationItem
          item={{
            name: "Apps",
            href: "#apps",
            icon: "grid-3x3",
            isCurrent: true,
            isExpanded: true,
            child: [
              {
                name: "App Store",
                href: "#apps/store",
                isCurrent: true,
              },
              {
                name: "Installed Apps",
                href: "#apps/installed",
              },
            ],
          }}
        />
      </div>
    </div>
  </RenderComponentWithSnippet>
)
};
