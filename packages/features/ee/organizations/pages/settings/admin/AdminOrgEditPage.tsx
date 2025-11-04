"use client";
import { useTranslations } from "next-intl";


import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { useLocale } from "@calcom/lib/hooks/useLocale";
import type { Team } from "@calcom/prisma/client";
import type { orgSettingsSchema } from "@calcom/prisma/zod-utils";
import { trpc } from "@calcom/trpc/react";
import { Button } from "@calcom/ui/components/button";
import { Form } from "@calcom/ui/components/form";
import { TextField } from "@calcom/ui/components/form";
import { showToast } from "@calcom/ui/components/toast";

type FormValues = {
  name: Team["name"];
  slug: Team["slug"];
  organizationSettings: z.infer<typeof orgSettingsSchema>;
};

export const OrgForm = ({
  org,
}: {
  org: FormValues & {
    id: Team["id"];
  };
}) => {
const t = useTranslations("organization-admin-edit-form");

  const { t } = useLocale();
  const router = useRouter();
  const utils = trpc.useUtils();
  const mutation = trpc.viewer.organizations.adminUpdate.useMutation({
    onSuccess: async () => {
      await Promise.all([
        utils.viewer.organizations.adminGetAll.invalidate(),
        utils.viewer.organizations.adminGet.invalidate({
          id: org.id,
        }),
      ]);
      showToast(t("org_has_been_processed"), "success");
      router.replace(`/settings/admin/organizations`);
    },
    onError: (err) => {
      showToast(err.message, "error");
    },
  });

  const form = useForm<FormValues>({
    defaultValues: org,
  });

  const onSubmit = (values: FormValues) => {
    mutation.mutate({
      id: org.id,
      ...values,
      organizationSettings: {
        ...org.organizationSettings,
        orgAutoAcceptEmail: values.organizationSettings?.orgAutoAcceptEmail,
      },
    });
  };

  return (
    <Form form={form} className="space-y-4" handleSubmit={onSubmit}>
      <TextField label={t('labels.name')} placeholder={t('placeholders.name-example')} required {...form.register("name")} />
      <TextField label={t('labels.slug')} placeholder={t('placeholders.slug-example')} required {...form.register("slug")} />
      <p className="text-default mt-2 text-sm">{t('warnings.slug-change-dns-impact')}</p>
      <TextField
        label={t('labels.auto-accept-domain')}
        placeholder="abc.com"
        required
        {...form.register("organizationSettings.orgAutoAcceptEmail")}
      />
      <Button type="submit" color="primary" loading={mutation.isPending}>
        {t("save")}
      </Button>
    </Form>
  );
};

export default OrgForm;
