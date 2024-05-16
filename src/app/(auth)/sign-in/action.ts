'use server'

import prisma from '@/lib/prisma';

import { TUserSignInValidator } from '@/lib/validators/user-validator';


import { signIn } from '@/auth';



export async function authenticateUser(data: TUserSignInValidator){
    await signIn('credentials', data)
}
