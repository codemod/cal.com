"use client";
import { useTranslations } from "next-intl";


import { RenderComponentWithSnippet } from "@/app/components/render";

import { Alert } from "@calcom/ui/components/alert";

const severities = ["neutral", "info", "warning", "error"] as const;

export const CustomIconColorExample: React.FC = () => (
  <RenderComponentWithSnippet>
    <div className="not-prose space-y-4">
      {severities.map((severity) =>  {
const t = useTranslations("ui-playground-alert-custom-icon-color");

return (
        <Alert
          key={severity}
          severity={severity}
          CustomIcon="bell"
          customIconColor="text-emphasis"
          title={t('alerts.severity-with-custom-icon-title', { "severityCharAt0ToUpperCaseSeveritySlice1": severity.charAt(0).toUpperCase() + severity.slice(1) })}
          message="This alert uses a custom icon color."
        />
      )
})}
    </div>
  </RenderComponentWithSnippet>
);
