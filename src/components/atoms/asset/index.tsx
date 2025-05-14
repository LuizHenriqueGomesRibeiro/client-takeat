import Foodgo from '../../../assets/Foodgo.svg';
import user from '../../../assets/user.svg';
import settings from '../../../assets/settings-sliders.svg';
import search from '../../../assets/search.svg';
import { AssetProps } from './types';

export const imgList = {
    'foodgo': Foodgo,
    'user': user,
    'settings': settings,
    'search': search
} as const;

const Asset = ({ name, ...props }: AssetProps) => {

    return <img src={imgList[name]} {...props} />
}

export default Asset;