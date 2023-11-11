import { FC } from 'react';
import { createCssVariable } from 'helper/style/createCssVariable';

type ProgressBarProps = {
    value: number;
};

const ProgressBar: FC<ProgressBarProps> = (props) => {
    const { value } = props;

    return (
        <div
            className="flex w-full items-center justify-center rounded-lg bg-[linear-gradient(to_right,theme('colors.secondary.purple')_0%,theme('colors.secondary.purple')_var(--background-offset),theme(colors.black/5%)_var(--background-offset),theme(colors.black/5%)_100%)] px-2 py-1"
            style={createCssVariable('background-offset', value, '%')}
        >
            {value}%
        </div>
    );
};

export default ProgressBar;
