import { NextFunction, Request, Response } from 'express'

import express from 'express'
import authenticationService from '../../services/authentication.service'
const router = express.Router()

router.post(
    '/login',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = await authenticationService.login()
            res.json({ data: data })
        } catch (err) {
            next(err)
        }
    }
)

module.exports = router
