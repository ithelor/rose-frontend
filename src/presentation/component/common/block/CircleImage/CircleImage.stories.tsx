import type { Decorator, Meta, StoryFn, StoryObj } from '@storybook/react';
import CircleImage from './index';

const LayoutDecorator: Decorator = (Story: StoryFn) => (
    <div className="w-12">
        <Story />
    </div>
);

const meta: Meta<typeof CircleImage> = {
    title: 'common/block/CircleImage',
    component: CircleImage,
    decorators: [LayoutDecorator],
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CircleImage>;

export const Default: Story = {
    args: {
        alt: '',
        src: 'https://via.assets.so/img.jpg?w=48&h=48',
        size: 48,
    },
};
