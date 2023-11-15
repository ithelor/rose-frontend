import { Config } from 'tailwindcss';

const config = {
    content: ['./src/**/*.{ts,tsx}'],
    theme: {
        fontFamily: {
            title: 'var(--font-title)',
            body: 'var(--font-body)',
        },
        fontWeight: {
            regular: '400',
            medium: '500',
            semiBold: '600',
            bold: '700',
        },
        colors: {
            black: '#1c1c1c',
            white: '#fff',
            primary: {
                blue: '#e3f5ff',
                purple: '#e5ecf6',
                purple50: '#f2f6fb',
                light: '#f7f9fb',
            },
            secondary: {
                indigo: '#95a4fc',
                purple: '#c6c7f8',
                cyan: '#a8c5da',
                blue: '#b1e3ff',
                green: '#a1e3cb',
                mint: '#baedbd',
                yellow: '#ffe999',
                orange: '#ffcb83',
                red: '#ff4747',
            },
            transparent: 'transparent',
        },
        transitionDuration: {
            slow: 'var(--transition-slow)',
            normal: 'var(--transition-normal)',
            fast: 'var(--transition-fast)',
        },
        zIndex: {
            dropdown: '1000',
            sticky: '1020',
            fixed: '1030',
            modalBackdrop: '1040',
            offcanvas: '1050',
            modal: '1060',
            popover: '1070',
            tooltip: '1080',
            blockingFadeLoader: '100000',
        },
        keyframes: {
            'fade-in': {
                '0%': { opacity: '0', visibility: 'hidden' },
                '1%': { visibility: 'visible' },
                '100%': { opacity: '1' },
            },
            'fade-out': {
                '0%': { opacity: '1', visibility: 'visible' },
                '100%': { opacity: '0', visibility: 'hidden' },
            },
        },
        animation: {
            'fade-in': 'fade-in 3s forwards',
            'fade-out': 'fade-out 3s forwards',
        },
        extend: {},
    },
    plugins: [],
} satisfies Config;

export default config;
