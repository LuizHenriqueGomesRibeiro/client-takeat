import { CreateOrderArgProps } from "../../../core/api-query-objects/types";

export interface OrderTemplateProps {
    orderSummary: CreateOrderArgProps,
    onFetch: () => void,
    tax: boolean
}