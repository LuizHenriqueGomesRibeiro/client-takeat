import { ApiEndpoint } from "@caucolum/api-query-object";
import routes from "../routes";

const baseURL: string = import.meta.env.VITE_BASE_URL;

const api = {
    login: {
        url: routes.login,
        method: 'post',
        clientSideResources: {
            disabledClientSideRequest: true,
        },
        ARGS_PROPS: {} as {
            email: string, 
            password: string
        }
    }
} as const satisfies Record<string, ApiEndpoint>;

export default api;
export {
    baseURL
}