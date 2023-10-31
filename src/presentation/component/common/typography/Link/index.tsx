import { FC, PropsWithChildren } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { classed, VariantProps } from '@tw-classed/react';
import { ClassNameProp } from 'presentation/type/styles';

const StyledLink = classed(NextLink, {
    variants: {
        variant: {
            primary:
                'rounded-lg p-3 transition-[color,background-color] duration-fast hover:bg-gray-900 hover:text-white',
            primaryActive: 'rounded-lg p-3 bg-gray-900 text-white',
            secondary:
                'rounded-lg p-3 transition-[color,background-color] duration-fast hover:bg-gray-100',
            secondaryActive: 'rounded-lg p-3 bg-gray-100',
            clean: 'transition-[opacity] duration-fast hover:opacity-60',
        },
    },
    defaultVariants: {
        variant: 'primary',
    },
});

type LinkPropsT = PropsWithChildren &
    Omit<NextLinkProps, 'as'> &
    VariantProps<typeof StyledLink> &
    ClassNameProp;

const Link: FC<LinkPropsT> = (props) => {
    const { children, ...restProps } = props;

    return <StyledLink {...restProps}>{children}</StyledLink>;
};

export default Link;
