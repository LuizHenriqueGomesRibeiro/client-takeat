import styled from "styled-components";

export const ProductsPageBody = styled.div`
    padding: 10px 10px 0 10px;
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
    flex-direction: row;
`