import settings from '../../../assets/settings-sliders.svg';
import Foodgo from '../../../assets/Foodgo.svg';
import search from '../../../assets/search.svg';
import heart from '../../../assets/heart.svg';
import star from '../../../assets/star.svg';
import user from '../../../assets/user.svg';

import { AssetProps } from './types';

export const imgList = {
    'foodgo': Foodgo,
    'user': user,
    'settings': settings,
    'search': search,
    'heart': heart,
    'star': star
} as const;

const Asset = ({ name, ...props }: AssetProps) => {

    return <img src={imgList[name]} {...props} />
}

export default Asset;