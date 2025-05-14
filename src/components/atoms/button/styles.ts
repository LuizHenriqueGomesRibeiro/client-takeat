import styled from "styled-components";

interface ComponentProps {
    width: number,
    height: number,
    radius: number,
    color: string
}

export const Component = styled.div<ComponentProps>`
    width: ${props => `${props.width}px`};
    height: ${props => `${props.height}px`};
    border-radius: ${props => `${props.radius}px`};
    background-color: ${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`