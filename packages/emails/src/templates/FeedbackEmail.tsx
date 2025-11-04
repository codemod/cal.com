import { useTranslations } from "next-intl";
import { BaseEmailHtml, Info } from "../components";

export interface Feedback {
  username: string;
  email: string;
  rating: string;
  comment: string;
}

export const FeedbackEmail = (props: Feedback & Partial<React.ComponentProps<typeof BaseEmailHtml>>) => {
const t = useTranslations("feedback-email");

  return (
    <BaseEmailHtml subject="Feedback" title="Feedback">
      <Info label={t('labels.username')} description={props.username} withSpacer />
      <Info label={t('labels.email')} description={props.email} withSpacer />
      <Info label={t('labels.rating')} description={props.rating} withSpacer />
      <Info label={t('labels.comment')} description={props.comment} withSpacer />
    </BaseEmailHtml>
  );
};
