import settings from '../../../assets/settings-sliders.svg';
import whitefoodgo from '../../../assets/white-foodgo.svg';
import brownuser from '../../../assets/user-brown.svg';
import greyuser from '../../../assets/user-grey.svg';
import reduser from '../../../assets/red-user.svg';
import back from '../../../assets/arrow-left.svg';
import Foodgo from '../../../assets/Foodgo.svg';
import search from '../../../assets/search.svg';
import heart from '../../../assets/heart.svg';
import user from '../../../assets/user.svg';
import star from '../../../assets/star.svg';
import home from '../../../assets/home.svg';

import { AssetProps } from './types';

export const imgList = {
    'foodgo': Foodgo,
    'user': user,
    'settings': settings,
    'search': search,
    'heart': heart,
    'star': star,
    'home': home,
    'back': back,
    'red-user': reduser,
    'whitefoodgo': whitefoodgo,
    'greyuser': greyuser,
    'brownuser': brownuser,
} as const;

const Asset = ({ name, ...props }: AssetProps) => {

    return <img src={imgList[name]} {...props} />
}

export default Asset;