'use client';

import { FC } from 'react';
import { Bell, ClockCounterClockwise, Sidebar, Star, Sun } from '@phosphor-icons/react';
import IconButton from 'presentation/component/common/control/IconButton';
import Breadcrumbs from './Breadcrumbs';
import SearchInput from './SearchInput';
import { ActionsWrapper } from './styles';

const AuthorizedHeader: FC = () => {
    return (
        <header className="flex items-center justify-between border-b border-b-black/10 px-7 py-5">
            <ActionsWrapper>
                <IconButton icon={Sidebar} />
                <IconButton icon={Star} />
                <Breadcrumbs />
            </ActionsWrapper>
            <ActionsWrapper>
                <SearchInput className="mr-3" />
                <IconButton icon={Sun} />
                <IconButton icon={ClockCounterClockwise} />
                <IconButton icon={Bell} />
                <IconButton icon={Sidebar} iconProps={{ mirrored: true }} />
            </ActionsWrapper>
        </header>
    );
};

export default AuthorizedHeader;
