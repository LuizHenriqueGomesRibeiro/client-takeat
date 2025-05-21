import { createClientNextArchitecture } from "@caucolum/api-query-object";
import { AxiosRequestConfig } from "axios";
import { axiosInstance } from "./axios";
import { parseCookies } from 'nookies';
import { api } from "./api";

const client = createClientNextArchitecture(api, (config: AxiosRequestConfig): AxiosRequestConfig => {
    const { token } = parseCookies();

    if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
}, axiosInstance);

export {
    client,
}