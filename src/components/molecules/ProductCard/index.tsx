import { Asset, Text } from "../../atoms";
import { Component } from "./styles";

const Index = () => {

    return <Component>
        <main>
            <Text name="product-name">XTudo</Text>
            <Text name="product-subname">Melhor opção</Text>
        </main>
        <footer>
            <div>
                <Asset name="star" width={16} height={16}/>
                <Text name="product-name">4.6</Text>
            </div>
            <Asset name="heart" width={24} height={24}/>
        </footer>
    </Component>
}

export default Index;