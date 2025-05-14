import { imgList } from ".";

export interface AssetProps {
    name: keyof typeof imgList,
    width?: number,
    height?: number,
}