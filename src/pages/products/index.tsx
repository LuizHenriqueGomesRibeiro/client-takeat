import { useState } from "react";
import { ProductsTemplate } from "../../components/templates";

const Products = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

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
    />
}

export default Products;