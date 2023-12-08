import { FC, InputHTMLAttributes, forwardRef } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    return (
        <input
            ref={ref}
            className="appearance-none rounded-xl bg-black/5 px-3 py-3.5 placeholder:text-black/20 focus:outline-none"
            {...props}
        />
    );
});

export default Input;
