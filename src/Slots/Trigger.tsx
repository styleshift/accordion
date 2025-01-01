import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { cn } from '../utils';
import { AccordionTriggerProps } from '../types';
import useAccordion from '../use-accordion';

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(({ className, children, ariaLabel, hideChevron, ...props }, ref) => {
  const {
    disabled,
    styles: { trigger, chevron },
  } = useAccordion();
  const label =
    ariaLabel || (typeof children === 'string' ? children : 'Trigger');
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        aria-label={label}
        className={cn(trigger(), className)}
        disabled={disabled}
        {...props}
      >
        <div>{children}</div>
        {!hideChevron && (
          <ChevronDown
            className={chevron()}
            aria-hidden="true"
            role="presentation"
          />
        )}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});

AccordionTrigger.displayName = 'AccordionTrigger';
export default AccordionTrigger;
