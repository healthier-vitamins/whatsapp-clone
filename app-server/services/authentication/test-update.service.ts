import { PrismaClient } from '@prisma/client'

export default async function testUpdate() {
    const prisma = new PrismaClient()

    const allUsers = await prisma.user.findMany()
    console.log(allUsers)
}
