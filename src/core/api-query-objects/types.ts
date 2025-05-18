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

export interface ProductDataProps {
    canceled_at?: string,
    created_at: string
    id: number,
    description: string,
    name: string,
    restaurant_id: number,
    value: number,
}[];

export interface OrderArgProps {
    amount: number,
    product_id: number,
    phone: string,
    name: string
};