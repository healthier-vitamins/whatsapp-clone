import http from 'http'
import configureExpress from './loaders/express'
import { Server } from 'socket.io'

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

const portList = process.env.PORTS?.split(';;') || []
const serverInstances = <any>[]

portList.forEach((port) => {
    const server = http.createServer(expressApp)

    const io = new Server(server, {
        cors: {
            origin: '*'
        }
    })

    // server-side
    io.on('connection', (socket) => {
        console.log(socket.id) // x8WIv7-mJelg7on_ALbx
        socket.on('connection', (message) => {
            console.log('message: ', message)
            io.emit(message)
        })

        socket.on('disconnect', () => {
            console.log('user disconnected')
        })
    })

    server.listen(parseInt(port), () => {
        console.log(`Listening on port ${port}`)
    })
    serverInstances.push(server)
})

export { serverInstances }
