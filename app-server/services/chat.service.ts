import { PrismaClient } from '@prisma/client'
import ErrorResponse from '../utilities/ErrorResponse'
import { StatusCodes } from 'http-status-codes'

class ChatService {
    private prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }

    async getContact(loggedInId: string, selectedUserId: string) {
        return this.prisma.chat.findUnique({
            where: {
                id: '',
                userChatMapping: {
                    some: {
                        userId: {
                            in: [loggedInId, selectedUserId]
                        }
                    }
                }
            }
        })
        // .findMany({ where: { id: { not: loggedInId } } })
        // .then((res) => res)
        // .catch((err) => {
        //     console.log(err)
        //     throw new ErrorResponse(
        //         StatusCodes.INTERNAL_SERVER_ERROR,
        //         'Something went wrong fetching users.'
        //     )
        // })
        // .finally(async () => await this.prisma.$disconnect())
    }
}

const chatService = new ChatService()
export default chatService
