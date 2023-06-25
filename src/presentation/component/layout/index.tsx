'use client';

import { FC, PropsWithChildren } from 'react';
import { Global } from '@emotion/react';
import Sidebar from './Sidebar';
import Header from './Header';
import globalCss from './common/globalCss';
import { Content, LayoutWrapper, Main } from './styles';

const Layout: FC<PropsWithChildren> = (props) => {
    const { children } = props;

    return (
        <>
            <LayoutWrapper>
                <Sidebar />
                <Content>
                    <Header />
                    <Main>{children}</Main>
                </Content>
            </LayoutWrapper>
            <Global styles={globalCss} />
        </>
    );
};

export default Layout;
