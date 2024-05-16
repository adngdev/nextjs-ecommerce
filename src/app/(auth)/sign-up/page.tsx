'use client'

import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { zodResolver } from '@hookform/resolvers/zod';

import { TUserSignUpValidator, UserSignUpValidator } from '@/lib/validators/user-validator';
import { cn } from '@/lib/utils';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { createUser } from '@/app/(auth)/sign-up/action';

export default function SignUpPage() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<TUserSignUpValidator>({
        defaultValues: {
            name: '',
            username: '',
            password: ''
        },
        resolver: zodResolver(UserSignUpValidator)
    });

    const onSubmit = async (data : TUserSignUpValidator)  => {
        const res = await createUser(data);

        if (res.error) {
            toast.error(res.message);
        } else {
            toast.success(res.message);
        }
    };

    return (
        <div className={`w-1/3 space-y-10`}>
            <p className={`text-3xl text-center font-medium`}>Sign Up</p>
            <form className={`space-y-3`} onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <p>Name</p>
                    <Input
                        {...register('name')}
                        className={cn({'focus:ring-red-500': errors.name})}
                    />
                    { errors?.name && <p className='text-xs text-red-500'>{errors.name.message}</p> }
                </div>
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
                <div className={`flex justify-end`}>
                    <Button type={`submit`} disabled={isSubmitting}>Submit</Button>
                </div>
            </form>
        </div>
    );
};
