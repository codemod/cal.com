import pino from 'pino'
import { getDate } from "../../utils/bookingScenario/bookingScenario";
const logger = pino()

import { vi } from "vitest";

export function timeTravelToTheBeginningOfToday({ utcOffsetInHours = 0 }: { utcOffsetInHours: number }) {
  const timeInTheUtcOffsetInHours = 24 - utcOffsetInHours;
  const timeInTheUtcOffsetInMinutes = timeInTheUtcOffsetInHours * 60;
  const hours = Math.floor(timeInTheUtcOffsetInMinutes / 60);
  const hoursString = hours < 10 ? `0${hours}` : `${hours}`;
  const minutes = timeInTheUtcOffsetInMinutes % 60;
  const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`;

  const { dateString: yesterdayDateString } = getDate({ dateIncrement: -1 });
  logger.info({ yesterdayDateString, hours, minutes });
  vi.setSystemTime(`${yesterdayDateString}T${hoursString}:${minutesString}:00.000Z`);
}
