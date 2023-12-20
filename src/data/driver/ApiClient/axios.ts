import axios, { AxiosInstance } from 'axios';

const TIMEOUT_ERROR_MESSAGE = 'TimeoutError';

export default abstract class AbstractAxiosClient {
    protected readonly _client: AxiosInstance;

    public constructor(apiBaseURL: string) {
        this._client = axios.create({
            baseURL: apiBaseURL,
            timeout: 30000,
            timeoutErrorMessage: TIMEOUT_ERROR_MESSAGE,
        });

        this.useTimeoutErrorInterceptor();
    }

    private useTimeoutErrorInterceptor(): void {
        this._client.interceptors.response.use(undefined, (error) => {
            if (error?.message === TIMEOUT_ERROR_MESSAGE) {
                // eslint-disable-next-line no-console
                console.log(JSON.stringify({ TIMEOUT_ERROR_MESSAGE, error }, null, 2));
            }

            throw error;
        });
    }

    public get client(): AxiosInstance {
        return this._client;
    }
}
