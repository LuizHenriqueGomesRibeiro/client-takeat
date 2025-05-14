import { ApiEndpoint } from "@caucolum/api-query-object";

const baseURL: string = '';

const api = {
 
} as const satisfies Record<string, ApiEndpoint>;

export default api;
export {
    baseURL
}