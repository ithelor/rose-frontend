import getStringByNumber from 'helper/string/getStringByNumber';

export const requiredField = 'Поле обязательно для заполнения';
export const minSymbols = ({ min }: { min: number }) =>
    `Минимум ${min} ${getStringByNumber(min, ['символ', 'символа', 'символов'])}`;
export const maxSymbols = ({ max }: { max: number }) =>
    `Максимум ${max} ${getStringByNumber(max, ['символ', 'символа', 'символов'])}`;
