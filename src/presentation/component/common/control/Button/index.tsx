import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import { VariantProps } from '@tw-classed/react';
import { BaseButton, Icon } from './styles';

export type BaseButtonPropsT = VariantProps<typeof BaseButton> &
    PropsWithChildren & {
        startAdornment?: IconType;
        endAdornment?: IconType;
    };

type ButtonPropsT = BaseButtonPropsT & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>;

const Button: FC<ButtonPropsT> = (props) => {
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

export { BaseButton };

export default Button;
