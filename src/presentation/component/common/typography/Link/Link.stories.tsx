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

export const Regular: Story = {
    args: {
        children: 'Link',
        href: HOME,
    },
};
