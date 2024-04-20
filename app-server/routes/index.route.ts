import { Application } from 'express'
import path from 'path'
import fs from 'fs'

export default function setupRoutes(app: Application) {
    // dynamically load routes from the 'authentication' directory
    const authenticationPath = path.join(__dirname, 'authentication')
    useExpressPath(authenticationPath, app, '/api/authentication')
}

function useExpressPath(selectedPath: string, app: Application, url: string) {
    fs.readdirSync(selectedPath).forEach((file) => {
        const route = require(path.join(selectedPath, file))
        app.use(url, route)
    })
}
