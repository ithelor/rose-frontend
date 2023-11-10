export default class User {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public static Hydrate(data: any): User {
        try {
            return new User(data.id ?? NaN, data.avatar ?? '', data.name ?? '', data.lvl ?? NaN);
        } catch (e) {
            return User.CreateEmpty();
        }
    }

    public static CreateEmpty(): User {
        return new User(NaN, '', '', NaN);
    }

    constructor(
        public readonly id: number,
        public readonly avatar: string,
        public readonly name: string,
        public readonly lvl: number,
    ) {}
}
