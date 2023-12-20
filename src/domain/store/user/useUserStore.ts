import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import User from 'domain/entity/User';
import RoleEnum from 'domain/entity/RoleEnum';
import { MOCK_USER } from './mock';

type UserState = {
    user: User;
    setUser: (user: User) => void;
    getIsAuthorized: () => boolean;
};

const useUserStore = create<UserState>()(
    devtools((set, getState) => ({
        user: MOCK_USER,
        setUser: (user) => set(() => ({ user })),
        getIsAuthorized: () => {
            return getState().user.id !== '' || !getState().user.roles.includes(RoleEnum.Visitor);
        },
    })),
);

export default useUserStore;
