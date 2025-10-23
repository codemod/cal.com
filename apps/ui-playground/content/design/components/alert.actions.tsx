"use client";
import { useTranslations } from "next-intl";


import { RenderComponentWithSnippet } from "@/app/components/render";

import { Alert } from "@calcom/ui/components/alert";

const severities = ["neutral", "info", "warning", "error"] as const;

export const ActionsExample: React.FC = () => {
const t = useTranslations("alert-actions-demo");

return (
  <RenderComponentWithSnippet>
    <div className="no-prose space-y-4">
      {severities.map((severity) => (
        <Alert
          key={severity}
          severity={severity}
          title={t('title.severity-alert-with-actions', { "severity": severity.charAt(0).toUpperCase() + severity.slice(1) })}
          message={t('messages.alert-with-action-buttons', { "severity": severity })}
          actions={
            <div className="flex space-x-2">
              <button className="rounded-md px-3 py-2 text-sm font-medium hover:opacity-90">{t('actions.dismiss')}</button>
              <button className="rounded-md px-3 py-2 text-sm font-medium hover:opacity-90">{t('actions.view')}</button>
            </div>
          }
        />
      ))}
    </div>
  </RenderComponentWithSnippet>
);
};
