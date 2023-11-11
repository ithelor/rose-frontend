import { FC, PropsWithChildren } from 'react';

type StatProps = PropsWithChildren & {
    label: string;
};

const Stat: FC<StatProps> = (props) => {
    const { children, label } = props;

    return (
        <div className="peer grid grid-rows-[max-content_auto] gap-y-1 border-black/10 peer-[&]:ml-7 peer-[&]:border-l peer-[&]:pl-7">
            <span className="text-sm">{label}</span>
            <div className="flex items-center text-xl font-semiBold">{children}</div>
        </div>
    );
};

export default Stat;
