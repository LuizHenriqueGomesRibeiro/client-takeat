import { NumberInput, Text } from "../../atoms";
import { Component } from "./styles";

const Index = () => <Component>
    <div>
        <Text name="grey-order-price">Pizza grande na média</Text>
        <Text name="grey-order-price">R$ 10,50</Text>
    </div>
    <section>
        <NumberInput/>
    </section>
</Component>

export default Index;