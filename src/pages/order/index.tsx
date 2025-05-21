import { CreateOrderProps } from "../../components/templates/order/types";
import { OrderTemplate } from "../../components/templates";
import { useApi } from "../../core/contexts/api";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { get, set } from "idb-keyval";
import { BuyerProps } from "./types";

import pagination from "../../core/pagination";

const Index = () => {
    const navigate = useNavigate();
    const { order, restaurant, handleSendOrder, fetchOrderError, fetchOrderStatus } = useApi();
    const [ swipeable, setSwipeable ] = useState<boolean>(false);
    const { watch, setValue, control } = useForm<BuyerProps>({
        defaultValues: {
            name: '',
            phone: ''
        }
    });
    
    const buyer = watch();

    useEffect(() => {
        const trigger = async () => {
            const idbBuyer = await get('buyer') as BuyerProps;

            if (idbBuyer.name !== '') {
                setValue('name', idbBuyer.name);
            }
            
            if (idbBuyer.phone !== '') {
                setValue('phone', idbBuyer.phone);
            }
        }

        trigger();
    }, []);

    const handleSwitchModal = (value: boolean) => {
        setSwipeable(value);
    }

    const handleSaveBuyer = () => {
        set('buyer', buyer);
        handleSwitchModal(false);
    }

    if (!order) {
        navigate(pagination.products);
        return;
    }

    const tax = restaurant?.has_service_tax as boolean;

    //@ts-ignore
    const total_price = order?.amount * order?.value as number;
    const service = tax ? total_price * 0.1 : 0 as number; 
    const total_service_price = total_price + service as number;

    const orderSummary = {
        total_service_price,
        total_price,
        service,
        name: buyer.name,
        phone: buyer.phone,
        amount: order.amount,
        product_id: order.product_id,
        value: order.value
    } as CreateOrderProps;

    return <OrderTemplate
        onFetch={() => handleSendOrder(orderSummary)}
        onSwipeable={handleSwitchModal}
        onSaveBuyer={handleSaveBuyer}
        fetchOrderStatus={fetchOrderStatus}
        fetchOrderError={fetchOrderError}
        orderSummary={orderSummary}
        swipeable={swipeable}
        control={control}
        buyer={buyer}
        tax={tax}
    />
}

export default Index;