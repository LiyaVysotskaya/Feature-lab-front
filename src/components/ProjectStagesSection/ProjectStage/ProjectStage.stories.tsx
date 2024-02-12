import type { Meta, StoryObj } from '@storybook/react';
import { ProjectStage } from './ProjectStage';

const meta: Meta<typeof ProjectStage> = {
  title: 'components/Stage',
  component: ProjectStage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProjectStage>;

export const Default: Story = {
  args: {},
};

// export const Done: Story = {
//   args: {
//     done: true,
//   },
// };

// export const Now: Story = {
//   args: {
//     now: true,
//   },
// };
