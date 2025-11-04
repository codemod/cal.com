"use client";
import { useTranslations } from "next-intl";


import { RenderComponentWithSnippet } from "@/app/components/render";
import { Row } from "@/app/components/row";

import { Button } from "@calcom/ui/components/button";

export const OnClickExample: React.FC = () =>  {
const t = useTranslations("button-onclick-demo");

return (
  <RenderComponentWithSnippet>
    <Row>
      <Button onClick={() => alert("hello")}>{t('buttons.trigger-alert')}</Button>
    </Row>
  </RenderComponentWithSnippet>
)
};
