import { z } from 'zod';

export const UserValidator = z.object({
    username: z.string().email(),
    password: z.string().min(5, {
        message: `Password must be at least 5 characters`
    })
});

export type TUserValidator = z.infer<typeof UserValidator>
