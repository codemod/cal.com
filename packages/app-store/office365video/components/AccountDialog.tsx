import { useTranslations } from "next-intl";
import type { DialogProps as ControlledDialogProps } from "@calcom/features/components/controlled-dialog";
import { Dialog } from "@calcom/features/components/controlled-dialog";
import { Button } from "@calcom/ui/components/button";
import { DialogContent, DialogFooter, DialogClose } from "@calcom/ui/components/dialog";

export function AccountDialog(
  props: ControlledDialogProps & {
    handleSubmit: () => void;
  }
) {
const t = useTranslations("office365-account-dialog");

  return (
    <Dialog name="Account check" open={props.open} onOpenChange={props.onOpenChange}>
      <DialogContent
        type="creation"
        title="Connecting with MS Teams requires a work/school Microsoft account."
        description="If you continue with a personal account you will receive an error">
        <DialogFooter showDivider className="mt-6">
          <>
            <DialogClose
              type="button"
              color="secondary"
              tabIndex={-1}
              onClick={() => {
                props.onOpenChange?.(false);
              }}>{t('buttons.cancel')}</DialogClose>

            <Button type="button" onClick={props.handleSubmit}>{t('buttons.continue')}</Button>
          </>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AccountDialog;
