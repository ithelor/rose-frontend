'use client';

import { FC, PropsWithChildren, useEffect, useRef } from 'react';
import Link from 'next/link';
import { SIGN_IN } from 'constant/route';
import RoleEnum from 'domain/entity/RoleEnum';
import { useUserRefreshTokenSWR } from 'domain/service/auth/useUserRefreshTokenSWR';
import useUserStore from 'domain/store/user/useUserStore';

type OptionsT = {
    roles: RoleEnum[];
};

type PropsT = PropsWithChildren & OptionsT;

const AuthorizedLayout: FC<PropsT> = (props) => {
    const { children, roles } = props;
    const { user, getIsAuthorized } = useUserStore((state) => state);
    const isAuthorized = getIsAuthorized();
    const isPageAllowedForCurrentUser = user.roles.some((role) => roles.includes(role));
    const { isMutating, trigger } = useUserRefreshTokenSWR();
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (!isFirstRender.current || isAuthorized) {
            return;
        }

        isFirstRender.current = false;

        trigger();
    }, []);

    if (isMutating) {
        return <>Loading...</>;
    }

    if (isPageAllowedForCurrentUser) {
        // eslint-disable-next-line react/jsx-no-useless-fragment
        return <>{children}</>;
    }

    if (isAuthorized) {
        return <>Unavailable</>;
    }

    return <Link href={SIGN_IN}>Log in</Link>;
};

const createAuthorizedLayout = <T extends object>(Component: FC<T>, options: OptionsT) => {
    return (props: T) => (
        <AuthorizedLayout {...options}>
            <Component {...props} />
        </AuthorizedLayout>
    );
};

export default createAuthorizedLayout;
