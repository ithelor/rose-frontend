import { SquaresFour } from '@phosphor-icons/react/dist/ssr';
import type { Meta, StoryObj } from '@storybook/react';
import IconButton from './index';

const meta: Meta<typeof IconButton> = {
    title: 'common/control/IconButton',
    component: IconButton,
    tags: ['autodocs'],
    argTypes: {
        icon: {
            control: 'none',
        },
        color: {
            table: {
                defaultValue: { summary: 'neutral' },
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof IconButton>;

const COMMON_PROPS: Story['args'] = {
    icon: SquaresFour,
};

export const Regular: Story = {
    args: {
        ...COMMON_PROPS,
    },
};

export const Pale: Story = {
    args: {
        ...COMMON_PROPS,
        color: 'pale',
    },
};
