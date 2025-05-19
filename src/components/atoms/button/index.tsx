import { ButtonHTMLAttributes } from "react";
import themes from "../../../themes";
import { Component } from "./styles";

export const ButtonsList = {
    'upper-user-button': {
        width: '60px',
        height: '60px',
        radius: 20, 
        color: themes.red
    },
    'cancel-order-button': {
        width: '110px',
        height: '45px',
        radius: 15, 
        color: themes.white,
        border: `1px solid ${themes.red}`
    },
    'continue-order-button': {
        width: '100%',
        height: '45px',
        radius: 15, 
        color: themes.red
    },
    'numb-button': {
        width: 'auto',
        height: 'auto',
        radius: 0, 
        color: 'transparent'
    },
    'product-card-button': {
        width: 'auto',
        height: 'auto',
        radius: 20, 
        color: 'transparent'
    }
} as const;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    name: keyof typeof ButtonsList,
    children: React.ReactNode,
}

const Button = ({ name, children, ...props }: ButtonProps) => <Component
    //@ts-ignore
    border={ButtonsList[name].border}
    height={ButtonsList[name].height}
    radius={ButtonsList[name].radius}
    color={ButtonsList[name].color}
    width={ButtonsList[name].width}
    children={children}
    {...props}
/>

export default Button;