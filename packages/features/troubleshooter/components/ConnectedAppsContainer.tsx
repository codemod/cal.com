import { useTranslations } from "next-intl";
import { useLocale } from "@calcom/lib/hooks/useLocale";
import { Badge } from "@calcom/ui/components/badge";

import { TroubleshooterListItemHeader } from "./TroubleshooterListItemContainer";

function ConnectedAppsItem() {
const t = useTranslations("troubleshooter-connected-apps");

  return (
    <TroubleshooterListItemHeader
      title={t('apps.google-calendar-name')}
      subtitle="google@calendar.com"
      prefixSlot={
        <>
          <div className="h-4 w-4 self-center rounded-[4px] bg-blue-500" />
        </>
      }
      suffixSlot={
        <div>
          <Badge variant="green" withDot size="sm">{t('status.connected')}</Badge>
        </div>
      }
    />
  );
}

export function ConnectedAppsContainer() {
  const { t } = useLocale();
  return (
    <div className="flex flex-col space-y-3">
      <p className="text-sm font-medium leading-none">{t("other_apps")}</p>
      <div className="[&>*:first-child]:rounded-t-md  [&>*:last-child]:rounded-b-md [&>*:last-child]:border-b">
        <ConnectedAppsItem />
        <ConnectedAppsItem />
      </div>
    </div>
  );
}
