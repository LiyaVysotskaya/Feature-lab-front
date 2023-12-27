import type { Meta, StoryObj } from '@storybook/react';
import { FolderOpenIcon } from './FolderOpenIcon';

const meta: Meta<typeof FolderOpenIcon> = {
  title: 'ui/icons/FolderOpenIcon',
  component: FolderOpenIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FolderOpenIcon>;

export const Basic: Story = {
  args: {},
};

export const Filled: Story = {
  args: {
    filled: true,
  },
};
