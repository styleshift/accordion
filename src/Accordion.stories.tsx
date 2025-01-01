import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Accordion from './Accordion';

// Define content data separately
const ACCORDION_ITEMS = [
  {
    value: 'item-1',
    trigger: 'What has keys but no locks?',
    content:
      'A piano! It has many keys but never needs a lock to play its melody.',
  },
  {
    value: 'item-2',
    trigger: 'What gets wetter as it dries?',
    content: 'A towel! The more it dries things, the wetter it becomes.',
  },
  {
    value: 'item-3',
    trigger: 'What has cities but no houses?',
    content:
      "A map! It shows many cities but you won't find any houses to live in.",
  },
] as const;

const meta = {
  title: 'Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A vertically stacked set of interactive headings that each reveal a section of content.',
      },
    },
  },
  argTypes: {
    unstyled: {
      control: 'boolean',
      description: 'When false, no styles will be applied',
      defaultValue: false,
    },
    disabled: {
      control: 'boolean',
      description:
        'When true, prevents the user from interacting with the accordion',
    },
    collapsible: {
      control: 'boolean',
      description:
        'When true, prevents the user from collapsing an item, this only works on "single" type.',
    },
    multiple: {
      control: 'boolean',
      description: 'When true, multiple items can be opened simultaneously',
    },
    transitions: {
      control: 'boolean',
      description:
        'When false, does not animate or transitions when collapsing or expanding and item.',
    },
    className: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

const AccordionTemplate = (items: typeof ACCORDION_ITEMS) => (
  <div>
    {items.map((item) => (
      <Accordion.Item key={item.value} value={item.value}>
        <Accordion.Trigger>{item.trigger}</Accordion.Trigger>
        <Accordion.Content>{item.content}</Accordion.Content>
      </Accordion.Item>
    ))}
  </div>
);

export const Default: Story = {
  args: {
    className: 'w-[350px]',
    children: AccordionTemplate(ACCORDION_ITEMS),
    disabled: false,
    multiple: true,
    collapsible: true,
    transitions: true,
    unstyled: false,
    defaultValue: 'item-1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The default accordion configuration with multiple selection, transitions, and collapsible items enabled.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'A disabled accordion where user interactions are prevented.',
      },
    },
  },
};

export const SingleSelection: Story = {
  args: {
    ...Default.args,
    multiple: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'An accordion that only allows one item to be open at a time.',
      },
    },
  },
};

export const NonCollapsible: Story = {
  args: {
    ...Default.args,
    multiple: false,
    collapsible: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'A single-selection accordion where the open item cannot be collapsed.',
      },
    },
  },
};

export const WithoutTransitions: Story = {
  args: {
    ...Default.args,
    transitions: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'An accordion without animation transitions when expanding or collapsing items.',
      },
    },
  },
};

export const WithoutSeparators: Story = {
  args: {
    separators: false,
    ...Default.args,
  },
  parameters: {
    docs: {
      description: {
        story:
          'An accordion with visual separators between items using border utilities.',
      },
    },
  },
};

export const Unstyled: Story = {
  args: {
    ...Default.args,
    unstyled: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'A bare accordion without any default styling applied, useful for custom styling implementations.',
      },
    },
  },
};
