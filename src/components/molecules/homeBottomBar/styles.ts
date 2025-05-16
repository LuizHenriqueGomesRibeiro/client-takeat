import styled from "styled-components";
import themes from "../../../themes";

export const Component = styled.div`
    width: 100%;
    position: fixed;
    float: 10;
    bottom: 0;
    left: 0;
    
    > div {
        background-color: ${themes.red};
        float: 11;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0 20px;
        height: 50px;
        
        > div:first-child {
            margin-right: auto;
            display: flex;
            gap: 12px;

            > img {
                position: relative;
                top: 3px;
            }

            > span {
                position: relative;
            }
        }

        > div:last-child {
        }
    }
    
    > footer {
        background-color: ${themes.white};
        height: 70px;
        display: flex;
        justify-content: center;

        > div {
            display: flex;
            gap: 16px;
            margin: auto;
            width: 100%;
            justify-content: space-around;
        }
    }
`