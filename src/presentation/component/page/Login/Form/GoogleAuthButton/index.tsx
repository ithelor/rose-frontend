import { FC } from 'react';
import { signIn } from 'next-auth/react';
import { OVERVIEW } from 'constant/route';
import GoogleIcon from 'presentation/svg/google.svg';
import Button from 'presentation/component/common/control/Button';

const GoogleAuthButton: FC = () => {
    const handleClick = () => {
        signIn('google', { callbackUrl: OVERVIEW });
    };

    return (
        <Button
            color="outline"
            size="medium"
            startAdornment={GoogleIcon}
            className="bg-white [&:hover:not([disabled])]:bg-white/80"
            onClick={handleClick}
        >
            Sign in with Google
        </Button>
    );
};

export default GoogleAuthButton;
