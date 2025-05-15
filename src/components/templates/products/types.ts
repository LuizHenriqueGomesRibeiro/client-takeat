
export interface ProductsDrawerProps {
    isDrawerOpen: boolean,
    onOpenDrawer: () => void,
    onCloseDrawer: () => void
}

export interface ProductsTemplateProps extends ProductsDrawerProps {
}