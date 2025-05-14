import { ProductsPageBody, ProductsPageHeader, ProductsPageSettings } from "./styles";
import { Asset, Button, SearchInput, Text } from "../../atoms";
import { ProductsList } from "../../organisms";
import { HomeBottomBar } from "../../molecules";

const Products = () => <>
    <ProductsPageBody>
        <ProductsPageHeader>
            <div>
                <Asset name="foodgo" width={129} height={61}/>
                <Text name="delivery-subtitle">Peça sua comida predileta</Text>
            </div>
            <div>
                <Button name="upper-user-button">
                    <Asset name="user" width={30} height={30}/>
                </Button>
            </div>
        </ProductsPageHeader>
        <ProductsPageSettings>
            <SearchInput />
            <div>
                <Button name="upper-user-button">
                    <Asset name="settings" width={25} height={25}/>
                </Button>
            </div>
        </ProductsPageSettings>
        <ProductsList/>
    </ProductsPageBody>
    <HomeBottomBar/>
</>

export default Products;