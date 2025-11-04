"use client";
import { useTranslations } from "next-intl";


import { RenderComponentWithSnippet } from "@/app/components/render";
import { useForm } from "react-hook-form";

import { Button } from "@calcom/ui/components/button";
import { InputField } from "@calcom/ui/components/form";

type FormValues = {
  age?: number;
  phone?: string;
};

export const SpecialFieldsExample: React.FC = () => {
const t = useTranslations("form-special-fields-demo");

  const form = useForm<FormValues>({
    defaultValues: {
      age: undefined,
      phone: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
  };

  return (
    <RenderComponentWithSnippet>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <InputField
          label={t('labels.age')}
          type="number"
          {...form.register("age", { valueAsNumber: true })}
          error={form.formState.errors.age?.message}
        />
        <InputField
          label={t('labels.phone')}
          type="tel"
          addOnLeading="+"
          {...form.register("phone")}
          error={form.formState.errors.phone?.message}
        />
        <div className="flex justify-end space-x-2">
          <Button color="minimal" type="button" onClick={() => form.reset()}>{t('buttons.reset')}</Button>
          <Button type="submit" loading={form.formState.isSubmitting}>{t('buttons.submit')}</Button>
        </div>
      </form>
    </RenderComponentWithSnippet>
  );
};
