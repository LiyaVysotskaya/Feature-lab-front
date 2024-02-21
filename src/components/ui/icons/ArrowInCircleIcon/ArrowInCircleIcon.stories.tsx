import type { Meta, StoryObj } from '@storybook/react';
import { ArrowInCircleIcon } from './ArrowInCircleIcon';

const meta: Meta<typeof ArrowInCircleIcon> = {
  title: 'ui/icons/ArrowInCircleIcon',
  component: ArrowInCircleIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArrowInCircleIcon>;

export const Basic: Story = {
  args: {},
};
