import { NextFunction, Request, Response } from 'express'

import express from 'express'
import ContactService from '../../services/contacts.service'
const router = express.Router()

router.get(
    '/get-all',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const contact = new ContactService()
            const data = await contact.getAll()
            console.log(data)
            res.json({ data: data })
        } catch (err) {
            next(err)
        }
    }
)

module.exports = router
