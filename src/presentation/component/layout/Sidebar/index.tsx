import { FC, PropsWithChildren } from 'react';
import Link from 'next/link';
import Icon, { IconPropsT } from 'presentation/component/common/block/Icon';
import SIDEBAR_CONTENT from './content';
import { Item, List, Nav, Wrapper } from './styles';

const ICON_PROPS: Partial<IconPropsT> = {
    color: 'white',
};

const Component: FC<PropsWithChildren> = () => {
    const { topList, bottomList } = SIDEBAR_CONTENT;

    return (
        <Wrapper>
            <Nav>
                <List>
                    {topList.map(({ icon, url }) => (
                        <Item key={url}>
                            <Link href={url}>
                                <Icon icon={icon} {...ICON_PROPS} />
                            </Link>
                        </Item>
                    ))}
                </List>
                <List>
                    {bottomList.map(({ icon, url }) => (
                        <Item key={url}>
                            <Link href={url}>
                                <Icon icon={icon} {...ICON_PROPS} />
                            </Link>
                        </Item>
                    ))}
                </List>
            </Nav>
        </Wrapper>
    );
};

export default Component;
