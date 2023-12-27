import type { Meta, StoryObj } from '@storybook/react';
import { GearSixIcon } from './GearSixIcon';

const meta: Meta<typeof GearSixIcon> = {
  title: 'ui/icons/GearSixIcon',
  component: GearSixIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof GearSixIcon>;

export const Basic: Story = {
  args: {},
};

export const Filled: Story = {
  args: {
    filled: true,
  },
};
