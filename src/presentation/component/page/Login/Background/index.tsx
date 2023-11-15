'use client';

import { FC } from 'react';
import clsx from 'clsx';
import useImageChange from './useImageChange';
import { Image } from './styles';

const Background: FC = () => {
    const { prevImage, currentImage, nextImage, isChanging } = useImageChange();

    return (
        <div className="absolute inset-0">
            <Image
                src={prevImage}
                alt=""
                fill
                className={clsx('invisible', { 'animate-fade-out': isChanging })}
            />
            <Image
                src={currentImage}
                alt=""
                fill
                className={clsx({ 'animate-fade-in': isChanging })}
            />
            <Image src={nextImage} alt="" fill className="invisible" />
        </div>
    );
};

export default Background;
