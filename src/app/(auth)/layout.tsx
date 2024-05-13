import { ReactNode } from 'react';

const AuthLayout = ({ children } : { children: ReactNode }) => {
    return (
        <div>
            <div className={`h-20 bg-zinc-100`}>

            </div>
            { children }
        </div>
    )
};

export default AuthLayout;
