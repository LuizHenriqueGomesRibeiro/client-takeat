import { ProductCard } from "../../molecules";
import { Component } from "./styles";

const Index = () => <Component>
    {[1,1,1,11,1,1,1,1,1,1,1, 1].map(_ => <ProductCard/>)}
</Component>

export default Index;