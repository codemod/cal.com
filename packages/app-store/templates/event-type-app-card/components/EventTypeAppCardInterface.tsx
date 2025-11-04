import { useTranslations } from "next-intl";
import { useAppContextWithSchema } from "@calcom/app-store/EventTypeAppContext";
import AppCard from "@calcom/app-store/_components/AppCard";
import useIsAppEnabled from "@calcom/app-store/_utils/useIsAppEnabled";
import type { EventTypeAppCardComponent } from "@calcom/app-store/types";
import { Icon } from "@calcom/ui/components/icon";

import type { appDataSchema } from "../zod";

const EventTypeAppCard: EventTypeAppCardComponent = function EventTypeAppCard({
  eventType,
  app,
  onAppInstallSuccess,
}) {
const t = useTranslations("event-type-app-card-template");

  const { getAppData, setAppData } = useAppContextWithSchema<typeof appDataSchema>();
  const isSunrise = getAppData("isSunrise");
  const { enabled, updateEnabled } = useIsAppEnabled(app);

  return (
    <AppCard
      onAppInstallSuccess={onAppInstallSuccess}
      app={app}
      switchOnClick={(e) => {
        if (!e) {
          updateEnabled(false);
          setAppData("isSunrise", false);
        } else {
          updateEnabled(true);
          setAppData("isSunrise", true);
        }
      }}
      switchChecked={enabled}
      teamId={eventType.team?.id || undefined}>
      <div className="mt-2 text-sm">
        <div className="flex">
          {t.rich('demo.event-title-display', {
      eventTypeTitle,
      component0: (chunks) => <span className="ltr:mr-2 rtl:ml-2">
            <Icon name={isSunrise ? "sunrise" : "sunset"} />
          </span>
    })}
        </div>{" "}
        <div className="mt-2">{t.rich('instructions.edit-template-file', {
      appSlug,
      component0: (chunks) => <span className="italic">{chunks}</span>
    })}</div>
      </div>
    </AppCard>
  );
};

export default EventTypeAppCard;
