import express, { NextFunction, Request, Response } from 'express'
import contactService from '../../services/contact.service'
const router = express.Router()

router.get(
    '/get-all-contacts',
    async (req: Request, res: Response, next: NextFunction) => {
        let loggedInId = req.query.id
        if (loggedInId) loggedInId = String(loggedInId)

        try {
            const data = await contactService.getAll(loggedInId || '')
            res.json({ data: data })
        } catch (err) {
            next(err)
        }
    }
)

module.exports = router
