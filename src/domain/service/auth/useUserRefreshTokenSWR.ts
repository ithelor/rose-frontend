import useSWRMutation from 'swr/mutation';
import { useState } from 'react';
import { GET_USER, USER_REFRESH } from 'constant/route';
import User from 'domain/entity/User';
import useUserStore from 'domain/store/user/useUserStore';
import { frontendApiClient } from 'data/driver/ApiClient/frontend';

interface RefreshResponse {
    token: string;
}

export function useUserRefreshTokenSWR() {
    const { setUser, getIsAuthorized } = useUserStore((state) => state);
    const isAuthorized = getIsAuthorized();
    const [isLoading, setIsLoading] = useState(true);
    const {
        data,
        trigger: originalTrigger,
        isMutating,
        ...restProps
    } = useSWRMutation(
        () => (isAuthorized ? null : USER_REFRESH),
        async (baseUrl) => {
            return frontendApiClient.rest.post<RefreshResponse>(baseUrl);
        },
        {
            onError: () => {
                // TODO: error handling
                setIsLoading(false);
            },
        },
    );

    return {
        ...restProps,
        isMutating: isMutating || isLoading,
        trigger: async () => {
            setIsLoading(true);

            try {
                const response = await originalTrigger();
                const { headers } = response;
                const { authorization } = headers;

                frontendApiClient.setAccessToken(authorization);
                const { data: responseUser } = await frontendApiClient.rest.get<User>(GET_USER);

                setUser(responseUser);
            } catch (e) {
            } finally {
                setIsLoading(false);
            }
        },
    };
}
