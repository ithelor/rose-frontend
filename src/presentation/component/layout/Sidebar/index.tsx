import { FC } from 'react';

const Sidebar: FC = () => {
    return (
        <aside className="min-w-[9rem]">
            <nav>
                <ul className="grid gap-y-2">
                    <li className="flex">Sidebar</li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
