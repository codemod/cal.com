"use client";
import { useTranslations } from "next-intl";


import { RenderComponentWithSnippet } from "@/app/components/render";

import { Alert } from "@calcom/ui/components/alert";

const severities = ["neutral", "info", "warning", "error"] as const;

export const ActionsExample: React.FC = () => (
  <RenderComponentWithSnippet>
    <div className="no-prose space-y-4">
      {severities.map((severity) =>  {
const t = useTranslations("alert-actions-demo");

return (
        <Alert
          key={severity}
          severity={severity}
          title={t('titles.severity-alert-with-actions', { "severityCharAt0ToUpperCaseSeveritySlice1": severity.charAt(0).toUpperCase() + severity.slice(1) })}
          message={`This is a ${severity} alert with action buttons.`}
          actions={
            <div className="flex space-x-2">
              <button className="rounded-md px-3 py-2 text-sm font-medium hover:opacity-90">{t('buttons.dismiss')}</button>
              <button className="rounded-md px-3 py-2 text-sm font-medium hover:opacity-90">{t('buttons.view')}</button>
            </div>
          }
        />
      )
})}
    </div>
  </RenderComponentWithSnippet>
);
