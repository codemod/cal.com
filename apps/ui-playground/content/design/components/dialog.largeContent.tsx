"use client";
import { useTranslations } from "next-intl";


import { RenderComponentWithSnippet } from "@/app/components/render";
import { useState } from "react";

import { Button } from "@calcom/ui/components/button";
import { Dialog, DialogClose, DialogContent, DialogFooter } from "@calcom/ui/components/dialog";

export const LargeContentExample: React.FC = () => {
const t = useTranslations("dialog-large-content-example");

  const [open, setOpen] = useState(false);

  return (
    <RenderComponentWithSnippet>
      <div className="space-y-2">
        <Button color="secondary" onClick={() => setOpen(true)}>{t('buttons.open-dialog')}</Button>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent
            title="Terms and Conditions"
            description="Please review our terms and conditions carefully"
            enableOverflow>
            <div className="space-y-6">
              {Array.from({ length: 5 }).map((_, i) =>  {
const t = useTranslations("dialog-large-content-example");

return (
                <div key={i} className="space-y-4">
                  <h3 className="text-emphasis font-semibold">{t('content.section-heading', { "i": i })}</h3>
                  <p className="text-default text-sm">{t('content.lorem-paragraph-one')}</p>
                  <p className="text-default text-sm">{t('content.lorem-paragraph-two')}</p>
                  {i === 2 && (
                    <div className="border-subtle rounded-lg border p-4 shadow-sm">
                      <h4 className="text-emphasis mb-2 font-medium">{t('notices.important-heading')}</h4>
                      <p className="text-default text-sm">{t('notices.highlighted-description')}</p>
                    </div>
                  )}
                </div>
              )
})}
            </div>
            <DialogFooter>
              <DialogClose>{t('buttons.decline')}</DialogClose>
              <Button>{t('buttons.accept-terms')}</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </RenderComponentWithSnippet>
  );
};
