import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { AccordionTriggerProps } from './types';
import useAccordion from './use-accordion';
import { twMerge } from 'tailwind-merge';
const AccordionTrigger = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(({ className, children, ariaLabel, asChild = false, ...props }, ref) => {
  const {
    disabled,
    styles: { trigger, chevron },
  } = useAccordion();

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        aria-label={ariaLabel}
        className={twMerge(trigger(), className)}
        disabled={disabled}
        {...props}
      >
        {asChild ? children : <div className="flex-1">{children}</div>}
        <ChevronDown
          className={twMerge(chevron(), '[&[data-state=open]>svg]:rotate-180')}
          aria-hidden="true"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});

AccordionTrigger.displayName = 'AccordionTrigger';
export default AccordionTrigger;
