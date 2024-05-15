import prisma from '@/lib/prisma';
import * as bcrypt from 'bcrypt';

type RequestBody = {
    name: string;
    username: string;
    password: string;
}

export async function POST(request: Request) {
    const body: RequestBody = await request.json();

    const user = await prisma.user.findFirst({
        where: {
            email: body.username
        }
    });

    if (user) {
        return Response.json('Username already existed', { status: 409 });
    } else {
        await prisma.user.create({
            data: {
                name: body.name,
                email: body.username,
                password:  await bcrypt.hash(body.password, 10)
            }
        });

        return Response.json({ message: 'Successfully created account' }, { status: 200 });
    }
}
