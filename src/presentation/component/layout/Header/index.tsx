'use client';

import { FC } from 'react';
import { usePathname } from 'next/navigation';
import { SIGN_IN, SIGN_UP } from 'constant/route';
import Link from 'presentation/component/common/typography/Link';
import ButtonLink from 'presentation/component/common/typography/ButtonLink';
import Logo from './Logo';
import { NAV_ITEMS } from './content';

const Header: FC = () => {
    const pathname = usePathname();

    return (
        <header className="flex items-center justify-between px-7 py-4">
            <Logo />
            <nav>
                <ul className="grid grid-flow-col gap-x-6">
                    {NAV_ITEMS.map(({ href, title }) => (
                        <li key={href}>
                            <Link href={href} color={pathname === href ? 'primary' : 'neutral'}>
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="grid grid-flow-col gap-x-2">
                <ButtonLink href={SIGN_UP} color="outline">
                    Sign up
                </ButtonLink>
                <ButtonLink href={SIGN_IN}>Sign in</ButtonLink>
            </div>
        </header>
    );
};

export default Header;
