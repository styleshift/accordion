import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import styles from './Accordion.styles';
import { AccordionProps } from './types';
import { AccordionContext } from './use-accordion';
import AccordionItem from './Accordion.Item';
import AccordionTrigger from './Accordion.Trigger';
import AccordionContent from './Accordion.Content';
import { twMerge } from 'tailwind-merge';

const AccordionRoot = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Root>,
  AccordionProps
>(
  (
    {
      className,
      ariaLabel = 'Accordion',
      disabled = false,
      transitions = true,
      collapsible = true,
      separators = true,
      multiple = false,
      unstyled = false,
      border = false,
      defaultValue,
      value,
      ...props
    },
    ref,
  ) => {
    const { root } = styles({
      disabled,
      transitions,
      collapsible,
      multiple,
      unstyled,
      separators,
      border,
    });

    const commonProps = {
      ref,
      disabled,
      className: twMerge(root({ border }), className),
      'aria-label': ariaLabel,
      role: 'region',
    };

    return (
      <AccordionContext.Provider
        value={{
          disabled,
          collapsible,
          multiple,
          border,
          transitions,
          unstyled,
          separators,
        }}
      >
        {multiple ? (
          <AccordionPrimitive.Root
            {...props}
            type="multiple"
            value={value as string[]}
            defaultValue={defaultValue as string[]}
            {...commonProps}
          />
        ) : (
          <AccordionPrimitive.Root
            {...props}
            type="single"
            value={value as string}
            defaultValue={defaultValue as string}
            collapsible={collapsible}
            {...commonProps}
          />
        )}
      </AccordionContext.Provider>
    );
  },
);

AccordionRoot.displayName = 'Accordion';

const Accordion = Object.assign(AccordionRoot, {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
});

export default Accordion;
