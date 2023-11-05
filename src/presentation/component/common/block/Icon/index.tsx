import { FC } from 'react';
import { IconProps, Icon as IconType } from '@phosphor-icons/react';
import clsx from 'clsx';

type PropsT = IconProps &
    ClassName & {
        icon: IconType;
    };

const Icon: FC<PropsT> = (props) => {
    const { icon: IconComponent, className, ...restProps } = props;

    return (
        <IconComponent
            size={24}
            weight="duotone"
            className={clsx(
                'transition duration-fast [&_path[opacity="0.2"]]:opacity-10',
                className,
            )}
            {...restProps}
        />
    );
};

export default Icon;
