import { useTranslations } from "next-intl";
import { OrganizerScheduledEmail } from "./OrganizerScheduledEmail";

export const OrganizerAttendeeCancelledSeatEmail = (
  props: React.ComponentProps<typeof OrganizerScheduledEmail>
) =>  {
const t = useTranslations("organizer-attendee-cancelled-email");

return (
  <OrganizerScheduledEmail
    title={t('messages.attendee-no-longer-attending')}
    headerType="xCircle"
    subject="event_cancelled_subject"
    callToAction={null}
    attendeeCancelled
    {...props}
  />
)
};
