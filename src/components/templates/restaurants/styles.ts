import styled from "styled-components";
import themes from "../../../themes";

export const Component = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to top, ${themes.red}, ${themes["clean-red"]});
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    > img {
        
    }

    > div {
        max-width: 500px;
        max-height: 600px;
        background-color: rebeccapurple;
        flex-direction: column;
        display: flex;
        

    }
`