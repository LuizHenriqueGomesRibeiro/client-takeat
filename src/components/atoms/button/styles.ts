import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

interface ComponentProps extends ButtonHTMLAttributes<HTMLButtonElement>  {
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

    transition: all 0.3s ease;

    &:hover {
        filter: brightness(1.1);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        border-radius: ${props => `${props.radius}px`};
    }

    & > * {
        transition: all 0.3s ease;
    }
`