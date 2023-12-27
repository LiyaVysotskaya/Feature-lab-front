import type { Meta, StoryObj } from '@storybook/react';
import { SkipForwardIcon } from './SkipForwardIcon';

const meta: Meta<typeof SkipForwardIcon> = {
  title: 'ui/icons/SkipForwardIcon',
  component: SkipForwardIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SkipForwardIcon>;

export const Basic: Story = {
  args: {},
};

export const Filled: Story = {
  args: {
    filled: true,
  },
};
