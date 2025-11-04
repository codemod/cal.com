import { useTranslations } from "next-intl";
import { _generateMetadata } from "app/_utils";

export const generateMetadata = async () =>
  await _generateMetadata(
    (t) => t("admin"),
    () => "",
    undefined,
    undefined,
    "/settings/admin"
  );

const Page = () =>  {
const t = useTranslations("admin-dashboard-page");

return <h1>{t('headings.page-title')}</h1>
};
export default Page;
