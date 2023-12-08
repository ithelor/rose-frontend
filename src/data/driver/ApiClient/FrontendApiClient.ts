import { API_BASE_URL } from 'constant/env';
import AbstractApiClient from './AbstractApiClient';
import REST from './REST';

export default class FrontendApiClient extends AbstractApiClient {
    public readonly rest: REST;

    constructor() {
        super();
        this.rest = new REST(`${API_BASE_URL}/api`);

        this.useCredentialsInterceptor(this.rest.client);
    }
}
