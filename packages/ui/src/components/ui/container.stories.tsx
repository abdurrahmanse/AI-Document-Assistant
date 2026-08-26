import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './container';

const meta = {
  title: 'UI/Container',
  component: Container,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['default', 'narrow', 'prose', 'compact', 'form', 'fluid', 'dashboard'],
    },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div className="bg-muted p-4 rounded-md text-center">Container Content</div>,
    size: 'default',
  },
};

export const FormSize: Story = {
  args: {
    children: <div className="bg-muted p-4 rounded-md text-center">Form Container (max-w-md)</div>,
    size: 'form',
  },
};

export const Narrow: Story = {
  args: {
    children: <div className="bg-muted p-4 rounded-md text-center">Narrow Container</div>,
    size: 'narrow',
  },
};
