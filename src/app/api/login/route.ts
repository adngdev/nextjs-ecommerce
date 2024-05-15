import prisma from '@/lib/prisma';
import * as bcrypt from 'bcrypt';

type RequestBody = {
    username: string;
    password: string;
}

export async function POST(request: Request) {
    const body: RequestBody  = await request.json();

    const user = await prisma.user.findFirst({
        where: {
            email: body.username
        }
    });

    if (user && (await bcrypt.compare(body.password, user.password))) {
        const { password, ...userWithoutPass} = user;

        return Response.json({ message: 'Successfully logged in', userWithoutPass }, { status: 200 });
    } else return Response.json({ message: 'Unauthorised' }, { status: 400 });
}