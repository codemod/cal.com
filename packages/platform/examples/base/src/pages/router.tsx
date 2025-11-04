import { useTranslations } from "next-intl";
import { Navbar } from "@/components/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Router(props: { calUsername: string; calEmail: string }) {
const t = useTranslations("router-page");

  return (
    <main className={`flex ${inter.className} text-default dark flex flex-col`}>
      <Navbar username={props.calUsername} />
      <div>
        <h1 className="mx-8 my-4 text-2xl font-bold">{t('headings.router-atom-title')}</h1>
      </div>
    </main>
  );
}
