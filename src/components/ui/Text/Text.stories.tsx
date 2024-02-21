import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'ui/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const GERMANO_1: Story = {
  args: {
    children: 'ФИЧЛАБ',
    view: 'germano-1',
  },
};

export const GERMANO_2: Story = {
  args: {
    children: 'ФИЧЛАБ',
    view: 'germano-2',
  },
};

export const GERMANO_3: Story = {
  args: {
    children: 'ФИЧЛАБ',
    view: 'germano-3',
  },
};

export const GERMANO_4: Story = {
  args: {
    children: 'ФИЧЛАБ',
    view: 'germano-4',
  },
};

export const MOLOT_1: Story = {
  args: {
    children: 'ФИЧЛАБ',
    view: 'molot-1',
  },
};

export const MOLOT_2: Story = {
  args: {
    children: 'ФИЧЛАБ',
    view: 'molot-2',
  },
};

export const MOLOT_3: Story = {
  args: {
    children: 'ФИЧЛАБ',
    view: 'molot-3',
  },
};

export const MOLOT_4: Story = {
  args: {
    children: 'ФИЧЛАБ',
    view: 'molot-4',
  },
};

export const DEFAULT_GOST_1: Story = {
  args: {
    children: 'Таким образом постоянный',
  },
};

export const GOST_2: Story = {
  args: {
    children: 'Таким образом постоянный',
    view: 'gost-2',
  },
};

export const GOST_3: Story = {
  args: {
    children: 'Таким образом постоянный',
    view: 'gost-3',
  },
};

export const MOLOT_1_OUTLINED: Story = {
  args: {
    children: 'ФИЧЛАБ',
    view: 'molot-1',
    outlined: true,
  },
};

export const GERMANO_2_WITH_LINE: Story = {
  args: {
    children: 'ФИЧЛАБ',
    view: 'germano-2',
    line: true,
  },
};

export const GOST_1_WITH_LINE: Story = {
  args: {
    children: 'Таким образом постоянный',
    view: 'gost-1',
    line: true,
  },
};
