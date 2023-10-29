import { PropsWithChildren } from 'react';
import { Montserrat } from 'next/font/google';
import Layout from 'presentation/component/layout';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
    title: 'Title',
    description: 'Description',
};

export default function RootLayout(props: PropsWithChildren) {
    const { children } = props;

    return (
        <html lang="en" className={montserrat.className}>
            <body>
                <Layout>{children}</Layout>
            </body>
        </html>
    );
}
