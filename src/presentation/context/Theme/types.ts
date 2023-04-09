export enum ThemeVariant {
    Light,
}

export type ColorVariantT = 'gray' | 'primary' | 'error' | 'warning' | 'success';

type NeutralModifierT =
    | '25'
    | '50'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';

export type ColorT = Record<`${ColorVariantT}${NeutralModifierT}`, string> & {
    white: string;
    black: string;
};

export type FontFamilyT = {
    base: string;
};

export type FontWeightT = {
    regular: '400';
    medium: '500';
    semiBold: '600';
    bold: '700';
};

export type ZIndexT = {
    dropdown: number;
    sticky: number;
    fixed: number;
    modalBackdrop: number;
    offcanvas: number;
    modal: number;
    popover: number;
    tooltip: number;
    blockingFadeLoader: number;
};

export type ThemeT = {
    type: ThemeVariant;
    colors: ColorT;
    font: {
        family: FontFamilyT;
        weight: FontWeightT;
    };
    transition: {
        slow: string;
        normal: string;
        fast: string;
    };
    zIndex: ZIndexT;
};
