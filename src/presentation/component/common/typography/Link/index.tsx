import { FC, PropsWithChildren } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { ClassNameProp } from 'presentation/type/styles';

type LinkPropsT = Omit<NextLinkProps, 'as'> & ClassNameProp & PropsWithChildren;

const Link: FC<LinkPropsT> = (props) => {
    const { children, ...restProps } = props;

    return (
        <NextLink
            className="text-black/40 transition duration-fast hover:text-black"
            {...restProps}
        >
            {children}
        </NextLink>
    );
};

export default Link;
