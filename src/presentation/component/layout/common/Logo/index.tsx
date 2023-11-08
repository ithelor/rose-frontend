import { FC } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { HOME } from 'constant/route';
import Link from 'presentation/component/common/typography/Link';

type PropsT = ClassName;

const Logo: FC<PropsT> = (props) => {
    const { className } = props;

    return (
        <span
            className={clsx(
                'relative flex items-center transition duration-fast hover:opacity-60',
                className,
            )}
        >
            <Image alt="" src="/logo-dark.png" width={40} height={40} />
            <Link
                href={HOME}
                color="primary"
                className="pseudo-cover font-title text-base font-semiBold"
            >
                RØSE
            </Link>
        </span>
    );
};

export default Logo;
