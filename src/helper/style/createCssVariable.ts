import { CSSProperties } from 'react';

export const createCssVariable = (
    name: string,
    value: string | number,
    unit = '',
): CSSProperties => {
    return {
        [`--${name}`]: `${value}${unit}`,
    };
};
