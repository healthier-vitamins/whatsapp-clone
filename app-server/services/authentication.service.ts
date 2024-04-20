import { PrismaClient } from '@prisma/client'
import ErrorResponse from '../utilities/ErrorResponse'
import { StatusCodes } from 'http-status-codes'

export default class authenticationService {
    private prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }

    async login() {
        return 'Login successfully'
    }

    async testUpdate() {
        try {
            const allUsers = await this.prisma.user.findMany()
            console.log(allUsers)

            return allUsers
        } catch (err) {
            console.log('err: ', err)
            throw new ErrorResponse(
                StatusCodes.IM_A_TEAPOT,
                "I'm a little teapot, short and stout."
            )
        } finally {
            await this.prisma.$disconnect()
        }
    }
}
