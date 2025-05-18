import { ProductsTemplate } from "../../components/templates";
import { useApi } from "../../core/contexts/order";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import pagination from "../../core/pagination";

const ProductsPage = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
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

    const { products } = useApi();
    console.log(products);

    return <ProductsTemplate
        isDrawerOpen={isDrawerOpen}
        onOpenDrawer={handleOpenDrawer}
        onCloseDrawer={handleCloseDrawer}
        onRedirectOrder={handleRedirectOrder}
    />
}

export default ProductsPage;