'use client';

import { FC, Fragment, PropsWithChildren } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Icon from 'presentation/component/common/block/Icon';
import CircleImage from 'presentation/component/common/block/CircleImage';
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
                        {NAV.map(({ title, url }) => (
                            <Fragment key={url}>
                                <li className="grid grid-flow-col items-center gap-x-4">
                                    <Link
                                        href={url}
                                        className={clsx('btn-primary', {
                                            'btn-primary-active': url === pathname,
                                        })}
                                    >
                                        {title}
                                    </Link>
                                </li>
                            </Fragment>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="grid grid-flow-col items-center gap-x-6">
                {USER_NAV.map(({ url, icon }) => (
                    <a key={url} href={url} className="hover-opacity">
                        <Icon icon={icon} />
                    </a>
                ))}
                <CircleImage alt="" src="https://via.assets.so/img.jpg?w=48&h=48" size={48} />
            </div>
        </header>
    );
};

export default Header;
