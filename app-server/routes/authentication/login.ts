import { Request, Response } from 'express'

import express from 'express'
const router = express.Router()

router.post('/login', (req: Request, res: Response) => {
    res.send('Login successful')
})

module.exports = router
