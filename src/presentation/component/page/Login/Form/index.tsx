'use client';

import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { OVERVIEW } from 'constant/route';
import { LoginForm } from 'data/driver/validation/auth/types';
import { loginFormValidationSchema } from 'data/driver/validation/auth/schema';
import useLoginSWRMutation from 'domain/service/auth/useLoginSWRMutation';
import Button from 'presentation/component/common/control/Button';
import { Container } from 'presentation/component/common/block/Container';
import GoogleAuthButton from './GoogleAuthButton';
import Input from './Input';
import { Delimiter } from './styles';

const Form: FC = () => {
    const { register, handleSubmit } = useForm<LoginForm>({
        resolver: yupResolver(loginFormValidationSchema),
    });
    const { trigger } = useLoginSWRMutation();
    const router = useRouter();

    const onSubmit: SubmitHandler<LoginForm> = async (data) => {
        try {
            const { email, password } = data;

            await trigger({
                email,
                password,
            });

            router.push(OVERVIEW);
        } catch (e) {}
    };

    return (
        <Container className="relative flex flex-1 items-center justify-end">
            <form
                className="grid w-[460px] auto-cols-fr items-center justify-center gap-y-7 rounded-3xl bg-white/80 p-10 backdrop-blur-xl"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="grid gap-y-2 text-center">
                    <span className="text-2xl font-semiBold">Sign In</span>
                    <span className="text-sm text-black/40">Your Social Campaigns</span>
                </div>
                <GoogleAuthButton />
                <div className="flex w-full items-center justify-between">
                    <Delimiter />
                    <span className="flex-0 px-4 text-black/40">Or with Email</span>
                    <Delimiter />
                </div>
                <div className="grid gap-y-4">
                    <Input
                        type="email"
                        inputMode="email"
                        autoComplete="email"
                        placeholder="Email"
                        {...register('email')}
                    />
                    <Input type="password" placeholder="Password" {...register('password')} />
                    <Button color="link" className="justify-self-end">
                        Forgot Password?
                    </Button>
                </div>
                <Button size="medium" type="submit">
                    Sign In
                </Button>
                <div className="flex items-center justify-center">
                    <span className="text-black/40">Not a Member yet?</span>
                    <Button color="link">Sign Up</Button>
                </div>
            </form>
        </Container>
    );
};

export default Form;
