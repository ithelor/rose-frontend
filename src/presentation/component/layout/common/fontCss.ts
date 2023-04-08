import { css } from '@emotion/react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

const fontCss = css`
    html,
    body {
        ${montserrat.style}
    }
`;

export default fontCss;
