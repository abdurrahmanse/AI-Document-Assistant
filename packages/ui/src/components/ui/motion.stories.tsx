import type { Meta, StoryObj } from '@storybook/react';
import { FadeIn, FadeInView } from './motion';

const meta = {
  title: 'UI/Motion',
  component: FadeIn,
  tags: ['autodocs'],
  argTypes: {
    duration: { control: 'number' },
    delay: { control: 'number' },
    yOffset: { control: 'number' },
  },
} satisfies Meta<typeof FadeIn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultFadeIn: Story = {
  args: {
    children: <div className="p-8 bg-primary text-primary-foreground rounded-lg shadow-md text-center">Fading In Content</div>,
    duration: 0.5,
    yOffset: 20,
  },
};

export const FadeInViewStory: StoryObj<typeof FadeInView> = {
  render: (args) => (
    <div className="h-[200vh] pt-[100vh]">
      <FadeInView {...args}>
        <div className="p-8 bg-secondary text-secondary-foreground rounded-lg shadow-md text-center">
          Scroll down to see me fade in!
        </div>
      </FadeInView>
    </div>
  ),
  args: {
    duration: 0.5,
    yOffset: 50,
  }
};
