import type { Meta, StoryObj } from '@storybook/react';
import { ProductStagesSection } from './ProductStagesSection';

const meta: Meta<typeof ProductStagesSection> = {
  title: 'components/WorkStages',
  component: ProductStagesSection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProductStagesSection>;

export const Normal: Story = {
  args: {},
};
