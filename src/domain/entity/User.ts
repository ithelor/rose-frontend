export default class User {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public static Hydrate(data: any): User {
        try {
            return new User(
                data.id ?? NaN,
                data.name ?? '',
                data.avatar ?? '',
                data.lvl ?? '',
                data.location ?? '',
                data.email ?? '',
                data.todayReviews ?? NaN,
                data.totalReviews ?? NaN,
                data.successRate ?? NaN,
            );
        } catch (e) {
            return User.CreateEmpty();
        }
    }

    public static CreateEmpty(): User {
        return new User(NaN, '', '', '', '', '', NaN, NaN, NaN);
    }

    constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly avatar: string,
        public readonly lvl: string,
        public readonly location: string,
        public readonly email: string,
        public readonly todayReviews: number,
        public readonly totalReviews: number,
        public readonly successRate: number,
    ) {}
}
