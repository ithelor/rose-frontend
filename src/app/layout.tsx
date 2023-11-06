import { PropsWithChildren } from 'react';
import { Montserrat, Kodchasan } from 'next/font/google';
import clsx from 'clsx';
import Header from 'presentation/component/layout/Header';
import './globals.css';

const kodchasan = Kodchasan({ subsets: ['latin'], variable: '--font-title', weight: ['600'] });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-body' });

export const metadata = {
    title: 'Title',
    description: 'Description',
};

export default function RootLayout(props: PropsWithChildren) {
    const { children } = props;

    return (
        <html lang="en" className={clsx('font-body', kodchasan.variable, montserrat.variable)}>
            <body>
                <main className="relative flex min-h-screen flex-col">
                    <Header />
                    <div className="h-full flex-1 p-8">{children}</div>
                </main>
            </body>
        </html>
    );
}
