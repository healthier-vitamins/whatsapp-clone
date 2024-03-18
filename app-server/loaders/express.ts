import compression from 'compression'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import { StatusCodes } from 'http-status-codes'
import ERROR_MESSAGES from '../globals/ERROR_MESSAGES'
import setupRoutes from '../routes'

const app: express.Application = express()

function configureExpress() {
    app.use(express.json({ limit: '50mb' }))
    app.use(express.urlencoded({ extended: true, limit: '50mb' }))

    app.use(cors())
    app.use(compression())
    app.use(helmet())
    app.disable('x-powered-by')

    // security headers
    app.use((req, res, next) => {
        res.setHeader('X-Content-Type-Options', 'nosniff')
        res.setHeader('X-Frame-Options', 'SAMEORIGIN')
        next()
    })

    setupRoutes(app)

    // reject unregistered routes
    app.all('*', (req, res) => {
        res.status(StatusCodes.NOT_FOUND).json({
            error: ERROR_MESSAGES.INVALID_ROUTE
        })
    })

    return app
}

export default configureExpress
