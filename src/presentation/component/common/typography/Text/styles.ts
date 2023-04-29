import { css, SerializedStyles } from '@emotion/react';
import type { TextPropsT } from 'presentation/component/common/typography/Text/index';
import type { ThemeT } from 'presentation/context/Theme';

export const header1Css = (theme: ThemeT) => css`
    font-size: 64px;
    font-weight: ${theme.font.weight.bold};
    line-height: 1.12;
`;

export const mobileHeader1Css = (theme: ThemeT) => css`
    font-size: 36px;
    font-weight: ${theme.font.weight.bold};
    line-height: 1.22;
`;

export const body1Css = (theme: ThemeT) => css`
    font-size: 32px;
    font-weight: ${theme.font.weight.regular};
    line-height: 1.25;
`;

export const mobileBody1Css = (theme: ThemeT) => css`
    font-size: 16px;
    font-weight: ${theme.font.weight.regular};
    line-height: 1.5;
`;

export const MAP_TEXT_VARIANT_TO_CSS: Record<
    NonNullable<TextPropsT['variant']>,
    (theme: ThemeT) => SerializedStyles
> = {
    h1: header1Css,
    b1: body1Css,
    'm-h1': mobileHeader1Css,
    'm-b1': mobileBody1Css,
};
