'use client'

import SignInButton from '@/components/SignInButton';

const Navbar = () => {
    return (
        <div className={`h-14 bg-zinc-200 border-b border-zinc-400`}>
            <SignInButton />
        </div>
    );
};

export default Navbar;
