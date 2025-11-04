import { useTranslations } from "next-intl";
import { AttendeeScheduledEmail } from "./AttendeeScheduledEmail";

export const AttendeeDeclinedEmail = (props: React.ComponentProps<typeof AttendeeScheduledEmail>) =>  {
const t = useTranslations("attendee-declined-email");

return (
  <AttendeeScheduledEmail
    title={props.calEvent.recurringEvent?.count ? t('titles.event-request-declined-conditional_0') : t('titles.event-request-declined-conditional_1')}
    headerType="xCircle"
    subject="event_declined_subject"
    callToAction={null}
    {...props}
  />
)
};
