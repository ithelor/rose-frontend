import type { IconNameT } from 'presentation/component/common/block/Icon';
import { FAVORITES, NOTIFICATIONS, SEARCH, SETTINGS, USER } from 'constant/route';

type SidebarItemT = {
    icon: IconNameT;
    url: string;
};

type SidebarContentT = {
    topList: SidebarItemT[];
    bottomList: SidebarItemT[];
};

const SIDEBAR_CONTENT: SidebarContentT = {
    topList: [
        {
            icon: 'searchRefraction',
            url: SEARCH,
        },
        {
            icon: 'heart',
            url: FAVORITES,
        },
        {
            icon: 'user',
            url: USER,
        },
    ],
    bottomList: [
        {
            icon: 'bell',
            url: NOTIFICATIONS,
        },
        {
            icon: 'settings',
            url: SETTINGS,
        },
    ],
};

export default SIDEBAR_CONTENT;
