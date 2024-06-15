import { NextFunction, Request, Response } from 'express'
import express from 'express'
import contactService from '../../services/contacts.service'
import { StatusCodes } from 'http-status-codes'
const router = express.Router()

router.get(
    '/get-all',
    async (req: Request, res: Response, next: NextFunction) => {
        const loggedInId = req.query.id

        if (!loggedInId)
            return res.json({
                statusCodes: StatusCodes.BAD_REQUEST,
                errorMessage: 'Bad Request.'
            })

        try {
            const data = await contactService.getAll(loggedInId.toString())
            console.log(data)
            res.json({ data: data })
        } catch (err) {
            next(err)
        }
    }
)

module.exports = router
