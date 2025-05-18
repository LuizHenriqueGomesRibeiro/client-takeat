import { ProductDataProps } from "../../../core/api-query-objects/types";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, Text } from "../../atoms";
import { Component } from "./styles";

import util from "../../../core/util";

interface ComponentProps {
    product: ProductDataProps
}

const Index = ({ 
    product: { 
        name,
        value,
        description,
    } 
}: ComponentProps) => <Button name="product-card-button">
    <Component>
        <main>
            <Text name="product-name">{name}</Text>
            <Text name="product-subname">{description}</Text>
        </main>
        <footer>
            <div>
                <Text name="product-name">{util.brl(value)}</Text>
            </div>
            <ShoppingCartIcon />
        </footer>
    </Component>
</Button>

export default Index;