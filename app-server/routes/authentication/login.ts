import { Request, Response } from 'express'

import express from 'express'
const router = express.Router()

router.post('/login', (req: Request, res: Response) => {
    res.json({ data: `Login successful` })
})

module.exports = router
