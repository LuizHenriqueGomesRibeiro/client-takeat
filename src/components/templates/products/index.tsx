import { ProductsPageBody, ProductsPageHeader } from "./styles";
import { Asset, Text } from "../../atoms";
import { ProductsTemplateProps } from "./types";
import { HomeBottomBar } from "../../molecules";
import { ProductsList } from "../../organisms";

const Products = ({ ...props }: ProductsTemplateProps) => <>
    <ProductsPageBody>
        <ProductsPageHeader>
            <div>
                <Asset name="foodgo" width={129} height={61}/>
                <Text name="delivery-subtitle">Peça sua comida predileta</Text>
            </div>
        </ProductsPageHeader>
        <ProductsList 
            products={props.products}
            onSelectProduct={props.onSelectProduct}
        />
    </ProductsPageBody>
    {(props.order?.value !== undefined && props.order?.amount !== undefined) && <HomeBottomBar {...props}/>}
</>

export default Products;