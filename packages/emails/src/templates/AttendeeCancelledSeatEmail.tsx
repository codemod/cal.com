import { useTranslations } from "next-intl";
import { AttendeeScheduledEmail } from "./AttendeeScheduledEmail";

export const AttendeeCancelledSeatEmail = (props: React.ComponentProps<typeof AttendeeScheduledEmail>) =>  {
const t = useTranslations("attendee-cancelled-seat-email");

return (
  <AttendeeScheduledEmail
    title={t('messages.no-longer-attending')}
    headerType="xCircle"
    subject="event_no_longer_attending_subject"
    subtitle=""
    callToAction={null}
    {...props}
  />
)
};
