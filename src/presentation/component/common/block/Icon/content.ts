import bell from 'presentation/svg/bell.svg';
import heart from 'presentation/svg/heart.svg';
import searchRefraction from 'presentation/svg/search-refraction.svg';
import settings from 'presentation/svg/settings.svg';
import star from 'presentation/svg/star.svg';
import user from 'presentation/svg/user.svg';
import { PropsT as IconPropsT } from '@bit/taptima.common.svg-sprite-icon';
import type { IconNameT } from './types';

// eslint-disable-next-line import/prefer-default-export
export const MAP_ICON_NAME_TO_SVG: Record<IconNameT, IconPropsT['icon']> = {
    bell,
    heart,
    searchRefraction,
    settings,
    star,
    user,
};
