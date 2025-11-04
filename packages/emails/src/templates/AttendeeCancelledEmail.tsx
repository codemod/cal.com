import { useTranslations } from "next-intl";
import { AttendeeScheduledEmail } from "./AttendeeScheduledEmail";

export const AttendeeCancelledEmail = (props: React.ComponentProps<typeof AttendeeScheduledEmail>) =>  {
const t = useTranslations("attendee-cancelled-email");

return (
  <AttendeeScheduledEmail
    title={t('title.event-request-cancelled')}
    headerType="xCircle"
    subject="event_cancelled_subject"
    callToAction={null}
    {...props}
  />
)
};
