import { FC } from 'react';
import clsx from 'clsx';
import { HOME } from 'constant/route';
import LogoIcon from 'presentation/svg/logo.svg';
import Link from 'presentation/component/common/typography/Link';

type PropsT = ClassName;

const Logo: FC<PropsT> = (props) => {
    const { className } = props;

    return (
        <Link
            href={HOME}
            color="primary"
            className={clsx(
                'rounded-lg border bg-black fill-white p-1 transition-colors duration-fast hover:border-black/20 hover:bg-white hover:fill-black',
                className,
            )}
        >
            <LogoIcon height={32} />
        </Link>
    );
};

export default Logo;
