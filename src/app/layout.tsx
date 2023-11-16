import { PropsWithChildren } from 'react';
import { Inter, Kodchasan } from 'next/font/google';
import clsx from 'clsx';
import AuthProvider from './providers/AuthProvider';
import './globals.css';

const kodchasan = Kodchasan({ subsets: ['latin'], variable: '--font-title', weight: ['600'] });
const inter = Inter({ subsets: ['latin'], variable: '--font-body' });

export const metadata = {
    title: 'Title',
    description: 'Description',
};

export default function RootLayout(props: PropsWithChildren) {
    const { children } = props;

    return (
        <html lang="en">
            <body className={clsx('font-body', kodchasan.variable, inter.variable)}>
                <AuthProvider>
                    <main className="relative flex min-h-screen flex-col">{children}</main>
                </AuthProvider>
            </body>
        </html>
    );
}
