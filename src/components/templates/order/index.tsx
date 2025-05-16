import { Asset, Button, Text } from "../../atoms";
import { OrderTemplateProps } from "./types";
import { Component } from "./styles";

const Index = ({ onNavigateUser }: OrderTemplateProps) => <Component>
    <body>
        <div>
            <Asset name="foodgo" width={250} />
            <Text name="delivery-subtitle">Peça sua comida predileta</Text>
        </div>
        <header>
            <div>
                <Text name="order-summary">Informações do cliente</Text>
                <Button name="product-card-button">
                    <Asset name="brownuser" width={14} height={14} />
                    <Text name="edit-user-info">editar dados do cliente</Text>
                </Button>
            </div>
            <section>
                <div>
                    <Text name="order-summary-info">Nome</Text>
                    <Text name="order-summary-info">José Pereira da Silva</Text>
                </div>
                <div>
                    <Text name="order-summary-info">Telefone</Text>
                    <Text name="order-summary-info">92832-2182</Text>
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
                            <Text name="order-summary-info">R$ 17,00</Text>
                        </div>
                        <div>
                            <Text name="order-summary-info">Taxa de entrega</Text>
                            <Text name="order-summary-info">R$ 1,20</Text>
                        </div>
                    </div>
                    <div>
                        <Text name="order-summary-total">Total</Text>
                        <Text name="order-summary-total">R$ 18,90</Text>
                    </div>
                </section>
            </div>
        </main>
        <footer>
            <Text name="edit-user-info">Tempo estimado de entrega: 15min - 30min</Text>
            <Button name='continue-order-button' onClick={onNavigateUser}>
                <Text name='white-order-price'>PAGAR</Text>
            </Button>
        </footer>
    </body>
</Component>

export default Index;