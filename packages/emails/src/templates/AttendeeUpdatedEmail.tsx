import { useTranslations } from "next-intl";
import { AttendeeScheduledEmail } from "./AttendeeScheduledEmail";

export const AttendeeUpdatedEmail = (props: React.ComponentProps<typeof AttendeeScheduledEmail>) =>  {
const t = useTranslations("attendee-updated-email");

return (
  <AttendeeScheduledEmail
    title={t('title.event-updated')}
    headerType="calendarCircle"
    subject="event_type_has_been_updated"
    {...props}
  />
)
};
