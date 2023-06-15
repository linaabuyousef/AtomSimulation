import {AxiosError} from "axios";
import {toast} from "react-toastify";
import moment from 'moment-timezone';

const onError = (error: AxiosError) => {
    console.error(`API Error:`, error.toJSON());
    toast.error(JSON.stringify(error)); // Convert the error object to a string
    return Promise.reject(error);
};

export const requestInterceptors = (config: { headers: { tz: string; }; }) => {
    config.headers.tz = moment.tz.guess();
    return config;
}

const onSuccess = (config: any) => {
    return requestInterceptors(config);
};

export default [onSuccess, onError];