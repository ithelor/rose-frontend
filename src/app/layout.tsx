import { PropsWithChildren } from 'react';
import { Montserrat } from 'next/font/google';
import Background from 'presentation/component/layout/Background';
import Header from 'presentation/component/layout/Header';
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
                <Background />
                <main className="relative flex min-h-screen flex-col">
                    <Header />
                    <div className="h-full flex-1 p-8">{children}</div>
                </main>
            </body>
        </html>
    );
}
