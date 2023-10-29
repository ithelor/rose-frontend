import { IconType } from 'react-icons';
import { TbSearch, TbSettings, TbBell } from 'react-icons/tb';
import {
    DASHBOARD,
    DICTIONARY,
    HOME,
    NOTIFICATIONS,
    SEARCH,
    SETTINGS,
    STUDY,
    TASKS,
} from 'constant/route';

type NavItemT = {
    title: string;
    url: string;
};

export const NAV: NavItemT[] = [
    {
        title: 'Home',
        url: HOME,
    },
    {
        title: 'Dashboard',
        url: DASHBOARD,
    },
    {
        title: 'Tasks',
        url: TASKS,
    },
    {
        title: 'Study',
        url: STUDY,
    },
    {
        title: 'Dictionary',
        url: DICTIONARY,
    },
];

type UserNavItemT = {
    icon: IconType;
    url: string;
};

export const USER_NAV: UserNavItemT[] = [
    {
        icon: TbSearch,
        url: SEARCH,
    },
    {
        icon: TbSettings,
        url: SETTINGS,
    },
    {
        icon: TbBell,
        url: NOTIFICATIONS,
    },
];
