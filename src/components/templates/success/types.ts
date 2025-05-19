import styled from "styled-components";
import themes from "../../../themes";

export const Component = styled.div`
    background-color: ${themes["grey-background"]};
    height: 100vh;

    display: flex;

    > div {
        background-color: ${themes.white};
        border-radius: 45px;
        padding: 20px;
        width: 600px;
        bottom: 40px;

        flex-direction: column;
        align-items: center;
        position: relative;
        display: flex;
        margin: auto;

    }
`