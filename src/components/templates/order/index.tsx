import { Asset, Button, SimpleInput, Text } from "../../atoms";
import { Component, Swipeable } from "./styles";
import { SwipeableDrawer } from "@mui/material";
import { OrderTemplateProps } from "./types";

import RestartAltIcon from '@mui/icons-material/RestartAlt';
import CloseIcon from '@mui/icons-material/Close';
import util from "../../../core/util";
import themes from "../../../themes";

const Index = ({ orderSummary: {
    total_price,
    total_service_price,
}, onFetch, onSwipeable, onSaveBuyer, tax, swipeable, control, buyer, fetchOrderError, fetchOrderStatus }: OrderTemplateProps) => <>
    <Component>
        <body>
            <div>
                <Asset name="foodgo" width={250} />
                <Text name="delivery-subtitle">Peça sua comida predileta</Text>
            </div>
            <header>
                <div>
                    <Text name="order-summary">Informações do cliente</Text>
                    <Button name="product-card-button" onClick={() => onSwipeable(true)}>
                        <Asset name="brownuser" width={14} height={14} />
                        <Text name="edit-user-info">editar dados do cliente</Text>
                    </Button>
                </div>
                <section>
                    <div>
                        <Text name="order-summary-info">Nome</Text>
                        <Text name="order-summary-info">{buyer.name || '-'}</Text>
                    </div>
                    <div>
                        <Text name="order-summary-info">Telefone</Text>
                        <Text name="order-summary-info">{buyer.phone || '-'}</Text>
                    </div>
                </section>
            </header>
            <main>
                <div>
                    <Text name="order-summary">Resumo do pedido</Text>
                    <section>
                        <div>
                            <div>
                                <Text name="order-summary-info">Pedido</Text>
                                <Text name="order-summary-info">{util.brl(total_price)}</Text>
                            </div>
                            {tax && <div>
                                <Text name="order-summary-info">Taxa de serviço</Text>
                                <Text name="order-summary-info">{util.brl(total_service_price - total_price)}</Text>
                            </div>}
                        </div>
                        <div>
                            <Text name="order-summary-total">Total</Text>
                            <Text name="order-summary-total">{util.brl(total_service_price)}</Text>
                        </div>
                    </section>
                </div>
            </main>
            <footer>
                <Text name="edit-user-info">Tempo estimado de entrega: 15min - 30min</Text>
                <Button name='continue-order-button' onClick={onFetch}>
                    {fetchOrderStatus === 'loading' ? <RestartAltIcon sx={{ color: themes.white, animation: 'spin 2s linear infinite',
                        '@keyframes spin': {
                        '0%': { transform: 'rotate(360deg)' },
                        '100%': { transform: 'rotate(0deg)' },
                    }, }} /> : 
                        <Text name='white-order-price'>PAGAR</Text>}
                </Button>
                <Text name="red-order-price">{fetchOrderError}</Text>
            </footer>
        </body>
    </Component>
    <SwipeableDrawer
        onClose={() => onSwipeable(false)}
        onOpen={() => onSwipeable(true)}
        open={swipeable}
        anchor="bottom"
        PaperProps={{
            sx: { height: '100vh' },
        }}
    >
        <Swipeable>
            <Asset name="foodgo" />
            <SimpleInput
                control={control}
                placeholder="Nome do destinatário"
                label="Nome do destinatário"
                name="name"
            />
            <SimpleInput
                control={control}
                placeholder="Telefone do destinatário"
                label="Telefone do destinatário"
                name="phone"
            />
            <Button name="continue-order-button" onClick={onSaveBuyer}>
                <Text name="white-order-price">Salvar</Text>
            </Button>
            <div>
                <Button name="product-card-button" onClick={() => onSwipeable(false)}>
                    <CloseIcon sx={{ width: '55px', height: '55px', color: themes.red }} />
                </Button>
            </div>
        </Swipeable>
    </SwipeableDrawer>
</>

export default Index;