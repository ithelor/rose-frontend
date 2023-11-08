import { IconWeight, SquaresFour } from '@phosphor-icons/react';
import type { Meta, StoryObj } from '@storybook/react';
import Icon from './index';

const meta: Meta<typeof Icon> = {
    title: 'common/block/Icon',
    component: Icon,
    tags: ['autodocs'],
    argTypes: {
        weight: {
            options: ['thin', 'light', 'regular', 'bold', 'fill', 'duotone'] as IconWeight[],
            control: { type: 'radio' },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Icon>;

const COMMON_PROPS: Story['args'] = {
    icon: SquaresFour,
};

export const Regular: Story = {
    args: {
        ...COMMON_PROPS,
        weight: 'regular',
    },
};

export const Thin: Story = {
    args: {
        ...COMMON_PROPS,
        weight: 'thin',
    },
};

export const Light: Story = {
    args: {
        ...COMMON_PROPS,
        weight: 'light',
    },
};

export const Bold: Story = {
    args: {
        ...COMMON_PROPS,
        weight: 'bold',
    },
};

export const fill: Story = {
    args: {
        ...COMMON_PROPS,
        weight: 'fill',
    },
};

export const Duotone: Story = {
    args: {
        ...COMMON_PROPS,
        weight: 'duotone',
    },
};
