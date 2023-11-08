import { PropsWithChildren } from 'react';
import Header from 'presentation/component/layout/Header';

export default function UnauthorizedLayout(props: PropsWithChildren) {
    const { children } = props;

    return (
        <div className="flex h-full flex-1 flex-col">
            <Header />
            <div className="h-full flex-1 p-8">{children}</div>
        </div>
    );
}
