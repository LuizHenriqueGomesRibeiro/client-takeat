import styled from "styled-components";
import themes from "../../../themes";

export const Component = styled.div`
    height: 100vh;
    display: flex;
    margin: auto;
    padding: 0 10px;
    justify-content: center;
    
    > body {
        padding: 0 0 80px 0;
        max-width: 1000px;
        width: 100%;
        
        align-content: center;

        > div {
            flex-direction: column;
            align-items: center;
            display: flex;
            margin: auto;

            padding-bottom: 20px;

            > img {
                display: flex;
            }
        }

        > main {
            > div {
                > section {
                    padding-bottom: 10px;
                    margin: 10px;
                    
                    > div:first-child {
                        border-bottom: 1px solid ${themes.grey};
                        padding-bottom: 5px;
                        
                        > div {
                            display: flex;
                            flex-direction: row;
                            justify-content: space-between;
                        }
                    }
                    
                    > div:last-child {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        margin-top: 5px;
                    }
                }
            }
        }
    
        > header {
            > div {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
    
                > div {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 2px 10px 2px 10px;
    
                    > span {
                        height: auto;
                        align-content: center;
                    }
                }
            }
    
            > section {
                padding: 10px;
    
                > div {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                }
            }
        }

        > footer {
            display: flex;
            flex-direction: column;
            gap: 10px;

            > span {
                margin: auto;
                
            }
        }
    }
`

export const Swipeable = styled.div`
    flex-direction: column;
    display: flex;
    margin: auto;

    max-width: 1000px;
    min-width: 300px;
    gap: 20px;

    > div:last-child {
        margin: auto;
    }

    > img {
        margin-bottom: 20px;
    }
`