import { FC } from 'react';
import Image, { ImageProps } from 'next/image';

type PropsT = ImageProps & {
    size: number;
};

const CircleImage: FC<PropsT> = (props) => {
    const { size, ...restProps } = props;

    return (
        <div className="relative overflow-hidden rounded-full">
            <Image className="object-cover" width={size} height={size} {...restProps} />
        </div>
    );
};

export default CircleImage;
