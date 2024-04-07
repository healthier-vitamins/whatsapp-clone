import { Request, Response } from 'express'

import express from 'express'
import login from '../../services/authentication/login'
const router = express.Router()

router.post('/login', (req: Request, res: Response) => {
    console.log(req.query)
    console.log('body: ', req.body)
    const response = login()
    // res.status(StatusCodes.NOT_FOUND).json(response)
    res.json(response)
})

module.exports = router
