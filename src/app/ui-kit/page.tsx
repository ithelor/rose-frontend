import { FC, PropsWithChildren } from 'react';
import {
    LiaUser,
    LiaUserAltSlashSolid,
    LiaUserAstronautSolid,
    LiaUserCircle,
    LiaUserEditSolid,
    LiaUserLockSolid,
    LiaUserTagSolid,
} from 'react-icons/lia';
import Icon from 'presentation/component/common/block/Icon';

const Card: FC<PropsWithChildren> = ({ children }) => {
    return <div className="grid grid-flow-col rounded-2xl p-4 shadow-md">{children}</div>;
};

const UiKit = () => {
    return (
        <div className="p-8">
            <div className="grid gap-y-1">
                <Card>
                    <span className="text-sm">SM</span>
                    <span className="text-base">Base</span>
                    <span className="text-lg">LG</span>
                    <span className="text-xl font-medium">XL Medium</span>
                </Card>
                <Card>
                    <Icon icon={LiaUserLockSolid} size={12} />
                    <Icon icon={LiaUserEditSolid} size={16} />
                    <Icon icon={LiaUser} size={20} />
                    <Icon icon={LiaUserAltSlashSolid} />
                    <Icon icon={LiaUserAstronautSolid} size={28} />
                    <Icon icon={LiaUserCircle} size={32} className="fill-warning-400" />
                    <Icon
                        icon={LiaUserTagSolid}
                        size={36}
                        className="fill-primary-400 hover:fill-warning-400"
                    />
                </Card>
            </div>
        </div>
    );
};

export default UiKit;
