'use client';

import { useContext } from 'react';
import { accordion } from './Accordion.styles';

import { createContext } from 'react';
import { AccordionContextProps } from './types';

export const AccordionContext = createContext<
  AccordionContextProps | undefined
>(undefined);

export default function useAccordion() {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error('useAccordion must be used within an AccordionProvider');
  }

  return {
    ...context,
    styles: accordion(context),
  };
}
