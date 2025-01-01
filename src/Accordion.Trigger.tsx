import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { AccordionTriggerProps } from './types';
import useAccordion from './use-accordion';
import { cn } from 'tailwind-variants';

const AccordionTrigger = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(({ className, children, ariaLabel, asChild = false, ...props }, ref) => {
  const {
    disabled,
    styles: { trigger, chevron },
  } = useAccordion();
  const label =
    ariaLabel || (typeof children === 'string' ? children : 'Trigger');

  const childrenWrapper = asChild ? (
    children
  ) : (
    <div className="flex-1">{children}</div>
  );

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        aria-label={label}
        className={cn(trigger(), className).toString()}
        disabled={disabled}
        {...props}
      >
        {childrenWrapper}
        <ChevronDown
          className={chevron()}
          aria-hidden="true"
          role="presentation"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});

AccordionTrigger.displayName = 'AccordionTrigger';
export default AccordionTrigger;
