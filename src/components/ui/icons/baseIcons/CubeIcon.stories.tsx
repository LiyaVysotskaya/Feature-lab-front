import type { Meta, StoryObj } from '@storybook/react';
import { CubeIcon } from './CubeIcon';

const meta: Meta<typeof CubeIcon> = {
  title: 'ui/icons/CubeIcon',
  component: CubeIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CubeIcon>;

export const Basic: Story = {
  args: {},
};

export const Filled: Story = {
  args: {
    filled: true,
  },
};
