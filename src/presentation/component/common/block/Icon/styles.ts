import { HTMLAttributes } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import SvgSpriteIcon from '@bit/taptima.common.svg-sprite-icon';
import type { ColorKeyT } from 'presentation/context/Theme/keys';

export type SvgIconPropsT = HTMLAttributes<HTMLElement> & {
    color?: ColorKeyT;
    rotate?: number;
    size?: number | string;
};

const rotateIconCss = (degree: number) => css`
    transform: rotate(${degree}deg);
`;

const sizeIconCss = (size: number | string) => css`
    width: ${`${size}px`};
`;

export const BaseIcon = styled(SvgSpriteIcon, {
    shouldForwardProp: (prop) => !['color', 'rotate', 'size'].includes(prop),
})<SvgIconPropsT>`
    fill: ${({ theme, color }) => (color ? theme.colors[color] : 'currentColor')};
    transition: fill ${({ theme }) => theme.transition.fast},
        transform ${({ theme }) => theme.transition.fast};

    ${({ rotate }) => rotate && rotateIconCss(rotate)};
    ${({ size }) => size && sizeIconCss(size)};
`;
