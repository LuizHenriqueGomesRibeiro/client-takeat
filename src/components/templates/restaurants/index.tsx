import { Asset } from "../../atoms";
import { Component } from "./styles";

const Index = () => <Component>
    <Asset name="whitefoodgo" />
    <div>
        {[1,2,2,3,2,2,2,2,2,2,2,2,2, 2,2,2,2,22,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,].map(() => <div>hello </div>)}
    </div>
</Component>

export default Index;