import themes from "../../../themes";
import { Span } from "./styles";

export const TextList = {
    'delivery-subtitle': {
        'font-family': 'poppins',
        'font-weight': 'medium',
        'font-size': 18,
        'font-color': themes.grey
    }
} as const;

interface TextProps {
    name: keyof typeof TextList,
    children: React.ReactNode,
}

const Text = ({ name, children }: TextProps) => {

    return <Span
        font-family={TextList[name]["font-family"]}
        font-weight={TextList[name]["font-weight"]}
        font-size={TextList[name]["font-size"]}
        font-color={TextList[name]["font-color"]}
        children={children}
    />
}

export default Text;