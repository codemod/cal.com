import { useTranslations } from "next-intl";
import { CallToAction, CallToActionTable } from "../components";
import { AttendeeScheduledEmail } from "./AttendeeScheduledEmail";

function ManageLink(props: React.ComponentProps<typeof AttendeeScheduledEmail>) {
  const manageText = props.attendee.language.translate("pay_now");

  if (!props.calEvent.paymentInfo?.link) return null;

  return (
    <CallToActionTable>
      <CallToAction label={manageText} href={props.calEvent.paymentInfo.link} endIconName="linkIcon" />
    </CallToActionTable>
  );
}

export const AttendeeAwaitingPaymentEmail = (props: React.ComponentProps<typeof AttendeeScheduledEmail>) => {
const t = useTranslations("attendee-awaiting-payment-email");

  return props.calEvent.paymentInfo?.paymentOption === "HOLD" ? (
    <AttendeeScheduledEmail
      title={t('titles.payment-method-required')}
      headerType="calendarCircle"
      subject="awaiting_payment_subject"
      callToAction={<ManageLink {...props} />}
      {...props}
    />
  ) : (
    <AttendeeScheduledEmail
      title={t('titles.payment-pending')}
      headerType="calendarCircle"
      subject="awaiting_payment_subject"
      callToAction={<ManageLink {...props} />}
      {...props}
    />
  );
};
