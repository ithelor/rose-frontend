import { FC, PropsWithChildren } from 'react';
import { LinkProps as NextLinkProps } from 'next/link';
import { VariantProps } from '@tw-classed/react';
import { ClassNameProp } from 'presentation/type/styles';
import { BaseLink } from './styles';

type LinkPropsT = PropsWithChildren &
    Omit<NextLinkProps, 'as'> &
    VariantProps<typeof BaseLink> &
    ClassNameProp;

const Link: FC<LinkPropsT> = (props) => {
    const { children, ...restProps } = props;

    return <BaseLink {...restProps}>{children}</BaseLink>;
};

export default Link;
