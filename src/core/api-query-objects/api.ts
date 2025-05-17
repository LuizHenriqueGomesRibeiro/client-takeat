import { ApiEndpoint } from "@caucolum/api-query-object";
import { setCookie } from "nookies";

import routes from "../routes";

const baseURL: string = import.meta.env.VITE_BASE_URL;

export interface LoginDataProps {
    restaurant: {
        address: string,
        canceled_at: string,
        created_at: string
        email: string,
        has_service_tax: boolean,
        id: number,
        phone: string,
        username: string
    },
    token: string
}

const api = {
    login: {
        url: routes.login,
        method: 'post',
        clientSideResources: {
            onSuccess({ data }) {
                const loginData = data as LoginDataProps;

                setCookie(null, "token", loginData.token, {
                    path: "/",
                    maxAge: 30 * 24 * 60 * 60,
                });
    
                setCookie(null, "id", loginData.restaurant.id.toString(), {
                    path: "/",
                    maxAge: 30 * 24 * 60 * 60,
                });
            },
        },
        DATA_PROPS: {} as LoginDataProps,
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