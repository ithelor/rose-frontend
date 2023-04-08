'use client';

import { FC, PropsWithChildren, createContext, useContext, useMemo, useState } from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { ThemeVariant } from './types';
import light from './themes/light';

type ContextT = {
    themeType: ThemeVariant;
    setThemeType: (themeType: ThemeVariant) => void;
};

const themes = [light];
const Context = createContext<ContextT>({} as ContextT);

export const ThemeProvider: FC<PropsWithChildren> = (props) => {
    const { children } = props;
    const [themeType, setThemeType] = useState<ThemeVariant>(ThemeVariant.Light);
    const config = useMemo(
        () => ({
            activeTheme: themes.find(({ type }) => type === themeType) ?? light,
            context: { themeType, setThemeType },
        }),
        [themeType],
    );

    return (
        <Context.Provider value={config.context}>
            <EmotionThemeProvider theme={config.activeTheme}>{children}</EmotionThemeProvider>
        </Context.Provider>
    );
};

export function useTheme(): ContextT {
    return useContext(Context);
}

export { themes };

export * from './types';
