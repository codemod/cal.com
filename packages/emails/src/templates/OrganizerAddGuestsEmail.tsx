import { useTranslations } from "next-intl";
import { OrganizerScheduledEmail } from "./OrganizerScheduledEmail";

export const OrganizerAddGuestsEmail = (props: React.ComponentProps<typeof OrganizerScheduledEmail>) =>  {
const t = useTranslations("organizer-add-guests-email");

return (
  <OrganizerScheduledEmail
    title={t('title.new-guests-added')}
    headerType="calendarCircle"
    subject="guests_added_event_type_subject"
    callToAction={null}
    {...props}
  />
)
};
