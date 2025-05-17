import { createClientNextArchitecture, createServerNextArchitecture } from "@caucolum/api-query-object";
import { axiosConfig, axiosInstance } from "./axios";

import api from "./api";

const client = createClientNextArchitecture(api, axiosConfig, axiosInstance);
const server = createServerNextArchitecture(api, axiosConfig, axiosInstance);

export {
    client,
    server
}