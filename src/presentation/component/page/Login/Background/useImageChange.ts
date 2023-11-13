import { useEffect, useState } from 'react';
import delay from 'helper/delay';
import { IMAGES } from './content';

export default function useImageChange() {
    const [activeImage, setActiveImage] = useState(0);
    const [isChanging, setIsChanging] = useState(false);
    const { src: prevImage } = IMAGES[activeImage - 1] ?? IMAGES[IMAGES.length - 1];
    const { src: currentImage } = IMAGES[activeImage];
    const { src: nextImage } = IMAGES[activeImage + 1] ?? IMAGES[0];

    const changeImage = async () => {
        setIsChanging(true);
        setActiveImage((prev) => (prev === IMAGES.length - 1 ? 0 : prev + 1));
        await delay(3000);
        setIsChanging(false);
    };

    useEffect(() => {
        const interval = setInterval(changeImage, 15000);

        return () => clearInterval(interval);
    }, []);

    return {
        prevImage,
        currentImage,
        nextImage,
        isChanging,
    };
}
