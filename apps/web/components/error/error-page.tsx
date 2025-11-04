"use client";
import { useTranslations } from "next-intl";


import React from "react";

import "@calcom/embed-core/src/embed-iframe";
import { HttpError } from "@calcom/lib/http-error";
import { Button } from "@calcom/ui/components/button";

type Props = {
  statusCode?: number | null;
  error?: Error | HttpError | null;
  message?: string;
  /** Display debugging information */
  displayDebug?: boolean;
  children?: never;
  reset?: () => void;
};

const defaultProps = {
  displayDebug: false,
};

const ErrorDebugPanel: React.FC<{ error: Props["error"]; children?: never }> = (props) => {
  const { error: e } = props;

  const debugMap = [
    ["error.message", e?.message],
    ["error.name", e?.name],
    ["error.class", e instanceof Error ? e.constructor.name : undefined],
    ["http.url", e instanceof HttpError ? e.url : undefined],
    ["http.status", e instanceof HttpError ? e.statusCode : undefined],
    ["http.cause", e instanceof HttpError ? e.cause?.message : undefined],
    ["error.stack", e instanceof Error ? e.stack : undefined],
  ];

  return (
    <div className="bg-default overflow-hidden shadow sm:rounded-lg">
      <div className="border-subtle border-t px-4 py-5 sm:p-0">
        <dl className="sm:divide-subtle sm:divide-y">
          {debugMap.map(([key, value]) => {
            if (value !== undefined) {
              return (
                <div key={key} className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                  <dt className="text-emphasis text-sm font-bold">{key}</dt>
                  <dd className="text-emphasis mt-1 text-sm sm:col-span-2 sm:mt-0">{value}</dd>
                </div>
              );
            }
          })}
        </dl>
      </div>
    </div>
  );
};

export const ErrorPage: React.FC<Props> = (props) => {
const t = useTranslations("error-page");

  const { message, statusCode, error, displayDebug } = { ...defaultProps, ...props };
  const handleReset = () => {
    window.location.reload();
    props.reset?.();
  };
  return (
    <>
      <div className="bg-subtle flex h-screen">
        <div className="rtl: bg-default m-auto rounded-md p-10 text-right ltr:text-left">
          <h1 className="font-cal text-emphasis text-6xl">{statusCode}</h1>
          <h2 className="text-emphasis mt-6 max-w-2xl text-2xl font-medium">{t('headings.not-your-fault')}</h2>
          <p className="text-default mb-6 mt-4 max-w-2xl text-sm">{t('messages.something-went-wrong')}</p>

          <div className="mb-8 flex flex-col">
            <p className="text-default mb-4 max-w-2xl text-sm">{t('instructions.contact-support-info')}</p>
            <pre className="bg-emphasis text-emphasis w-full max-w-2xl whitespace-normal break-words rounded-md p-4">
              {message}
            </pre>
          </div>

          <Button href="mailto:support@cal.com">{t('buttons.contact-support')}</Button>
          <Button color="secondary" className="ml-2" onClick={handleReset}>{t('buttons.try-again')}</Button>
        </div>
      </div>
      {displayDebug && (
        <div className="flex-wrap">
          <ErrorDebugPanel error={error} />
        </div>
      )}
    </>
  );
};
