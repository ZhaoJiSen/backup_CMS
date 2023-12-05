import Request from './request/index';
import type { AxiosResponse } from 'axios';

import type { RequestConfig } from '@/API/request';

export interface MyResponse<T> {
    statusCode: number;
    desc: string;
    result: T;
}

interface MyRequestConfig<T, R> extends RequestConfig<MyResponse<R>> {
    data?: T;
}

const request = new Request({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 1000 * 60 * 5,
    interceptors: {
        // 请求拦截器
        requestInterceptors: config => config,
        // 响应拦截器
        responseInterceptors: (result: AxiosResponse) => {
            return result;
        }
    }
});

const MyRequest = <D = any, T = any>(config: MyRequestConfig<D, T>) => {
    const { method = 'GET' } = config;
    if (method === 'get' || method === 'GET') {
        config.params = config.data;
    }
    return request.request<MyResponse<T>>(config);
};

export default MyRequest;
