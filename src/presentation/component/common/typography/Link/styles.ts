import NextLink from 'next/link';
import { classed } from '@tw-classed/react';

export const BaseLink = classed(NextLink, 'transition duration-fast', {
    variants: {
        color: {
            neutral: 'text-black/40 hover:text-black',
            primary: 'text-black',
        },
    },
    defaultVariants: {
        color: 'neutral',
    },
});
