import { useTranslations } from "next-intl";
import { AttendeeScheduledEmail } from "./AttendeeScheduledEmail";

export const AttendeeLocationChangeEmail = (props: React.ComponentProps<typeof AttendeeScheduledEmail>) =>  {
const t = useTranslations("attendee-location-change-email");

return (
  <AttendeeScheduledEmail
    title={t('title.event-location-changed')}
    headerType="calendarCircle"
    subject="location_changed_event_type_subject"
    {...props}
  />
)
};
