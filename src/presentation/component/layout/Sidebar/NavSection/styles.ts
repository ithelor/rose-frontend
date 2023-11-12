import { classed } from '@tw-classed/react';
import BaseLink from 'next/link';

export const Button = classed(
    'button',
    'grid w-full auto-cols-max grid-flow-col items-center gap-x-1 rounded-lg px-2 py-1 transition duration-fast hover:bg-black/5',
    {
        variants: {
            active: {
                true: 'bg-black/5',
            },
        },
    },
);

export const Link = classed(
    BaseLink,
    'relative w-full rounded-lg px-2 py-1 pl-[58px] transition duration-fast hover:bg-black/5',
    {
        variants: {
            active: {
                true: 'bg-black/5 before:absolute before:left-0 before:top-1/2 before:h-4 before:w-1 before:-translate-y-1/2 before:rounded-lg before:bg-black',
            },
        },
    },
);
