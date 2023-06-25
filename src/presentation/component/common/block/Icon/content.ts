import bell from 'presentation/svg/bell.raw.svg';
import heart from 'presentation/svg/heart.raw.svg';
import searchRefraction from 'presentation/svg/search-refraction.raw.svg';
import settings from 'presentation/svg/settings.raw.svg';
import star from 'presentation/svg/star.raw.svg';
import user from 'presentation/svg/user.raw.svg';
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
