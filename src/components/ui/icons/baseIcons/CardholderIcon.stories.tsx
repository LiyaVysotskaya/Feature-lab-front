import type { Meta, StoryObj } from '@storybook/react';
import { CardholderIcon } from './CardholderIcon';

const meta: Meta<typeof CardholderIcon> = {
  title: 'ui/icons/CardholderIcon',
  component: CardholderIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CardholderIcon>;

export const Basic: Story = {
  args: {},
};

export const Filled: Story = {
  args: {
    filled: true,
  },
};
