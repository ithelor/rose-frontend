import { FC } from 'react';
import { MOCK_USER } from 'domain/store/user/mock';
import CircleImage from 'presentation/component/common/block/CircleImage';

const Account: FC = () => {
    const { avatar, name } = MOCK_USER;

    return (
        <div className="grid auto-cols-max grid-flow-col items-center gap-x-2">
            <CircleImage alt="" src={avatar} size={28} />
            <span>{name}</span>
        </div>
    );
};

export default Account;
