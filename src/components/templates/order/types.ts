import { OrderArgProps } from "../../../core/api-query-objects/types";
import { fetchOrderStatusProps } from "../../../core/contexts/api";
import { BuyerProps } from "../../../pages/order/types";
import { Control } from "react-hook-form";

export interface CreateOrderProps extends OrderArgProps {
    total_price: number,
    total_service_price: number
}

export interface OrderTemplateProps {
    onSwipeable: (value: boolean) => void,
    onSaveBuyer: () => void,
    onFetch: () => void,
    fetchOrderStatus: fetchOrderStatusProps,
    orderSummary: CreateOrderProps,
    control: Control<BuyerProps>,
    fetchOrderError?: string,
    swipeable: boolean,
    buyer: BuyerProps,
    tax: boolean,
}