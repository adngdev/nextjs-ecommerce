import { z } from 'zod';

export const UserSignUpValidator = z.object({
    name: z.string().min(2, {
        message: 'Name must be at least 2 characters'
    }),
    username: z.string().email(),
    password: z.string().min(5, {
        message: 'Password must be at least 5 characters'
    })
});

export type TUserSignUpValidator = z.infer<typeof UserSignUpValidator>

export const UserSignInValidator = UserSignUpValidator.omit({ name: true });

export type TUserSignInValidator = z.infer<typeof UserSignInValidator>
