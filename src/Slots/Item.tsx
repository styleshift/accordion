import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { cn } from '../utils';
import { AccordionItemProps } from '../types';
import useAccordion from '../use-accordion';

const Item = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, value, ariaLabel, ...props }, ref) => {
    const {
      disabled,
      styles: { item },
    } = useAccordion();
    const label = ariaLabel || `Item ${value}`;
    return (
      <AccordionPrimitive.Item
        ref={ref}
        disabled={disabled}
        className={cn(item(), className)}
        value={value}
        aria-label={label}
        {...props}
      />
    );
  },
);

Item.displayName = 'AccordionItem';

export default Item;
