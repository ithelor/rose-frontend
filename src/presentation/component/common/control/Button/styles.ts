import { classed } from '@tw-classed/react';
import BaseIcon from 'presentation/component/common/block/Icon';

export const BaseButton = classed(
    'button',
    'flex items-center fill-black/10 transition duration-fast disabled:cursor-not-allowed disabled:text-black/10',
    {
        variants: {
            size: {
                small: 'rounded-lg px-2 py-1 text-sm',
                medium: 'rounded-xl px-4 py-2 text-lg',
                large: 'rounded-2xl px-6 py-4 text-lg',
            },
            color: {
                primary: 'bg-black fill-white/10 text-white hover:bg-black/80 disabled:bg-black/5',
                secondary: 'bg-black/5 hover:enabled:bg-black/10 disabled:bg-black/5',
                outline:
                    'border border-black/10 hover:enabled:border-black/20 hover:enabled:bg-black/5',
                text: 'hover:enabled:bg-black/5',
            },
        },
        defaultVariants: {
            size: 'small',
            color: 'primary',
        },
    },
);

export const Icon = classed(BaseIcon, {
    variants: {
        position: {
            left: '',
            right: '',
        },
        size: {
            small: 'h-4 w-4',
            medium: 'h-5 w-5',
            large: 'h-6 w-6',
        },
    },
    compoundVariants: [
        {
            position: 'left',
            size: 'small',
            class: 'mr-1',
        },
        {
            position: 'left',
            size: ['medium', 'large'],
            class: 'mr-2',
        },
        {
            position: 'right',
            size: 'small',
            class: 'ml-1',
        },
        {
            position: 'right',
            size: ['medium', 'large'],
            class: 'ml-2',
        },
    ],
    defaultVariants: {
        size: 'small',
    },
});
