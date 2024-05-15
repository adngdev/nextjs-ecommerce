'use client'

import { signIn, signOut, useSession } from 'next-auth/react';

const SignInButton = () => {
    const { data: session } = useSession();

    if (session && session.user) {
        return (
            <div>
                <p>{session.user.name}</p>
                <button onClick={() => signOut()} className={`bg-zinc-300 rounded-sm`}>Sign Out</button>
            </div>
        )
    } else

    return (
        <button onClick={() => signIn()} className={`bg-zinc-300 rounded-sm`}>Sign In</button>
    );
};

export default SignInButton;
