import { ADVANCED, DASHBOARD, OVERVIEW, PROFILE, SETTINGS, STATISTICS } from 'constant/route';

type ItemT = {
    href: string;
    label: string;
};

const DASHBOARD_ITEMS: ItemT[] = [
    {
        href: OVERVIEW,
        label: 'Overview',
    },
    {
        href: STATISTICS,
        label: 'Statistics',
    },
];

const SETTINGS_ITEMS: ItemT[] = [
    {
        href: PROFILE,
        label: 'Profile',
    },
    {
        href: ADVANCED,
        label: 'Advanced',
    },
];

export const MAP_PAGE_TO_SIDEBAR_CONTENT: Record<string, ItemT[] | undefined> = {
    [DASHBOARD]: DASHBOARD_ITEMS,
    [SETTINGS]: SETTINGS_ITEMS,
};
