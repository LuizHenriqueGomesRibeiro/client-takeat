import styled from "styled-components";
import themes from "../../../themes";

export const Component = styled.div`
    background: linear-gradient(to top, ${themes.red}, ${themes["clean-red"]});
    height: 100%;
    gap: 20px;
    
    justify-content: center;
    flex-direction: column;
    align-items: center;
    display: flex;

    background-size: cover, contain;
    background-repeat: no-repeat, no-repeat;
    background-position: top, bottom right;
    
    > * {
        position: relative;
        z-index: 1;
    }
    
    > div::-webkit-scrollbar {
        width: 4px;
    }
    
    > div::-webkit-scrollbar-track {
        background: transparent;
    }
    
    > div::-webkit-scrollbar-thumb {
        background-color: ${themes.white};
        border-radius: 4px;
    }

    > div {
        flex-direction: column;
        overflow-y: auto;
        display: flex;
        
        padding: 10px 4px 10px 10px;
        max-height: 70%;
        gap: 10px;

        > div {
            > section {
                display: flex;
                flex-direction: column;
                background-color: ${themes.white};
                border-radius: 20px;
                box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
                padding: 16px 12px;
                min-width: 400px;
                gap: 10px;
    
                > div {
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-end;
                    
                    > span {
                    }
                }

                > div {
                    display: flex;
                    justify-content: space-between;
                }
    
                > section {
                    display: flex;
                    justify-content: space-between;
                }
            }
        }
    }
`