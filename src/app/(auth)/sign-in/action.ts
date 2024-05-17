'use server'

import { TUserSignInValidator, UserSignInValidator } from '@/lib/validators/user-validator';



export async function authenticateUser(data: TUserSignInValidator){
    const validatedFields = UserSignInValidator.safeParse(data);

    if (!validatedFields.success) {
        return { message: 'Invalid fields!' };
    }

    const { username, password } = validatedFields.data;
}
