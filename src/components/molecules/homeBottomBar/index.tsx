import { ShoppingCart } from "../../organisms";
import { HomeBottomBarProps } from "./types";
import { Asset, Text } from "../../atoms";
import { Component } from "./styles";

const Index = ({ ...props }: HomeBottomBarProps) => <>
    <Component>
        <body onClick={props.onOpenDrawer}>
            <div>
                <Asset name="whitefoodgo" height={24}/>
                <Text name="white-order-price">Fazer pedido</Text>
            </div>
            <div>
                <Text name="white-order-price">R$ 16,90</Text>
            </div>
        </body>
        <footer>
            <div>
                <Asset name="back" width={24} height={24} />
                <Asset name="home" width={24} height={24} />
                <Asset name="red-user" width={24} height={24} />
            </div>
        </footer>
    </Component>
    <ShoppingCart {...props} />
</>

export default Index;