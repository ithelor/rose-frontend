import { HTMLAttributes, memo } from 'react';
import { MAP_ICON_NAME_TO_SVG } from './content';
import { IconNameT } from './types';
import { BaseIcon, SvgIconPropsT as BaseIconPropsT } from './styles';

export type { IconNameT };

export type IconPropsT = HTMLAttributes<HTMLElement> &
    BaseIconPropsT & {
        icon: IconNameT;
    };

const Icon = memo<IconPropsT>((props) => {
    const { icon, size = 24, ...restProps } = props;

    return <BaseIcon icon={MAP_ICON_NAME_TO_SVG[icon]} size={size} {...restProps} />;
});

export default Icon;
