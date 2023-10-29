/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{ts,tsx}'],
    theme: {
        fontWeight: {
            regular: '400',
            medium: '500',
            semiBold: '600',
            bold: '700',
        },
        colors: {
            white: '#fff',
            black: '#000',
            gray: {
                25: '#fcfcfd',
                50: '#f9fafb',
                100: '#f7f7f7',
                200: '#eaecf0',
                300: '#d0d5dd',
                400: '#98a2b3',
                500: '#667085',
                600: '#475467',
                700: '#344054',
                800: '#1d2939',
                900: '#101828',
            },
            primary: {
                25: '#fcfaff',
                50: '#f9f5ff',
                100: '#f4ebff',
                200: '#e9d7fe',
                300: '#d6bbfb',
                400: '#b692f6',
                500: '#9e77ed',
                600: '#7f56d9',
                700: '#6941c6',
                800: '#53389e',
                900: '#42307d',
            },
            error: {
                25: '#fffbfa',
                50: '#fef3f2',
                100: '#fee4e2',
                200: '#fecdca',
                300: '#fda29b',
                400: '#f97066',
                500: '#f04438',
                600: '#d92d20',
                700: '#b42318',
                800: '#912018',
                900: '#7a271a',
            },
            warning: {
                25: '#fffcf5',
                50: '#fffaeb',
                100: '#fef0c7',
                200: '#fedf89',
                300: '#fec84b',
                400: '#fdb022',
                500: '#f79009',
                600: '#dc6803',
                700: '#b54708',
                800: '#93370d',
                900: '#7a2e0e',
            },
            success: {
                25: '#f6fef9',
                50: '#ecfdf3',
                100: '#d1fadf',
                200: '#a6f4c5',
                300: '#6ce9a6',
                400: '#32d583',
                500: '#12b76a',
                600: '#039855',
                700: '#027a48',
                800: '#05603a',
                900: '#054f31',
            },
        },
        transitionProperty: {
            fill: 'fill',
        },
        transitionDuration: {
            slow: 'var(--transition-slow)',
            normal: 'var(--transition-normal)',
            fast: 'var(--transition-fast)',
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
        extend: {},
    },
    plugins: [],
};
