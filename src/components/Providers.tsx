'use client';

import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

type Prop = {
    children: ReactNode;
}

const Providers = ({ children }: Prop) => {
    return <SessionProvider>{children}</SessionProvider>
};

export default Providers;
