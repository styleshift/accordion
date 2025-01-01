import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { cn } from '@styleshift/utils';
import { AccordionContentProps } from '../types';
import useAccordion from '../use-accordion';

const Content = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ className, children, ariaLabel, ...props }, ref) => {
    const {
      disabled,
      styles: { content },
    } = useAccordion();
    const label =
      ariaLabel || (typeof children === 'string' ? children : 'Content');
    return (
      <AccordionPrimitive.Content
        ref={ref}
        disabled={disabled}
        className={cn(content(), className)}
        aria-label={label}
        {...props}
      >
        <div>{children}</div>
      </AccordionPrimitive.Content>
    );
  },
);

Content.displayName = 'AccordionContent';

export default Content;
