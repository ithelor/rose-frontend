'use client';

import { FC, Fragment, PropsWithChildren } from 'react';
import { usePathname } from 'next/navigation';
import Icon from 'presentation/component/common/block/Icon';
import CircleImage from 'presentation/component/common/block/CircleImage';
import Link from 'presentation/component/common/typography/Link';
import Logo from './Logo';
import { NAV, USER_NAV } from './content';

const Header: FC<PropsWithChildren> = () => {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-fixed flex w-full items-center justify-between border-b  bg-none px-16 py-4 backdrop-blur">
            <div className="grid grid-flow-col items-center gap-x-8">
                <Logo />
                <nav>
                    <ul className="grid grid-flow-col items-center gap-x-2">
                        {NAV.map(({ href, title }) => (
                            <Fragment key={href}>
                                <li className="grid grid-flow-col items-center gap-x-4">
                                    <Link
                                        href={href}
                                        variant={href === pathname ? 'primaryActive' : 'primary'}
                                        className="font-medium"
                                    >
                                        {title}
                                    </Link>
                                </li>
                            </Fragment>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="grid grid-flow-col items-center gap-x-2">
                {USER_NAV.map(({ href, icon }) => (
                    <Link
                        key={href}
                        href={href}
                        variant={href === pathname ? 'secondaryActive' : 'secondary'}
                        className="font-medium"
                    >
                        <Icon icon={icon} />
                    </Link>
                ))}
                <CircleImage
                    alt=""
                    src="https://via.assets.so/img.jpg?w=48&h=48"
                    size={48}
                    className="ml-2"
                />
            </div>
        </header>
    );
};

export default Header;
