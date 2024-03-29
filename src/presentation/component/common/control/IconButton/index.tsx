import { FC } from 'react';
import { IconProps } from '@phosphor-icons/react';
import { VariantProps } from '@tw-classed/react';
import Icon from 'presentation/component/common/block/Icon';
import { BaseButton } from './styles';

type PropsT = VariantProps<typeof BaseButton> & {
    icon: IconType;
    iconProps?: IconProps;
};

const IconButton: FC<PropsT> = (props) => {
    const { color = 'neutral', icon, iconProps } = props;

    return (
        <BaseButton type="button" color={color}>
            <Icon icon={icon} size={24} {...iconProps} />
        </BaseButton>
    );
};

export default IconButton;
