import { Request, Response } from 'express'

import express from 'express'
import login from '../../services/authentication/login'
import { StatusCodes } from 'http-status-codes'
const router = express.Router()

router.post('/login', (req: Request, res: Response) => {
    const response = login()
    res.status(StatusCodes.NOT_FOUND).json(response)
})

module.exports = router
