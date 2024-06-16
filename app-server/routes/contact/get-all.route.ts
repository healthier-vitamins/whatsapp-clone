import express, { NextFunction, Request, Response } from 'express'
import contactService from '../../services/contacts.service'
const router = express.Router()

router.get(
    '/get-all',
    async (req: Request, res: Response, next: NextFunction) => {
        let loggedInId = req.query.id
        if (loggedInId) loggedInId = String(loggedInId)

        try {
            const data = await contactService.getAll(loggedInId || '')
            console.log(data)
            res.json({ data: data })
        } catch (err) {
            next(err)
        }
    }
)

module.exports = router
