import styled from "styled-components";
import themes from "../../../themes";

export const Component = styled.div`
    border-radius: 20px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
    background-color: ${themes.white};
    padding: 15px 11px 14px 11px;
    width: 185px;
    height: 225px;

    > main {
        display: flex;
        flex-direction: column;
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