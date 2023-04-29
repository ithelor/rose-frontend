import Breakpoint from 'presentation/mediaquery/Breakpoint';

export type VariantT = 'h1' | 'b1' | 'm-h1' | 'm-b1';

export type AdaptiveVariantT = Partial<Record<`variant${keyof typeof Breakpoint}`, VariantT>>;
