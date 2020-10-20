import axios, { AxiosRequestConfig } from 'axios';

interface PostParams {
    url: string;
    data?: any;
    configParams?: AxiosRequestConfig;
}

interface getParams {
    url: string;
    config?: AxiosRequestConfig;
}

export async function get({ url, config }: getParams) {
    try {
        const { data } = await axios.get(url, config);
        return data;
    } catch (err) {
        return err;
    }
}

export function post({ url, data, configParams }: PostParams) {
    return axios.post(url, data, configParams);
}
