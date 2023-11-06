import { FC } from 'react';
import Image from 'next/image';
import { HOME } from 'constant/route';
import Link from 'presentation/component/common/typography/Link';

const Logo: FC = () => {
    return (
        <span className="relative flex items-center transition duration-fast hover:opacity-60">
            <Image alt="" src="/logo-dark.png" width={56} height={56} />
            <Link
                href={HOME}
                color="primary"
                className="pseudo-cover font-title text-xl font-semiBold"
            >
                RØSE
            </Link>
        </span>
    );
};

export default Logo;
