import styled from "styled-components";
import themes from "../../../themes";

export const Component = styled.div`
    > header {
        display: flex;
        flex-direction: column;
        padding: 10px 10px 0 10px;

        > div:first-child {
            display: flex;
            align-items: center;
            gap: 4px;

            > img {
                cursor: pointer;
            }
        }

        > div:last-child {
            border-bottom: 1px solid ${themes.grey};
        }
    }

    > main {
        border-bottom: 1px solid ${themes.grey};
        height: calc(100vh - 230px);
        display: flex;
        flex-direction: column;
        padding: 24px;
        gap: 18px;
    }

    > footer {
        height: 80px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;

        > div {
            display: flex;
            justify-content: space-between;
        }

        > section {
            display: flex;
            gap: 10px;
        }
    }
`