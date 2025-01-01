import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { AccordionItemProps } from './types';
import useAccordion from './use-accordion';
import { cn } from 'tailwind-variants';

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, value, ariaLabel, ...props }, ref) => {
    const {
      disabled: globalDisabled,
      styles: { item },
    } = useAccordion();

    const label = ariaLabel || `Item ${value}`;
    return (
      <AccordionPrimitive.Item
        ref={ref}
        disabled={globalDisabled}
        className={cn(item(), className).toString()}
        value={value}
        aria-label={label}
        {...props}
      />
    );
  },
);

AccordionItem.displayName = 'AccordionItem';

export default AccordionItem;
