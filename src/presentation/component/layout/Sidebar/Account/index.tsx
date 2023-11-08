import { FC } from 'react';
import avatar from 'presentation/image/account/avatar.jpg';
import CircleImage from 'presentation/component/common/block/CircleImage';

const Account: FC = () => {
    return (
        <div className="grid auto-cols-max grid-flow-col items-center gap-x-2">
            <CircleImage alt="" src={avatar.src} size={24} />
            <span>Username</span>
        </div>
    );
};

export default Account;
