import { useTranslations } from "next-intl";
import { OrganizerScheduledEmail } from "./OrganizerScheduledEmail";

export const OrganizerLocationChangeEmail = (props: React.ComponentProps<typeof OrganizerScheduledEmail>) =>  {
const t = useTranslations("organizer-location-change-email");

return (
  <OrganizerScheduledEmail
    title={t('title.event-location-changed')}
    headerType="calendarCircle"
    subject="location_changed_event_type_subject"
    callToAction={null}
    {...props}
  />
)
};
