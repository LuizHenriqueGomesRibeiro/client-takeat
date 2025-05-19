import { OrderArgProps } from "../../core/api-query-objects/types";
import { ProductsTemplate } from "../../components/templates";
import { useApi } from "../../core/contexts/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import pagination from "../../core/pagination";

const ProductsPage = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
    const { order, products, handleSelectProduct } = useApi();

    const navigate = useNavigate();

    const handleRedirectOrder = () => {
        navigate(pagination.order);
    }

    const handleOpenDrawer = () => {
        setIsDrawerOpen(true);
    }

    const handleCloseDrawer = () => {
        setIsDrawerOpen(false);
    }

    const onSelectProduct = (args: OrderArgProps) => {
        handleSelectProduct(args);
        handleOpenDrawer();
    }

    if (!products) {
        return;
    }

    return <ProductsTemplate
        onRedirectOrder={handleRedirectOrder}
        onCloseDrawer={handleCloseDrawer}
        onSelectProduct={onSelectProduct}
        onOpenDrawer={handleOpenDrawer}
        isDrawerOpen={isDrawerOpen}
        products={products}
        order={order}
    />
}

export default ProductsPage;