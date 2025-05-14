import themes from "../../../themes";
import { Component } from "./styles";

export const ButtonsList = {
    'upper-user-button': {
        width: 60,
        height: 60,
        radius: 20, 
        color: themes.red
    }
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
        children={children}
    />
}

export default Button;