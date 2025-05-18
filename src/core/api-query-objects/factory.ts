import { createClientNextArchitecture } from "@caucolum/api-query-object";
import { privateApi, publicApi } from "./api";
import { AxiosRequestConfig } from "axios";
import { axiosInstance } from "./axios";
import { parseCookies } from 'nookies';

const publicClient = createClientNextArchitecture(publicApi, (config: AxiosRequestConfig): AxiosRequestConfig => {

    return config;
}, axiosInstance);

const privateClient = createClientNextArchitecture(privateApi, (config: AxiosRequestConfig): AxiosRequestConfig => {
    const { token } = parseCookies();

    if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
}, axiosInstance);

export {
    publicClient,
    privateClient
}