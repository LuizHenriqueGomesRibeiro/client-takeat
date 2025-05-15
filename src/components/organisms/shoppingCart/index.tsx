import { SwipeableDrawer, Button as Box } from '@mui/material';
import { ShoppingCartProps } from "./types";
import { Component } from "./styles";
import { Asset, Button, Text } from '../../atoms';

const Index = ({ isDrawerOpen, onOpenDrawer, onCloseDrawer }: ShoppingCartProps) => <SwipeableDrawer
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

        </main>
        <footer>
            <div>
                <Text name='grey-order-price'>Total</Text>
                <Text name='grey-order-price'>R$ 20,50</Text>
            </div>
            <section>
                <Button name='cancel-order-button'>
                    <Text name='red-order-price'>Cancelar</Text>
                </Button>
                <Button name='continue-order-button'>
                    <Text name='white-order-price'>Continuar pedido</Text>
                </Button>
            </section>
        </footer>
    </Component>
</SwipeableDrawer>

export default Index;