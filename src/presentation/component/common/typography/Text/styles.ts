import { css, SerializedStyles } from '@emotion/react';
import type { ThemeT } from 'presentation/context/Theme';
import type { TextPropsT } from 'presentation/component/common/typography/Text/index';

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

export const header2Css = (theme: ThemeT) => css`
    font-weight: ${theme.font.weight.bold};
    font-size: 36px;
    line-height: 1.22;
`;

export const mobileHeader2Css = (theme: ThemeT) => css`
    font-weight: ${theme.font.weight.bold};
    font-size: 24px;
    line-height: 1.33;
`;

export const header3Css = (theme: ThemeT) => css`
    font-weight: ${theme.font.weight.semiBold};
    font-size: 32px;
    line-height: 1.25;
`;

export const mobileHeader3Css = (theme: ThemeT) => css`
    font-weight: ${theme.font.weight.semiBold};
    font-size: 20px;
    line-height: 1.4;
`;

export const header4Css = (theme: ThemeT) => css`
    font-weight: ${theme.font.weight.semiBold};
    font-size: 28px;
    line-height: 1.29;
`;

export const mobileHeader4Css = (theme: ThemeT) => css`
    font-weight: ${theme.font.weight.semiBold};
    font-size: 18px;
    line-height: 1.33;
`;

export const header5Css = (theme: ThemeT) => css`
    font-weight: ${theme.font.weight.semiBold};
    font-size: 24px;
    line-height: 1.33;
`;

export const mobileHeader5Css = (theme: ThemeT) => css`
    font-weight: ${theme.font.weight.semiBold};
    font-size: 16px;
    line-height: 1.5;
`;

export const header6Css = (theme: ThemeT) => css`
    font-weight: ${theme.font.weight.semiBold};
    font-size: 20px;
    line-height: 1.4;
`;

export const mobileHeader6Css = (theme: ThemeT) => css`
    font-weight: ${theme.font.weight.semiBold};
    font-size: 14px;
    line-height: 1.43;
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
    h2: header2Css,
    h3: header3Css,
    h4: header4Css,
    h5: header5Css,
    h6: header6Css,
    b1: body1Css,
    'm-h1': mobileHeader1Css,
    'm-h2': mobileHeader2Css,
    'm-h3': mobileHeader3Css,
    'm-h4': mobileHeader4Css,
    'm-h5': mobileHeader5Css,
    'm-h6': mobileHeader6Css,
    'm-b1': mobileBody1Css,
};
