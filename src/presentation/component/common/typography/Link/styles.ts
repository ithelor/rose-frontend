import NextLink from 'next/link';
import { classed } from '@tw-classed/react';

export const BaseLink = classed(NextLink, {
    variants: {
        variant: {
            primary:
                'rounded-lg p-3 transition-[color,background-color] duration-fast hover:bg-gray-900 hover:text-white',
            primaryActive: 'rounded-lg p-3 bg-gray-900 text-white',
            secondary:
                'rounded-lg p-3 transition-[color,background-color] duration-fast hover:bg-gray-100',
            secondaryActive: 'rounded-lg p-3 bg-gray-100',
            clean: 'transition-[opacity] duration-fast hover:opacity-60',
        },
    },
    defaultVariants: {
        variant: 'primary',
    },
});
