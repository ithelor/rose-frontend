import { DICTIONARY, HOME, OVERVIEW, STUDY } from 'constant/route';

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
