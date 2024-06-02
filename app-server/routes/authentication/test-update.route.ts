import { NextFunction, Request, Response } from 'express'

import express from 'express'
import AuthenticationService from '../../services/authentication.service'
const router = express.Router()

router.put(
    '/test-update',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const authentication = new AuthenticationService()

            const params = req.body as { hello: string }
            const users = await authentication.testUpdate()
            res.json({
                data: {
                    params: `Test update successful:  ${params.hello}`,
                    users: users
                }
            })
        } catch (err) {
            next(err)
        }
    }
)

module.exports = router
