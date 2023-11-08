import { HOME } from 'constant/route';
import type { Meta, StoryObj } from '@storybook/react';
import ButtonLink from './index';

const meta: Meta<typeof ButtonLink> = {
    title: 'common/typography/ButtonLink',
    component: ButtonLink,
    tags: ['autodocs'],
    argTypes: {
        size: {
            table: {
                defaultValue: { summary: 'small' },
            },
        },
        color: {
            table: {
                defaultValue: { summary: 'primary' },
            },
        },
    },
    args: {
        size: 'small',
        color: 'primary',
    },
};

export default meta;

type Story = StoryObj<typeof ButtonLink>;

const COMMON_PROPS: Story['args'] = {
    children: 'Button Link',
    href: HOME,
};

export const Regular: Story = {
    args: {
        ...COMMON_PROPS,
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
