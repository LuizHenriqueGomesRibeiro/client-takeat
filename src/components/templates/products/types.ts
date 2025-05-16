
export interface ProductsDrawerProps {
    isDrawerOpen: boolean,
    onOpenDrawer: () => void,
    onCloseDrawer: () => void
    onRedirectOrder: () => void
}

export interface ProductsTemplateProps extends ProductsDrawerProps {
}