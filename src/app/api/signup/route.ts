import prisma from '@/lib/prisma';
import * as bcrypt from 'bcrypt';

type RequestBody = {
    username: string;
    password: string;
}

export async function POST(request: Request) {
    const body: RequestBody = await request.json();

    const user= await prisma.user.create({
       data: {
           email: body.username,
           password:  await bcrypt.hash(body.password, 10)
       }
    });

    return Response.json({ message: 'Successfully created account' });
}
