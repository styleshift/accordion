import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Accordion from './Accordion';
import '@testing-library/jest-dom';
import { AccordionProps } from './types';
describe('Accordion', () => {
  const DEFAULT_PROPS = {
    type: 'single' as const,
    collapsible: true,
  };

  const SINGLE_ITEM = (
    <Accordion.Item value="item-1">
      <Accordion.Trigger data-testid="trigger">First Section</Accordion.Trigger>
      <Accordion.Content data-testid="content">First Content</Accordion.Content>
    </Accordion.Item>
  );

  const TestAccordion: React.FC<AccordionProps> = (props) => (
    <Accordion {...props} />
  );

  it('renders accordion items correctly', () => {
    render(<TestAccordion {...DEFAULT_PROPS}>{SINGLE_ITEM}</TestAccordion>);

    expect(screen.getByText('First Section')).toBeInTheDocument();
  });

  it('allows multiple items to be open in multiple mode', () => {
    render(
      <TestAccordion multiple>
        <Accordion.Item value="item-1">
          <Accordion.Trigger>First Section</Accordion.Trigger>
          <Accordion.Content>First Content</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger>Second Section</Accordion.Trigger>
          <Accordion.Content>Second Content</Accordion.Content>
        </Accordion.Item>
      </TestAccordion>,
    );

    const firstTrigger = screen.getByText('First Section');
    const secondTrigger = screen.getByText('Second Section');

    fireEvent.click(firstTrigger);
    fireEvent.click(secondTrigger);

    expect(screen.getByText('First Content')).toBeVisible();
    expect(screen.getByText('Second Content')).toBeVisible();
  });

  it('has correct ARIA attributes', () => {
    render(
      <TestAccordion collapsible ariaLabel="Test Accordion">
        <Accordion.Item value="item-1" ariaLabel="First section">
          <Accordion.Trigger ariaLabel="Toggle first section">
            First Section
          </Accordion.Trigger>
          <Accordion.Content ariaLabel="First section content">
            First Content
          </Accordion.Content>
        </Accordion.Item>
      </TestAccordion>,
    );

    expect(screen.getByRole('region')).toBeInTheDocument();
    expect(screen.getByLabelText('Test Accordion')).toBeInTheDocument();
    expect(screen.getByLabelText('First section')).toBeInTheDocument();
    expect(screen.getByLabelText('Toggle first section')).toBeInTheDocument();
  });

  it('supports hiding chevron icon', () => {
    render(
      <TestAccordion>
        <Accordion.Item value="item-1">
          <Accordion.Trigger hideChevron data-testid="trigger">
            First Section
          </Accordion.Trigger>
          <Accordion.Content>First Content</Accordion.Content>
        </Accordion.Item>
      </TestAccordion>,
    );

    const trigger = screen.getByTestId('trigger');
    expect(trigger.querySelector('svg')).not.toBeInTheDocument();
  });

  it('provides correct default aria-labels', () => {
    render(
      <TestAccordion>
        <Accordion.Item value="test-value">
          <Accordion.Trigger data-testid="trigger">
            Custom Section
          </Accordion.Trigger>
          <Accordion.Content data-testid="content">
            Custom Content
          </Accordion.Content>
        </Accordion.Item>
      </TestAccordion>,
    );

    expect(screen.getByRole('region')).toBeInTheDocument();
    expect(screen.getByTestId('trigger')).toHaveAttribute(
      'aria-label',
      'Custom Section',
    );
    expect(screen.getByTestId('content')).toHaveAttribute(
      'aria-label',
      'Custom Content',
    );
  });
});
