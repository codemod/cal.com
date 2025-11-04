"use client";
import { useTranslations } from "next-intl";


import { RenderComponentWithSnippet } from "@/app/components/render";
import { useState } from "react";

import { Button } from "@calcom/ui/components/button";
import { Dialog, DialogClose, DialogContent, DialogFooter } from "@calcom/ui/components/dialog";

export const BasicExample: React.FC = () => {
const t = useTranslations("dialog-basic-demo");

  const [open, setOpen] = useState(false);

  return (
    <RenderComponentWithSnippet>
      <div className="space-y-2">
        <Button onClick={() => setOpen(true)}>{t('buttons.open-dialog')}</Button>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent
            title="Basic Dialog"
            description="This is a basic dialog with a title and description.">
            <p className="text-default text-sm">{t('content.description')}</p>
            <DialogFooter>
              <DialogClose />
              <Button>{t('buttons.action')}</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </RenderComponentWithSnippet>
  );
};
