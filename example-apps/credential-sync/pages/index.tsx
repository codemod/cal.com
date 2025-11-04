import { useTranslations } from "next-intl";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Index() {
const t = useTranslations("credential-sync-playground");

  const [data, setData] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const appSlug = searchParams?.get("appSlug");
  const userId = searchParams?.get("userId");

  useEffect(() => {
    let isRedirectNeeded = false;
    const newSearchParams = new URLSearchParams(new URL(document.URL).searchParams);
    if (!userId) {
      newSearchParams.set("userId", "1");
      isRedirectNeeded = true;
    }

    if (!appSlug) {
      newSearchParams.set("appSlug", "google-calendar");
      isRedirectNeeded = true;
    }

    if (isRedirectNeeded) {
      router.push(`${pathname}?${newSearchParams.toString()}`);
    }
  }, [router, pathname, userId, appSlug]);

  async function updateToken({ invalid } = { invalid: false }) {
    const res = await fetch(
      `/api/setTokenInCalCom?invalid=${invalid ? 1 : 0}&userId=${userId}&appSlug=${appSlug}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();
    setData(JSON.stringify(data));
  }

  return (
    <div>
      <h1>{t('headings.welcome-title')}</h1>
      <p>{t.rich('descriptions.user-app-management', {
      userId,
      appSlug,
      component0: (chunks) => <strong>{chunks}</strong>,
      component1: (chunks) => <strong>{chunks}</strong>
    })}
        
      </p>
      <button onClick={() => updateToken({ invalid: true })}>{t('buttons.give-invalid-token')}</button>
      <button onClick={() => updateToken()}>{t('buttons.give-valid-token')}</button>
      <div>{data}</div>
    </div>
  );
}
