'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

type NewUser = {
    username: string,
    password: string
};

export default function SignUpPage() {
    const { register, handleSubmit } = useForm<NewUser>();
    const onSubmit: SubmitHandler<NewUser> = data => console.log(data);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Username</label>
                    <input {...register('username')} />
                </div>
                <div>
                    <label>Password</label>
                    <input {...register('password')} />
                </div>

                <input type="submit" />
            </form>
        </div>
    );
};
