import { classed } from '@tw-classed/react';

export const Container = classed(
    'div',
    'w-full mx-auto max-w-[calc(1760px+var(--container-gutter)*2)]',
    {
        variants: {
            isWithPadding: {
                true: 'px-[var(--container-gutter)]',
            },
        },
        defaultVariants: {
            isWithPadding: 'true',
        },
    },
);
