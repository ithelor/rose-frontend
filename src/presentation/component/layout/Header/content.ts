import { IconType } from 'react-icons';
import { TbSearch, TbSettings, TbBell } from 'react-icons/tb';
import {
    DICTIONARY,
    HOME,
    NOTIFICATIONS,
    OVERVIEW,
    PROFILE,
    SEARCH,
    STUDY,
    TASKS,
} from 'constant/route';

type NavItemT = {
    href: string;
    title: string;
};

export const NAV: NavItemT[] = [
    {
        href: HOME,
        title: 'Home',
    },
    {
        href: OVERVIEW,
        title: 'Dashboard',
    },
    {
        href: TASKS,
        title: 'Tasks',
    },
    {
        href: STUDY,
        title: 'Study',
    },
    {
        href: DICTIONARY,
        title: 'Dictionary',
    },
];

type UserNavItemT = {
    href: string;
    icon: IconType;
};

export const USER_NAV: UserNavItemT[] = [
    {
        href: SEARCH,
        icon: TbSearch,
    },
    {
        href: PROFILE,
        icon: TbSettings,
    },
    {
        href: NOTIFICATIONS,
        icon: TbBell,
    },
];
