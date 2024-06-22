import { PrismaClient } from '@prisma/client'
import { StatusCodes } from 'http-status-codes'
import ErrorResponse from '../utilities/ErrorResponse'
import { to } from '../utilities/promise'
import { GetChatRequestParams } from './../../shared/types/requests/chat/index'

class ChatService {
    private prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }

    async getChat({ loggedInId, selectedUserId }: GetChatRequestParams) {
        const [existingChatErr, existingChatRes] = await to(
            this.prisma.chat.findFirst({
                where: {
                    message: {
                        every: {
                            user: {
                                id: {
                                    in: [loggedInId, selectedUserId]
                                }
                            }
                        }
                    }
                },
                select: {
                    id: true,
                    message: true
                }
            })
        )

        if (existingChatErr) {
            console.log(existingChatErr)
            throw new ErrorResponse(
                StatusCodes.INTERNAL_SERVER_ERROR,
                'Something went wrong fetching users.'
            )
        }
        if (!existingChatRes) {
            //todo create and return newly created chat
        }

        return existingChatRes
    }
}

const chatService = new ChatService()
export default chatService
