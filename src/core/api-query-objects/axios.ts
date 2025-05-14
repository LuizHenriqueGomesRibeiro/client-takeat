import axios, { AxiosRequestConfig } from "axios";
import { baseURL } from "./api";

const axiosConfig = (config: AxiosRequestConfig): AxiosRequestConfig => {

    return config;
}

const axiosInstance = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
    }
});

export { 
    axiosConfig,
    axiosInstance
};