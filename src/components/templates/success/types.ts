import styled from "styled-components";
import themes from "../../../themes";

export const Component = styled.div`
    background-color: ${themes["grey-background"]};
    justify-content: center;
    display: flex;
    
    padding: 0 15px;
    height: 100vh;

    > div {
        background-color: ${themes.white};
        border-radius: 45px;
        padding: 30px 20px 50px 20px;
        width: 600px;
        bottom: 40px;

        flex-direction: column;
        align-items: center;
        position: relative;
        display: flex;
        margin: auto;
        
        > main {
            flex-direction: column;
            display: flex;

            > span {
                text-align: center;
            }
        }

        > footer {
            padding-top: 15px;
            
            > div {
                > span {
                    padding: 0 12px;
                }
            }
        }
    }
`