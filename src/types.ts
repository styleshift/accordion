import * as React from 'react';
import type { VariantProps } from 'tailwind-variants';
import { accordion } from './Accordion.styles';

type AccordionStyles = ReturnType<typeof accordion>;

export type AccordionRootVariants = VariantProps<AccordionStyles['root']>;
export type AccordionItemVariants = VariantProps<AccordionStyles['item']>;
export type AccordionTriggerVariants = VariantProps<AccordionStyles['trigger']>;
export type AccordionContentVariants = VariantProps<AccordionStyles['content']>;

export type AccordionVariant = 'default' | 'unstyled';

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
  AccordionRootVariants & {
    collapsible?: boolean;
    variant?: AccordionVariant;
    disabled?: boolean;
    transitions?: boolean;
    defaultValue?: string;
  };

export type AccordionItemProps = BaseProps &
  AccordionItemVariants & {
    value: string;
  };

export type AccordionTriggerProps = BaseProps &
  AccordionTriggerVariants & {
    hideChevron?: boolean;
  };

export type AccordionContentProps = BaseProps & AccordionContentVariants;

export type AccordionSlots = {
  base?: string | string[];
  item?: string | string[];
  trigger?: string | string[];
  content?: string | string[];
  chevron?: string | string[];
};

export type AccordionTheme = {
  slots: AccordionSlots;
  variants?: Record<string, Record<string, string | string[]>>;
  defaultVariants?: Record<string, string>;
  extend?: AccordionTheme;
};
