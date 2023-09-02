import { FC, PropsWithChildren } from 'react';

const Layout: FC<PropsWithChildren> = (props) => {
    const { children } = props;

    return (
        <div>
            {/* <Header /> */}
            <main className="h-full">{children}</main>
            {/* <Footer /> */}
        </div>
    );
};

export default Layout;
