'use server'

import prisma from '@/lib/prisma';
import * as bcrypt from 'bcrypt';

type User = {
    username: string;
    password: string;
    name: string;
};

type Response = {
    error?: boolean;
    message: string;
};

export async function createUser(data: User): Promise<Response> {
    const user = await prisma.user.findFirst({
        where: { email: data.username }
    });

    if (user) {
        return { error: true, message: 'Username already existed' };
    } else {
        await prisma.user.create({
            data: {
                name: data.name,
                email: data.username,
                password: await bcrypt.hash(data.password, 10)
            }
        });

        return { message: 'Successfully created account' };
    }
}
