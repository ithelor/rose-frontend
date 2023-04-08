'use client';

import { Global } from '@emotion/react';
import { FC, PropsWithChildren } from 'react';
import { LayoutWrapper, Main } from './styles';
import globalCss from './common/globalCss';

const Layout: FC<PropsWithChildren> = (props) => {
    const { children } = props;

    return (
        <>
            <LayoutWrapper>
                {/* <Header /> */}
                <Main>{children}</Main>
                {/* <Footer /> */}
            </LayoutWrapper>
            <Global styles={globalCss} />
        </>
    );
};

export default Layout;
