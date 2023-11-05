import { FC } from 'react';
import Image from 'next/image';
import { HOME } from 'constant/route';

const Logo: FC = () => {
    return (
        <span className="transition relative flex items-center duration-fast hover:opacity-60">
            <Image alt="" src="/logo-dark.png" width={64} height={64} />
            <a href={HOME} className="pseudo-cover text-2xl font-semiBold uppercase">
                Røse
            </a>
        </span>
    );
};

export default Logo;
