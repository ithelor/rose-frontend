import { AnchorHTMLAttributes, forwardRef } from 'react';
import { BaseButtonPropsT } from 'presentation/component/common/control/Button';
import { BaseButtonLink } from './styles';

type ButtonLinkPropsT = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'color'> &
    Omit<BaseButtonPropsT, 'startAdornment' | 'endAdornment'> & {
        href: string;
    };

const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkPropsT>((props, ref) => {
    const { children, ...restProps } = props;

    return (
        <BaseButtonLink ref={ref} {...restProps}>
            {children}
        </BaseButtonLink>
    );
});

export default ButtonLink;
