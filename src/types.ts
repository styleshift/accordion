import * as React from 'react';
import type { VariantProps } from 'tailwind-variants';
import styles from './styles';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

type AccordionStyles = ReturnType<typeof styles>;

export type AccordionRootVariants = VariantProps<AccordionStyles['root']>;
export type AccordionItemVariants = VariantProps<AccordionStyles['item']>;
export type AccordionTriggerVariants = VariantProps<AccordionStyles['trigger']>;
export type AccordionContentVariants = VariantProps<AccordionStyles['content']>;

export type AccordionContextProps = {
  unstyled?: boolean;
  collapsible?: boolean;
  disabled?: boolean;
  transitions?: boolean;
  multiple?: boolean;
  separators?: boolean;
  defaultValue?: string;
};

export type BaseProps = {
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
};

export type AccordionProps = BaseProps &
  AccordionRootVariants &
  AccordionContextProps;

export type AccordionItemProps = BaseProps &
  AccordionItemVariants & {
    value: string;
  };

export interface AccordionTriggerProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
  ariaLabel?: string;
  asChild?: boolean;
}

export interface AccordionContentProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> {
  ariaLabel?: string;
  asChild?: boolean;
}
