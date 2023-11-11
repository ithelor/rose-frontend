import { FC } from 'react';
import { Icon as IconType } from '@phosphor-icons/react';
import Icon from 'presentation/component/common/block/Icon';

type DetailProps = {
    icon: IconType;
    label: string;
    title: string;
};

const Detail: FC<DetailProps> = (props) => {
    const { icon, label, title } = props;

    return (
        <span className="flex items-center fill-black/40 text-sm text-black/40" title={title}>
            <Icon icon={icon} size={20} className="mr-1" />
            <span>{label}</span>
        </span>
    );
};

export default Detail;
