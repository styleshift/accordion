import { tv } from 'tailwind-variants';

const styles = tv({
  slots: {
    root: '',
    item: '',
    trigger: '',
    content: '',
    chevron: '',
  },
  defaultVariants: {
    disabled: false,
    transitions: true,
    collapsible: true,
    separators: true,
    unstyled: false,
    border: true,
  },
  variants: {
    unstyled: {
      false: {
        root: ['border rounded-lg '],
        item: [' border-b group last:border-b-0'],
        trigger: [
          'px-4 py-3 rounded  flex text-left items-center justify-start w-full',
          'hover:underline flex-1 ',
          'focus-visible:outline-none focus-visible:ring-2',
          'focus-visible:ring-ring focus-visible:ring-offset-2',
          'disabled:cursor-not-allowed disabled:opacity-50',
          '[&[data-state=open]>svg]:rotate-180',
        ],
        content: ['px-4 pb-4'],
        chevron: [
          'duration-300 size-4 opacity-50 group-hover:opacity-100 shrink-0',
        ],
      },
    },
    disabled: {
      true: {
        root: 'opacity-50',
        trigger: 'cursor-not-allowed',
      },
      false: {
        root: 'opacity-100',
        trigger: 'cursor-pointer',
      },
    },
    separators: {
      true: {
        item: 'border-border',
      },
      false: {
        item: ' border-transparent',
      },
    },
    transitions: {
      true: {
        chevron: 'transition-transform duration-200 ease-out',
        trigger: 'transition-colors duration-200',
        content: [
          'transition-all duration-200 ease-out',
          'data-[state=closed]:animate-accordion-up',
          'data-[state=open]:animate-accordion-down',
          'overflow-hidden',
        ],
      },
      false: {
        chevron: 'transition-none',
        trigger: 'transition-none',
        content: 'transition-none',
      },
    },
    border: {
      false: {
        root: 'border-transparent',
      },
      true: {
        root: 'border-border',
      },
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

export default styles;
