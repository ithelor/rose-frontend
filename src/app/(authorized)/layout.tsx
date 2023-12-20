'use client';

import { PropsWithChildren } from 'react';
import RoleEnum from 'domain/entity/RoleEnum';
import Sidebar from 'presentation/component/layout/Sidebar';
import AuthorizedHeader from 'presentation/component/layout/AuthorizedHeader';
import createAuthorizedLayout from 'presentation/component/layout/AuthorizedLayout';

const BaseAuthorizedLayout = (props: PropsWithChildren) => {
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
};

export default createAuthorizedLayout(BaseAuthorizedLayout, {
    roles: [RoleEnum.User],
});
