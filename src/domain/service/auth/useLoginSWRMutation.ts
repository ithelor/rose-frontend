import { GET_USER, USER_LOGIN } from 'constant/route';
import type User from 'domain/entity/User';
import { frontendApiClient } from 'data/driver/ApiClient/frontend';
import useUserStore from 'domain/store/user/useUserStore';
import useCustomSWRMutation from 'domain/service/useCustomSWRMutation';

interface LoginPayload {
    email: string;
    password: string;
}

interface LoginResponse {
    token: string;
}

const useLoginSWRMutation = () => {
    const setUser = useUserStore((state) => state.setUser);
    const { trigger, ...restProps } = useCustomSWRMutation<LoginPayload, LoginResponse>(USER_LOGIN);

    return {
        ...restProps,
        trigger: async (loginPayload: LoginPayload) => {
            const { data } = await trigger(loginPayload);
            const { token } = data;
            frontendApiClient.setAccessToken(token);
            const { data: user } = await frontendApiClient.rest.get<User>(GET_USER);

            if (user) {
                return setUser(user);
            }

            frontendApiClient.setAccessToken(undefined);
        },
    };
};

export default useLoginSWRMutation;
