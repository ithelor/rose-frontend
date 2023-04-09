import { css, SerializedStyles } from '@emotion/react';
import normalize from 'polished/lib/mixins/normalize';
import { ThemeT } from 'presentation/context/Theme';
import {
    FAST_TRANSITION_TIME_IN_MS,
    NORMAL_TRANSITION_TIME_IN_MS,
    SLOW_TRANSITION_TIME_IN_MS,
} from 'presentation/constant/style';
import fontCss from './fontCss';

const globalCss = (theme: ThemeT): SerializedStyles => css`
    ${normalize()};
    ${fontCss};

    html,
    body {
        --container-gutter: 24px;
        --transition-fast: ${FAST_TRANSITION_TIME_IN_MS}ms;
        --transition-normal: ${NORMAL_TRANSITION_TIME_IN_MS}ms;
        --transition-slow: ${SLOW_TRANSITION_TIME_IN_MS}ms;

        margin: 0;
        padding: 0;
        color: ${theme.colors.black};
        background-color: ${theme.colors.white};
        font-size: 16px;
        line-height: 1.2;
        -webkit-font-smoothing: antialiased;
        -webkit-overflow-scrolling: touch;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    h1,
    h2,
    h3,
    h4,
    p {
        margin: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    ul {
        margin: 0;
        padding-left: 0;
        list-style: none;
    }

    button {
        appearance: none;
        cursor: pointer;
        font: inherit;
        line-height: inherit;
        padding: 0;
        border: none;
        background-color: transparent;
    }

    input::-ms-clear {
        display: none;
    }

    input[type='search']::-webkit-search-decoration,
    input[type='search']::-webkit-search-cancel-button,
    input[type='search']::-webkit-search-results-button,
    input[type='search']::-webkit-search-results-decoration {
        display: none;
    }

    :-webkit-autofill {
        background-clip: text;
    }
`;

export default globalCss;
