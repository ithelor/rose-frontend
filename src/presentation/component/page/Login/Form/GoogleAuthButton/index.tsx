import { FC, useEffect, useState } from 'react';
import { TokenResponse, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { GoogleLogo } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';
import { OVERVIEW } from 'constant/route';
import User from 'domain/entity/User';
import useUserStore from 'domain/store/user/useUserStore';
import { MOCK_USER } from 'domain/store/user/mock';
import Button from 'presentation/component/common/control/Button';

type AuthResponse = Omit<TokenResponse, 'error' | 'error_description' | 'error_uri'>;

const GoogleAuthButton: FC = () => {
    const [authResponse, setAuthResponse] = useState<AuthResponse | null>(null);
    const setUser = useUserStore((state) => state.setUser);
    const { push } = useRouter();

    const login = useGoogleLogin({
        onSuccess: (response) => setAuthResponse(response),
    });

    useEffect(() => {
        if (authResponse) {
            axios
                .get(
                    `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${authResponse.access_token}`,
                    {
                        headers: {
                            Authorization: `Bearer ${authResponse.access_token}`,
                            Accept: 'application/json',
                        },
                    },
                )
                .then((res) => {
                    const { id, name, picture } = res.data;
                    const { lvl, location, email, todayReviews, totalReviews, successRate } =
                        MOCK_USER;

                    setUser({
                        ...MOCK_USER,
                        ...new User(
                            id,
                            name,
                            picture,
                            lvl,
                            location,
                            email,
                            todayReviews,
                            totalReviews,
                            successRate,
                        ),
                    });
                    push(OVERVIEW);
                });
        }
    }, [authResponse]);

    return (
        <Button color="outline" size="medium" startAdornment={GoogleLogo} onClick={() => login()}>
            Sign in with Google
        </Button>
    );
};

export default GoogleAuthButton;
