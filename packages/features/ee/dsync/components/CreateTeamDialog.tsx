import { useTranslations } from "next-intl";
import { Dialog } from "@calcom/features/components/controlled-dialog";
import { CreateANewTeamForm } from "@calcom/features/ee/teams/components";
import { useLocale } from "@calcom/lib/hooks/useLocale";
import { trpc } from "@calcom/trpc/react";
import { DialogContent } from "@calcom/ui/components/dialog";
import { revalidateTeamsList } from "@calcom/web/app/(use-page-wrapper)/(main-nav)/teams/actions";

interface CreateTeamDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CreateTeamDialog = (props: CreateTeamDialogProps) => {
const t = useTranslations("create-team-dialog");

  const { open, onOpenChange } = props;
  const { t } = useLocale();

  const utils = trpc.useUtils();
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent type="creation" title={t("create_new_team")} description={t("team_will_be_under_org")}>
        <CreateANewTeamForm
          inDialog
          submitLabel={t('buttons.create')}
          onCancel={() => onOpenChange(false)}
          onSuccess={async () => {
            await utils.viewer.dsync.teamGroupMapping.get.invalidate();
            await utils.viewer.teams.list.invalidate();
            revalidateTeamsList();
            onOpenChange(false);
          }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default CreateTeamDialog;
