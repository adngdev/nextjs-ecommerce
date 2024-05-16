import NextAuth from 'next-auth';
import Credentials from '@auth/core/providers/credentials';
import * as bcrypt from 'bcrypt';

import prisma from '@/lib/prisma';


export const { handlers: { GET, POST }, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                username: {},
                password: {},
            },
            authorize: async (credentials) => {
                console.log(credentials)
                const { username, password } = credentials;

                const user = await prisma.user.findFirst({
                    where: {
                        email: username
                    }
                });

                if (!user) {
                    throw new Error("User not found.")
                }
                return user;
            }
        }),
    ],
    pages: {
        signIn: '/sign-in'
    }
})