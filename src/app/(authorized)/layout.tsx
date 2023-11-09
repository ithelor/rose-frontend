import { PropsWithChildren } from 'react';
import Sidebar from 'presentation/component/layout/Sidebar';
import AuthorizedHeader from 'presentation/component/layout/Sidebar/AuthorizedHeader';

export default function AuthorizedLayout(props: PropsWithChildren) {
    const { children } = props;

    return (
        <div className="grid flex-1 grid-cols-[max-content_1fr]">
            <Sidebar />
            <div>
                <AuthorizedHeader />
                <div className="p-7">{children}</div>
            </div>
        </div>
    );
}
