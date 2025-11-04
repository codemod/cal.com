import { useTranslations } from "next-intl";
import { OrganizerRequestEmail } from "./OrganizerRequestEmail";

export const OrganizerRequestReminderEmail = (props: React.ComponentProps<typeof OrganizerRequestEmail>) =>  {
const t = useTranslations("organizer-request-reminder-email");

return (
  <OrganizerRequestEmail title={t('titles.awaiting-approval')} {...props} />
)
};
