import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import User from 'domain/entity/User';
import { MOCK_USER } from './mock';

type UserState = {
    user: User;
};

const useUserStore = create<UserState>()(
    devtools(
        () => ({
            user: MOCK_USER,
        }),
        { name: 'user-storage' },
    ),
);

export default useUserStore;
