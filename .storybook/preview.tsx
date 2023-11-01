import * as React from 'react';
import type { Preview } from '@storybook/react';
import { Montserrat } from 'next/font/google';
import '../src/app/globals.css';

const montserrat = Montserrat({ subsets: ['latin'] });

const preview: Preview = {
    parameters: {
        nextjs: {
            appDirectory: true,
        },
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        backgrounds: {
            default: 'white',
            values: [
                {
                    name: 'white',
                    value: '#ffffff',
                },
            ],
        },
    },
    decorators: [(Story) => <div className={montserrat.className}>{Story()}</div>],
};

export default preview;
