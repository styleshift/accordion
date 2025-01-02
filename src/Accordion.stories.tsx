import * as React from 'react';
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
  // @ts-ignore
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Expandable content sections with keyboard navigation and ARIA support.',
      },
    },
  },
  argTypes: {
    // @ts-ignore
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables all interactions',
      table: {
        defaultValue: { summary: false },
      },
    },
    separators: {
      control: { type: 'boolean' },
      description: 'Shows item dividers',
      defaultValue: true,
      table: {
        defaultValue: { summary: true },
      },
    },
    border: {
      control: { type: 'boolean' },
      description: 'Shows outer border',
      defaultValue: false,
      table: {
        defaultValue: { summary: false },
      },
    },
    collapsible: {
      control: { type: 'boolean' },
      description: 'Allows collapsing the last open item (single mode)',
      defaultValue: true,
      table: {
        defaultValue: { summary: true },
      },
    },
    multiple: {
      control: { type: 'boolean' },
      description: 'Allows multiple open items',
      defaultValue: false,
      table: {
        defaultValue: { summary: false },
      },
    },
    transitions: {
      control: { type: 'boolean' },
      description: 'Enables animations',
      defaultValue: true,
      table: {
        defaultValue: { summary: true },
      },
    },
    unstyled: {
      control: { type: 'boolean' },
      description: 'Removes default styling',
      defaultValue: false,
      table: {
        defaultValue: { summary: false },
      },
    },
    className: {
      table: { disable: true },
    },
    children: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

const AccordionTemplate = (
  items: typeof ACCORDION_ITEMS,
  disabledItems?: string[],
) => (
  <div>
    {items.map((item) => (
      <Accordion.Item
        key={item.value}
        value={item.value}
        disabled={disabledItems?.includes(item.value)}
      >
        <Accordion.Trigger>{item.trigger}</Accordion.Trigger>
        <Accordion.Content>{item.content}</Accordion.Content>
      </Accordion.Item>
    ))}
  </div>
);

export const Default: Story = {
  args: {
    children: AccordionTemplate(ACCORDION_ITEMS),
  },
  parameters: {
    docs: {
      description: {
        story: 'Default configuration with multiple open items and animations.',
      },
    },
  },
};

export const WithBorder: Story = {
  args: {
    ...Default.args,
    border: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows outer border.',
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
        story: 'No dividers between items.',
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
        story: `A fully disabled accordion state`,
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
        story: 'Only one item can be open at a time.',
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
        story: 'One item must always remain open.',
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
        story: 'Instant state changes without animations.',
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
        story: 'Base component without styling.',
      },
    },
  },
};
