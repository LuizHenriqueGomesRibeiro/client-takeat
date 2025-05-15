import { ImgHTMLAttributes } from "react";
import { imgList } from ".";

export interface AssetProps extends ImgHTMLAttributes<HTMLImageElement> {
    name: keyof typeof imgList,
    width?: number,
    height?: number,
}