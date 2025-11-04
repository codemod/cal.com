"use client";
import { useTranslations } from "next-intl";


import { RenderComponentWithSnippet } from "@/app/components/render";

import { Alert } from "@calcom/ui/components/alert";

const severities = ["neutral", "info", "warning", "error"] as const;

export const BasicExample: React.FC = () => (
  <RenderComponentWithSnippet>
    <div className="not-prose space-y-4">
      {severities.map((severity) =>  {
const t = useTranslations("alert-basic-demo");

return (
        <Alert
          key={severity}
          severity={severity}
          title={t('titles.severity-alert', { "severityCharAt0ToUpperCaseSeveritySlice1": severity.charAt(0).toUpperCase() + severity.slice(1) })}
          message={`This is a ${severity} alert message to show important information to users.`}
        />
      )
})}
    </div>
  </RenderComponentWithSnippet>
);
