import Breakpoint from 'presentation/mediaquery/Breakpoint';

export type VariantT =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'b1'
    | 'm-h1'
    | 'm-h2'
    | 'm-h3'
    | 'm-h4'
    | 'm-h5'
    | 'm-h6'
    | 'm-b1';

export type AdaptiveVariantT = Partial<Record<`variant${keyof typeof Breakpoint}`, VariantT>>;
