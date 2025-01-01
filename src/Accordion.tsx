import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { accordion } from './styles';
import { AccordionProps } from './types';
import { AccordionContext } from './use-accordion';
import { cn } from '@styleshift/utils';
import AccordionItem from './Accordion.Item';
import AccordionTrigger from './Accordion.Trigger';
import AccordionContent from './Accordion.Content';

const AccordionRoot = ({
  className,
  ariaLabel,
  disabled,
  transitions,
  collapsible,
  separators,
  multiple,
  unstyled,
  ...props
}: AccordionProps) => {
  const { root } = accordion({
    disabled,
    transitions,
    collapsible,
    multiple,
    unstyled,
    separators,
  });

  return (
    <AccordionContext.Provider
      value={{
        disabled,
        collapsible,
        multiple,
        transitions,
        unstyled,
        separators,
      }}
    >
      {multiple ? (
        <AccordionPrimitive.Root
          {...(props as Omit<typeof props, 'defaultValue'>)}
          type="multiple"
          defaultValue={props.defaultValue ? [props.defaultValue] : undefined}
          disabled={disabled}
          className={cn(root(), className)}
          aria-label={ariaLabel}
          role="region"
        />
      ) : (
        <AccordionPrimitive.Root
          {...props}
          type="single"
          collapsible={collapsible}
          disabled={disabled}
          className={cn(root(), className)}
          aria-label={ariaLabel}
          role="region"
        />
      )}
    </AccordionContext.Provider>
  );
};

AccordionRoot.displayName = 'Accordion';

const Accordion = Object.assign(AccordionRoot, {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
});

export default Accordion;
