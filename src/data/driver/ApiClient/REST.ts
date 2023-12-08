import AbstractAxiosClient from './axios';

export default class REST extends AbstractAxiosClient {
    public post = this._client.post;

    public postForm = this._client.postForm;

    public get = this._client.get;

    public delete = this._client.delete;

    public patch = this._client.patch;
}
