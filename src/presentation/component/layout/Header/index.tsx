import { FC, Fragment, PropsWithChildren } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BaseText from 'presentation/component/common/typography/Text';
import Icon from 'presentation/component/common/block/Icon';
import HEADER_CONTENT from './content';
import { Item, List, Nav, Text, Wrapper } from './styles';

const Header: FC<PropsWithChildren> = () => {
    const pathname = usePathname();

    return (
        <Wrapper>
            <BaseText variant="h3">Røse</BaseText>
            <Nav>
                <List>
                    {HEADER_CONTENT.map(({ title, url }, index) => {
                        const isActive = url === pathname;

                        return (
                            // eslint-disable-next-line react/no-array-index-key
                            <Fragment key={index}>
                                <Item>
                                    {isActive && <Icon icon="star" />}
                                    <Text variant="h6" color={isActive ? 'gray900' : 'gray500'}>
                                        <Link href={url}>{title}</Link>
                                    </Text>
                                </Item>
                            </Fragment>
                        );
                    })}
                </List>
            </Nav>
        </Wrapper>
    );
};

export default Header;
