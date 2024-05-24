'use server'

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';

import { TUserSignInValidator, UserSignInValidator } from '@/lib/validators/user-validator';

export async function authenticateUser(data: TUserSignInValidator){
    const validatedFields = UserSignInValidator.safeParse(data);

    if (!validatedFields.success) {
        return { message: 'Invalid fields!' };
    }

    const { username, password } = validatedFields.data;

    try {
        await signIn('credentials', {
            username,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT
        })
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return { message: 'Invalid credentials' };

                default:
                    return { message: 'Something went wrong' };
            }
        }

        throw error;
    }
}
