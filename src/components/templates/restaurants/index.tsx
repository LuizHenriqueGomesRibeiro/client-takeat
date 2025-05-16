import { Tooltip, Typography } from '@mui/material';
import { Asset, Button, Text } from "../../atoms";
import { Component } from "./styles";

const Index = () => <Component>
    <Asset name="whitefoodgo" />
    <div>
        {[1,2,2,3,2,2,2,2,2,2,2,2,2, 2,2,2,2,22,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,].map(() => <Button name="numb-button">
            <section>
                <div>
                    <Text name="product-name">Restaurante da Titia</Text>
                    <Text name="small-product-subname">Rua Alcides Lyrio do Nascimento</Text>
                </div>
                <section>
                    <Text name="small-product-subname">melhor opção</Text>
                    <Tooltip title="Este restaurante cobra taxa de entrega" followCursor>
                        <Typography sx={{ cursor: 'pointer', fontSize: '1.5rem' }}>
                            <Text name="red-order-price">!</Text>
                        </Typography>
                    </Tooltip>
                </section>
            </section>
        </Button>)}
    </div>
</Component>

export default Index;