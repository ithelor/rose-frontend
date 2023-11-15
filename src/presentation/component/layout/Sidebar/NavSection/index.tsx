'use client';

import { FC, useState } from 'react';
import { usePathname } from 'next/navigation';
import { CaretRight } from '@phosphor-icons/react';
import clsx from 'clsx';
import Icon from 'presentation/component/common/block/Icon';
import { Button, Link } from './styles';

export type NavSectionT = {
    icon: IconType;
    title: string;
    items: {
        href: string;
        label: string;
    }[];
};

type PropsT = {
    data: NavSectionT;
};

const NavSection: FC<PropsT> = (props) => {
    const { data } = props;
    const { icon, title, items } = data;
    const [maxHeight, setMaxHeight] = useState(0);
    const pathname = usePathname();
    const isActive = items.some(({ href }) => pathname === href);
    const [isOpen, setIsOpen] = useState(isActive);

    const handleClick = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <li>
            <Button type="button" active={isActive} onClick={handleClick}>
                <Icon
                    icon={CaretRight}
                    weight="regular"
                    size={20}
                    className={clsx('fill-black/20 transition duration-fast', {
                        'rotate-90': isOpen,
                    })}
                />
                <Icon icon={icon} size={24} />
                <span>{title}</span>
            </Button>
            <ul
                ref={(ref) => setMaxHeight(ref?.scrollHeight ?? 0)}
                className={clsx(
                    'grid max-h-0 gap-y-2 overflow-hidden transition-[max-height,margin-top] duration-fast',
                    { 'mt-2': isOpen },
                )}
                style={{ maxHeight: isOpen ? maxHeight : 0 }}
            >
                {items.map(({ href, label }) => (
                    <li key={href} className="flex">
                        <Link href={href} active={pathname === href}>
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </li>
    );
};

export default NavSection;
