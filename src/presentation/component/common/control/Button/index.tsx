import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import { VariantProps } from '@tw-classed/react';
import { Icon as IconType } from '@phosphor-icons/react';
import { BaseButton, Icon } from './styles';

type PropsT = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> &
    VariantProps<typeof BaseButton> &
    PropsWithChildren & {
        startAdornment?: IconType;
        endAdornment?: IconType;
    };

const Button: FC<PropsT> = (props) => {
    const {
        children,
        startAdornment,
        endAdornment,
        size = 'small',
        color = 'primary',
        ...restProps
    } = props;

    return (
        <BaseButton type="button" size={size} color={color} {...restProps}>
            {startAdornment && <Icon icon={startAdornment} position="left" size={size} />}
            {children}
            {endAdornment && (
                <Icon icon={endAdornment} weight="regular" position="right" size={size} />
            )}
        </BaseButton>
    );
};

export default Button;
