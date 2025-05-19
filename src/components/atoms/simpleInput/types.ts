import { BuyerProps } from "../../../pages/order/types";
import { Control } from "react-hook-form";

export interface SimpleInputProps {
    control: Control<BuyerProps>,
    placeholder: string,
    label: string,
    name: "name" | "phone",
}