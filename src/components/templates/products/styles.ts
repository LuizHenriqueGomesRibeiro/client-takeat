import styled from "styled-components";
import themes from "../../../themes";

export const ProductsPageBody = styled.div`
    background-color: ${themes.background};
    width: 100vw;
    height: 100vh;
`

export const ProductsPageHeader = styled.div`
    display: flex;
    justify-content: space-between;
    
    > div:first-child {
        display: flex;
        flex-direction: column;
    }
`

export const ProductsPageSettings = styled.div`
    display: flex;
    gap: 30px;
`