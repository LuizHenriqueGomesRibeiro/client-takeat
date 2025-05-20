import { Asset, Button, Text } from "../../atoms";
import { ShoppingCart } from "../../organisms";
import { HomeBottomBarProps } from "./types";
import { Component } from "./styles";

import util from "../../../core/util";

const Index = ({ ...props }: HomeBottomBarProps) => <>
    <Component>
        <Button name="numb-button" onClick={props.onOpenDrawer}>
            <div>
                <Asset name="whitefoodgo" height={24}/>
                <Text name="white-order-price">Fazer pedido</Text>
            </div>
            <div>
                <Text name="white-order-price">
                    {(props.order?.value !== undefined && props.order?.amount !== undefined) && 
                    util.brl(props.order?.value * props.order?.amount)}
                </Text>
            </div>
        </Button>
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