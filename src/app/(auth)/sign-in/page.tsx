'use client'

import { useForm } from 'react-hook-form';
import Link from 'next/link';

import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';

import { UserSignInValidator, TUserSignInValidator } from '@/lib/validators/user-validator';
import { cn } from '@/lib/utils';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';

const SignInPage = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<TUserSignInValidator>({
        defaultValues: {
            username: '',
            password: ''
        },
        resolver: zodResolver(UserSignInValidator)
    });

    const onSubmit = async (data: TUserSignInValidator) => {
        await signIn('credentials', {
            username: data.username,
            password: data.password,
            redirect: true,
            callbackUrl: '/'
        });
    };

    return (
        <div className={`w-1/3 space-y-10`}>
            <p className={`text-3xl text-center font-medium`}>Sign In</p>
            <form className={`space-y-3`} onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <p>Username</p>
                    <Input
                        {...register('username')}
                        className={cn({'focus:ring-red-500': errors.username})}
                    />
                    { errors?.username && <p className='text-xs text-red-500'>{errors.username.message}</p> }
                </div>
                <div>
                    <label>Password</label>
                    <Input
                        type={`password`}
                        {...register('password')}
                        className={cn({'focus:ring-red-500': errors.password})}
                    />
                    { errors?.password && <p className='text-xs text-red-500'>{errors.password.message}</p> }
                </div>
                <div className={`flex justify-between items-center`}>
                    <Button variant={`link`}><Link href={`/sign-up`}>Signup</Link></Button>
                    <Button type={`submit`} disabled={isSubmitting}>Submit</Button>
                </div>
            </form>
        </div>
    )
};

export default SignInPage;
