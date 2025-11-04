import { useTranslations } from "next-intl";
import { OrganizerScheduledEmail } from "./OrganizerScheduledEmail";

export const OrganizerRescheduledEmail = (props: React.ComponentProps<typeof OrganizerScheduledEmail>) =>  {
const t = useTranslations("organizer-rescheduled-email");

return (
  <OrganizerScheduledEmail
    title={t('title.event-rescheduled')}
    headerType="calendarCircle"
    subject="event_type_has_been_rescheduled_on_time_date"
    {...props}
  />
)
};
