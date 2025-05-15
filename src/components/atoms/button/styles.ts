import styled from "styled-components";

interface ComponentProps {
    width: string,
    height: string,
    radius: number,
    color: string,
    border?: string
}

export const Component = styled.div<ComponentProps>`
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: ${props => `${props.radius}px`};
    background-color: ${props => props.color};
    border: ${props => props.border};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`