'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserValidator } from '@/lib/validators/sign-up-validator';
import { toast } from 'sonner';

type NewUser = {
    username: string,
    password: string
};

export default function SignUpPage() {
    const { register, handleSubmit, formState: { errors } } = useForm<NewUser>({
        defaultValues: {
            username: '',
            password: ''
        },
        resolver: zodResolver(UserValidator)
    });
    const onSubmit: SubmitHandler<NewUser> = data => {

    };

    return (
        <div>
            <input type={`text`} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={`space-y-3`}>
                    <label>Username</label>
                    <input
                        type={`text`}
                        {...register('username')}
                    />
                    <p>{errors.username?.message}</p>
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type={`password`}
                        {...register('password')}
                    />
                    <p>{errors.password?.message}</p>
                </div>

                <input type="submit" />
            </form>
        </div>
    );
};
