import pino from 'pino'
import { captureReactException } from "@sentry/nextjs";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
const logger = pino()

import { ErrorPage } from "./error-page";

export default function BookingPageErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary
      fallbackRender={({ error, resetErrorBoundary }) => (
        <ErrorPage reset={resetErrorBoundary} error={error} message={`${error}`} displayDebug={true} />
      )}
      onError={(error, info) => {
        logger.error(error);
        captureReactException(error, info);
      }}>
      {children}
    </ErrorBoundary>
  );
}
