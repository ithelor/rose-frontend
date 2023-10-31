import { PropsWithChildren } from 'react';
import Sidebar from 'presentation/component/layout/Sidebar';

export default function SidebarLayout(props: PropsWithChildren) {
    const { children } = props;

    return (
        <div className="grid h-full flex-1 grid-cols-[max-content_1fr] gap-x-6">
            <Sidebar />
            {children}
        </div>
    );
}
