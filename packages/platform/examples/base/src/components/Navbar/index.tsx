import { useTranslations } from "next-intl";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "800"] });

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Navbar({ username }: { username?: string }) {
const t = useTranslations("navbar-navigation");

  return (
    <nav className="flex h-[75px] w-[100%] items-center justify-between bg-black px-14 py-3 text-white">
      <div className={`flex h-[100%] items-center text-lg ${poppins.className}`}>
        <Link href="/">
          <h1 className="bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121] bg-clip-text text-2xl font-bold text-transparent">
            CalSync
          </h1>
        </Link>
      </div>
      <div className={`${poppins.className}`}>
        <ul className="flex gap-x-7">
          <li>
            <Link href="/calendar-view">{t('links.week-view')}</Link>
          </li>
          <li>
            <Link href="/calendars">{t('links.calendar')}</Link>
          </li>
          <li>
            <Link href="/availability">{t('links.availability')}</Link>
          </li>
          <li>
            <Link href="/event-types">EventTypes</Link>
          </li>
          <li>
            <Link href="/booking">{t('links.book-me')}</Link>
          </li>
          <li>
            <Link href="/bookings">{t('links.my-bookings')}</Link>
          </li>
          <li>
            <Link href="/embed">{t('links.embed')}</Link>
          </li>

          <li>
            <Link href="/conferencing-apps">{t('links.conferencing-apps')}</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
