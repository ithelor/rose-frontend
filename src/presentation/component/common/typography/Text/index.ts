import { ElementType } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Breakpoint from 'presentation/mediaquery/Breakpoint';
import type { ColorKeyT, FontFamilyKeyT, FontWeightKeyT } from 'presentation/context/Theme/keys';
import type { ThemeT } from 'presentation/context/Theme';
import { mq, RuleT } from 'presentation/mediaquery';
import { AdaptiveVariantT, VariantT } from './types';
import { MAP_TEXT_VARIANT_TO_CSS } from './styles';

export type { AdaptiveVariantT };

export { MAP_TEXT_VARIANT_TO_CSS };

export type TextPropsT = AdaptiveVariantT & {
    size?: number;
    color?: ColorKeyT;
    weight?: FontWeightKeyT;
    family?: FontFamilyKeyT;
    opacity?: number;
    variant?: VariantT;
    as?: ElementType;
};

const breakpointValues = Object.values(Breakpoint);
const breakpointKeys = breakpointValues.slice(0, breakpointValues.length / 2) as Array<
    keyof typeof Breakpoint
>;
export const ADAPTIVE_TEXT_VARIANTS = breakpointKeys.map((key) => `variant${key}`);

const adaptiveVariantCss = (breakpointName: RuleT, variant: VariantT, theme: ThemeT) => css`
    ${mq[breakpointName]} {
        ${MAP_TEXT_VARIANT_TO_CSS[variant](theme)};
    }
`;

const Text = styled('span', {
    shouldForwardProp: (prop) =>
        !['isUppercase', 'isActive', 'variant', 'color', 'as', ...ADAPTIVE_TEXT_VARIANTS].includes(
            prop,
        ),
})<TextPropsT>`
    ${({ variant, theme }) => variant && MAP_TEXT_VARIANT_TO_CSS[variant](theme)};
    ${({ variantXxl, theme }) => variantXxl && adaptiveVariantCss('lowerXxl', variantXxl, theme)};
    ${({ variantXl, theme }) => variantXl && adaptiveVariantCss('lowerXl', variantXl, theme)};
    ${({ variantLg, theme }) => variantLg && adaptiveVariantCss('lowerLg', variantLg, theme)};
    ${({ variantMd, theme }) => variantMd && adaptiveVariantCss('lowerMd', variantMd, theme)};
    ${({ variantMd, theme }) => variantMd && adaptiveVariantCss('lowerMd', variantMd, theme)};
    ${({ variantSm, theme }) => variantSm && adaptiveVariantCss('lowerSm', variantSm, theme)};
    ${({ variantXs, theme }) => variantXs && adaptiveVariantCss('lowerXs', variantXs, theme)};
    ${({ variantXxs, theme }) => variantXxs && adaptiveVariantCss('lowerXxs', variantXxs, theme)};

    opacity: ${({ opacity }) => opacity};
    color: ${({ theme, color }) => color && theme.colors[color]};
    font-size: ${({ size }) => (size ? `${size}px` : '')};
    font-weight: ${({ theme, weight }) => weight && theme.font.weight[weight]};
    font-family: ${({ theme, family }) => family && theme.font.family[family]};
`;

export default Text;
