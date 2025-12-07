import pino from 'pino'
import { useEffect, useRef } from "react";
const logger = pino()

import { PUBLIC_QUICK_AVAILABILITY_ROLLOUT } from "@calcom/lib/constants";

import { isVisitorWithinPercentage } from "../../utils/isFeatureEnabledForVisitor";

export const useIsQuickAvailabilityCheckFeatureEnabled = () => {
  const isQuickAvailabilityCheckFeatureEnabledRef = useRef(
    isVisitorWithinPercentage({ percentage: PUBLIC_QUICK_AVAILABILITY_ROLLOUT })
  );

  useEffect(() => {
    logger.info("QuickAvailabilityCheck feature enabled:", isQuickAvailabilityCheckFeatureEnabledRef.current);
  }, []);

  return isQuickAvailabilityCheckFeatureEnabledRef.current;
};
