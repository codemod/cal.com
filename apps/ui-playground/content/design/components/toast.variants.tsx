"use client";
import { useTranslations } from "next-intl";


import { RenderComponentWithSnippet } from "@/app/components/render";

import { Button } from "@calcom/ui/components/button";
import { showToast } from "@calcom/ui/components/toast";

export const VariantsExample: React.FC = () =>  {
const t = useTranslations("toast-variants");

return (
  <RenderComponentWithSnippet>
    <div className="space-x-2">
      <Button
        color="primary"
        onClick={() => {
          showToast("This is a success message", "success");
        }}>{t('buttons.success')}</Button>

      <Button
        color="minimal"
        onClick={() => {
          showToast("This is a warning message", "warning");
        }}>{t('buttons.warning')}</Button>

      <Button
        color="destructive"
        onClick={() => {
          showToast("This is an error message", "error");
        }}>{t('buttons.error')}</Button>
    </div>
  </RenderComponentWithSnippet>
)
};
