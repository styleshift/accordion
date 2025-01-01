import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { AccordionContentProps } from './types';
import useAccordion from './use-accordion';
import { cn } from 'tailwind-variants';

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ className, children, ariaLabel, asChild, ...props }, ref) => {
  const {
    disabled,
    styles: { content },
  } = useAccordion();
  const label =
    ariaLabel || (typeof children === 'string' ? children : 'AccordionContent');

  // If asChild is true, render children directly
  const Wrapper = asChild ? React.Fragment : 'div';

  return (
    <AccordionPrimitive.Content
      ref={ref}
      className={cn(content(), className).toString()}
      aria-label={label}
      {...props}
    >
      <Wrapper>{children}</Wrapper>
    </AccordionPrimitive.Content>
  );
});

AccordionContent.displayName = 'AccordionContent';

export default AccordionContent;
