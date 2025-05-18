import { CreateOrderArgProps } from "../../core/api-query-objects/types";
import { OrderTemplate } from "../../components/templates";
import { useApi } from "../../core/contexts/api";

const Index = () => {
    const { order, restaurant, handleSendOrder } = useApi();

    if (!order) {
        return;
    }

    const tax = restaurant?.has_service_tax as boolean;

    const total_price = order?.amount * order?.value as number;
    const service = tax ? total_price * 0.1 : 0 as number; 
    const total_service_price = total_price + service as number;

    const orderSummary = {
        total_price,
        service,
        total_service_price,
        buyer_id: 0,
        ...order,
    } as CreateOrderArgProps;

    return <OrderTemplate
        onFetch={() => handleSendOrder(orderSummary)}
        orderSummary={orderSummary}
        tax={tax}
    />
}

export default Index;