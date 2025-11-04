"use client";
import { useTranslations } from "next-intl";


import { RenderComponentWithSnippet } from "@/app/components/render";
import { useState } from "react";

import { Switch } from "@calcom/ui/components/form";

export const BasicExample = () => {
const t = useTranslations("switch-playground");

  const [checked, setChecked] = useState(false);

  return (
    <RenderComponentWithSnippet>
      <div className="flex flex-col space-y-4">
        <Switch label={t('examples.basic-label')} checked={checked} onCheckedChange={setChecked} />
      </div>
    </RenderComponentWithSnippet>
  );
};

export const LabelPositionExample = () => {
const t = useTranslations("switch-playground");

  const [checked, setChecked] = useState(false);
  return (
    <RenderComponentWithSnippet>
      <div className="flex flex-col space-y-4">
        <Switch label={t('examples.label-trailing-default')} checked={checked} onCheckedChange={setChecked} />
        <Switch label={t('examples.label-leading')} labelOnLeading checked={checked} onCheckedChange={setChecked} />
      </div>
    </RenderComponentWithSnippet>
  );
};

export const StatesExample = () => {
const t = useTranslations("switch-playground");

  return (
    <RenderComponentWithSnippet>
      <div className="flex flex-col space-y-4">
        <Switch label={t('states.enabled-label')} checked />
        <Switch label={t('states.disabled-label')} disabled />
        <Switch label={t('states.disabled-checked-label')} disabled defaultChecked />
      </div>
    </RenderComponentWithSnippet>
  );
};

export const ControlledExample = () => {
const t = useTranslations("switch-playground");

  const [checked, setChecked] = useState(false);

  return (
    <RenderComponentWithSnippet>
      <div className="flex flex-col space-y-4">
        <Switch
          label={t('controlled.dynamic-status')}
          checked={checked}
          onCheckedChange={setChecked}
        />
      </div>
    </RenderComponentWithSnippet>
  );
};

export const WithPadding = () => {
const t = useTranslations("switch-playground");

  const [checked, setChecked] = useState(false);
  return (
    <RenderComponentWithSnippet>
      <div className="flex flex-col space-y-4">
        <Switch
          label={t('controlled.dynamic-status-with-padding')}
          checked={checked}
          onCheckedChange={setChecked}
          padding
        />
      </div>
    </RenderComponentWithSnippet>
  );
};

export const SwitchSizes = () => {
const t = useTranslations("switch-playground");

  const [checked, setChecked] = useState(false);

  return (
    <RenderComponentWithSnippet>
      <div className="flex flex-col space-y-4">
        <Switch label={t('sizes.small-label')} size="sm" checked={checked} onCheckedChange={setChecked} />
        <Switch label={t('sizes.medium-label')} checked={checked} onCheckedChange={setChecked} />
      </div>
    </RenderComponentWithSnippet>
  );
};
