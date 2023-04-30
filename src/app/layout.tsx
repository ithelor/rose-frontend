import { PropsWithChildren } from 'react';
import Layout from 'presentation/component/layout';
import { ThemeProvider } from 'presentation/context/Theme';
import ContextComposer from 'presentation/context/ContextComposer';

const APP_PROVIDERS = [ThemeProvider];

export const metadata = {
    title: 'Title',
    description: 'Description',
};

export default function RootLayout(props: PropsWithChildren) {
    const { children } = props;

    return (
        <html lang="en">
            <body>
                <ContextComposer components={APP_PROVIDERS}>
                    <Layout>{children}</Layout>
                </ContextComposer>
            </body>
        </html>
    );
}
