import { CONTENT, DASHBOARD, DICTIONARY, STUDY } from 'constant/route';

type HeaderItemT = {
    title: string;
    url: string;
};

const HEADER_CONTENT: HeaderItemT[] = [
    {
        title: 'Dashboard',
        url: DASHBOARD,
    },
    {
        title: 'Study',
        url: STUDY,
    },
    {
        title: 'Dictionary',
        url: DICTIONARY,
    },
    {
        title: 'Content',
        url: CONTENT,
    },
];

export default HEADER_CONTENT;
