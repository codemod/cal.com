import { useTranslations } from "next-intl";
import classNames from "@calcom/ui/classNames";

export function Logo({
  small,
  icon,
  inline = true,
  className,
  src = "/api/logo",
}: {
  small?: boolean;
  icon?: boolean;
  inline?: boolean;
  className?: string;
  src?: string;
}) {
const t = useTranslations("logo-component");

  return (
    <h3 className={classNames("logo", inline && "inline", className)}>
      <strong>
        {icon ? (
          <img className="mx-auto w-9 dark:invert" alt={t('brand.alt-text')} title={t('brand.title')} src={`${src}?type=icon`} />
        ) : (
          <img
            className={classNames(small ? "h-4 w-auto" : "h-5 w-auto", "dark:invert")}
            alt={t('brand.alt-text-icon')}
            title={t('brand.title-icon')}
            src={src}
          />
        )}
      </strong>
    </h3>
  );
}
