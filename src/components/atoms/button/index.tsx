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
} as const;

interface ButtonProps {
    name: keyof typeof ButtonsList,
    children: React.ReactNode,
}

const Button = ({ name, children }: ButtonProps) => {


    return <Component
        width={ButtonsList[name].width}
        height={ButtonsList[name].height}
        radius={ButtonsList[name].radius}
        color={ButtonsList[name].color}
        //@ts-ignore
        border={ButtonsList[name].border}
        children={children}
    />
}

export default Button;