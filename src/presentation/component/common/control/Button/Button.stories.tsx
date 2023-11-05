import { CaretDown, SquaresFour } from '@phosphor-icons/react';
import type { Meta, StoryObj } from '@storybook/react';
import Button from './index';

const meta: Meta<typeof Button> = {
    title: 'common/control/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'radio',
            options: ['small', 'medium', 'large'],
            table: {
                defaultValue: { summary: 'small' },
            },
        },
        color: {
            control: 'radio',
            options: ['primary', 'secondary', 'outline', 'text'],
            table: {
                defaultValue: { summary: 'primary' },
            },
        },
        disabled: {
            control: 'boolean',
        },
        startAdornment: {
            control: 'none',
        },
        endAdornment: {
            control: 'none',
        },
    },
    args: {
        size: 'small',
        color: 'primary',
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

const COMMON_PROPS: Story['args'] = {
    children: 'Button',
};

export const Regular: Story = {
    args: {
        ...COMMON_PROPS,
        startAdornment: SquaresFour,
        endAdornment: CaretDown,
    },
};

export const Secondary: Story = {
    args: {
        ...COMMON_PROPS,
        color: 'secondary',
    },
};

export const Outlined: Story = {
    args: {
        ...COMMON_PROPS,
        color: 'outline',
    },
};

export const Text: Story = {
    args: {
        ...COMMON_PROPS,
        color: 'text',
    },
};

export const WithStartAdornment: Story = {
    args: {
        ...COMMON_PROPS,
        startAdornment: SquaresFour,
    },
};

export const WithEndAdornment: Story = {
    args: {
        ...COMMON_PROPS,
        endAdornment: CaretDown,
    },
};

export const WithAdornments: Story = {
    args: {
        ...COMMON_PROPS,
        startAdornment: SquaresFour,
        endAdornment: CaretDown,
    },
};
