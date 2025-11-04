"use client";
import { useTranslations } from "next-intl";


import { RenderComponentWithSnippet } from "@/app/components/render";
import { useState } from "react";

import { Button } from "@calcom/ui/components/button";
import { Dialog, DialogClose, DialogContent, DialogFooter } from "@calcom/ui/components/dialog";

export const ConfirmationExample: React.FC = () => {
const t = useTranslations("dialog-confirmation-demo");

  const [open, setOpen] = useState(false);

  return (
    <RenderComponentWithSnippet>
      <div className="space-y-2">
        <Button color="destructive" onClick={() => setOpen(true)}>{t('buttons.delete-item')}</Button>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent
            title="Confirm Deletion"
            description="Are you sure you want to delete this item? This action cannot be undone.">
            <DialogFooter>
              <DialogClose />
              <Button
                color="destructive"
                onClick={() => {
                  setOpen(false);
                }}>{t('buttons.confirm-delete')}</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </RenderComponentWithSnippet>
  );
};
