import { Application } from 'express'
import path from 'path'
import fs from 'fs'

export default function setupRoutes(app: Application) {
    // Dynamically load routes from the 'authentication' directory
    const authenticationPath = path.join(__dirname, 'routes', 'authentication')
    fs.readdirSync(authenticationPath).forEach((file) => {
        const route = require(path.join(authenticationPath, file))
        app.use('/api/authentication', route)
    })
}
