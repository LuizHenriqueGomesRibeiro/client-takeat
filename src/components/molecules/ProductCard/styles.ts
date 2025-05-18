import styled from "styled-components";
import themes from "../../../themes";

export const Component = styled.div`
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
    padding: 15px 11px 20px 11px;
    border-radius: 20px;
    width: 185px;

    background-color: ${themes.white};
    justify-content: space-between;
    flex-direction: column;
    display: flex;
    gap: 10px;

    > main {
        flex-direction: column;
        display: flex;
    }

    > footer {
        justify-content: space-between;
        align-items: center;
        display: flex;
        
        > div {
            display: flex;
            gap: 5px;
        }
    }
`