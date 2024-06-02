import { PrismaClient } from '@prisma/client'
import ErrorResponse from '../utilities/ErrorResponse'
import { StatusCodes } from 'http-status-codes'

export default class ContactService {
    private prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }

    async getAll() {
        return this.prisma.user
            .findMany()
            .then((res) => res)
            .catch((err) => {
                console.log(err)
                throw new ErrorResponse(
                    StatusCodes.INTERNAL_SERVER_ERROR,
                    'Something went wrong fetching users.'
                )
            })
            .finally(async () => await this.prisma.$disconnect())
    }
}
