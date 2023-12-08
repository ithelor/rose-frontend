import { AxiosResponse } from 'axios';
import useSWRMutation from 'swr/mutation';
import { frontendApiClient } from 'data/driver/ApiClient/frontend';

const useCustomSWRMutation = <Input, Output>(url: string) => {
    return useSWRMutation<AxiosResponse<Output>, unknown, string, Input>(
        url,
        async (baseUrl, options) => {
            return frontendApiClient.rest.post<Output>(baseUrl, options.arg);
        },
    );
};

export default useCustomSWRMutation;
