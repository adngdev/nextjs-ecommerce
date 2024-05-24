import { signOut } from '@/auth';

const Page = () => {
    return (
        <div>
            <form action={async () => {
                'use server'

                await signOut();
            }}>
                <button type={`submit`}>Sign out</button>
            </form>
        </div>
    );
};

export default Page;
