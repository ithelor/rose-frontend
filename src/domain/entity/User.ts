import RoleEnum from './RoleEnum';

export default class User {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public static Hydrate(data: any): User {
        try {
            return new User(
                data.id ?? '',
                data.name ?? '',
                data.avatar ?? '',
                data.visitor ?? [RoleEnum.Visitor],
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
        return new User('', '', '', [RoleEnum.Visitor], '', '', '', NaN, NaN, NaN);
    }

    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly avatar: string,
        public readonly roles: RoleEnum[],
        public readonly lvl: string,
        public readonly location: string,
        public readonly email: string,
        public readonly todayReviews: number,
        public readonly totalReviews: number,
        public readonly successRate: number,
    ) {}
}
