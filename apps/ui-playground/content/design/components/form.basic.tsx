"use client";
import { useTranslations } from "next-intl";


import { RenderComponentWithSnippet } from "@/app/components/render";
import { useForm } from "react-hook-form";

import { Button } from "@calcom/ui/components/button";
import { InputField } from "@calcom/ui/components/form";

type FormValues = {
  username: string;
  email: string;
  password: string;
};

export const BasicExample: React.FC = () => {
const t = useTranslations("form-basic-demo");

  const form = useForm<FormValues>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
  };

  return (
    <RenderComponentWithSnippet>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <InputField
          label={t('fields.username')}
          {...form.register("username")}
          error={form.formState.errors.username?.message}
        />
        <InputField
          label={t('fields.email')}
          type="email"
          {...form.register("email")}
          error={form.formState.errors.email?.message}
        />
        <InputField
          label={t('fields.password')}
          type="password"
          {...form.register("password")}
          error={form.formState.errors.password?.message}
        />
        <div className="flex justify-end space-x-2">
          <Button color="minimal" type="button" onClick={() => form.reset()}>{t('buttons.reset')}</Button>
          <Button type="submit" loading={form.formState.isSubmitting}>{t('buttons.submit')}</Button>
        </div>
      </form>
    </RenderComponentWithSnippet>
  );
};
