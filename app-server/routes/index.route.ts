import { Application } from 'express'
import fs from 'fs'
import path from 'path'

export default function setupRoutes(app: Application) {
    const indexFileName = 'index.route.ts'
    const allFiles = fs.readdirSync(__dirname)
    for (let fileName of allFiles) {
        console.log('filename:, ', fileName)
        if (fileName != indexFileName) {
            // dynamically load routes based on folders' names
            const authenticationPath = path.join(__dirname, fileName)
            useExpressPath(authenticationPath, app, `/api/${fileName}`)
        }
    }
}

function useExpressPath(selectedPath: string, app: Application, url: string) {
    fs.readdirSync(selectedPath).forEach((file) => {
        const route = require(path.join(selectedPath, file))
        app.use(url, route)
    })
}
