import { useTranslations } from "next-intl";
import { Navbar } from "@/components/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Embed(props: { calUsername: string; calEmail: string }) {
const t = useTranslations("embed-page");

  return (
    <main className={`flex ${inter.className} text-default flex flex-col`}>
      <Navbar username={props.calUsername} />
      <div>
        <h1 className="mx-8 my-4 text-2xl font-bold">{t('headings.booker-embed-title')}</h1>
      </div>
    </main>
  );
}
