import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { AccordionContentProps } from './types';
import useAccordion from './use-accordion';
import { twMerge } from 'tailwind-merge';

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ className, children, asChild, ...props }, ref) => {
  const {
    transitions,
    styles: { content },
  } = useAccordion();

  return (
    <AccordionPrimitive.Content
      ref={ref}
      className={twMerge(
        content(),
        transitions && 'transition-all duration-300',
        className,
      )}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
    </AccordionPrimitive.Content>
  );
});

AccordionContent.displayName = 'AccordionContent';

export default AccordionContent;
