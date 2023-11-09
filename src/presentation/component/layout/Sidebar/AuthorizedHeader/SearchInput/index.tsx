import { FC, useRef } from 'react';
import { MagnifyingGlass } from '@phosphor-icons/react';
import clsx from 'clsx';
import Icon from 'presentation/component/common/block/Icon';
import useKeyboardEvent from './useKeyboardEvent';

type SearchInputProps = ClassName;

const SearchInput: FC<SearchInputProps> = (props) => {
    const { className } = props;
    const ref = useRef<HTMLInputElement>(null);
    useKeyboardEvent(ref);

    return (
        <div className={clsx('flex items-center rounded-lg bg-black/5 ', className)}>
            <Icon
                icon={MagnifyingGlass}
                size={20}
                weight="thin"
                className="ml-2 mr-2 fill-black/20"
            />
            <input
                ref={ref}
                type="search"
                placeholder="Search"
                className="max-w-24 appearance-none bg-transparent py-1 placeholder:text-black/20 focus:outline-none"
            />
            <span className="px-2 text-black/20">Ctrl + K</span>
        </div>
    );
};

export default SearchInput;
