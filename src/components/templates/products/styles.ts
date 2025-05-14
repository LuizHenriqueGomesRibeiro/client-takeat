import styled from "styled-components";
import themes from "../../../themes";

export const ProductsPageBody = styled.div`
    background-color: ${themes.background};
    padding: 10px 10px 140px 10px;
    display: flex;
    flex-direction: column;
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
    margin: 20px 0 20px 0;
    display: flex;
    gap: 30px;
`