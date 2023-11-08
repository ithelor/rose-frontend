import { DICTIONARY, HOME, NEWS, OVERVIEW, STUDY } from 'constant/route';

type NavItemT = {
    href: string;
    title: string;
};

export const NAV_ITEMS: NavItemT[] = [
    {
        href: HOME,
        title: 'Home',
    },
    {
        href: NEWS,
        title: 'News',
    },
    {
        href: OVERVIEW,
        title: 'Dashboard',
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
