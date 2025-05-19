import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import themes from '../../../themes';

import { Button, Text } from '../../atoms';
import { Component } from "./types";

const Index = ({ onNavegate }: { onNavegate: () => void }) => <Component>
    <div>
        <CheckCircleIcon sx={{
            color: themes.red,
            width: '80px',
            height: '80px'
        }} />
        <main>
            <Text name="success-title">Sucesso!</Text>
            <Text name="success-order">Seu pagamento foi realizado com sucesso.</Text>
            <Text name="success-order">Um recibo desta compra foi enviado para o seu e-mail.</Text>
        </main>
        <footer>
            <Button name="continue-order-button" onClick={onNavegate}> 
                <Text name="white-order-price">Voltar para o cardápio</Text>
            </Button>
        </footer>
    </div>
</Component>

export default Index;