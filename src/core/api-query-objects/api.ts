import { OrderArgProps, LoginDataProps, ProductDataProps } from "./types";
import { ApiEndpoint } from "@caucolum/api-query-object";
import { setCookie } from "nookies";
import { del, set } from "idb-keyval";

import pagination from "../pagination";
import routes from "../routes";

const baseURL: string = import.meta.env.VITE_BASE_URL;

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

                set("restaurant", loginData.restaurant);
            },
        },
        DATA_PROPS: {} as LoginDataProps,
        ARGS_PROPS: {} as {
            email: string, 
            password: string
        }
    },
    getProducts: {
        method: 'get',
        url: routes.products,
        clientSideResources: {
            onSuccess({ data }) {
                set('products', data);
            },
        },
        DATA_PROPS: {} as ProductDataProps[]
    },
    createOrder: {
        method: 'post',
        url: routes.orders,
        ARGS_PROPS: {} as OrderArgProps,
        clientSideResources: {
            onSuccess({ redirector }) {
                del("order");
                del("buyer");
                redirector(pagination.success);
            },
            onError({ error }) {
                console.log(error.response.data.error);
            }
        }
    }
} as const satisfies Record<string, ApiEndpoint>;

export {
    api,
};
export {
    baseURL
}