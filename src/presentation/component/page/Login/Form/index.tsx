'use client';

import { FC } from 'react';
import Button from 'presentation/component/common/control/Button';
import { Container } from 'presentation/component/common/block/Container';
import GoogleAuthButton from './GoogleAuthButton';
import Input from './Input';
import { Delimiter } from './styles';

const Form: FC = () => {
    return (
        <Container className="relative flex flex-1 items-center justify-end">
            <form className="grid w-[460px] auto-cols-fr items-center justify-center gap-y-7 rounded-3xl bg-white/80 p-10 backdrop-blur-xl">
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
                    />
                    <Input type="password" placeholder="Password" />
                    <Button color="link" className="justify-self-end">
                        Forgot Password?
                    </Button>
                </div>
                <Button size="medium">Sign In</Button>
                <div className="flex items-center justify-center">
                    <span className="text-black/40">Not a Member yet?</span>
                    <Button color="link">Sign Up</Button>
                </div>
            </form>
        </Container>
    );
};

export default Form;
