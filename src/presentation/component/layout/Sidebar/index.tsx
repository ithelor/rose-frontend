'use client';

import { FC } from 'react';
import { usePathname, useSelectedLayoutSegments } from 'next/navigation';
import Link from 'presentation/component/common/typography/Link';
import { MAP_PAGE_TO_SIDEBAR_CONTENT } from './content';

const Sidebar: FC = () => {
    const pathname = usePathname();
    const [baseSegment] = useSelectedLayoutSegments();
    const content = MAP_PAGE_TO_SIDEBAR_CONTENT[`/${baseSegment}`];

    if (!content) {
        return null;
    }

    return (
        <aside className="min-w-[9rem]">
            <nav>
                <ul className="grid gap-y-2">
                    {content.map(({ href, label }) => (
                        <li key={href} className="flex">
                            <Link
                                href={href}
                                variant={pathname === href ? 'secondaryActive' : 'secondary'}
                                className="w-full font-medium"
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
