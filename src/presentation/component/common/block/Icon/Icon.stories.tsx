import { TbSearch } from 'react-icons/tb';
import type { Meta, StoryObj } from '@storybook/react';
import Icon from './index';

const meta: Meta<typeof Icon> = {
    title: 'common/block/Icon',
    component: Icon,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
    args: {
        icon: TbSearch,
    },
};
