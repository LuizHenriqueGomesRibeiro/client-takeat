import { Asset, Button, Text } from '../../atoms';
import { ProductCartCard } from '../../molecules';
import { SwipeableDrawer } from '@mui/material';
import { ShoppingCartProps } from "./types";
import { Component } from "./styles";
import util from '../../../core/util';

const Index = ({ order, isDrawerOpen, onOpenDrawer, onCloseDrawer, onRedirectOrder }: ShoppingCartProps) => <SwipeableDrawer
    anchor="bottom"
    open={isDrawerOpen}
    onClose={onCloseDrawer}
    onOpen={onOpenDrawer}
    PaperProps={{
        sx: { height: '100vh' },
    }}
>
    <Component>
        <header>
            <div>
                <Asset name='back' onClick={onCloseDrawer} height={24} width={24}/>
                <Text name='shopping-cart-text' >Carrinho</Text>
            </div>
            <div>
                <Text name='delivery-subtitle'>Itens</Text>
            </div>
        </header>
        <main>
            {order?.value && <ProductCartCard
                order={order}
            />}
        </main>
        <footer>
            <div>
                <Text name='grey-order-price'>Total:</Text>
                <Text name='grey-order-price'>{(order?.value !== undefined && order?.amount !== undefined) && util.brl(
                    order?.value * order?.amount
                )}</Text>
            </div>
            <section>
                <Button name='cancel-order-button' onClick={onCloseDrawer}>
                    <Text name='red-order-price'>cancelar</Text>
                </Button>
                <Button name='continue-order-button' onClick={onRedirectOrder}>
                    <Text name='white-order-price'>CONTINUAR PEDIDO</Text>
                </Button>
            </section>
        </footer>
    </Component>
</SwipeableDrawer>

export default Index;