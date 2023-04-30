import {
    FAST_TRANSITION_TIME_IN_MS,
    NORMAL_TRANSITION_TIME_IN_MS,
    SLOW_TRANSITION_TIME_IN_MS,
} from 'presentation/constant/style';
import type { ThemeT } from 'presentation/context/Theme/types';

const themeBase: Omit<ThemeT, 'type' | 'colors'> = {
    font: {
        family: {
            base: 'Montserrat',
        },
        weight: {
            regular: '400',
            medium: '500',
            semiBold: '600',
            bold: '700',
        },
    },
    transition: {
        fast: `${FAST_TRANSITION_TIME_IN_MS}ms`,
        normal: `${NORMAL_TRANSITION_TIME_IN_MS}ms`,
        slow: `${SLOW_TRANSITION_TIME_IN_MS}ms`,
    },
    zIndex: {
        dropdown: 1000,
        sticky: 1020,
        fixed: 1030,
        modalBackdrop: 1040,
        offcanvas: 1050,
        modal: 1060,
        popover: 1070,
        tooltip: 1080,
        blockingFadeLoader: 100000,
    },
};

export default themeBase;
