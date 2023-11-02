import { FC } from 'react';
import clsx from 'clsx';
import { IconBaseProps, IconType } from 'react-icons';

type IconPropsT = IconBaseProps &
    ClassName & {
        icon: IconType;
    };

const Icon: FC<IconPropsT> = (props) => {
    const { icon: IconComponent, className, ...restProps } = props;

    return (
        <IconComponent
            size={24}
            className={clsx('transition-fill duration-fast', className)}
            {...restProps}
        />
    );
};

export default Icon;
