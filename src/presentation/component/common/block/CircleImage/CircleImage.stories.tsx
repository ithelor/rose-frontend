import type { Decorator, Meta, StoryFn, StoryObj } from '@storybook/react';
import avatar from 'presentation/image/account/avatar.jpg';
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
        src: avatar.src,
        size: 48,
    },
};
