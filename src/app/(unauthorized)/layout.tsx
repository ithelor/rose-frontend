import { PropsWithChildren } from 'react';
import UnauthorizedHeader from 'presentation/component/layout/UnauthorizedHeader';

export default function UnauthorizedLayout(props: PropsWithChildren) {
    const { children } = props;

    return (
        <div className="flex h-full flex-1 flex-col">
            <UnauthorizedHeader />
            <div className="h-full flex-1 p-8">{children}</div>
        </div>
    );
}
