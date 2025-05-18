import { OrderArgProps, ProductDataProps } from "../../../core/api-query-objects/types";

export interface ProductsDrawerProps {
    order: OrderArgProps | undefined, 
    products: ProductDataProps[],
    isDrawerOpen: boolean,
    onOpenDrawer: () => void,
    onCloseDrawer: () => void,
    onRedirectOrder: () => void,
    onSelectProduct: (args: OrderArgProps) => void
}

export interface ProductsTemplateProps extends ProductsDrawerProps {

}