import { useTranslations } from "next-intl";
import { OrganizerScheduledEmail } from "./OrganizerScheduledEmail";

export const OrganizerReassignedEmail = (props: React.ComponentProps<typeof OrganizerScheduledEmail>) => {
const t = useTranslations("organizer-reassigned-email");

  const t = props.teamMember?.language.translate || props.calEvent.organizer.language.translate;
  return (
    <OrganizerScheduledEmail
      title={t('titles.event-request-reassigned')}
      headerType="xCircle"
      subject="event_reassigned_subject"
      subtitle={<>{t("event_reassigned_subtitle")}</>}
      callToAction={null}
      reassigned={props.reassigned}
      {...props}
    />
  );
};
