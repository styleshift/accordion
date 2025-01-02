'use client';

import { createContext, useContext } from 'react';
import styles from './Accordion.styles';
import { AccordionContextProps } from './types';

export const AccordionContext = createContext<
  AccordionContextProps | undefined
>(undefined);

interface UseAccordionReturn extends AccordionContextProps {
  styles: ReturnType<typeof styles>;
}

export default function useAccordion(): UseAccordionReturn {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error('useAccordion must be used within an AccordionProvider');
  }

  return {
    ...context,
    styles: styles(context),
  };
}
