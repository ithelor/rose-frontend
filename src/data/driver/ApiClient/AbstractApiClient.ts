import type { AxiosInstance } from 'axios';
import REST from './REST';

export default abstract class AbstractApiClient {
    public abstract rest: REST;

    private accessToken?: string;

    public setAccessToken(token?: string) {
        this.accessToken = token;
    }

    public getAccessToken() {
        return this.accessToken;
    }

    protected useCredentialsInterceptor(client: AxiosInstance) {
        client.interceptors.request.use((request) => {
            if (this.accessToken && request.headers) {
                request.headers.Authorization = `Bearer ${this.accessToken}`;
            }

            return request;
        }, Promise.reject);
    }
}
