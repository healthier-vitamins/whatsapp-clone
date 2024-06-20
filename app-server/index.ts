import http from 'http'
import configureExpress from './loaders/express'
import { Server } from 'socket.io'
import isDevelopment from './utilities/isDevelopment'

require('dotenv').config()

// initialise database
// pingDb()

// initialise express
const expressApp = configureExpress()

// handle errors during runtime
process
    .on('unhandledRejection', (reason, p) => {
        console.error(
            `${new Date().toLocaleString()} Unhandled Rejection:`,
            reason,
            p
        )
    })
    .on('uncaughtException', (error) => {
        console.error(
            `${new Date().toLocaleString()} Uncaught Exception:`,
            error
        )
        process.exit(1)
    })

const portList = process.env.PORT?.split(';;') || []
const serverInstances = <any>[]

portList.forEach((port) => {
    const httpServer = http.createServer(expressApp)

    const io = new Server(httpServer, {
        cors: {
            ...(isDevelopment() && { origin: '*' })
        }
    })

    // server-side
    io.on('connection', (socket) => {
        console.log(socket.id) // x8WIv7-mJelg7on_ALbx
        socket.on('connection', (message) => {
            console.log('message: ', message)
            io.emit(message)
        })

        socket.on('connect', () => {
            io.emit('connected', 'successfully connected')
        })

        socket.on('daniel', (message) => {
            console.log("daniel's ", message)
            io.emit('daniel', message)
        })

        socket.on('disconnect', () => {
            console.log('user disconnected')
        })
    })

    // io.on('connection', (socket) => {
    //     console.log('User connected:', socket.id)

    //     socket.on('joinRoom', ({ chatRoomId }) => {
    //         socket.join(chatRoomId)
    //         console.log(`User ${socket.id} joined room ${chatRoomId}`)
    //     })

    //     socket.on('sendMessage', async ({ chatRoomId, userId, content }) => {
    //         const message = await prisma.message.create({
    //             data: {
    //                 content,
    //                 userId,
    //                 chatRoomId,
    //             },
    //             include: {
    //                 user: true,
    //             },
    //         })
    //         io.to(chatRoomId).emit('receiveMessage', message)
    //     })

    //     socket.on('disconnect', () => {
    //         console.log('User disconnected:', socket.id)
    //     })
    // })

    httpServer.listen(parseInt(port), () => {
        console.log(`Listening on port ${port}`)
    })
    serverInstances.push(httpServer)
})

export { serverInstances }
