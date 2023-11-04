import { FC } from 'react';
import Image from 'next/image';
import circleCube from 'presentation/image/background/circle-cube.png';
import cubeCone from 'presentation/image/background/cube-cone.png';

const Background: FC = () => {
    return (
        <div className="fixed inset-0 overflow-hidden">
            <Image
                alt=""
                src={cubeCone.src}
                width={650}
                height={0}
                className="absolute left-[-150px] top-[500px] -rotate-12"
            />
            <Image
                alt=""
                src={circleCube.src}
                width={800}
                height={0}
                className="absolute right-[-100px] top-[700px] -rotate-[30deg]"
            />
            <Image
                alt=""
                src={cubeCone.src}
                width={550}
                height={0}
                className="absolute right-[-200px] top-[300px] rotate-45"
            />
            <div className="absolute inset-0 backdrop-blur-[9rem]" />
        </div>
    );
};

export default Background;
