import { Navbar } from "@/components/Navbar";
import { Inter } from "next/font/google";

import { AvailabilitySettings } from "@calcom/atoms";

const inter = Inter({ subsets: ["latin"] });

export default function Availability(props: { calUsername: string; calEmail: string }) {
  return (
    <main className={`flex min-h-screen flex-col ${inter.className}`}>
      <Navbar username={props.calUsername} />
      <div>
        <AvailabilitySettings
          enableOverrides={true}
          customClassNames={{
            subtitlesClassName: "text-red-500",
            ctaClassName: "border p-4 rounded-md",
            editableHeadingClassName: "underline font-semibold",
            hiddenSwitchClassname: { thumb: "bg-red-500" },
          }}
          onUpdateSuccess={() => {
            logger.log("Updated successfully");
          }}
          onUpdateError={() => {
            logger.log("update error");
          }}
          onDeleteError={() => {
            logger.log("delete error");
          }}
          onDeleteSuccess={() => {
            logger.log("Deleted successfully");
          }}
        />
      </div>
    </main>
  );
}
