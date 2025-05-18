import { OrderArgProps, ProductDataProps } from "../../../core/api-query-objects/types";
import { ProductCard } from "../../molecules";
import { Component } from "./styles";

interface ComponentProps {
  products: ProductDataProps[],
  onSelectProduct: (args: OrderArgProps) => void,
}

const Index = ({ products, onSelectProduct }: ComponentProps) => <Component>
  {products.map((product: ProductDataProps) => <div onClick={() => onSelectProduct({
    amount: 1,
    name: product.name,
    product_id: product.id,
    value: product.value,
  })}>
    <ProductCard product={product} />
  </div>)}
</Component>

export default Index;