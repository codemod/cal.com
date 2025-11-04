"use client";
import { useTranslations } from "next-intl";


import { RenderComponentWithSnippet } from "@/app/components/render";
import { useState } from "react";

import { RangeSliderPopover } from "@calcom/ui/components/form";

export const PopoverExample: React.FC = () => {
const t = useTranslations("ui-playground-range-slider-popover");

  const [defaultRange, setDefaultRange] = useState([15, 30]);
  const [customRange, setCustomRange] = useState([5, 20]);
  const [largeRange, setLargeRange] = useState([0, 100]);

  return (
    <RenderComponentWithSnippet>
      <div className="space-y-6 md:w-80">
        <div className="space-y-2">
          <h3 className="text-emphasis text-sm font-medium">{t('examples.default-range-heading')}</h3>
          <RangeSliderPopover
            triggerText={t('triggers.total-time')}
            value={defaultRange}
            onChange={setDefaultRange}
            min={0}
            max={48}
            badgeVariant="default"
            inputSuffix="mins"
          />
        </div>

        <div className="space-y-2">
          <h3 className="text-emphasis text-sm font-medium">{t('examples.custom-range-success-heading')}</h3>
          <RangeSliderPopover
            triggerText={t('triggers.meeting-duration')}
            value={customRange}
            onChange={setCustomRange}
            min={5}
            max={20}
            badgeVariant="success"
          />
        </div>

        <div className="space-y-2">
          <h3 className="text-emphasis text-sm font-medium">{t('examples.large-range-warning-heading')}</h3>
          <RangeSliderPopover
            triggerText={t('triggers.extended-duration')}
            value={largeRange}
            onChange={setLargeRange}
            min={0}
            max={100}
            step={5}
            badgeVariant="warning"
          />
        </div>

        <div className="mt-4">
          <h4 className="text-default text-sm font-medium">{t('results.selected-values-label')}</h4>
          <pre className="text-emphasis bg-subtle mt-2 rounded-md p-4 text-sm">
            {JSON.stringify(
              {
                defaultRange,
                customRange,
                largeRange,
              },
              null,
              2
            )}
          </pre>
        </div>
      </div>
    </RenderComponentWithSnippet>
  );
};
