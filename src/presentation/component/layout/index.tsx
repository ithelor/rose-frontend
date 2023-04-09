'use client';

import { Global } from '@emotion/react';
import { FC, PropsWithChildren } from 'react';
import { LayoutWrapper, Main } from './styles';
import globalCss from './common/globalCss';
import Sidebar from './Sidebar';

const Layout: FC<PropsWithChildren> = (props) => {
    const { children } = props;

    return (
        <>
            <LayoutWrapper>
                {/* <Header /> */}
                <Main>
                    <Sidebar />
                    {children}
                </Main>
                {/* <Footer /> */}
            </LayoutWrapper>
            <Global styles={globalCss} />
        </>
    );
};

export default Layout;
