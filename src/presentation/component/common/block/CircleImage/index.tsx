import { FC } from 'react';
import Image, { ImageProps } from 'next/image';
import clsx from 'clsx';

type PropsT = ImageProps & {
    size: number;
};

const CircleImage: FC<PropsT> = (props) => {
    const { size, className, ...restProps } = props;

    return (
        <div className={clsx('relative overflow-hidden rounded-full', className)}>
            <Image className="object-cover" width={size} height={size} {...restProps} />
        </div>
    );
};

export default CircleImage;
