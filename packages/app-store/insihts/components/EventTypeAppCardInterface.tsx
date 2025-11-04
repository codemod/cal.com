import { useTranslations } from "next-intl";
import { useAppContextWithSchema } from "@calcom/app-store/EventTypeAppContext";
import AppCard from "@calcom/app-store/_components/AppCard";
import useIsAppEnabled from "@calcom/app-store/_utils/useIsAppEnabled";
import type { EventTypeAppCardComponent } from "@calcom/app-store/types";
import { TextField } from "@calcom/ui/components/form";

import type { appDataSchema } from "../zod";

const EventTypeAppCard: EventTypeAppCardComponent = function EventTypeAppCard({ app, eventType, onAppInstallSuccess }) {
const t = useTranslations("insights-event-type-app-card");

  const { getAppData, setAppData, disabled } = useAppContextWithSchema<typeof appDataSchema>();
  const siteId = getAppData("SITE_ID");
  const { enabled, updateEnabled } = useIsAppEnabled(app);

  return (
    <AppCard
      onAppInstallSuccess={onAppInstallSuccess}
      app={app}
      switchOnClick={(e) => {
        updateEnabled(e);
      }}
      switchChecked={enabled}
      teamId={eventType.team?.id || undefined}>
      <fieldset className="space-y-2" disabled={disabled}>
        <TextField
          disabled={disabled}
          name="Site ID"
          value={siteId}
          placeholder={t('form.site-id-placeholder')}
          onChange={(e) => {
            setAppData("SITE_ID", e.target.value);
          }}
        />
      </fieldset>
    </AppCard>
  );
};

export default EventTypeAppCard;
