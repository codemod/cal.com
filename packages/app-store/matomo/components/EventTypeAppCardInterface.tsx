import { useTranslations } from "next-intl";
import { useAppContextWithSchema } from "@calcom/app-store/EventTypeAppContext";
import AppCard from "@calcom/app-store/_components/AppCard";
import useIsAppEnabled from "@calcom/app-store/_utils/useIsAppEnabled";
import type { EventTypeAppCardComponent } from "@calcom/app-store/types";
import { TextField } from "@calcom/ui/components/form";

import type { appDataSchema } from "../zod";

const EventTypeAppCard: EventTypeAppCardComponent = function EventTypeAppCard({ app, eventType, onAppInstallSuccess }) {
const t = useTranslations("matomo-event-type-app-card");

  const { getAppData, setAppData, disabled } = useAppContextWithSchema<typeof appDataSchema>();
  const matomoUrl = getAppData("MATOMO_URL");
  const siteId = getAppData("SITE_ID");
  const { enabled, updateEnabled } = useIsAppEnabled(app);

  return (
    <AppCard
      onAppInstallSuccess={onAppInstallSuccess}
      hideSettingsIcon
      app={app}
      switchOnClick={(e) => {
        updateEnabled(e);
      }}
      switchChecked={enabled}
      teamId={eventType.team?.id || undefined}>
      <div className="flex flex-col gap-2">
        <TextField
          dataTestid={`${app.slug}-url`}
          name="Matomo URL"
          placeholder={t('placeholders.matomo-url')}
          value={matomoUrl}
          disabled={disabled}
          onChange={(e) => {
            setAppData("MATOMO_URL", e.target.value);
          }}
        />
        <TextField
          dataTestid={`${app.slug}-site-id`}
          disabled={disabled}
          name="Site ID"
          placeholder={t('placeholders.site-id')}
          value={siteId}
          onChange={(e) => {
            setAppData("SITE_ID", e.target.value);
          }}
        />
      </div>
    </AppCard>
  );
};

export default EventTypeAppCard;
