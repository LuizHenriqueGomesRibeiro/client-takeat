import { OrderArgProps } from "../../../core/api-query-objects/types";
import util from "../../../core/util";
import { NumberInput, Text } from "../../atoms";
import { Component } from "./styles";

interface ComponentProps {
    order: OrderArgProps | undefined
}

const Index = ({ order }: ComponentProps) => <Component>
    <div>
        <Text name="grey-order-price">{order?.name}</Text>
        <Text name="grey-order-price">{order && util.brl(order.value)}</Text>
    </div>
    <section>
        <NumberInput
            amount={order?.amount}
        />
    </section>
</Component>

export default Index;