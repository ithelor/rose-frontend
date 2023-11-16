import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import User from 'domain/entity/User';
import { MOCK_USER } from './mock';

type UserState = {
    user: User;
    setUser: (user: User) => void;
};

const useUserStore = create<UserState>()(
    devtools(
        persist(
            (set) => ({
                user: MOCK_USER,
                setUser: (user) => set(() => ({ user })),
            }),
            { name: 'user-storage' },
        ),
    ),
);

export default useUserStore;
