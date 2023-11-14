import { FC, InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = (props) => {
    return (
        <input
            className="appearance-none rounded-xl bg-black/5 px-3 py-3.5 placeholder:text-black/20 focus:outline-none"
            {...props}
        />
    );
};

export default Input;
