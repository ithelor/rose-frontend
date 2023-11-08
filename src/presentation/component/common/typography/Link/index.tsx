import { FC, PropsWithChildren } from 'react';
import { LinkProps as NextLinkProps } from 'next/link';
import { VariantProps } from '@tw-classed/react';
import { BaseLink } from './styles';

type LinkPropsT = Omit<NextLinkProps, 'as'> &
    VariantProps<typeof BaseLink> &
    PropsWithChildren &
    ClassName;

const Link: FC<LinkPropsT> = (props) => {
    const { children, ...restProps } = props;

    return <BaseLink {...restProps}>{children}</BaseLink>;
};

export default Link;
