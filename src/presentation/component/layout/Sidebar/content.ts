import { Books, ChartPieSlice, UserGear } from '@phosphor-icons/react';
import {
    DICTIONARY,
    KANJI,
    OVERVIEW,
    PROFILE,
    SECURITY,
    STATISTICS,
    VOCABULARY,
} from 'constant/route';
import { NavSectionT } from './NavSection';

export const NAV_SECTIONS: NavSectionT[] = [
    {
        icon: ChartPieSlice,
        title: 'Dashboard',
        items: [
            {
                href: OVERVIEW,
                label: 'Overview',
            },
            {
                href: STATISTICS,
                label: 'Statistics',
            },
        ],
    },
    {
        icon: Books,
        title: 'Study',
        items: [
            {
                href: KANJI,
                label: 'Kanji',
            },
            {
                href: VOCABULARY,
                label: 'Vocabulary',
            },
            {
                href: DICTIONARY,
                label: 'Dictionary',
            },
        ],
    },
    {
        icon: UserGear,
        title: 'Settings',
        items: [
            {
                href: PROFILE,
                label: 'Profile',
            },
            {
                href: SECURITY,
                label: 'Security',
            },
            {
                href: VOCABULARY,
                label: 'Vocabulary',
            },
        ],
    },
];
