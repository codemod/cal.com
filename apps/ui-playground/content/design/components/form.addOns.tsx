"use client";
import { useTranslations } from "next-intl";


import { RenderComponentWithSnippet } from "@/app/components/render";
import { useForm } from "react-hook-form";

import { Button } from "@calcom/ui/components/button";
import { InputField } from "@calcom/ui/components/form";
import { Icon } from "@calcom/ui/components/icon";

type FormValues = {
  website: string;
  githubUsername: string;
  customDomain: string;
};

export const AddOnsExample: React.FC = () => {
const t = useTranslations("form-addons-demo");

  const form = useForm<FormValues>({
    defaultValues: {
      website: "",
      githubUsername: "",
      customDomain: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
  };

  return (
    <RenderComponentWithSnippet>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <InputField
          label={t('labels.website')}
          addOnLeading="https://"
          {...form.register("website")}
          error={form.formState.errors.website?.message}
        />
        <InputField
          label={t('labels.website-with-subdomain')}
          addOnLeading="apple.cal.com/team/seeded-team/"
          {...form.register("website")}
          error={form.formState.errors.website?.message}
        />
        <InputField
          label={t('labels.github-username')}
          addOnLeading={<Icon name="github" className="text-subtle h-4 w-4" />}
          {...form.register("githubUsername")}
          error={form.formState.errors.githubUsername?.message}
        />
        <InputField
          label={t('labels.custom-domain')}
          addOnSuffix=".cal.com"
          {...form.register("customDomain")}
          error={form.formState.errors.customDomain?.message}
        />
        <div className="flex justify-end space-x-2">
          <Button color="minimal" type="button" onClick={() => form.reset()}>{t('buttons.reset')}</Button>
          <Button type="submit" loading={form.formState.isSubmitting}>{t('buttons.submit')}</Button>
        </div>
      </form>
    </RenderComponentWithSnippet>
  );
};
