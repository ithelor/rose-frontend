'use client';

import { FC } from 'react';
import Logo from 'presentation/component/layout/common/Logo';
import Account from './Account';
import NavSection from './NavSection';
import { NAV_SECTIONS } from './content';

const Sidebar: FC = () => {
    return (
        <aside className="flex min-w-[212px] flex-col border-r border-black/10 px-4 py-5">
            <Account />
            <nav className="mt-6">
                <ul className="grid gap-y-2">
                    {NAV_SECTIONS.map((section) => (
                        <NavSection key={section.title} data={section} />
                    ))}
                </ul>
            </nav>
            <Logo className="mt-auto self-center" />
        </aside>
    );
};

export default Sidebar;
