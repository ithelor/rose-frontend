'use client';

import { FC, Fragment } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'presentation/component/common/typography/Link';
import { MAP_ROUTE_TO_BREADCRUMB } from './content';

const Breadcrumbs: FC = () => {
    const pathname = usePathname();
    const matches = pathname.match(/([/][\w'-]+)/g);

    return (
        <nav>
            <ul className="flex">
                {matches?.map((_, index) => {
                    const fullPath = matches.slice(0, index + 1).join('');
                    const isActive = fullPath === pathname;
                    const label = MAP_ROUTE_TO_BREADCRUMB[fullPath];

                    return (
                        <Fragment key={fullPath}>
                            <li className="peer peer-[&]:pl-4 peer-[&]:before:pr-4 peer-[&]:before:text-black/40 peer-[&]:before:content-['/']">
                                {!isActive && <Link href={fullPath}>{label}</Link>}
                                {isActive && <span>{label}</span>}
                            </li>
                        </Fragment>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Breadcrumbs;
