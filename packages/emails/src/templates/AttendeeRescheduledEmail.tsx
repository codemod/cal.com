import { useTranslations } from "next-intl";
import { AttendeeScheduledEmail } from "./AttendeeScheduledEmail";

export const AttendeeRescheduledEmail = (props: React.ComponentProps<typeof AttendeeScheduledEmail>) =>  {
const t = useTranslations("attendee-rescheduled-email");

return (
  <AttendeeScheduledEmail
    title={t('title.event-rescheduled')}
    headerType="calendarCircle"
    subject="event_type_has_been_rescheduled_on_time_date"
    {...props}
  />
)
};
