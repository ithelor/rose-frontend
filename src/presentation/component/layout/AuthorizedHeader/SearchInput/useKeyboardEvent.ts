import { RefObject, useCallback, useEffect } from 'react';

export default function useKeyboardEvent(ref: RefObject<HTMLInputElement>) {
    const handleKeyPress = useCallback((event: KeyboardEvent) => {
        if (event.ctrlKey && event.key === 'k') {
            event.preventDefault();

            ref.current?.focus();
        }
    }, []);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [handleKeyPress]);
}
