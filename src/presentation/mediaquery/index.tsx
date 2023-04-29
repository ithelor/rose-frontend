import { css, SerializedStyles } from '@emotion/react';
import Breakpoint from './Breakpoint';

const lower = (bp: Breakpoint) => `(max-width: ${bp - 0.1}px)`;
const greater = (bp: Breakpoint) => `(min-width: ${bp}px)`;
const rules = {
    lowerXxs: lower(Breakpoint.Xxs),
    lowerXs: lower(Breakpoint.Xs),
    lowerSm: lower(Breakpoint.Sm),
    lowerMd: lower(Breakpoint.Md),
    lowerLg: lower(Breakpoint.Lg),
    lowerXl: lower(Breakpoint.Xl),
    lowerXxl: lower(Breakpoint.Xxl),
    greaterXxs: greater(Breakpoint.Xxs),
    greaterXs: greater(Breakpoint.Xs),
    greaterSm: greater(Breakpoint.Sm),
    greaterMd: greater(Breakpoint.Md),
    greaterLg: greater(Breakpoint.Lg),
    greaterXl: greater(Breakpoint.Xl),
    greaterXxl: greater(Breakpoint.Xxl),
};

export type RuleT = keyof typeof rules;

/**
 * @example
 *
 *  styled.div`
 *      ${mq.lowerSm} {
 *          color: red;
 *      }
 *  `;
 *
 *  // same as above
 *   styled.div`
 *      @media (max-width: ${Breakpoint.Sm}) {
 *          color: red;
 *      }
 *   `;
 */
export const mq = (Object.keys(rules) as RuleT[]).reduce(
    (acc, bp) => ({
        ...acc,
        [bp]: `@media ${rules[bp]}`,
    }),
    {} as Record<RuleT, string>,
);

/**
 * @example
 *
 * styled.div`${hidden.lowerSm}`;
 *
 * // same as above```
 * styled.div`
 *     @media (max-width: ${Breakpoint.Sm}) {
 *         display: none;
 *     }
 * `;
 * ```
 */
export const hidden = (Object.keys(mq) as RuleT[]).reduce(
    (acc, bp) => ({
        ...acc,
        [bp]: css`
            ${mq[bp]} {
                display: none;
            }
        `,
    }),
    {} as Record<RuleT, SerializedStyles>,
);
