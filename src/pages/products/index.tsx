import { ProductsTemplate } from "../../components/templates";
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

    return <ProductsTemplate
        isDrawerOpen={isDrawerOpen}
        onOpenDrawer={handleOpenDrawer}
        onCloseDrawer={handleCloseDrawer}
        onRedirectOrder={handleRedirectOrder}
    />
}

export default ProductsPage;