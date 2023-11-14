'use client';

import { GoogleOAuthProvider as BaseGoogleOAuthProvider } from '@react-oauth/google';
import { GOOGLE_CLIENT_ID } from 'constant/env';

export default function GoogleOAuthProvider({ children }: { children: React.ReactNode }) {
    return (
        <BaseGoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>{children}</BaseGoogleOAuthProvider>
    );
}
