import http from 'http'
import pingDb from './loaders/dbConnection'
import configureExpress from './loaders/express'

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
    const webServer = http.createServer(expressApp)

    webServer.listen(parseInt(port), () => {
        console.log(`Listening on port ${port}`)
    })
    serverInstances.push(webServer)
})

export { serverInstances }
