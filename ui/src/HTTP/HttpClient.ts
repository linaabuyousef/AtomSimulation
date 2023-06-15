import axios, {AxiosInstance, AxiosResponse} from "axios";
export default class HttpClient {
    protected client: AxiosInstance;

    constructor() {
        this.client = axios.create({});
    }
    
    private onFulfilled = <T>(res: AxiosResponse<T>) => res.data;

    protected get<T = any>(url: string, params: object = {}): Promise<T> {
        return this.client.get<T>(url, {params}).then(this.onFulfilled);
    }

    protected post<T = any>(url: string, payload: object = {}, config: object = {}): Promise<T> {
        return this.client.post<T>(url, payload, config).then(this.onFulfilled);
    }

    protected put<T>(url: string, payload: object = {}): Promise<T> {
        return this.client.put<T>(url, payload).then(this.onFulfilled);
    }

    protected delete<T>(url: string, params: object = {}): Promise<T> {
        return this.client.delete<T>(url, {params}).then(this.onFulfilled);
    }
}