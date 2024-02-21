import type { Meta, StoryObj } from '@storybook/react';
import { WorkStageItem } from './WorkStageItem';

const meta: Meta<typeof WorkStageItem> = {
  title: 'components/WorkStageItem',
  component: WorkStageItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof WorkStageItem>;

const stage = {
  title: 'ПРОЕКТИРОВАЛИ',
  text1: `Описание этого этапа, можно не очень кратко, но важно, чтобы это было понятно и читаемо.
            Может, какие‑то графики/циферки ещё, люди это любят, даже если не понимают.`,
  text2: `Вот 2 столбика примерно по 5 строчек — и для пояснения достаточно, и чтобы никто не растёкся мыслею по древу…`,
};

export const Normal: Story = {
  args: {
    stage,
    stageNum: 1,
  },
};
