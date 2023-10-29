'use client';

import { FC, PropsWithChildren } from 'react';
import Header from './Header';

const Layout: FC<PropsWithChildren> = (props) => {
    const { children } = props;

    return (
        <main>
            <Header />
            <div>{children}</div>
        </main>
    );
};

export default Layout;
