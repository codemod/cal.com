import { useTranslations } from "next-intl";
import { useLocale } from "@calcom/lib/hooks/useLocale";
import { Button } from "@calcom/ui/components/button";
import { EmptyScreen } from "@calcom/ui/components/empty-screen";

export default function NoPlatformPlan() {
const t = useTranslations("no-platform-plan");

  const { t } = useLocale();
  return (
    <EmptyScreen
      Icon="credit-card"
      headline={t("subscription_needed")}
      description={t("subscription_needed_description")}
      buttonRaw={
        <div className="flex gap-2">
          <Button
            className="hover:bg-slate-300 hover:text-black"
            color="secondary"
            href="/settings/platform/new">{t('buttons.subscribe')}</Button>
          <Button
            color="secondary"
            className="hover:bg-slate-300 hover:text-black"
            href="https://cal.com/platform/pricing"
            target="_blank">{t('buttons.go-to-pricing')}</Button>
          <Button
            color="secondary"
            className="hover:bg-slate-300 hover:text-black"
            href="https://cal.com/sales"
            target="_blank">{t('buttons.contact-sales')}</Button>
        </div>
      }
    />
  );
}
