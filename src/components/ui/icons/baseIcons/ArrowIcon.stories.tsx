import type { Meta, StoryObj } from '@storybook/react';
import { ArrowIcon } from './ArrowIcon';

const meta: Meta<typeof ArrowIcon> = {
  title: 'ui/icons/ArrowIcon',
  component: ArrowIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArrowIcon>;

export const Basic: Story = {
  args: {},
};

export const Filled: Story = {
  args: {
    filled: true,
  },
};

export const FilledReverse: Story = {
  args: {
    filled: true,
  },
};
