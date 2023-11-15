import { FC } from 'react';
import { IconProps } from '@phosphor-icons/react';
import clsx from 'clsx';

type PropsT = IconProps &
    ClassName & {
        icon: IconType;
    };

const Icon: FC<PropsT> = (props) => {
    const { icon: IconComponent, weight = 'duotone', className, ...restProps } = props;

    return (
        <IconComponent
            size={24}
            weight={weight}
            className={clsx(
                'transition duration-fast [&_path[opacity="0.2"]]:opacity-10',
                className,
            )}
            {...restProps}
        />
    );
};

export default Icon;
