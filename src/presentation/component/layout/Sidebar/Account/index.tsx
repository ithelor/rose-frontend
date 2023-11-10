import { FC } from 'react';
import useUserStore from 'domain/store/User/useUserStore';
import CircleImage from 'presentation/component/common/block/CircleImage';

const Account: FC = () => {
    const user = useUserStore((state) => state.user);
    const { avatar, name } = user;

    return (
        <div className="grid auto-cols-max grid-flow-col items-center gap-x-2">
            <CircleImage alt="" src={avatar} size={24} />
            <span>{name}</span>
        </div>
    );
};

export default Account;
