import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import * as bcrypt from 'bcryptjs';

import { UserSignInValidator, TUserSignInValidator } from '@/lib/validators/user-validator';
import prisma from '@/lib/prisma';

export default {
    providers: [
        Credentials({
            async authorize(credentials) {
                const validatedFields = UserSignInValidator.safeParse(credentials);

                if (validatedFields.success) {
                    const { username, password } = validatedFields.data;

                    const user = await prisma.user.findFirst({
                        where: {
                            email: username
                        }
                    });

                    if (!user || !user.password) return null;

                    const pwdMatched = await bcrypt.compare(password, user.password);
                    if (!pwdMatched) return user;
                }
                return null;
            }
        })
    ]
} satisfies NextAuthConfig;
