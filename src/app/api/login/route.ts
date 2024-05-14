import prisma from '@/lib/prisma';
import * as bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

type RequestBody = {
    username: string;
    password: string;
}

export async function POST(request: Request N) {
    const body: RequestBody  = await request.json();

    const user = await prisma.user.findFirst({
        where: {
            email: body.username
        }
    });

    if (user && (await bcrypt.compare(body.password, user.password))) {
        const { password, ...userWithoutPass} = user;

        return NextResponse.json({ message: 'Successfully logged in', userWithoutPass }, { status: 200 });
    } else return NextResponse.json({ message: 'Unauthorised' }, { status: 400 });
}