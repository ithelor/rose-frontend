import { HOME } from 'constant/route';
import type { Meta, StoryObj } from '@storybook/react';
import Link from './index';

const meta: Meta<typeof Link> = {
    title: 'common/typography/Link',
    component: Link,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Link>;

const COMMON_PROPS: Story['args'] = {
    children: 'Link',
    href: HOME,
};

export const Primary: Story = {
    args: {
        ...COMMON_PROPS,
    },
};

export const PrimaryActive: Story = {
    args: {
        ...COMMON_PROPS,
        variant: 'primaryActive',
    },
};

export const Secondary: Story = {
    args: {
        ...COMMON_PROPS,
        variant: 'secondary',
    },
};

export const SecondaryActive: Story = {
    args: {
        ...COMMON_PROPS,
        variant: 'secondaryActive',
    },
};

export const Clean: Story = {
    args: {
        ...COMMON_PROPS,
        variant: 'clean',
    },
};
