type StringTuple = [one: string, few: string, many: string];

export default function getStringByNumber(
    number: number,
    strings: StringTuple | Readonly<StringTuple>,
): string {
    const cases = [2, 0, 1, 1, 1, 2];
    const stringIndex = number % 100 > 4 && number % 100 < 20 ? 2 : cases[Math.min(number % 10, 5)];

    return strings[stringIndex];
}
