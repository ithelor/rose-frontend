import { classed } from '@tw-classed/react';

export const BaseButton = classed('button', 'p-1 duration-fast', {
    variants: {
        color: {
            neutral: 'rounded-lg transition-[background-color] hover:bg-black/5',
            pale: 'text-black/20 transition-[fill] hover:text-black',
        },
    },
});
