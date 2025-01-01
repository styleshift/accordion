import { tv } from 'tailwind-variants';

export const accordion = tv({
  slots: {
    root: '',
    item: '',
    trigger: '',
    content: '',
    chevron: '',
  },
  variants: {
    disabled: {
      true: {},
      false: {},
    },
    separators: {
      true: {},
      false: {},
    },
    transitions: {
      true: {},
      false: {},
    },
    collapsible: {
      true: {},
      false: {},
    },
    multiple: {
      true: {},
      false: {},
    },
  },
});
