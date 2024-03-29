import { classed } from '@tw-classed/react';
import BaseIcon from 'presentation/component/common/block/Icon';

export const BaseButton = classed(
    'button',
    'flex items-center fill-black/10 transition duration-fast disabled:cursor-not-allowed disabled:text-black/10 justify-center',
    {
        variants: {
            size: {
                small: 'rounded-lg px-2 py-1',
                medium: 'rounded-xl px-4 py-2 text-lg',
                large: 'rounded-2xl px-6 py-4 text-lg',
            },
            color: {
                primary:
                    // TODO: btn-interactive plugin
                    'bg-black fill-white/10 text-white [&:hover:not([disabled])]:bg-black/80 disabled:bg-black/5',
                secondary: 'bg-black/5 [&:hover:not([disabled])]:bg-black/10 disabled:bg-black/5',
                outline:
                    'border border-black/10 [&:hover:not([disabled])]:border-black/20 [&:hover:not([disabled])]:bg-black/5',
                text: '[&:hover:not([disabled])]:bg-black/5',
                link: 'text-secondary-indigo',
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
            small: 'h-5 w-5',
            medium: 'h-6 w-6',
            large: 'h-7 w-7',
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
