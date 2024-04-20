import { NextFunction, Request, Response } from 'express'

import express from 'express'
import authenticationService from '../../services/authentication.service'
const router = express.Router()

router.post(
    '/login',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const authentication = new authenticationService()
            const data = await authentication.login()
            res.json({ data: data })
        } catch (err) {
            next(err)
        }
    }
)

module.exports = router
