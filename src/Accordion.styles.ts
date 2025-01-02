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
  },
  variants: {
    unstyled: {
      false: {
        root: [''],
        item: ['py-2 border-b group '],
        trigger: [
          'p-2 rounded font-medium text-sm flex text-left items-center justify-start w-full',
          'hover:underline flex-1 ',
          'focus-visible:outline-none focus-visible:ring-2',
          'focus-visible:ring-ring focus-visible:ring-offset-2',
          'disabled:cursor-not-allowed disabled:opacity-50',
          '[&[data-state=open]>svg]:rotate-180',
        ],
        content: ['px-2 pt-2 font-light text-sm '],
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
        chevron: 'transition-all duration-300',
        trigger: 'transition-all duration-300 ',
        content:
          'transition-all duration-300 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
      },
      false: {
        chevron: 'transition-none',
        trigger: 'transition-none',
        content: 'transition-none',
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
